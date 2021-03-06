import { DefaultTheme } from 'styled-components'

export const themeColors = {
  background: '#f6f7fb',
  blue1: '#e7ebf7',
  blue2: '#2793ff',
  green1: '#20bf6b',
  gray1: '#DDDDDD',
  gray2: '#BABABA',
  gray3: '#8B98BA',
  gray4: '#272727',
  redOrange1: '#fd5958',
  white1: '#ffffff',
  white2: '#f4ede8',
  yellow1: '#ffc734',
}

export const shadows = {
  gray1: '0px 4px 4px rgba(39, 39, 39, 0.14)',
  gray2: '0px 0px 6px rgba(39, 39, 39, 0.14)',
}

const genericFontType = {
  fontFamily: 'TitilliumWeb',
}

export const fontTypes = {
  title: {
    ...genericFontType,
    fontSize: 22,
    letterSpacing: 0,
    lineHeight: '30px',
  },
  heading: {
    ...genericFontType,
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: '25px',
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: 0.25,
    fontWeight: 600,
    lineHeight: '19px',
  },
  body: {
    ...genericFontType,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: '19px',
  },
  caption: {
    ...genericFontType,
    fontSize: 14,
    letterSpacing: 0,
    fontWeight: 400,
    lineHeight: '16px',
  },
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string }
    shadows: { [key in keyof typeof shadows]: string }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fontTypes: { [key in keyof typeof fontTypes]: any }
    spacing: (x: number) => number
  }
}

const theme: DefaultTheme = {
  colors: themeColors,
  fontTypes,
  shadows,
  spacing: number => number * 8,
}

export default theme
