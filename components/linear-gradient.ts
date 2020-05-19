import { cloneElement } from 'react'

interface GradientProps {
  children: JSX.Element
  colors: string[]
  deg?: number
}

const LinearGradient = ({ children, colors = [], deg = 90 }: GradientProps) => {
  const division = 100 / (colors.length - 1)
  const distributeColor = (color: string, index: number) =>
    `${color} ${index * division}%`
  const colorsString = [`${deg}deg`, ...colors.map(distributeColor)]
  const styles = {
    ...children.props.style,
    backgroundImage: `linear-gradient(${colorsString.join(', ')})`,
  }
  return cloneElement(children, { ...children.props, style: styles })
}

export default LinearGradient
