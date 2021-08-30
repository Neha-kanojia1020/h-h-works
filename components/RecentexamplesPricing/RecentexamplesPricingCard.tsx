import styles from './RecentexamplesPricingCard.module.scss'
import { urlFor } from '../../sanity'
import Image from 'next/image'

type RecentexamplesPricingCard = {
  title: string
  price: string
  time: string
  info: string
  image: string
}

const RecentexamplesPricingCard = ({
  item,
}: {
  item: RecentexamplesPricingCard
}) => {

  return (
    <div
      className={'p-8 bg-white mb-4 rounded-lg w-full	' + styles.recentPricing}
    >
      <div className="relative max-w-xs	">
        <Image
          quality={100}
          layout="responsive"
          width={100}
          height={50}
          src={urlFor(item.image).url() as any}
        />
      </div>
      <h4 className="text-xl leading-loose-110 lg:leading-loose-medium lg:text-2xl font-semibold mt-4">
        {item.title}
      </h4>
      <h3 className="text-2xl leading-loose-110 lg:leading-loose-medium	lg:text-21xl font-semibold  mt-2 lg:mt-2">
        {item.price.toLocaleString()}
      </h3>
      <p className="text-103 mt-2 leading-none	font-medium	">{item.time}</p>
      <p className="mt-2 leading-160 font-normal	">{item.info}</p>
    </div>
  )
}

export default RecentexamplesPricingCard
