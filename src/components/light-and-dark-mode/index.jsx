import useLocalStorage from './useLocalStorage'

const LightDarkMode = () => {
  //value, setValue                // key, defaultValue
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  console.log(theme)
  return (
    <div className={`${theme}`}>
      <div
        className={`h-[100vh] bg-white dark:bg-black flex flex-col justify-center  text-xl transition-all duration-500 outline-none`}>
        <div className={`flex flex-col gap-8 items-start ml-20`}>
          <p className="text-4xl text-black dark:text-white">Hello World !</p>
          <button
            type="button"
            className="border p-3 rounded-lg font-semibold cursor-pointer dark:bg-white dark:text-black  text-white   bg-black"
            onClick={handleToggleTheme}>
            Change Theme
          </button>
        </div>
      </div>
    </div>
  )
}
export default LightDarkMode
