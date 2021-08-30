import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../../sanity'

type IBlogCardprops = {
  image: string
  category: string
  title: string
  date: string
  readtime: string
  slug: any
}
export default function BlogCard(props: IBlogCardprops) {
  const data = props
  return (
    <>
      <Link href={`/article/${props.slug}`}>
        <a className="pointer">
          <div className="flex flex-col">
            <div className="flex-1">
              <Image
                width={380}
                height={380}
                src={urlFor(data.image).url() as any}
                alt={`${data.title}`}
                layout="responsive"
                quality={10}
                placeholder="blur"
                blurDataURL={urlFor(data.image).url() as any}
              />
            </div>
            <div className="flex-1 grey-text my-3">{data.category}</div>
            <div className=" flex-1 text-white font-inter font-semibold text-2xl md:text-base xl:text-2xl leading-normal ">
              {data.title}
            </div>
            <div className="flex-1 grey-text my-3 text-sm sm:text-base">
              <span>{data.date} </span>
              <span> {data.readtime}</span>
            </div>
          </div>
        </a>
      </Link>
    </>
  )
}
