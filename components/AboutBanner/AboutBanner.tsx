import React from 'react'
import styles from './aboutBanner.module.scss'

const AboutBanner = () => {
  return (
    <section className={`${styles['about-banner']} p-8 xl:p-0 xl:px-0 h-full`}>
      <div
        className={`${(styles as any)['about-banner-img']}  px-10 pt-10`}
        style={{
          backgroundImage: 'url(/assets/about.webp)',
        }}
      ></div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-1 items-center">
          <div className="pr-10 sm:pr-0 w-full xl:w-112 xl:pt-24">
            <h6 className="text-base font-normal md:text-1xl mb-4 md:mb-8 leading-normal text-gray-900">
              About us
            </h6>
            <h2 className="font-bold text-19xl lg:text-20xl mb-4 md:mb-8 relative leading-48">
              Passionate, experienced and fun
            </h2>
            <p className="text-base font-normal md:text-1xl pr-14 xl:pr-0 relative">
              Two passionate senior designers & strategists who love discovering
              and creating valuable experiences to help businesses grow and
              invest in their teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutBanner
