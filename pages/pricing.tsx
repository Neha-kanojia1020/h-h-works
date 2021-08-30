import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ReasonsChoose from '../components/ReasonsChoose/ReasonsChoose'
import ProjectPricing from '../components/ProjectPricing/ProjectPricing'
import PricingBanner from '../components/PricingBanner/PricingBanner'
import React from 'react'
import { NextSeo } from 'next-seo'

const Pricing = (props: any) => {
  return (
    <>
      <NextSeo
        title={props.seo.seotitle}
        description={props.seo.seodescription}
      />
      <Header dark={false} />

      <PricingBanner
        sub="Pricing"
        title="Choose your type of project"
        text="The value we bring is 40 years of commercial experience and running our own successful start-ups, teams and enterprises around the world. When you and your organisations works with H&H you will instantly feel that value and how it helps bring a fresh perspective to your challenges."
        pricing={true}
        projects={props.projects}
      />
      <ProjectPricing pricingexamples={props.pricingexamples} />
      <ReasonsChoose chooseclients={props.chooseclients} />
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const queryPricing = encodeURIComponent(`*[ _type == "prices"]`)
  const querySeo = encodeURIComponent(
    `*[ _type == "seo" && slug.current == "pricing"][0]`
  )

  const pricingUrl = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${queryPricing}`
  const pricingSeo = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${querySeo}`

  const resultPricing = await fetch(pricingUrl).then((res) => res.json())

  const resultSeo = await fetch(pricingSeo).then((res) => res.json())

  const projects = resultPricing && resultPricing.result
  const seo = resultSeo && resultSeo.result

  if (!projects) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        projects: projects[0].pricingProjects,
        pricingexamples: projects[0].examples,
        chooseclients: projects[0].clientReasons.sort(function (
          a: any,
          b: any
        ) {
          var c = new Date(a._createdAt).getTime()
          var d = new Date(b._createdAt).getTime()
          return c - d
        }),
        seo,
      },
    }
  }
}
export default Pricing
