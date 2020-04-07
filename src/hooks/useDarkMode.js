import { useEffect, useState } from 'react'

const useDarkMode = () => {
  const [themeVariant, setThemeVariant] = useState('dark')
  const [componentMounted, setComponentMounted] = useState(false)
  const setMode = (mode) => {
    window.localStorage.setItem('themeVariant', mode)
    setThemeVariant(mode)
  }

  const toggleThemeVariant = () => {
    if (themeVariant === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  useEffect(() => {
    const localThemeVariant = window.localStorage.getItem('themeVariant')
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localThemeVariant
      ? setMode('dark')
      : localThemeVariant
      ? setThemeVariant(localThemeVariant)
      : setMode('light')
    setComponentMounted(true)
  }, [])

  return [themeVariant, toggleThemeVariant, componentMounted]
}

export default useDarkMode
