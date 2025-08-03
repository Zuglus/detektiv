import { getPosts } from '../getPosts'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

// Mock dependencies
jest.mock('fs')
jest.mock('path')
jest.mock('gray-matter')
jest.mock('marked')

const mockFs = fs as jest.Mocked<typeof fs>
const mockPath = path as jest.Mocked<typeof path>
const mockMatter = matter as jest.MockedFunction<typeof matter>
const mockMarked = marked as jest.MockedFunction<typeof marked>

describe('getPosts', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    
    // Setup default mocks
    mockPath.resolve.mockImplementation((dir) => dir)
    mockPath.join.mockImplementation((...segments) => segments.join('/'))
  })

  describe('Basic functionality', () => {
    it('returns posts for Russian language', async () => {
      // Mock file system
      mockFs.readdirSync.mockReturnValue(['1.md', '2.md'] as any)
      mockFs.readFileSync.mockReturnValueOnce('file content 1')
      mockFs.readFileSync.mockReturnValueOnce('file content 2')
      
      // Mock matter parsing
      mockMatter
        .mockReturnValueOnce({
          data: { title: 'Post 1', slug: 'post-1', short: 'Short 1' },
          content: 'Content 1'
        } as any)
        .mockReturnValueOnce({
          data: { title: 'Post 2', slug: 'post-2', short: 'Short 2' },
          content: 'Content 2'
        } as any)
      
      // Mock marked
      mockMarked
        .mockResolvedValueOnce('<p>Content 1</p>')
        .mockResolvedValueOnce('<p>Content 2</p>')

      const posts = await getPosts('ru')

      expect(posts).toHaveLength(2)
      expect(posts[0]).toEqual({
        title: 'Post 1',
        slug: 'post-1',
        shortDescription: 'Short 1',
        content: '<p>Content 1</p>',
        previous: null,
        next: 'post-2'
      })
      expect(posts[1]).toEqual({
        title: 'Post 2',
        slug: 'post-2', 
        shortDescription: 'Short 2',
        content: '<p>Content 2</p>',
        previous: 'post-1',
        next: null
      })
    })

    it('returns posts for English language', async () => {
      mockFs.readdirSync.mockReturnValue(['1.md'] as any)
      mockFs.readFileSync.mockReturnValue('file content')
      
      mockMatter.mockReturnValue({
        data: { title: 'English Post', slug: 'english-post', short: 'English Short' },
        content: 'English Content'
      } as any)
      
      mockMarked.mockResolvedValue('<p>English Content</p>')

      const posts = await getPosts('en')

      expect(mockPath.resolve).toHaveBeenCalledWith('src/data/blog')
      expect(posts).toHaveLength(1)
      expect(posts[0].title).toBe('English Post')
    })
  })

  describe('File sorting', () => {
    it('sorts files by numeric prefix', async () => {
      mockFs.readdirSync.mockReturnValue(['10.md', '2.md', '1.md'] as any)
      mockFs.readFileSync
        .mockReturnValueOnce('content 1')
        .mockReturnValueOnce('content 2') 
        .mockReturnValueOnce('content 10')
      
      mockMatter
        .mockReturnValueOnce({ data: { title: 'Post 1', slug: 'post-1' }, content: '' } as any)
        .mockReturnValueOnce({ data: { title: 'Post 2', slug: 'post-2' }, content: '' } as any)
        .mockReturnValueOnce({ data: { title: 'Post 10', slug: 'post-10' }, content: '' } as any)
      
      mockMarked.mockResolvedValue('<p></p>')

      const posts = await getPosts('ru')

      expect(posts[0].title).toBe('Post 1')
      expect(posts[1].title).toBe('Post 2')
      expect(posts[2].title).toBe('Post 10')
    })
  })

  describe('Slug filtering', () => {
    it('filters posts by slug when provided', async () => {
      mockFs.readdirSync.mockReturnValue(['1.md', '2.md'] as any)
      mockFs.readFileSync
        .mockReturnValueOnce('content 1')
        .mockReturnValueOnce('content 2')
      
      mockMatter
        .mockReturnValueOnce({ data: { title: 'Post 1', slug: 'target-post' }, content: '' } as any)
        .mockReturnValueOnce({ data: { title: 'Post 2', slug: 'other-post' }, content: '' } as any)
      
      mockMarked.mockResolvedValue('<p></p>')

      const posts = await getPosts('ru', 'target-post')

      expect(posts).toHaveLength(1)
      expect(posts[0].slug).toBe('target-post')
    })

    it('returns empty array when no posts match slug', async () => {
      mockFs.readdirSync.mockReturnValue(['1.md'] as any)
      mockFs.readFileSync.mockReturnValue('content')
      
      mockMatter.mockReturnValue({ data: { slug: 'different-slug' }, content: '' } as any)
      mockMarked.mockResolvedValue('<p></p>')

      const posts = await getPosts('ru', 'nonexistent-slug')

      expect(posts).toHaveLength(0)
    })
  })

  describe('Error handling', () => {
    it('returns empty array when directory read fails', async () => {
      mockFs.readdirSync.mockImplementation(() => {
        throw new Error('Directory not found')
      })

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
      const posts = await getPosts('ru')

      expect(posts).toEqual([])
      expect(consoleSpy).toHaveBeenCalledWith('Ошибка при чтении или обработке файлов:', expect.any(Error))
      
      consoleSpy.mockRestore()
    })

    it('handles missing metadata gracefully', async () => {
      mockFs.readdirSync.mockReturnValue(['1.md'] as any)
      mockFs.readFileSync.mockReturnValue('content')
      
      mockMatter.mockReturnValue({
        data: {}, // No metadata
        content: 'Content'
      } as any)
      
      mockMarked.mockResolvedValue('<p>Content</p>')

      const posts = await getPosts('ru')

      expect(posts[0].title).toBe('Без названия')
      expect(posts[0].slug).toBeUndefined()
      expect(posts[0].shortDescription).toBeUndefined()
    })
  })

  describe('Language directory mapping', () => {
    it('uses correct directory for unknown language', async () => {
      mockFs.readdirSync.mockReturnValue([])
      
      await getPosts('unknown-lang')
      
      expect(mockPath.resolve).toHaveBeenCalledWith('src/data/stati')
    })
  })
})