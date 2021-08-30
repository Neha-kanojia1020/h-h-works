import React from 'react'
import { TabGroup } from '../../Tab/Tab'
import Image from 'next/image'
import { urlFor } from '../../../sanity'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import styles from './Workdetailtab.module.scss'

const SwiperContent = (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined
}) => (
  <div className="flex items-center pl-6 md:pl-0 justify-left">
    {props.children}
  </div>
)

const WorkDetailTab = ({ tabimages }: any) => {
  return (
    <section className="work-tabs">
      <div className="container md:container mx-auto py-10 xl:py-24 xl:p-0">
        <div className="work-images ">
          <TabGroup numTabs={4} direction={TabGroup.direction.HORIZONTAL}>
            <TabGroup.TabList>
              <div className={styles['tab-bg']}>
                <TabGroup.Tab
                  index={0}
                  className={`${styles['tab-button']} transition-colors duration-150 rounded-3xl mr-5 utline-none text-sm font-light`}
                  activeClassName={`bg-white text-black ${styles['tab-button-shadow']}`}
                  inactiveClassName="text-black"
                >
                  After
                </TabGroup.Tab>
                <TabGroup.Tab
                  index={1}
                  className={`${styles['tab-button']} transition-colors duration-150 rounded-3xl outline-none text-sm font-light`}
                  activeClassName="bg-white text-black"
                  inactiveClassName="text-black"
                >
                  Before
                </TabGroup.Tab>
              </div>
            </TabGroup.TabList>
            <TabGroup.TabPanel
              index={0}
              className="h-full flex justify-center mt-10"
              activeClassName="opacity-100 fade-in translate-x-0"
              inactiveClassName="absolute opacity-0 -translate-x-2"
            >
              <div className="desktop-swiper">
                {tabimages
                  .filter((item: any) => {
                    return item.caption == 'after'
                  })
                  .map((item: any, index: number) => {
                    return (
                      <div key={index} className={`${styles['tab-img']} mr-10`}>
                        <Image
                          src={urlFor(item).url() as any}
                          alt="img"
                          height={540}
                          width={257.1}
                          layout="fixed"
                          className={styles['tab-imgs']}
                          loading="eager"
                          quality={100}
                        />
                      </div>
                    )
                  })}
              </div>

              <Swiper className="mobile-swiper">
                {tabimages
                  .filter((item: any) => {
                    return item.caption == 'after'
                  })
                  .map((item: any, index: number) => {
                    return (
                      <SwiperSlide key={index}>
                        <SwiperContent key={index}>
                          <Image
                            src={urlFor(item).url() as any}
                            alt="img"
                            height={448}
                            width={213}
                            layout="fixed"
                            className={styles['tab-imgs']}
                            loading="eager"
                            key={index}
                            quality={100}
                          />
                        </SwiperContent>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
            </TabGroup.TabPanel>
            <TabGroup.TabPanel
              index={1}
              className="h-full flex justify-center mt-10"
              activeClassName="opacity-100 fade-in translate-x-0"
              inactiveClassName="absolute opacity-0 -translate-x-2 "
            >
              <div className="desktop-swiper">
                {tabimages
                  .filter((item: any) => {
                    return item.caption == 'before'
                  })
                  .map((item: any, index: any) => {
                    return (
                      <div
                        key={index}
                        className={`${styles['tab-img']}  mr-10`}
                      >
                        <Image
                          src={urlFor(item).url() as any}
                          alt="img"
                          height={540}
                          width={257.1}
                          layout="fixed"
                          className={styles['tab-imgs']}
                          loading="eager"
                          quality={100}
                        />
                      </div>
                    )
                  })}
              </div>
              <Swiper className="mobile-swiper">
                {tabimages
                  .filter((item: any) => {
                    return item.caption == 'before'
                  })
                  .map((item: any, index: any) => {
                    return (
                      <SwiperSlide key={index}>
                        <SwiperContent>
                          <Image
                            src={urlFor(item).url() as any}
                            alt="img"
                            height={448}
                            width={213}
                            layout="fixed"
                            className={styles['tab-imgs']}
                            loading="eager"
                            quality={100}
                          />
                        </SwiperContent>
                      </SwiperSlide>
                    )
                  })}
              </Swiper>
            </TabGroup.TabPanel>
          </TabGroup>
        </div>
      </div>
    </section>
  )
}

export default WorkDetailTab
