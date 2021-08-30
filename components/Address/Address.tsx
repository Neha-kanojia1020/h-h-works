import Link from 'next/link'
import React from 'react'

const Address = () => {
  return (
    <section className="md:bg-black-white mb-14 md:mb-28">
      <div className="container mx-auto md:grid md:grid-cols-2 md:gap-x-10">
        <div className="px-8 xl:px-0 flex items-end bg-black md:bg-transparent mb-12 pt-32 md:pt-96 pb-8">
          <h2 className="text-white font-semibold text-21xl lg:text-5xl lg:font-bold">
            Based in Bangkok? <br className="hidden xl:block" /> Come visit our{' '}
            <br className="hidden xl:block" /> office and training{' '}
            <br className="hidden xl:block" /> center
          </h2>
        </div>
        <div className="px-8 xl:px-0 md:flex md:items-center">
          <div className="lg:ml-8">
            <h3 className="font-semibold mb-1 md:text-1xl">Visiting Address</h3>
            <p className="font-normal mb-6 md:text-1xl">
              Web Courses Bangkok 1028/5 Pongamorn Building, Rama IV Rd, Thung
              Maha Mek, Sathon, Bangkok 10120
            </p>
            <h3 className="font-semibold mb-1 md:text-1xl">Opening Hours</h3>
            <p className="font-normal mb-6 md:text-1xl">
              Monday to Friday 9am - 5pm
            </p>
            <h3 className="font-semibold mb-1 md:text-1xl">Directions</h3>
            <p className="font-normal mb-6 md:text-1xl">
              Take the MRT to Lumpini station, come out of exit 1, turn right,
              walk straight for 20 meters, you will see a "Grey NJ" sign on your
              right, turn inside and we are on the ground floor.
            </p>
            <Link href="https://goo.gl/maps/5JqUQpocayqE1Yan9">
              <a className="cursor-pointer">
                <h3 className="cs-underline relative font-medium mb-2 inline md:text-1xl">
                  Get Directions
                </h3>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Address
