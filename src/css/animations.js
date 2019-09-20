import { keyframes } from '@emotion/core'

export const heartBeat = keyframes`
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`

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
