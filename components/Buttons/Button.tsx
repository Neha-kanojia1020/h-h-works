import Link from 'next/link'
import React from 'react'
import ArrowRight from '../icons/ArrowRight'

const Button = (props: any) => {
  const buttonStyles =
    props.className &&
    props.className
      .split(' ')
      .map((classname: any) => {
        return classname
      })
      .join(' ')

  return (
    <>
      {(props.asSubmit && (
        <div className={`${buttonStyles} flex items-center`}>
          {<ArrowRight />}
          <input
            className="ml-13 font-inter font-semibold bg-transparent	"
            type="submit"
            value={props.text}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )) || (
        <Link href={props.to ? props.to : '#'} passHref>
          <a className="pointer">
            <div className={`${buttonStyles} text-black  flex items-center`}>
              <ArrowRight />
              <p
                className={`ml-13 font-inter font-semibold w-full ${props.paraClassName}`}
              >
                {props.text}
              </p>
            </div>
          </a>
        </Link>
      )}
    </>
  )
}

export default Button
