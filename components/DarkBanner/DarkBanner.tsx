import React from 'react'
const DarkBanner = (props: any) => {
  return (
    <>
      <section className="bg-black">
        <div className="container mx-auto h-full">
          <div className="p-8 xl:px-16 xl:pt-24 xl:pb-40 xl:pr-72">
            <h6 className="text-white font-inter py-4 md:py-8 md:text-1xl leading-normal font-light">
              {props.sub}
            </h6>
            <h1 className="text-19xl md:text-7xl md:mr-28 xl:mr-4 font-bold tracking-normal gradient-text">
              {props.title}
            </h1>
            <p className="text-white text-1xl xl:text-xl font-light py-6 pr-0 xl:pr-20">
              {props.text}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default DarkBanner
