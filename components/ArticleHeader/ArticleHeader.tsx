import Image from 'next/image'
import { urlFor } from '../../sanity'

const ArticleHeader = (props: any) => {
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

  return (
    <section className="flex flex-col">
      <div className="order-1 md:order-2 mb-8 lg:md-6">
        <div className="w-full overflow-hidden" style={{ maxHeight: 700 }}>
          <div className="relative aspect-w-4 aspect-h-5 sm:aspect-w-16 sm:aspect-h-9">
            <Image
              src={urlFor(props.articleDetails.image).url() as any}
              layout="fill"
              objectFit="cover"
              alt=""
              quality={100}
              loading="eager"
            />
          </div>
        </div>
      </div>
      <div className="order-2 md:order-1 px-6 max-w-2xl mx-auto xl:max-w-820 md:mt-24 md:mb-14">
        <span className="mb-4 md:mb-8 font-normal text-base leading-none md:leading-none	 md:text-1xl block">
          {props.articleDetails.category[0]}
        </span>
        <h1 className="text-4xl leading-snug mb-4 md:mb-8 lg:text-20xl font-bold">
          {props.articleDetails.title}
        </h1>
        <p className="font-normal text-xl lg:text-102 mb-4 lg:mb-8 lg:leading-relaxed">
          {props.articleDetails.excerpt}
        </p>
        <div className="flex items-center gap-x-4">
          <Image
            src={urlFor(props.articleAuthor.image).url() as any}
            alt="user-img"
            width={40}
            height={40}
            className="rounded"
            quality={100}
            loading="eager"
          />
          <span className="text-sm lg:text-base font-normal">
            {props.articleAuthor.name}
          </span>
          <span className="text-sm lg:text-base font-normal grey-text">
            {timeSince(new Date(props.articleDetails._updatedAt))} ago &bull;{' '}
            {props.articleDetails.readtime}
          </span>
        </div>
      </div>
    </section>
  )
}

export default ArticleHeader
