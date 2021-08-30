import Card from '../Card/Card'

interface props {
  text: string
  allArticles?: any
  thankspage?: boolean
  thisArticle?: any
}

const ArticleViewAll = (props: props) => {
  const thankspage = props.thankspage ? true : false

  return (
    <div
      style={{ backgroundColor: '#F7F7F7' }}
      className="container-fluid overflow-hidden pt-12 lg:pt-24 md:pb-12 lg:pb-24"
    >
      <section className="container px-6 lg:px-0 mx-auto  mb-12 lg:mb-0">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-4xl xl:text-5xl font-bold">{props.text}</h2>
          <a className="pointer" href="/insights">
            <div className="font-extralight text-black  flex items-center">
              <svg
                width="8"
                height="13"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.75 6.558l-6.25 6.25-.875-.875L6 6.558.625 1.183 1.5.308l6.25 6.25z"
                  fill="#000"
                ></path>
              </svg>
              <p className="ml-13 font-inter font-semibold w-full">View all</p>
            </div>
          </a>
          {/* <Button asLink to={"/"} text="View all" className="font-extralight" /> */}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-101 gap-y-6 lg:gap-y-14">
          {props.allArticles
            .filter((item: any) => {
              if (props.thankspage) return item
              return item.slug.current !== props.thisArticle.slug.current
            })
            .slice(0, 3)
            .map((item: any, index: number) => (
              <Card
                thankspage={thankspage}
                from={'Keep reading'}
                key={index}
                item={item}
              />
            ))}
        </div>
      </section>
    </div>
  )
}

export default ArticleViewAll
