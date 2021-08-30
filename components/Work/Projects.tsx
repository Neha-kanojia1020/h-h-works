import ProjectCard from '../ProjectCard/ProjectCard'
import Button from '../Buttons/Button'
import HeadingSub from '../Headings/HeadingSub'
import ProjectFilter from '../ProjectFilter/ProjectFilter'

export default function Projects(props: any) {
  const homePage = props.homePage
  const dynamicProjects = props.dynamicProjects

  return (
    <section className={`recent-projects`}>
      <div className="flex flex-col container mx-auto p-0 sm:p-8 py-10 xl:py-24 xl:p-0">
        <div className="max-w-4xl">
          <HeadingSub
            sub={props.sub}
            title={props.title}
            class={props.class}
            classh2="w-full xl:max-w-103xl loose-medium"
          />
          <HeadingSub
            sub={props.subMobile}
            title={props.titleMobile}
            class={props.classTwoMobile}
          />
        </div>

        {!homePage && props.Filter && (
          <ProjectFilter
            workPage={props.workPage}
            dynamicProjects={dynamicProjects}
          />
        )}
        <div className={`${homePage ? 'block' : 'hidden'} `}>
          <div className="flex flex-1 flex-col md:flex-row">
            <div className="md:flex-1 md:flex md:flex-col md:mt-28 md:mr-5">
              <ProjectCard key={0} propsData={dynamicProjects[0]} />
              <ProjectCard key={1} propsData={dynamicProjects[1]} />
            </div>
            <div className="md:flex-1 md:mt-7 md:ml-5">
              <ProjectCard key={2} propsData={dynamicProjects[2]} />
              <ProjectCard key={3} propsData={dynamicProjects[3]} />
            </div>
          </div>
          <div className={`hidden sm:block `}>
            <Button to="/work" text="See more work" className="mt-5" />
          </div>
        </div>
      </div>
    </section>
  )
}
