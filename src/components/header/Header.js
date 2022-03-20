import useDarkMode from "../../hook/useDarkMode";
import iconMoon from '../../assets/icon-moon.svg'
import iconSun from '../../assets/icon-sun.svg'
const Header = () => {
  const [colorTheme, setTheme] = useDarkMode()
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl text-white font-bold">T O D O</h1>
      {colorTheme === 'light' ? <img src={iconSun} alt="sun" className="cursor-pointer" onClick={() => setTheme(colorTheme)}/> : <img src={iconMoon} alt="sun" className="cursor-pointer" onClick={() => setTheme(colorTheme)}/>}
    </div>
  );
};

export default Header;
