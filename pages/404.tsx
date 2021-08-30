import React from 'react'
import Button from '../components/Buttons/Button'
import Header from '../components/Header/Header'
import HeadingLarge from '../components/Headings/HeadingLarge'
import { NextSeo } from 'next-seo'

const NotFound = () => {
  return (
    <>
      <NextSeo
        title="404 - H & H Works"
        description="This example uses more of the available config options."
      />
      <Header className="bg-notfound text-white" classNameBg="black" />
      <div className="notfound-content z-50	">
        <HeadingLarge title="405,403,402..." />
        <p className="text-1xl xl:text-2xl pt-4 pb-6">
          Yup, there is something missing and we will find it together. Take a
          seat and let us look for the page or you can...
        </p>
        <Button to="/" text="Go back home" />
      </div>
    </>
  )
}

export default NotFound
