import styled, { createGlobalStyle } from 'styled-components'
import theme from 'theme'

export const FinePrint = styled.p`
  margin: 0.2rem;
  font-size: 12px;
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: ${(props) =>
    typeof props.flexWrap !== 'undefined' ? props.flexWrap : 'nowrap'};

  & > * {
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }

  ${(props) =>
    props.columnOnMobile &&
    `@media all and (max-width: ${props.theme.breakpoints[1]}) {
    flex-direction: column;
    align-items: flex-start;
    & > * {
      width: 100%;
    }
  }

  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }


  html {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: ${theme.fonts.sans};
    font-size: ${theme.fontSizes[2]}px;
    line-height: ${theme.lineHeights.copy};
    color: ${(props) => props.theme.textPrimary};
    background-color: ${(props) => props.theme.backgroundPrimary};
    overflow-x: hidden;
    overflow-y: scroll;
    transition: all 0.6s ease-in-out;
    height: 100%;
  }

  .is-active {
    font-weight: 700;
  }
/* 
  .MuiFormLabel-root.Mui-disabled,
  .MuiFormControlLabel-label.Mui-disabled,
  .Mui-disabled {
    color: black;
  } */

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;

  }

  code {
    font-weight: 700;
    font-size: smaller;
  }

  p a,
  p a:hover {
    background-color: ${(props) => props.theme.foreground[1]};
    border-bottom: 2px solid #ccc;
    font-weight: 700;
  }


  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
    font-family: inherit;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: ${theme.fontSizes[2]}px;
  }

  h2 {
    font-size: ${theme.fontSizes[2]}px;
  }

  h3 {
    font-size: ${theme.fontSizes[2]}px;
  }

  h4 {
    font-size: ${theme.fontSizes[2]}px;
  }

  h5 {
    font-size: ${theme.fontSizes[2]}px;
  }

  h6 {
    font-weight: 600;
    font-size: ${theme.fontSizes[2]}px;
  }

  button {
    font-size: ${theme.fontSizes[1]}px;
  }
`
