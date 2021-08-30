import Image from 'next/image'
import HeadingMedium from '../Headings/HeadingMedium'
import Button from '../Buttons/Button'

const RateCard = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto xl:pt-20 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <HeadingMedium
              title="Download the H&H Rate card"
              class="text-19xl loose-medium text-black"
            />

            <p className=" text-lg	 xl:text-xl font-light py-4 tracking-normal xl:leading-8 sm:pr-36">
              "If you think the good design is expensive, you should look at the
              cost of bad design"
              <br /> - Dr Ralf Speth CEO, Jaguar
            </p>
            <Button
              paraClassName="leading-tight"
              text="Download our rate card"
            />
          </div>
          <div className="hidden xl:block rate-img mt-5 xl:mt-0">
            <Image
              src="/assets/services-odd1.webp"
              loading="eager"
              alt="logo"
              height={460}
              width={544}
              layout="fixed"
              quality={100}
            />
          </div>
          <div className="block xl:hidden rate-img mt-5 xl:mt-0">
            <Image
              src="/assets/services-odd1.webp"
              loading="eager"
              alt="logo"
              height={460}
              width={544}
              layout="responsive"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RateCard
