const BackgroundImg = ({
  src,
  filter,
  alt = 'Background',
  objectFit = 'cover',
  position = 'center',
  ...props
}) => {
  return (
    <img
      {...props}
      src={src}
      alt={alt}
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        objectFit,
        objectPosition: position,
        filter,
      }}
    />
  )
}

export default BackgroundImg
