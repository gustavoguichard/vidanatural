const TRANSITION_SPEED = '.3s'

export const saturateOnHover = (time = TRANSITION_SPEED) => ({
  filter: 'saturate(0)',
  transition: `${time} filter`,
  '&:hover, a:focus & ': {
    filter: 'saturate(1)',
  },
})

export const centralize = () => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
})
