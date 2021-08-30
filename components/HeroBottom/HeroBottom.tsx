import { ChevronRight24 } from '@carbon/icons-react'
import Link from 'next/link'
import styles from './HeroBottomSection.module.scss'

export default function HeroBottomSection() {
  return (
    <section className="bg-black">
      <div className="container md:container mx-auto p-6 py-10 xl:py-24 xl:p-0">
        <div
          className={` content text-white md:w-5/6 ${styles['hero-bottom-section-maxwidth']}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text hidden sm:block">
            We are a digital consultancy, busy designing beautiful products,
            <br />
            and experiences.
          </h2>
          <h2 className="text-4xl xl:text-5xl font-bold gradient-text block sm:hidden">
            We are a digital consultancy, busy designing beautiful products, and
            experiences.
          </h2>

          <p className="mt-8 text-1xl sm:text-xl leading-7">
            Our services focus on the four steps we believe all successful
            organisations progress through. Discover helps you find the right
            insights and strategy to address your business challenges. Create
            takes those insights and turns them into stunning products and
            services. Grow helps your organisation expand and evolve. Invest
            empowers your teams with these strategies, insights and the
            leadership acumen to take the next step with a fresh perspective.
          </p>
        </div>
        <div className="flex mt-8 text-white">
          <ChevronRight24 className="mr-13" />
          <Link href="/work">
            <a className="font-semibold">Learn how we solve challenges</a>
          </Link>
        </div>
      </div>
    </section>
  )
}
