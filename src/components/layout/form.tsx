export const Form = () => {
  return (
    <form>
      <div className='form-group mb-6'>
        <input
          type='text'
          className='form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-neutral-800
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white focus:bg-red-800 focus:border-red-300 focus:outline-none'
          id='inputName'
          placeholder='Имя'
        />
      </div>
      <div className='form-group mb-6'>
        <input
          type='email'
          className='form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-neutral-800
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white focus:bg-red-800 focus:border-red-300 focus:outline-none'
          id='inputEmail'
          placeholder='Email'
        />
      </div>
      <div className='form-group mb-6'>
        <textarea
          className='
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-neutral-800
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-white focus:bg-red-800 focus:border-red-300 focus:outline-none
          '
          id='inputMessage'
          rows={3}
          placeholder='Сообщение'
        ></textarea>
      </div>
      <div className='form-group form-check text-center mb-6'>
        <input
          type='checkbox'
          className='form-check-input appearance-none h-4 w-4 border border-red-900 rounded-sm bg-white checked:bg-red-800 checked:border-red-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
          id='check'
        />
        <label
          className='form-check-label inline-block text-white'
          htmlFor='check'
        >
          Отправить себе копию сообщения
        </label>
      </div>
      <button
        type='submit'
        className='
          w-full
          px-6
          py-2.5
          bg-red-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-red-500 hover:shadow-lg
          focus:bg-red-400 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg
          transition
          duration-150
          ease-in-out'
      >
        Отправить
      </button>
    </form>
  );
};
