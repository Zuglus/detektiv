import { getPosts } from '../getPosts'
import fs from 'fs'
import matter from 'gray-matter'
import { marked } from 'marked'

// gray-matter и marked замокированы через moduleNameMapper в jest.config.mjs
// fs мокаем через spyOn — оба модуля (тест и getPosts) используют один cached объект

const mockMatter = matter as jest.MockedFunction<typeof matter>
const mockMarked = marked as jest.MockedFunction<typeof marked>

function mockFs(files: string[], content = 'c') {
  jest.spyOn(fs, 'readdirSync').mockReturnValue(files as unknown as ReturnType<typeof fs.readdirSync>)
  const spy = jest.spyOn(fs, 'readFileSync')
  files.forEach(() => spy.mockReturnValueOnce(content as unknown as Buffer))
  return spy
}

describe('getPosts', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.restoreAllMocks()
  })

  describe('базовая функциональность', () => {
    it('возвращает посты для русского языка', async () => {
      jest.spyOn(fs, 'readdirSync').mockReturnValue(['1.md', '2.md'] as unknown as ReturnType<typeof fs.readdirSync>)
      jest.spyOn(fs, 'readFileSync')
        .mockReturnValueOnce('content 1' as unknown as Buffer)
        .mockReturnValueOnce('content 2' as unknown as Buffer)

      mockMatter
        .mockReturnValueOnce({ data: { title: 'Пост 1', slug: 'post-1', short: 'Кратко 1' }, content: 'Контент 1' } as never)
        .mockReturnValueOnce({ data: { title: 'Пост 2', slug: 'post-2', short: 'Кратко 2' }, content: 'Контент 2' } as never)

      mockMarked
        .mockResolvedValueOnce('<p>Контент 1</p>' as never)
        .mockResolvedValueOnce('<p>Контент 2</p>' as never)

      const posts = await getPosts('ru')

      expect(posts).toHaveLength(2)
      expect(posts[0]).toEqual({
        title: 'Пост 1',
        slug: 'post-1',
        shortDescription: 'Кратко 1',
        content: '<p>Контент 1</p>',
        previous: null,
        next: 'post-2',
      })
      expect(posts[1]).toEqual({
        title: 'Пост 2',
        slug: 'post-2',
        shortDescription: 'Кратко 2',
        content: '<p>Контент 2</p>',
        previous: 'post-1',
        next: null,
      })
    })

    it('возвращает посты для английского языка', async () => {
      jest.spyOn(fs, 'readdirSync').mockReturnValue(['1.md'] as unknown as ReturnType<typeof fs.readdirSync>)
      jest.spyOn(fs, 'readFileSync').mockReturnValue('content en' as unknown as Buffer)

      mockMatter.mockReturnValue({
        data: { title: 'English Post', slug: 'english-post', short: 'Short' },
        content: 'Content',
      } as never)
      mockMarked.mockResolvedValue('<p>Content</p>' as never)

      const posts = await getPosts('en')

      expect(posts).toHaveLength(1)
      expect(posts[0].title).toBe('English Post')
    })

    it('возвращает пустой массив если директория пустая', async () => {
      jest.spyOn(fs, 'readdirSync').mockReturnValue([] as unknown as ReturnType<typeof fs.readdirSync>)

      const posts = await getPosts('ru')

      expect(posts).toEqual([])
    })
  })

  describe('сортировка файлов', () => {
    it('сортирует файлы по числовому префиксу', async () => {
      jest.spyOn(fs, 'readdirSync').mockReturnValue(['10.md', '2.md', '1.md'] as unknown as ReturnType<typeof fs.readdirSync>)
      jest.spyOn(fs, 'readFileSync')
        .mockReturnValueOnce('c1' as unknown as Buffer)
        .mockReturnValueOnce('c2' as unknown as Buffer)
        .mockReturnValueOnce('c10' as unknown as Buffer)

      mockMatter
        .mockReturnValueOnce({ data: { title: 'Пост 1', slug: 'post-1' }, content: '' } as never)
        .mockReturnValueOnce({ data: { title: 'Пост 2', slug: 'post-2' }, content: '' } as never)
        .mockReturnValueOnce({ data: { title: 'Пост 10', slug: 'post-10' }, content: '' } as never)

      mockMarked.mockResolvedValue('' as never)

      const posts = await getPosts('ru')

      expect(posts[0].title).toBe('Пост 1')
      expect(posts[1].title).toBe('Пост 2')
      expect(posts[2].title).toBe('Пост 10')
    })
  })

  describe('фильтрация по slug', () => {
    it('фильтрует посты по slug когда он передан', async () => {
      mockFs(['1.md', '2.md'])
      mockMatter
        .mockReturnValueOnce({ data: { title: 'Пост 1', slug: 'target-post' }, content: '' } as never)
        .mockReturnValueOnce({ data: { title: 'Пост 2', slug: 'other-post' }, content: '' } as never)
      mockMarked.mockResolvedValue('' as never)

      const posts = await getPosts('ru', 'target-post')

      expect(posts).toHaveLength(1)
      expect(posts[0].slug).toBe('target-post')
    })

    it('возвращает пустой массив если slug не найден', async () => {
      mockFs(['1.md'])
      mockMatter.mockReturnValue({ data: { slug: 'some-post' }, content: '' } as never)
      mockMarked.mockResolvedValue('' as never)

      const posts = await getPosts('ru', 'nonexistent-slug')

      expect(posts).toHaveLength(0)
    })

    it('возвращает все посты если slug не передан', async () => {
      mockFs(['1.md', '2.md', '3.md'])
      mockMatter
        .mockReturnValueOnce({ data: { slug: 'a' }, content: '' } as never)
        .mockReturnValueOnce({ data: { slug: 'b' }, content: '' } as never)
        .mockReturnValueOnce({ data: { slug: 'c' }, content: '' } as never)
      mockMarked.mockResolvedValue('' as never)

      const posts = await getPosts('ru')

      expect(posts).toHaveLength(3)
    })
  })

  describe('цепочки навигации previous/next', () => {
    beforeEach(() => {
      mockFs(['1.md', '2.md', '3.md'])
      mockMatter
        .mockReturnValueOnce({ data: { slug: 'first' }, content: '' } as never)
        .mockReturnValueOnce({ data: { slug: 'second' }, content: '' } as never)
        .mockReturnValueOnce({ data: { slug: 'third' }, content: '' } as never)
      mockMarked.mockResolvedValue('' as never)
    })

    it('первый пост: previous=null, next=slug следующего', async () => {
      const posts = await getPosts('ru')
      expect(posts[0].previous).toBeNull()
      expect(posts[0].next).toBe('second')
    })

    it('последний пост: previous=slug предыдущего, next=null', async () => {
      const posts = await getPosts('ru')
      expect(posts[2].previous).toBe('second')
      expect(posts[2].next).toBeNull()
    })

    it('средний пост: previous и next заполнены', async () => {
      const posts = await getPosts('ru')
      expect(posts[1].previous).toBe('first')
      expect(posts[1].next).toBe('third')
    })
  })

  describe('обработка ошибок', () => {
    it('возвращает пустой массив при ошибке чтения директории', async () => {
      jest.spyOn(fs, 'readdirSync').mockImplementation(() => {
        throw new Error('Directory not found')
      })

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
      const posts = await getPosts('ru')

      expect(posts).toEqual([])
      expect(consoleSpy).toHaveBeenCalledWith(
        'Ошибка при чтении или обработке файлов:',
        expect.any(Error)
      )
      consoleSpy.mockRestore()
    })

    it('использует "Без названия" когда title отсутствует', async () => {
      mockFs(['1.md'])
      mockMatter.mockReturnValue({ data: {}, content: 'Контент' } as never)
      mockMarked.mockResolvedValue('<p>Контент</p>' as never)

      const posts = await getPosts('ru')

      expect(posts[0].title).toBe('Без названия')
    })

    it('slug и shortDescription undefined когда метаданных нет', async () => {
      mockFs(['1.md'])
      mockMatter.mockReturnValue({ data: {}, content: '' } as never)
      mockMarked.mockResolvedValue('' as never)

      const posts = await getPosts('ru')

      expect(posts[0].slug).toBeUndefined()
      expect(posts[0].shortDescription).toBeUndefined()
    })
  })
})
