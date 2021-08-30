import Image from 'next/image'
import React from 'react'
import Container from '../Container/Container'
import Button from '../Buttons/Button'
import { urlFor } from '../../sanity'

const ServiceDetailBanner = (props: any) => {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h6 className="font-inter py-4 sm:py-6 md:text-1xl leading-normal font-light">
              {' '}
              Services
            </h6>
            <h2 className="text-4xl xl:text-7xl md:mr-28 xl:mr-4 font-bold tracking-normal">
              {' '}
              {props.service.title}{' '}
            </h2>
            <p className="text-base md:text-sm xl:text-xl font-light py-4 xl:pt-6 tracking-normal">
              {props.service.excerpt}
            </p>
            <div className="sm:flex pt-6">
              <Button
                to={props.service.calllink}
                text="Jump on a call with us "
              />
              <Button
                to={props.service.chatlink}
                text=" Or chat with us on LINE"
                className="pt-6 sm:pt-0 sm:ml-8"
              />
            </div>
          </div>
          <div className="mt-10 xl:mt-0">
            <Image
              src={urlFor(props.service.serviceimage).url() as any}
              loading="eager"
              height={317}
              width={375}
              layout="responsive"
              quality={100}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServiceDetailBanner
