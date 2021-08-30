import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
// import Swiper core and required modules
import SwiperCore, { Mousewheel, Pagination } from 'swiper/core'
import { urlFor } from '../../sanity'

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination])

interface ItemsProps {
  src: string
  text: string
}

const Items = (props: ItemsProps) => {
  const { src, text } = props
  return (
    <div className="mb-8 xl:mb-0">
      <div className="relative pb-6 w-full">
        <Image
          src={src}
          layout="responsive"
          height={459}
          width={459}
          alt=""
          quality={100}
          loading="eager"
        />
      </div>
      <p className="text-gray-101 text-base font-normal">{text}</p>
    </div>
  )
}

const Teams = ({ slider }: any) => {
  const itemsContainerRef = useRef<HTMLDivElement>(null)
  const [itemsContainerWidth, setItemsContainerWidth] = useState('100%')

  const getItemsContainerWidth = () => {
    var rect
    if (itemsContainerRef) {
      if (itemsContainerRef.current) {
        rect = itemsContainerRef.current.getBoundingClientRect()
      }
    }

    var left
    if (rect) {
      left = rect.left
    }

    const windowWidth = window.innerWidth
    if (windowWidth >= 768) {
      left && setItemsContainerWidth(`${windowWidth - left}px`)
    } else {
      setItemsContainerWidth('100%')
    }
  }

  useEffect(() => {
    getItemsContainerWidth()
    window.addEventListener('resize', getItemsContainerWidth)
  }, [itemsContainerRef])

  return (
    <section className="bg-black text-white py-12 xl:py-24">
      <div className="container mx-auto px-8 xl:px-0">
        <div className="">
          <h2 className="gradient-text font-bold text-4xl md:text-101 mb-8 md:mb-16">
            Investing in a positive <br className="hidden lg:block" /> change is
            always rewarding.
          </h2>
        </div>
        <div className="">
          <div
            ref={itemsContainerRef}
            className="team-items"
            style={{ width: itemsContainerWidth }}
          >
            <Swiper
              direction={'horizontal'}
              slidesPerView={3}
              spaceBetween={32}
              mousewheel={{
                invert: false,
                releaseOnEdges: true,
                sensitivity: 1,
              }}
              pagination={{
                clickable: true,
              }}
              speed={500}
              className="mySwiper hidden xl:block"
            >
              {slider &&
                slider.map((item: any) => {
                  return (
                    <SwiperSlide>
                      <Items
                        src={urlFor(item.image).url() as any}
                        text={item.title}
                      />
                    </SwiperSlide>
                  )
                })}
              {slider &&
                slider.map((item: any) => {
                  return (
                    <SwiperSlide>
                      <Items
                        src={urlFor(item.image).url() as any}
                        text={item.title}
                      />
                    </SwiperSlide>
                  )
                })}
            </Swiper>
            <div className="block xl:hidden w-full">
              {slider &&
                slider.map((item: any) => {
                  return (
                    <Items
                      src={urlFor(item.image).url() as any}
                      text={item.title}
                    />
                  )
                })}
              {slider &&
                slider.map((item: any) => {
                  return (
                    <Items
                      src={urlFor(item.image).url() as any}
                      text={item.title}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Teams
