import Image from 'next/image'

const data = [
  {
    id: 0,
    img: '/assets/icon1.svg',
    title: 'Quick reply',
    description:
      'Slow replies annoy the best of us, which is why we will get back you same working day or in the morning at the latest.',
  },
  {
    id: 1,
    img: '/assets/icon2.svg',
    title: 'Setup a meeting',
    description:
      'Remote, in-person at our office or your office;  let us know what you prefer and we will work around your schedule. ',
  },
  {
    id: 2,
    img: '/assets/icon3.svg',
    title: 'Send a proposal',
    description:
      'Armed with all he information we need we can then put together a comprehensive proposal on how H+H can bring a fresh perspective to your organization. ',
  },
]

const WhatNext = () => {
  return (
    <section className="bg-black text-white py-12 md:py-20 lg:py-24 xl:py-28">
      <div className="container mx-auto px-6 xl:p-0">
        <div className="max-w-5xl">
          <h2 className="text-4xl sm:text-5xl mb-6 sm:mb-10 md:mb-16 font-semibold sm:font-bold gradient-text">
            What happens next?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
            {data.map((item) => (
              <div key={item.id}>
                <div className="h-20 w-20 mb-4 rounded-full bg-gray-medium flex justify-center items-center">
                  <Image
                    src={item.img}
                    width={30}
                    height={30}
                    alt=""
                    quality={100}
                    loading="eager"
                  />
                </div>
                <h3 className="text-xl font-bold md:text-102 mb-2">
                  {item.title}
                </h3>
                <p className="text-base font-normal md:text-1xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatNext
