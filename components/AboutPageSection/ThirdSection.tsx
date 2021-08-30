import Image from 'next/image'

export default function AboutPagethirdSection() {
  return (
    <section className="relative mb-8 md:mb-24 xl:h-screen sm:mt-24 h-full">
      <div className="container-fluid md:pt-5 lg:py-10 mx-auto md:grid md:grid-cols-2 lg:gap-x-16 xl:gap-x-40 h-full">
        <div className="mb-8 md:mb-0">
          <div className="md:hidden relative aspect-w-4 aspect-h-0 xs:aspect-w-16 xs:aspect-h-0 w-full">
            <Image
              quality={100}
              src="/assets/bg.webp"
              layout="fill"
              objectFit="fill"
              objectPosition="right"
              alt=""
              width={375}
              height={375}
              loading="eager"
            />
          </div>
          <div className="hidden aboutImage md:block top-0 left-0 w-1/2 h-full">
            <Image
              quality={100}
              src="/assets/bg.webp"
              objectFit="cover"
              layout="fill"
              objectPosition="right"
              alt=""
              width={720}
              height={720}
              loading="eager"
            />
          </div>
        </div>
        <div className="px-8 xl:px-0 md:flex md:items-start lg:items-start xl:items-center md:justify-center">
          <div className="text-black">
            <h2 className="font-bold text-4xl leading-9 xl:text-101 mb-4">
              What do you get <br className="hidden xl:block" /> when you put
              two <br className="hidden xl:block" /> problem solvers{' '}
              <br className="hidden xl:block" /> together?
            </h2>
            <div className="text-base font-normal sm:text-xl xl:pr-36">
              Two passionate senior designers & strategists who love discovering
              and creating valuable experiences to help businesses grow and
              invest in their teams.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
