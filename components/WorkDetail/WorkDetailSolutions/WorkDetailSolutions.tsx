import React from 'react'
import Image from 'next/image'
import Container from '../../Container/Container'
import { urlFor } from '../../../sanity'

const WorkSolutions = ({ solutiongridheading, solutiongrid }: any) => {
  return (
    <section className="work-solutions">
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="">
            <div className="font-inter xl:px-0 md:m-0 text-base sm:text-1xl leading-normal mb-1">
              H&H solutions
            </div>
            <div className="xl:px-0 my-5 md:mt-4 md:m-0 pr-14 xl:pr-0">
              <h4 className="text-23xl xl:text-19xl font-bold font-inter leading-tight	 loose-11">
                {solutiongridheading}
              </h4>
            </div>
          </div>
          {solutiongrid &&
            solutiongrid.map((element: any, index: number) => {
              return (
                <div key={index} className="">
                  <Image
                    src={urlFor(element).url() as any}
                    alt="img"
                    height={221}
                    width={394}
                    layout="responsive"
                    quality={100}
                    loading="eager"
                  />
                </div>
              )
            })}
        </div>
      </Container>
    </section>
  )
}

export default WorkSolutions
