import chroma from 'chroma-js'
import { createMuiTheme } from '@material-ui/core/styles'
const green = '#5FAF76'

const whites = [
  'rgba(255,255,255,.0125)',
  'rgba(255,255,255,.025)',
  'rgba(255,255,255,.05)',
  'rgba(255,255,255,.1)',
  'rgba(255,255,255,.2)',
  'rgba(255,255,255,.3)',
  'rgba(255,255,255,.4)',
  'rgba(255,255,255,.5)',
  'rgba(255,255,255,.6)',
  'rgba(255,255,255,.7)',
  'rgba(255,255,255,.8)',
  'rgba(255,255,255,.9)',
]

const blacks = [
  'rgba(0,0,0,.0125)',
  'rgba(0,0,0,.025)',
  'rgba(0,0,0,.05)',
  'rgba(0,0,0,.1)',
  'rgba(0,0,0,.2)',
  'rgba(0,0,0,.3)',
  'rgba(0,0,0,.4)',
  'rgba(0,0,0,.5)',
  'rgba(0,0,0,.6)',
  'rgba(0,0,0,.7)',
  'rgba(0,0,0,.8)',
  'rgba(0,0,0,.9)',
]

const sharedTheme = {
  breakpoints: ['500px', '760px', '1200px'],
  fontSizes: [13, 15.16, 17.33, 21.13, 25.36, 35.93, 50.72, 60, 101.44],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.7,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: {
    serif: 'spectral, times, serif',
    sans: `-apple-system, BlinkMacSystemFont, 'Roboto', "Segoe UI", 'Helvetica Neue', 'Helvetica', sans-serif`,
    condensed: `"Roboto Condensed", 'Roboto', "Franklin Gothic Medium", Tahoma, sans-serif`,
    mono: `"SF Mono", "Roboto Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace;`,
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  cardHeights: [256, 304, 512, 608, 816, 1024],
  offsets: [16, 32, 56],
  space: (value) => value * 8,
  desktopMaxWidth: 1600,
  gridGap: 16,
  headerHeight: '64px',
  shadows: [
    '0 9px 28px 0 rgba(0, 0, 0, 0.1)',
    '0 9px 28px 0 rgba(0, 0, 0, 0.15)',
  ],
  radii: [0, 2, 4, 16, 9999, '100%'],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  minWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    black: '#000',
    nearBlack: '#111',
    darkGray: '#333',
    darkestNight: '#121225',
    darkNight: '#232a47',
    brightDarkNight: '#2c2c5e',
    lightNight: chroma('#2c2c5e').brighten(1.5).hex(),
    midGray: '#555',
    gray: ' #777',
    cream: '#ffecdb',
    gold: '#FFDC44',
    orange: '#eeac51',
    silver: '#999',
    lightSilver: '#aaa',
    moonGray: '#ccc',
    lightGray: '#eee',
    nearWhite: '#f4f4f4',
    cloud: 'rgb(233, 236, 238)',
    white: '#fff',
    containGreen: '#72D18D',
    transparent: 'transparent',
    darkGuildBlue: 'hsl(208, 60%, 35%)',
    guildBlue: 'hsl(221, 92%, 58%)',
    hotBlue: '#336aff',
    guildYellow: 'hsl(56, 100%, 50%)',
    guildGreen: 'hsl(97, 46%, 30%)',
    guildPurple: 'hsl(272, 100%, 26%)',
    ledPink: 'hsl(316, 53%, 45%)',
    guildLightPurple: chroma('hsl(272, 100%, 26%)').brighten(1).hex(),
    guildDarkPurple: chroma('hsl(272, 100%, 26%)').darken(1.5).hex(),
    guildRed: 'hsl(16, 100%, 50%)',
    litteratiBlue: '#48a2f8',
    blacks,
    whites,
    brandType: '#72d18d',
    objectType: '#aa5aa6',
    categoryType: '#FFDC44',
    materialType: '#ffba5d',
    otherType: '#48a2f8',
    companies: '#000000',
    categories: '#2d77fc',
    translations: '#f26060',
    aliases: '#f3f3f3',
    red: '#F05B5B',
    blue: '#2E77FC',
    green: '#5FAF76',
    purple: '#AD60A9',
    paleBlue: '#EDF6FF',
    softOrange: 'rgba(251,146,114)',
    softBlue: 'rgba(155,198,221)',
    softGreen: 'rgba(199,233,192)',
    softPurple: 'rgba(188,189,220)',
    softYellow: 'rgba(255,220,100)',
    greens: [
      chroma(green).brighten(1.5).hex(),
      chroma(green).brighten(1.0).hex(),
      chroma(green).brighten(0.6).hex(),
      chroma(green).hex(),
    ],
  },
}

