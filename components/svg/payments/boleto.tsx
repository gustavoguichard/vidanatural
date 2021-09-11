import * as React from 'react'

function BoletoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path d="M22 22H2a2 2 0 01-2-2V4a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2zm0-18H2v16h20V4zm-2 14h-1V6h1v12zm-5 0h-1V6h1v12zm-2 0h-1V6h1v12zm-2 0H9V6h2v12zm-3 0H7V6h1v12zm10 0h-2V6h2v12zM6 18H4V6h2v12z" />
    </svg>
  )
}

export { BoletoIcon }
