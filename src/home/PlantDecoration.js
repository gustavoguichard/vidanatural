const PlantDecoration = () => (
  <>
    <img
      css={{
        pointerEvents: 'none',
        transition: 'all 1s ease-in-out',
        position: 'absolute',
        '.product-card:hover &': {
          transform: 'none',
        },
        transform: 'translate(-80px, -100px)',
        top: 0,
        left: -20,
      }}
      src={`/static/images/plants/top-left.png`}
      role="presentation"
    />
    <img
      css={{
        pointerEvents: 'none',
        transition: 'all 1s ease-in-out',
        position: 'absolute',
        '.product-card:hover &': {
          transform: 'none',
        },
        transform: 'translate(80px, -100px)',
        top: 0,
        right: 0,
      }}
      src={`/static/images/plants/top-right.png`}
      role="presentation"
    />
    <img
      css={{
        pointerEvents: 'none',
        transition: 'all 1s ease-in-out',
        position: 'absolute',
        '.product-card:hover &': {
          transform: 'none',
        },
        transform: 'translate(-80px, 100px)',
        bottom: 0,
        left: 0,
      }}
      src={`/static/images/plants/bottom-left.png`}
      role="presentation"
    />
    <img
      css={{
        pointerEvents: 'none',
        transition: 'all 1s ease-in-out',
        position: 'absolute',
        '.product-card:hover &': {
          transform: 'none',
        },
        transform: 'translate(80px, 100px)',
        bottom: 0,
        right: 0,
      }}
      src={`/static/images/plants/bottom-right.png`}
      role="presentation"
    />
  </>
)

export default PlantDecoration
