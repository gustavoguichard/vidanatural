import React from 'react'

export default (CustomButton, onClick, DefaultBt) => {
  switch (CustomButton) {
    case false:
      return null
    case undefined:
      return <DefaultBt onClick={onClick} />
    default:
      return React.cloneElement(
        CustomButton,
        { ...CustomButton.props, onClick },
        CustomButton.props.children,
      )
  }
}
