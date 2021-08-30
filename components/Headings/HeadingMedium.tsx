import React from 'react'

const HeadingMedium = (props: any) => {
  const headingMediumStyles =
    props.class &&
    props.class
      .split(' ')
      .map((classname: any) => {
        return classname
      })
      .join(' ')

  return (
    <h3
      className={`text-4xl lg:text-101 leading-none  font-bold ${headingMediumStyles}`}
    >
      {props.title}
    </h3>
  )
}

export default HeadingMedium
