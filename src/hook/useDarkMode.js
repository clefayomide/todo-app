import { useEffect, useState } from 'react';

const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
        const base = window.document.documentElement
        base.classList.remove(colorTheme)
        base.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme, colorTheme])
    return [colorTheme, setTheme]
};

export default useDarkMode;