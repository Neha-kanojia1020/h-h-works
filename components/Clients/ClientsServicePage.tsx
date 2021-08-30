import Image from 'next/image'

const ClientsServicePage = () => {
  return (
    <section className="clients">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="bg-gray-100 p-8 xl:p-16 ">
          <div
            className="flex items-center justify-center mt-4 sm:mt-20"
            style={{ marginLeft: '-15%' }}
          >
            <div className="p-10 pr-16">
              {
                <Image
                  src={'/assets/client/Client-1.webp'}
                  height={96}
                  width={104}
                  quality={100}
                  loading="eager"
                />
              }
            </div>
            <div className="p-10">
              <Image
                src="/assets/iconz.svg"
                height={80}
                width={150}
                loading="eager"
              />
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ marginLeft: '-15%' }}
          >
            <div className="p-10 pr-16">
              {
                <Image
                  src={'/assets/client/Client-3.webp'}
                  height={40}
                  width={166}
                  quality={100}
                  loading="eager"
                />
              }
            </div>
            <div className="p-10">
              {
                <Image
                  src={'/assets/client/Client-4.webp'}
                  height={64}
                  width={71}
                  quality={100}
                  loading="eager"
                />
              }
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ marginLeft: '-15%' }}
          >
            <div className="p-10 pr-16">
              {
                <Image
                  src={'/assets/client/client-5.webp'}
                  height={50}
                  width={135}
                  quality={100}
                  loading="eager"
                />
              }
            </div>
            <div className="p-10">
              {
                <Image
                  src={'/assets/client/Client-6.webp'}
                  height={64}
                  width={170}
                  quality={100}
                  loading="eager"
                />
              }
            </div>
          </div>
        </div>

        <div
          className={`bg-black px-10 pt-80 pb-10 xl:pt-96 xl:p-16 sm:block flex`}
        >
          <h2 className="gradient-text font-semibold text-white text-4xl sm:text-5xl xl:text-7xl md:mr-20 xl:mr-36 leading-8 tracking-tight pb-1">
            You’re in <br />
            good <br />
            company
          </h2>
        </div>
      </div>
    </section>
  )
}

export default ClientsServicePage
