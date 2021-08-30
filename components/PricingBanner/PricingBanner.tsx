import React, { useState } from 'react'
import PricingFilter from '../PricingFilter/PricingFilter'
import PricingCard from '../PricingCard/PricingCard'
import styles from './PricingBanner.module.scss'

const PricingBanner = (props: any) => {
  const [selectedProject, setSelectedProject] = useState<null | number>(null)
  const [totalPrice, Settotalprice] = useState<null | any>(null)
  const [timesRendered, setTimesRendered] = useState(0)
  const onSelectChange = (value: number) => {
    setSelectedProject(value)
    Settotalprice(props.projects[value]?.smallprice)
    setTimesRendered((prev) => ++prev)
  }

  return (
    <>
      <section className="bg-black">
        <div className="container max-w-1034 mx-auto h-full">
          <div className={`pb-0 pt-6 px-8 lg:px-3 xl:px-0 lg:pt-24 lg:pb-8`}>
            <h6 className="text-white md:tracking-normal font-normal leading-none md:leading-none mb-6 md:mb-8 md:mt-0 md:text-1xl">
              {' '}
              {props.sub}
            </h6>
            <div className={'relative ' + styles.bottom}>
              <div className="flex items-center">
                {selectedProject || selectedProject == 0 ? (
                  <h2
                    className={
                      'text-19xl leading-tight lg:text-7xl font-bold tracking-normal gradient-text'
                    }
                  >
                    {props.projects[selectedProject].title}
                  </h2>
                ) : (
                  <h2
                    className={
                      'text-19xl leading-tight lg:text-7xl font-bold tracking-normal gradient-text'
                    }
                  >
                    {props.title}
                  </h2>
                )}
              </div>
            </div>
            <p className="text-white font-normal text-1xl xl:text-xl tracking-normal mt-6 mb-6 lg:my-8">
              {((selectedProject || selectedProject == 0) &&
                props.projects[selectedProject].description) ||
                'The value we bring is 40 years of commercial experience and running our own successful start-ups, teams and enterprises around the world. When you and your organisations works with H&H you will instantly feel that value and how it helps bring a fresh perspective to your challenges.'}
            </p>

            <PricingFilter
              onSelectChange={onSelectChange}
              workPage={true}
              dynamicProjects={props.projects}
            />
            <div
              className={
                selectedProject || selectedProject == 0
                  ? 'relative'
                  : 'relative hidden'
              }
            >
              <PricingCard
                classes={
                  selectedProject || selectedProject == 0 ? '' : 'hidden'
                }
                totalPrice={totalPrice}
                timesRendered={timesRendered}
                selectedProject={
                  selectedProject || selectedProject == 0
                    ? props.projects[selectedProject]
                    : undefined
                }
              />
            </div>
          </div>
        </div>
      </section>
      <div
        className={
          `bg-white heightFill hidden` +
          (selectedProject || selectedProject == 0 ? 'lg:block ' : '')
        }
        style={{ height: '1140px' }}
      ></div>
    </>
  )
}

export default PricingBanner
