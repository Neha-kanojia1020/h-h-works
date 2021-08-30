import Link from 'next/link'
import React from 'react'
import ArrowWhiteRight from '../icons/ArrowWhiteRight'

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
      {(props.asLink && (
        <Link href={props.to} passHref>
          <a className="pointer">
            <div className={`${buttonStyles} flex items-center`}>
              <ArrowWhiteRight />
              <p className="ml-13 font-inter font-semibold">{props.text}</p>
            </div>
          </a>
        </Link>
      )) || (
        <div className={`${buttonStyles} flex items-center`}>
          {<ArrowWhiteRight />}
          <input
            className="ml-13 font-inter font-semibold bg-transparent	"
            type="submit"
            value={props.text}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}
    </>
  )
}

export default Button
