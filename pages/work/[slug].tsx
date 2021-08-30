import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import WorkDetailBanner from '../../components/WorkDetail/WorkDetailBanner/WorkDetailBanner'
import WorkDetailChallenge from '../../components/WorkDetail/WorkDetailChallenge/WorkDetailChallenge'
import WorkDetailContent from '../../components/WorkDetail/WorkDetailContent/WorkDetailContent'
import ProjectDetailFeaturedImg from '../../components/WorkDetail/WorkDetailFeaturedImg/WorkDetailFeaturedImg'
import WorkDetailTab from '../../components/WorkDetail/WorkDetailTab/WorkDetailTab'
import WorkDetailSolutions from '../../components/WorkDetail/WorkDetailSolutions/WorkDetailSolutions'
import WorkSolution from '../../components/WorkDetail/WorkSolution/WorkSolution'
import WorkDetailTestimonial from '../../components/WorkDetail/WorkDetailTestimonial/WorkDetailTestimonial'
import CaseStudy from '../../components/CaseStudy/Casestudy'
import { NextSeo } from 'next-seo'
import { urlFor } from '../../sanity'

const WorkDetail = (props: any) => {

  return (
    <>
      <Header dark={true} />
      <NextSeo
        title={props.project.seo.seotitle}
        description={props.project.seo.seodescription}
        openGraph={{
          title: props.project.seo.opengraph?.opengraphtitle,
          description: props.project.seo.opengraph?.opengraphdescription,
          images: props.project.seo.opengraph?.ogimages.map((item: any) => {
            return {
              url: item.imagefile && (urlFor(item.imagefile).url() as any),
              width: item.ogwidth && item.ogwidth,
              height: item.ogheight && item.ogheight,
              alt: item.imagefile && item.imagefile.caption,
            }
          }),
          site_name: props.project.seo.opengraph?.ogsitename,
        }}
        
      />
      <WorkDetailBanner projectDetail={props.project} />
      {props.project.detailImageBanner &&
        props.project.detailImageBannerMobile && (
          <ProjectDetailFeaturedImg
            ImageForDesktop={props.project.detailImageBanner}
            ImageForMobile={props.project.detailImageBannerMobile}
          />
        )}
      <WorkDetailContent projectDetail={props.project} />
      {props.project.tabimages && (
        <WorkDetailTab tabimages={props.project.tabimages} />
      )}
      {props.project.challenges.challengecolumns && (
        <WorkDetailChallenge challenges={props.project.challenges} />
      )}
      {props.project.solutiongrid && (
        <WorkDetailSolutions
          solutiongrid={props.project.solutiongrid}
          solutiongridheading={props.project.solutiongridheading}
        />
      )}

      {props.project.solution && (
        <WorkSolution solution={props.project.solution} />
      )}
      {props.project.testimonials && (
        <WorkDetailTestimonial testimonials={props.project.testimonials} />
      )}
      <CaseStudy />

      <Footer />
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  const queryforProject = encodeURIComponent(
    `*[ _type == "projects" && (slug.current == "${context.params.slug}") ]`
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
export default WorkDetail