// Primary theme
//
// Managed with styled components <ThemeProvider />
const theme = {
  light: {
    textPrimary: sharedTheme.colors.black,
    backgroundPrimary: sharedTheme.colors.cream,
    backgroundSecondary: sharedTheme.colors.blacks[1],
    foreground: blacks,
    background: whites,
    ...sharedTheme,
  },
  dark: {
    textPrimary: sharedTheme.colors.white,
    backgroundPrimary: sharedTheme.colors.darkGuildBlue,
    backgroundSecondary: sharedTheme.colors.darkestNight,
    foreground: whites,
    background: blacks,
    ...sharedTheme,
  },
  ...sharedTheme, // Make the styles available to a `theme` object that can be imported without using the light/dark key
}

// MUI Themeing setup
//
// Is an object with "light" and "dark" keys
//

const sharedMuiTheme = {
  typography: {
    fontFamily: sharedTheme.fonts.sans,
  },
}

const lightMuiTheme = createMuiTheme({
  ...sharedMuiTheme,
  palette: {
    type: 'light',
    primary: {
      main: sharedTheme.colors.white,
    },
    secondary: {
      main: sharedTheme.colors.black,
    },
  },
})

const darkMuiTheme = createMuiTheme({
  ...sharedMuiTheme,
  palette: {
    type: 'dark',
    primary: {
      main: sharedTheme.colors.blacks[8],
      light: sharedTheme.colors.blacks[8],
      dark: sharedTheme.colors.blacks[8],
      contrastText: sharedTheme.colors.blacks[8],
    },
    secondary: {
      main: sharedTheme.colors.whites[9],
      light: sharedTheme.colors.whites[9],
      dark: sharedTheme.colors.whites[9],
      contrastText: sharedTheme.colors.whites[9],
    },
  },
})

// The exported muiTheme
//
export const muiTheme = {
  light: lightMuiTheme,
  dark: darkMuiTheme,
}

// Nivo theme
//
// is a function that requires the computed theme as input
//
export const nivoTheme = ({ theme }) => {
  return {
    background: 'transparent',
    fontFamily: 'sans-serif',
    fontSize: 11,
    textColor: theme.foreground[8], // affects some axis labels (known: bar charts)
    tooltip: {
      container: {
        background: theme.background[8],
        color: theme.foreground[8],
        fontSize: 'inherit',
        borderRadius: '2px',
        boxShadow: '0 1px 2px ',
        padding: '5px 9px',
      },
      basic: {
        whiteSpace: 'pre',
        display: 'flex',
        alignItems: 'center',
      },
      chip: {
        marginRight: 7,
      },
      table: {},
      tableCell: {
        padding: '3px 5px',
      },
    },
    annotations: {
      text: {
        fontSize: 13,
        outlineWidth: 2,
        outlineColor: '#ffffff',
      },
      link: {
        stroke: '#000000',
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: '#ffffff',
      },
      outline: {
        fill: 'none',
        stroke: '#000000',
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: '#ffffff',
      },
      symbol: {
        fill: '#000000',
        outlineWidth: 2,
        outlineColor: '#ffffff',
      },
    },
    axis: {
      domain: {
        line: {
          stroke: 'transparent',
          strokeWidth: 1,
        },
      },
      ticks: {
        line: {
          stroke: theme.foreground[6], // affects some axis labels (known: bar charts)
          strokeWidth: 1,
        },
        text: {},
      },
      legend: {
        text: {
          fontSize: 12,
        },
      },
    },
    grid: {
      line: {
        stroke: theme.foreground[3], // bar chart gridlines
        strokeWidth: 1,
      },
    },
    legends: {
      text: {
        fill: theme.foreground[6], // not sure what this affects
      },
    },
    labels: {
      text: {
        textColor: theme.foreground[9],
      },
    },
    markers: {
      lineColor: theme.foreground[2],
      lineStrokeWidth: 1,
    },
  }
}

export default theme
