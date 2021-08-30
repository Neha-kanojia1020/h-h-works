import Image from 'next/image'
import { ChevronRight24 } from '@carbon/icons-react'

const ScheduleMeeting = () => {
  return (
    <section className="bg-gray-lightest p-6 sm:py-24">
      <div className="container mx-auto">
        <div className="hidden md:block max-w-5xl mb-8">
          <h1 className="text-5xl font-bold mb-6">
            Easy way to arrange quick meeting
          </h1>
          <p className="text-xl font-normal">
            Talking is still one of the best ways to communicate - we love to
            talk almost as much as we love to listen! If you have an idea, a
            need or a plan you want to implement, contact us today.
          </p>
        </div>
        <div className="calendly-form calendly-form-contact py-10 px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="tracking-tight">
              <h3 className="font-bold xl:font-semibold text-4xl xl:pr-12 leading-10">
                Schedule a 30 minute meeting with our strategist
              </h3>
              <h4 className="text-1xl xl:text-xl font-semibold md:text-base mt-4 xl:mt-8">
                {' '}
                What time works best for you?
              </h4>
              <p className="text-base font-light md:text-xl md:text-normal py-3 xl:py-6">
                Talking is still one of the best ways to communicate - we love
                to talk almost as much as we love to listen! If you have an
                idea, a need or a plan you want to implement, contact us today.
              </p>
              <div className="text-black font-inter flex items-center md:mt-0 pt-3">
                <ChevronRight24 />
                <p className="font-semibold">Book a time</p>
              </div>
            </div>

            <div className="schedule-img">
              <Image
                src="/assets/schedule-img.webp"
                layout="responsive"
                height={500}
                width={500}
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

export default ScheduleMeeting
