import React from 'react'
import HeadingMedium from '../Headings/HeadingMedium'

const ServicesFact = ({ service }: any) => {
  console.log(service)

  return (
    <div className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <div
          className="px-10 pt-10 block sm:hidden"
          style={{
            backgroundImage: 'url(/assets/services-img.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
          }}
        ></div>
        <div className="bg-black w-full p-8 xl:p-16 pt-36  flex items-end h-6/6 sm:h-auto">
          <HeadingMedium
            title="Did you know that colloborative projects have a 21% increase in
            profitability"
            class="gradient-text heading-fact"
          />
        </div>
        <div
          className="px-10 pt-10 hidden sm:block"
          style={{
            backgroundImage: 'url(/assets/services-img.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
          }}
        ></div>
      </div>
    </div>
  )
}

export default ServicesFact
