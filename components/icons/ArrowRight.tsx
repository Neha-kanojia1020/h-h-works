import * as React from "react"

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={8}
      height={13}
      viewBox="0 0 8 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.75 6.558l-6.25 6.25-.875-.875L6 6.558.625 1.183 1.5.308l6.25 6.25z"
        fill="#000"
      />
    </svg>
  )
}

export default ArrowRight
