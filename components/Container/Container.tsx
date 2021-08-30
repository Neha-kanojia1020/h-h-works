import React from 'react'

const Container = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  return (
    <div
      {...props}
      className={`container xl:container mx-auto p-6 py-10 xl:py-24 xl:p-0 ${props.className}`}
    />
  )
}

export default Container
