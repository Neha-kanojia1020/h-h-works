import React from 'react'
import Image from 'next/image'
import Container from '../../Container/Container'
import { urlFor } from '../../../sanity'

const ProjectDetailFeaturedImg = ({ ImageForDesktop, ImageForMobile }: any) => {
  return (
    <section className="featured-img">
      <Container>
        <div className="hidden xl:block">
          <Image
            src={urlFor(ImageForDesktop).url() as any}
            alt="feature-img"
            layout="responsive"
            height="70"
            width="100"
            quality={100}
            loading="eager"
          />
        </div>
        <div className="block xl:hidden">
          <Image
            src={urlFor(ImageForMobile).url() as any}
            alt="feature-img"
            className="img-fluid"
            height={400}
            width={300}
            layout="responsive"
            quality={100}
            loading="eager"
          />
        </div>
      </Container>
    </section>
  )
}

export default ProjectDetailFeaturedImg
