import React from 'react'

const HeadingLarge = (props: any) => {
  const headingLargeStyles =
    props.class &&
    props.class
      .split(' ')
      .map((classname: any) => {
        return classname
      })
      .join(' ')

  return (
    <h2
      className={`${headingLargeStyles} text-4xl sm:text-5xl xl:text-7xl xl:text-20xl md:mr-28 xl:mr-4 font-bold tracking-normal`}
    >
      {props.title}
    </h2>
  )
}

export default HeadingLarge
