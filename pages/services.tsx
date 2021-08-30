import DarkBanner from '../components/DarkBanner/DarkBanner'
import Header from '../components/Header/Header'
import ServiceOdd from '../components/ServiceInner/ServiceOdd'
import ServiceEven from '../components/ServiceInner/ServiceEven'
import ScheduleCall from '../components/ScheduleCall/ScheduleCall'
import Footer from '../components/Footer/Footer'
import Projects from '../components/Work/Projects'
import RateCard from '../components/RateCard/RateCard'
import { NextSeo } from 'next-seo'
import ClientsServicePage from '../components/Clients/ClientsServicePage'
import React from 'react'
import { urlFor } from '../sanity'

const Services = (props: any) => {

  return (
    <>
      <Header dark={false} />
      <NextSeo
        title={props.Seo.seotitle}
        description={props.Seo.seodescription}
        openGraph={{
          title: props.Seo.opengraph.opengraphtitle,
          description: props.Seo.opengraph.opengraphdescription,
          images: props.Seo.opengraph.ogimages.map((item: any) => {
            return {
              url: item.openGraphImages && item.openGraphImages,
              width: item.ogwidth && item.ogwidth,
              height: item.ogheight && item.ogheight,
              alt: item.alt && item.alt,
            }
          }),
          site_name: props.Seo.opengraph.ogsitename,
        }}
      />
      <DarkBanner
        sub="Services"
        title="Let’s collaborate"
        text="Our services focus on the four steps we believe all successful organisations progress through."
      />
      <div className="xl:pb-24">
        {props.service &&
          props.service.map((item: any, index: any) => {
            if (index % 2 !== 0) {
              return (
                <ServiceEven
                  title={item.title}
                  img={urlFor(item.serviceimage).url() as any}
                  slug={item.slug.current}
                  text={item.excerpt}
                  key={index}
                  className="xl:pt-16"
                  deliverables={item.deliverables}
                  classD="xl:w-100"
                />
              )
            } else {
              return (
                <ServiceOdd
                  title={item.title}
                  img={urlFor(item.serviceimage).url() as any}
                  slug={item.slug.current}
                  text={item.excerpt}
                  key={index}
                  className="xl:pt-24"
                  deliverables={item.deliverables}
                  classD="xl:w-97"
                />
              )
            }
          })}
      </div>

      <ClientsServicePage />
      <ScheduleCall />
      <Projects
        sub="Recent projects"
        title="From startups to industry icons, we evolve ideas and products into
            better lifestyle experiences."
        Filter={false}
        homePage={true}
        dynamicProjects={props.projects}
        class="px-8 md:px-0 pr-10"
      />
      <RateCard />
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent(
    `*[ _type == "services" ]{title,serviceimage,slug,excerpt,deliverables,_updatedAt}`
  )
  const queryForProjects = encodeURIComponent(
    `*[ _type == "projects"  && latest == true ][0...4]{title,image,category,slug,readtime,heading,_createdAt}`
  )
  const querySeo = encodeURIComponent(
    `*[ _type == "seo" && slug.current == "services"][0]`
  )

  const urlsSeo = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${querySeo}`
  const url = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${query}`
  const urlForProjects = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${queryForProjects}`

  const result = await fetch(url).then((res) => res.json())
  const resultForProjects = await fetch(urlForProjects).then((res) =>
    res.json()
  )
  const resultSeo = await fetch(urlsSeo).then((res) => res.json())

  const Seo = resultSeo.result
  const service = result.result
  const serviceForProjects = resultForProjects.result

  if (!service) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        service: service.sort(function (a: any, b: any) {
          var c = new Date(a._updatedAt).getTime()
          var d = new Date(b._updatedAt).getTime()
          return c - d
        }),
        projects: serviceForProjects.sort(function (a: any, b: any) {
          var c = new Date(a._createdAt).getTime()
          var d = new Date(b._createdAt).getTime()
          return d - c
        }),
        Seo: Seo,
      },
    }
  }
}
export default Services
