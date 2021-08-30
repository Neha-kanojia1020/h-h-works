import * as React from 'react'

type IMenuIconprops = {
  color?: string
  onClick: () => void
}
function MenuIcon(props: IMenuIconprops) {
  return (
    <svg
      width={41}
      height={40}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      <path
        d="M11.003 20h18M11.003 14h18M11.003 26h18"
        stroke={props.color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MenuIcon
