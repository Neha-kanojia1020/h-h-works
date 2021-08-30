import HeadingMedium from '../Headings/HeadingMedium'

const ReasonsChoose = (props: any) => {
  return (
    <section>
      <div className="hidden lg:block m-auto lg:px-5 lg:pt-24 lg:pb-10 xl:px-0 max-w-1034 container p-8 ">
        <HeadingMedium
          title="6 reasons our clients choose H&H"
          class={`md:block lg:pr-28 text-6xl lg:text-56 tracking-default lg:tracking-default loose-medium max-w-4xl`}
        />
        <div className="flex flex-wrap  justify-between	mt-12">
          {props.chooseclients &&
            props.chooseclients.map((item: any) => {
              return <ClientsChoosesPricingCard item={item} />
            })}
        </div>
      </div>
    </section>
  )
}

type itemtype = {
  info: string
  title: string
}

const ClientsChoosesPricingCard = ({ item }: { item: itemtype }) => {
  return (
    <div className={'p-0 bg-white mb-14 rounded-lg w-31'}>
      <h4 className=" text-2xl font-semibold loose-medium	w-9/12 ">
        {item.title}
      </h4>
      <p className="mt-4 leading-6 font-normal">{item.info}</p>
    </div>
  )
}
export default ReasonsChoose
