import { NextSeo } from 'next-seo'
import DarkBanner from '../components/DarkBanner/DarkBanner'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Projects from '../components/Work/Projects'
import ScheduleCall from '../components/ScheduleCall/ScheduleCall'
import React from 'react'

const Work = (props: any) => {
  return (
    <>
      <Header />
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
        sub="Work"
        title="From exciting startups to industry icons"
        text=" We looked back over 40 years of experience and found something interesting. The projects where we had a close relationship with the client turned out better in all factors. That is why H&H‚ focus is on colloborative creativity. We work with you not for you."
      />
      <Projects
        sub="Recent case studies"
        title="Colloboration is the best way to solve problems for brands, organisations, friends, family and communities."
        Filter={true}
        StaticProject={false}
        dynamicProjects={props.project}
        class="hidden xl:block"
        subMobile="Recent projects"
        titleMobile="From startups to industry icons, we evolve ideas and products into better lifestyle experiences."
        classTwoMobile="px-8 sm:px-0 xl:px-8 block xl:hidden loose-11"
        workPage={true}
      />
      <ScheduleCall />
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent(
    `*[ _type == "projects" ]{title,image,category,slug,readtime,heading,_createdAt}`
  )
  const querySeo = encodeURIComponent(
    `*[ _type == "seo" && slug.current == "work" ][0]`
  )

  const url = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${query}`
  const urlsSeo = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${querySeo}`

  const result = await fetch(url).then((res) => res.json())
  const resultSeo = await fetch(urlsSeo).then((res) => res.json())

  const project = result.result
  const Seo = resultSeo.result

  if (!project) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        project: project.sort(function (a: any, b: any) {
          var c = new Date(a._createdAt).getTime()
          var d = new Date(b._createdAt).getTime()
          return d - c
        }),
        Seo: Seo,
      },
    }
  }
}
export default Work
