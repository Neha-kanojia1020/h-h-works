import BlogCard from '../BlogCard/BlogCard'
import HeadingMedium from '../Headings/HeadingMedium'
import Button from '../Buttons/ButtonDark'

export default function LatestUpdate(Project: any) {
  return (
    <section className="bg-black ">
      <div className="flex container mx-auto p-6 py-10 xl:py-24 xl:p-0">
        <div className="flex-1 md:px-5">
          <div className=" flex-1 flex justify-between mb-12 items-center">
            <HeadingMedium
              title="Latest updates"
              class="gradient-text-small w-full xl:w-auto"
            />
            <Button
              asLink
              className="text-white hidden sm:flex"
              text="View More"
              to="/insights"
            />
          </div>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {Project &&
                Project.Project.map((item: any, index: number) => {
                  return (
                    <BlogCard
                      image={item.image}
                      category={item.category}
                      title={item.title}
                      slug={item.slug.current}
                      date={item.date}
                      readtime={item.readtime}
                      key={index}
                    />
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
