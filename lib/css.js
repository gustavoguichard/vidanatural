import { keyframes } from '@emotion/core'

export const ripple = keyframes`
  0% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  100% {
    -webkit-transform: scale(2.4);
    transform: scale(2.4);
    opacity: 0;
  }
`

export default { ripple }
