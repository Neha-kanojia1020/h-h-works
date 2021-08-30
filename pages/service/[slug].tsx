import React from 'react'
import ServiceDetailBanner from '../../components/ServiceDetailBanner/ServiceDetailBanner'
import DarkSection from '../../components/DarkSection/DarkSection'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ScheduleCall from '../../components/ScheduleCall/ScheduleCall'
import ServiceDeliver from '../../components/ServiceDeliver/ServiceDeliver'
import { NextSeo } from 'next-seo'
import ServicesFact from '../../components/ServicesFact/ServicesFact'

const ServicesDetails = (props: any) => {

  return (
    <>
      <NextSeo
        title={props.project.seo.seotitle}
        description={props.project.seo.seodescription}
      />
      <Header dark={true} />
      <ServiceDetailBanner service={props.project} />
      <DarkSection service={props.project} />
      <ServiceDeliver service={props.project} />
      <ServicesFact service={props.project} />
      <ScheduleCall />
      <Footer />
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const queryforProject = encodeURIComponent(
    `*[ _type == "services" && (slug.current == "${context.params.slug}") ]`
  )

  const urlforProject = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${queryforProject}`
  const resultforProject = await fetch(urlforProject).then((res) => res.json())

  const Project = resultforProject.result

  if (!Project) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        project: Project[0],
        //    resultforAuthor: Author
      },
    }
  }
}
export default ServicesDetails
