import HeadingMedium from '../Headings/HeadingMedium'
import RecentexamplesPricingCard from '../RecentexamplesPricing/RecentexamplesPricingCard'

export default function ProjectPricing(props: any) {
  return (
    <section
      className="pt-0"
      style={{ backgroundColor: 'rgba(247, 247, 247, 0.5)' }}
    >
      <div className="m-auto p-8 pt-14 lg:px-5 xl:px-0 lg:pt-24 lg:pb-20 container max-w-1034">
        <HeadingMedium
          title="Recent examples of project pricing"
          class={`md:block xl:pr-28 lg:text-56 tracking-default lg:tracking-default loose-medium max-w-2xl`}
        />
        <div className="flex flex-wrap  justify-between mt-6	lg:mt-12">
          <div className="lg:w-48.5">
            {props.pricingexamples &&
              props.pricingexamples.map((item: any, index: number) => {
                if (index < props.pricingexamples.length / 2) {
                  return <RecentexamplesPricingCard item={item} />
                }
              })}
          </div>

          <div className="lg:w-48.5">
            {props.pricingexamples &&
              props.pricingexamples.map((item: any, index: number) => {
                if (index >= props.pricingexamples.length / 2) {
                  return <RecentexamplesPricingCard item={item} />
                }
              })}
          </div>
        </div>
      </div>
    </section>
  )
}
