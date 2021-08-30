import Image from 'next/image'
import { urlFor } from '../../sanity'

interface CardPropsInterface {
  item: {
    id: number
    tag: string
    title: string
    date?: string
    readtime?: string
    readTime?: string
    image: string
    slug: {
      current: string
    }
  }
  from?: string
  thankspage?: boolean
}

const Card = (props: CardPropsInterface) => {
  const { tag, title, date, readTime, image, slug } = props.item

  return (
    <a href={`/article/${slug.current}`} className="cursor-pointer">
      <div className="relative bg-gray-100 mb-6 aspect-w-4 aspect-h-4">
        <Image
          src={urlFor(image).url() as any}
          alt=""
          layout="fill"
          objectFit="cover"
          quality={100}
          loading="eager"
        />
      </div>
      <div>
        <p className="font-normal mb-2 text-base">{tag}</p>
        <h3
          className={`text-2xl ${
            props.from == 'Keep reading' ? 'font-bold' : 'font-semibold'
          }  `}
        >
          {title}
        </h3>
        {(date || readTime) && (
          <div className="flex items-center text-sm grey-text leading-5 pt-5">
            <span className="mr-4 font-normal">{date}</span>
            {readTime && (
              <span className="font-normal">
                {Math.round(+readTime / 60)} min read
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  )
}

export default Card
