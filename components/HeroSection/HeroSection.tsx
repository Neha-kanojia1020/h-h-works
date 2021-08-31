import Image from 'next/image'
import HeadingLarge from '../Headings/HeadingLarge'
import Button from '../Buttons/Button'
import heroImg  from '../../public/assets/home/hero-img.png'

export default function HeroSection() {
  return (
    <div className="xl:container mx-auto py-6 px-6 xl:px-0 xl:py-24 xl:pb-28 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="block sm:hidden">
          <Image
            src={heroImg}
            alt="people-researching-websites"
            height={317}
            width={375}
            quality={10}
            layout="responsive"
            placeholder="blur"
            blurDataURL="/assets/home/hero-img.png"
          />
        </div>
        <div className="inner">
          <HeadingLarge
            title="We believe the best creativity is done in collaboration with you."
            class=" md:mr-28 xl:mr-4 w-full xl:w-101 pb-5 position-heading"
          />
          <Button
            asLink
            text="Request a call"
            className="w-full"
            to="/contact"
          />
        </div>
        <div className="hidden sm:block">
          <Image
                 src={heroImg}
                 alt="people-researching-websites"
                 height={317}
                 width={375}
                 quality={10}
                 layout="responsive"
                 placeholder="blur"
                 blurDataURL="/assets/home/hero-img.png"
          />
        </div>
      </div>
    </div>
  )
}
