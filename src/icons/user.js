import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={150}
      height={150}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M75 75c-31.055 0-56.25 25.195-56.25 56.25 0 10.364 8.386 18.75 18.75 18.75h75c10.364 0 18.75-8.386 18.75-18.75C131.25 100.195 106.055 75 75 75zM75 56.25c15.533 0 28.125-12.592 28.125-28.125S90.533 0 75 0 46.875 12.592 46.875 28.125 59.467 56.25 75 56.25z"
        fill="#030104"
      />
    </svg>
  )
}

export default SvgComponent