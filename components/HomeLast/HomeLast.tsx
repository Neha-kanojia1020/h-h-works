import Image from 'next/image'
import HeadingMedium from '../Headings/HeadingMedium'
import Link from 'next/link'
import styles from './HomeLast.module.scss'

export default function LastSection() {
  return (
    <section className={styles['collaborate-section']}>
      <div className="container mx-auto p-6 py-10 xl:py-24 xl:p-0">
        <div className="content">
          <HeadingMedium
            title="Let’s collaborate"
            class="text-3xl font-bold leading-8 mb-12"
          />
          <p className="md:mt-6 md:mr-36 font-light text-xl leading-8 tracking-wide hidden md:block">
            <u>
              <Link href="/service/discover">Discover</Link>
            </u>{' '}
            helps you find the right insights and strategy to address your
            business challenges.{' '}
            <u>
              <Link href="/service/create">Create</Link>
            </u>{' '}
            takes those insights and turns them into stunning products and
            services.{' '}
            <u>
              <Link href="/service/grow">Grow</Link>
            </u>{' '}
            helps your organisation expand and evolve.{' '}
            <u>
              <Link href="/service/invest">Invest</Link>
            </u>{' '}
            empowers your teams with these strategies, insights and the
            leadership acumen to take the next step with a fresh perspective.
          </p>
          <p className="md:mt-6 md:mr-36 font-light text-lg md:text-xl block md:hidden">
            Discover helps you find the right insights and strategy to address
            your business challenges. Create takes those insights and turns them
            into stunning products and services. Grow helps your organisation
            expand and evolve. Invest empowers your teams with these strategies,
            insights and the leadership acumen to take the next step with a
            fresh perspective.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-16 md:gap-8">
          <div className="bg-white p-6 sm:p-0 my-4 sm:m-0">
            <div className="flex-1 md:p-8">
              <Image
                src="/assets/footer/img-1.webp"
                alt="image"
                height={120}
                width={158.22}
                layout="fixed"
                quality={10}
                placeholder="blur"
                blurDataURL="/assets/footer/img-1.webp"
              />
              <div>
                <h5 className="font-semibold text-2xl py-2 mt-3">Discover</h5>
                <ul className="font-light text-base leading-8">
                  <li>Research Lab</li>
                  <li>Digital Strategy</li>
                  <li>Brand Strategy</li>
                  <li>Product Strategy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex bg-white flex-start p-6 sm:p-0 my-4 sm:m-0">
            <div className="flex-1 md:p-8">
              <Image
                src="/assets/footer/img-2.webp"
                alt="image"
                height={120}
                width={170.89}
                layout="fixed"
                quality={10}
                placeholder="blur"
                blurDataURL="/assets/footer/img-2.webp"
              />
              <div>
                <h5 className="font-semibold text-2xl py-2 mt-3">Create</h5>

                <ul className="font-light text-base leading-8">
                  <li>Brand Identity</li>
                  <li>Design Sprint</li>
                  <li>Product Design</li>
                  <li>Service Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex bg-white flex-start p-6 sm:p-0 my-4 sm:m-0">
            <div className="flex-1 md:p-8">
              <Image
                src="/assets/footer/img-3.webp"
                alt="image"
                height={120}
                width={215.64}
                layout="fixed"
                quality={10}
                placeholder="blur"
                blurDataURL="/assets/footer/img-3.webp"
              />
              <div>
                <h5 className="font-semibold text-2xl py-2 mt-3">Grow</h5>
                <ul className="font-light text-base leading-8">
                  <li>Conversion Optimization</li>
                  <li>Campaign Strategy</li>
                  <li>CX Design</li>
                  <li>Design Operations</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex bg-white flex-start p-6 sm:p-0 my-4 sm:m-0">
            <div className="flex-1 md:p-8">
              <Image
                src="/assets/footer/img-4.webp"
                alt="image"
                height={120}
                width={170.7}
                layout="fixed"
                quality={10}
                placeholder="blur"
                blurDataURL="/assets/footer/img-4.webp"
              />
              <div>
                <h5 className="font-semibold text-2xl py-2 mt-3">Invest</h5>

                <ul className="font-light text-base leading-8">
                  <li>Design Thinking Training</li>
                  <li>Design Sprint Workshops</li>
                  <li>Design Leadership Coaching</li>
                  <li>Product Design for Teams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
