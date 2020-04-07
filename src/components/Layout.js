import React, { useContext } from 'react'
import styled from 'styled-components'
import { GlobalStyles, Row } from 'styles'
import { StylesProvider } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar } from '@material-ui/core'
import FadeIn from 'components/FadeIn'
import useDarkMode from 'hooks/useDarkMode'
import Switch from '@material-ui/core/Switch'
import { ThemeProvider as PrimaryThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as NivoThemeProvider } from '@nivo/core'
import theme, { muiTheme, nivoTheme } from 'theme'

export const LayoutStyles = styled.div`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '95%')};
  margin: 0 auto;
  max-width: 1000px;
`

const StyledAppBar = styled(AppBar)`
  transition: all 0.6s ease-in-out;
  background-color: ${(props) => props.theme.backgroundPrimary};
  color: ${(props) => props.theme.textPrimary} !important;
  box-shadow: none !important;
`

const Layout = ({ user, children, maxWidth }) => {
  const [themeVariant, toggleThemeVariant, componentMounted] = useDarkMode()

  if (!componentMounted) {
    return <div />
  }

  return (
    <PrimaryThemeProvider theme={theme[themeVariant]}>
      <MuiThemeProvider theme={muiTheme[themeVariant]}>
        <NivoThemeProvider theme={nivoTheme({ theme: theme[themeVariant] })}>
          <GlobalStyles />
          <FadeIn>
            <StyledAppBar position="static">
              <Toolbar>
                <Row>
                  <h1>Page Title</h1>
                </Row>

                <Switch onClick={toggleThemeVariant} />
              </Toolbar>
            </StyledAppBar>
            <LayoutStyles maxWidth={maxWidth}>
              <StylesProvider>
                <GlobalStyles />
                {children}
              </StylesProvider>
            </LayoutStyles>
          </FadeIn>
        </NivoThemeProvider>
      </MuiThemeProvider>
    </PrimaryThemeProvider>
  )
}

export default Layout
