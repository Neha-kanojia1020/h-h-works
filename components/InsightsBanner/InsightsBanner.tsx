import Image from 'next/image'
import Button from '../Buttons/Button'
import { useState, useEffect } from 'react'
import { urlFor } from '../../sanity'
import styles from './InsightsBanner.module.scss'

const InsightsBanner = ({ articles }: { articles: any }) => {
  const selectedArticle = articles.articles.find((item: any) => {
    return (
      item.slug.current ==
      'how-to-run-a-successful-design-sprint-in-thailand-two'
    )
  })

  function timeSince(date: any) {
    var seconds = Math.floor((new Date().valueOf() - date) / 1000)

    var interval = seconds / 31536000

    if (interval > 1) {
      return Math.floor(interval) + ' years'
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return Math.floor(interval) + ' months'
    }
    interval = seconds / 86400
    if (interval > 1) {
      return Math.floor(interval) + ' days'
    }
    interval = seconds / 3600
    if (interval > 1) {
      return Math.floor(interval) + ' hours'
    }
    interval = seconds / 60
    if (interval > 1) {
      return Math.floor(interval) + ' minutes'
    }
    return Math.floor(seconds) + ' seconds'
  }
  const [isMobile, setIsMobile] = useState<boolean>()

  useEffect(() => {
    function handleScroll() {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative lg:h-103 mb-12 lg:mb-28 lg:mt-24">
      <div className="w-full lg:hidden mb-8 sm:max-w-5xl mx-auto">
        <div className="relative aspect-w-4 aspect-h-5 xs:aspect-h-4 sm:aspect-h-2">
          <Image
            src={urlFor(selectedArticle.image).url() as any}
            layout="fill"
            alt="girl sitting with cardboard in her right hand"
            objectFit="cover"
            quality={100}
            loading="eager"
          />
        </div>
      </div>
      <div className="container h-full mx-auto px-8 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-x-2">
        <div className="md:pt-10 md:mb-14">
          <span className="font-normal text-base leading-4 md:text-1xl block mb-4">
            {selectedArticle.category[0]}
          </span>
          <h1 className="font-bold text-4xl md:text-5xl mb-4 md:mb-6 leading-10">
            {selectedArticle.title}
          </h1>
          <p className="font-normal tracking-normal md:leading-8 text-1xl leading-relaxed	md:text-xl mb-6 lg:mr-5">
            {selectedArticle.excerpt}
          </p>
          <div
            className={`${styles['profile-container']} flex gap-x-2 xs:gap-x-4 md:mb-8`}
          >
            <div className="flex mb-0 items-center gap-2 xs:gap-4">
              <Image
                src={urlFor(articles.author[0].image).url() as any}
                alt="user-img"
                width={isMobile ? 32 : 40}
                height={isMobile ? 32 : 40}
                className="rounded"
                quality={100}
                loading="eager"
              />
              <span className="font-normal text-103 md:text-base">
                {articles.author[0].name}
              </span>
            </div>
            <div className="flex items-center gap-x-1">
              <span className="font-normal text-103 md:text-base text-gray-101">
                {timeSince(new Date(selectedArticle._updatedAt))} ago
              </span>
              <span className="font-normal text-103 md:text-base text-gray-101">
                &bull;
              </span>
              <span className="font-normal text-103 md:text-base text-gray-101">
                {selectedArticle.readtime}
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <Button
              to={`/article/${selectedArticle.slug.current}`}
              text="Read More"
            />
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="absolute right-0 top-0 h-full w-110">
            <Image
              src={urlFor(selectedArticle.image).url() as any}
              layout="fill"
              alt="girl sitting with cardboard in her right hand"
              quality={100}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsightsBanner
