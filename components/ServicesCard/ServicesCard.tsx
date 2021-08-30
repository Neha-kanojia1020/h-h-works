import React from 'react'
import Image from 'next/image'
import Button from '../Buttons/Button'

const ServicesCard = (props: any) => {
  return (
    <div className="services-card">
      <div className="card-image">
        <Image
          src={`/assets/services-detail/${props.img}`}
          className="card-img"
          loading="eager"
          height={200}
          width={`${props.width}`}
          layout="fixed"
          quality={100}
        />
      </div>
      <div className="card-content">
        <h4 className="text-4xl font-semibold  pt-6">{props.title}</h4>
        <h6 className="text-lg font-semibold pt-6">
          How we solve your challange
        </h6>
        <p className="text-lg font-normal py-4" style={{ fontSize: '17px' }}>
          {props.text}
        </p>
        <Button text="Request a call" />
      </div>
    </div>
  )
}

export default ServicesCard
