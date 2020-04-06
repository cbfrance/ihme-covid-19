import React from 'react'
import styled from 'styled-components'
import { GlobalStyles } from 'styles'
// import Navigation from 'components/Navigation'
import { StylesProvider } from '@material-ui/styles'
// import AppBar from '@material-ui/core/AppBar'
// import { Toolbar } from '@material-ui/core'
// import { Row } from 'components/styles'
// import { NavLink } from 'util/router'
import FadeIn from 'components/FadeIn'
import useDarkMode from 'hooks/useDarkMode'
// import Switch from '@material-ui/core/Switch'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme, { muiTheme } from 'theme'

export const LayoutStyles = styled.div`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '95%')};
  margin: 0 auto;
`

// const StyledAppBar = styled(AppBar)`
//   transition: all 0.6s ease-in-out;
//   background-color: ${(props) => props.theme.backgroundPrimary};
//   color: ${(props) => props.theme.textPrimary} !important;
//   box-shadow: none !important;
// `

const Layout = ({ user, children, maxWidth }) => {
  const [themeVariant, toggleThemeVariant, componentMounted] = useDarkMode()

  if (!componentMounted) {
    return <div />
  }

  return (
    <MuiThemeProvider theme={muiTheme[themeVariant]}>
      <ThemeProvider theme={theme[themeVariant]}>
        <FadeIn>
          {/* <StyledAppBar position="static">
            <Toolbar>
              <NavLink to="/">
                <Row>
                  <img
                    width={30}
                    src={themeVariant === 'dark' ? logoWhite : logoBlack}
                    alt=""
                  />
                  <h1>Page Title</h1>
                </Row>
              </NavLink>

              <Navigation user={user} />
              <Switch onClick={toggleThemeVariant} />
            </Toolbar>
          </StyledAppBar> */}
          <LayoutStyles maxWidth={maxWidth}>
            <StylesProvider>
              <GlobalStyles />
              {children}
            </StylesProvider>
          </LayoutStyles>
        </FadeIn>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default Layout
