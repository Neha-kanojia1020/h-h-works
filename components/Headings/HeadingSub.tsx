import React from 'react'
import HeadingMedium from './HeadingMedium'

const HeadingSub = (props: any) => {
  const headingSubStyles =
    props.class &&
    props.class
      .split(' ')
      .map((classname: any) => {
        return classname
      })
      .join(' ')

  return (
    <div className={`${headingSubStyles}`}>
      <div className="flex-1 font-inter xl:px-0 md:m-0 text-base sm:text-1xl leading-normal mb-1">
        {props.sub}
      </div>
      <div className="flex-1 xl:px-0 mt-5 mb-6 md:mt-8 md:m-0 xl:pr-0">
        <HeadingMedium title={props.title} class={props.classh2} />
      </div>
    </div>
  )
}

export default HeadingSub
