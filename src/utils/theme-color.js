import client from 'webpack-theme-color-replacer/client'
import forElementUI from 'webpack-theme-color-replacer/forElementUI'
const DEFAULT_THEME_COLOR = require('@/constants/theme-color').default

export let curColor = DEFAULT_THEME_COLOR

// 动态切换主题色
export function changeThemeColor (newColor) {
  let options = {
    newColors: [...forElementUI.getElementUISeries(newColor), '#ff0000', '#ffff00']
  }
  return client.changer.changeColor(options, Promise)
    .then(_ => {
      curColor = newColor
      window.localStorage.setItem('theme_color', curColor)
    })
}

export function initThemeColor () {
  const savedColor = window.localStorage.getItem('theme_color')
  if (savedColor) {
    curColor = savedColor
    changeThemeColor(savedColor)
  }
}
