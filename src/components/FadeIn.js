import styled, { keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export default styled.div`
  opacity: 0;
  animation: ${(props) => props.speed || '0.4s'} ${fadeInKeyframes} ease-out;
  animation-delay: ${(props) => (props.delay ? props.delay : '0s')};
  animation-fill-mode: forwards;
`
