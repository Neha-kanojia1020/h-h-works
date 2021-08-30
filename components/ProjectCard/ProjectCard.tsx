import { urlFor } from '../../sanity'
import Image from 'next/image'
import Link from 'next/link'

type IProjectcardProps = {
  propsData: {
    image: string
    title: string
    category: string
    slug: any
    heading: string
  }
}
export default function Projectcard(props: IProjectcardProps) {
  const data = props.propsData

  return (
    <section className="projects">
      <Link href={data.slug ? `/work/${data.slug.current}` : '#'}>
        <a className="cursor:pointer">
          <div className="flex flex-col mt-0 xl:mt-6 ">
            {(typeof data.image == 'string' && (
              <Image
                src={`/assets/${data.image}.png`}
                height={672}
                width={608}
                layout="responsive"
                quality={10}
                placeholder="blur"
                blurDataURL={`/assets/${data.image}.png`}
              />
            )) || (
              <Image
                src={urlFor(data.image).url() as any}
                height={672}
                width={608}
                layout="responsive"
                quality={10}
                placeholder="blur"
                blurDataURL={urlFor(data.image).url() as any}
              />
            )}
            <div className="flex-1 text-black font-inter mx-10 md:mx-0 pt-6">
              <h6 className="text-base sm:text-1xl font-medium">
                {data?.heading}
              </h6>
            </div>
            <div className="flex-1 text-black font-inter mx-10 md:mx-0 pb-6 mt-2">
              <p className="text-1xl sm:text-xl">{data?.title}</p>
            </div>
          </div>
        </a>
      </Link>
    </section>
  )
}
