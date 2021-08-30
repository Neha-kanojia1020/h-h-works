import Image from 'next/image'
import styles from './clients.module.scss'

const Clients = (props: any) => {
  return (
    <section className="clients">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className={`${props.class} bg-white p-8 xl:p-10 block sm:hidden`}>
          <h2
            className="text-black text-105 font-semibold tracking-tight"
            style={{ lineHeight: '56px' }}
          >
            Fresh perspectives
          </h2>
          <h2 className="text-right text-105 font-semibold tracking-tight">
            delivered
          </h2>
        </div>
        <div
          className={`${
            (styles as any)['clients-imgs']
          } bg-gray-100 p-8 xl:p-16 `}
        >
          <div className="flex items-center justify-center mt-4 sm:mt-20">
            <div className="p-10">
              <Image
                src="/assets/client/Client-1.png"
                height={96}
                width={104}
                quality={100}
                loading="eager"
              />
            </div>
            <div className="p-10">
              <Image
                src="/assets/iconz.svg"
                height={80}
                width={150}
                quality={100}
                loading="eager"
              />
            </div>
          </div>
          <div
            className="flex items-center justify-center"
            style={{ marginLeft: '-10%' }}
          >
            <div className="p-10">
              <Image
                src="/assets/client/Client-3.png"
                height={40}
                width={166}
                quality={100}
                loading="eager"
              />
            </div>
            <div className="p-10">
              <Image
                src="/assets/client/Client-4.png"
                height={64}
                width={71}
                quality={100}
                loading="eager"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="p-10">
              <Image
                src="/assets/client/client-5.png"
                height={50}
                width={135}
                quality={100}
                loading="eager"
              />
            </div>
            <div className="p-10">
              <Image
                src="/assets/client/Client-6.png"
                height={64}
                width={170}
                quality={100}
                loading="eager"
              />
            </div>
          </div>
        </div>

        <div
          className={`${props.classbg} bg-black px-10 pt-80 pb-10 xl:pt-100 xl:p-16 sm:block flex`}
        >
          <h2
            className={`${props.className} text-white text-4xl sm:text-5xl xl:text-7xl md:mr-20 xl:mr-36 font-semibold leading-8 tracking-tight pb-1`}
          >
            {props.text}
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Clients
