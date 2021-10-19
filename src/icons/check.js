import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={100}
      height={100}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M446.8.47c-12.6 2.6-5.1-4.3-142.3 132.6L177 260.47l-48-48c-51.8-51.8-52.9-52.7-65.7-55.1-5.1-.9-7.9-.9-12.4-.1-11.3 2.3-15.8 5.3-30.6 20-11.4 11.5-14.2 14.9-17 20.7-3 6.4-3.3 7.8-3.3 16.5 0 8.3.4 10.3 2.9 16 2.8 6.1 7.7 11.3 79.9 83.7 55.6 55.7 78.4 77.9 82.1 80 7.1 3.9 16.8 3.9 24.1.1 3.8-2 43.2-40.9 160.6-158.5 148.1-148.3 155.7-156.1 158.5-162.3 2.5-5.7 2.9-7.7 2.9-16 0-13.7-2.7-19.1-17.6-34.5-12.6-13-18.7-17.9-25.7-20.5-5.9-2.2-15.4-3.1-20.9-2z"
        fill="#6BB69F"
      />
    </svg>
  )
}

export default SvgComponent
