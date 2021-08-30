import Image from 'next/image'
import { ChevronRight24 } from '@carbon/icons-react'
import HeadingMedium from '../Headings/HeadingMedium'
import Link from 'next/link'

const ScheduleCall = (props: any) => {
  return (
    <section className={`${props.className} schedule  font-normal`}>
      <div
        className={`mx-auto p-6 xl:p-0 ${
          props.from == 'contact' ? 'py-12' : 'py-10'
        }  xl:py-24`}
        style={{ maxWidth: '1024px' }}
      >
        <div>
          <HeadingMedium
            title="Ready to take your business to the next level?"
            class={`${
              props.from == 'contact' ? 'hidden' : ''
            }  md:block xl:pr-28  loose-medium`}
          />
          <p
            className={`${
              props.from == 'contact' ? 'hidden' : ''
            } md:block text-xl font-normal py-6 xl:pr-24`}
          >
            Talking is still one of the best ways to communicate - we love to
            talk almost as much as we love to listen! If you have an idea, a
            need or a plan you want to implement, contact us today.
          </p>
        </div>
        <div
          className={`calendly-form  xl:px-10 ${
            props.from == 'contact'
              ? 'md:py-10 md:px-6 md:mt-8'
              : ' py-10 px-6 mt-8 '
          }`}
        >
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              props.from == 'contact' ? 'gap-6 lg:gap-16' : 'gap-4'
            } items-center`}
          >
            <div
              className={`schedule-img ${
                props.from == 'contact' ? ' order-1 md:order-none	' : ''
              } block sm:hidden`}
            >
              <Image
                src="/assets/schedule-img.svg"
                layout="responsive"
                height={props.from == 'contact' ? 293 : 500}
                width={props.from == 'contact' ? 311 : 500}
                alt="logo"
                quality={100}
                loading="eager"
              />
            </div>
            <div className="tracking-tight pt-0 sm:pt-32 md:pt-0">
              <h3 className="font-bold xl:font-semibold text-4xl xl:pr-12 leading-10">
                Schedule a 30 minute meeting with our strategist
              </h3>
              <h4 className="text-1xl xl:text-xl font-semibold md:text-base mt-4 xl:mt-8">
                {' '}
                What time works best for you?
              </h4>
              <p className="text-base py-3 xl:py-6 font-light">
                Talking is still one of the best ways to communicate - we love
                to talk almost as much as we love to listen! If you have an
                idea, a need or a plan you want to implement, contact us today.
              </p>
              <div className="text-black font-inter flex items-center md:mt-0 pt-3">
                <ChevronRight24 />
                <span className="font-semibold scheduleLink">
                  <Link href="https://calendly.com/wcbcarl/chat?month=2021-06">
                    Book a time
                  </Link>
                </span>
              </div>
            </div>

            <div className="hidden sm:block">
              <Image
                src="/assets/schedule-img.svg"
                layout="responsive"
                height={437}
                width={463}
                alt="logo"
                quality={100}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleCall
