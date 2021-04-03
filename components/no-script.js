import React from 'react'

const NoScript = () => (
  <noscript>
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'brown',
        border: '3px solid darkred',
        padding: '10px 20px',
        color: 'white',
        borderRadius: 5,
        fontFamily: 'sans-serif',
        fontSize: 20,
        zIndex: 1000,
      }}
    >
      <p>
        Por favor, abra este link em um navegador com Javascript habilitado.
        <br />
        Este navegador não suporta a experiência do site.
      </p>
      <span style={{ fontSize: 40, marginLeft: 10 }}>😉</span>
    </div>
  </noscript>
)

export default NoScript
