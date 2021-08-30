import Header from '../components/Header/Header'
import AboutBanner from '../components/AboutBanner/AboutBanner'
import ValueSection from '../components/AboutPageSection/ValueSection'
import AboutPagethirdSection from '../components/AboutPageSection/ThirdSection'
import Clients from '../components/Clients/Clients'
import Teams from '../components/Teams/Team'
import Footer from '../components/Footer/Footer'
import ScheduleCall from '../components/ScheduleCall/ScheduleCall'
import { NextSeo } from 'next-seo'
import React from 'react'

export default function About(props: any) {
  return (
    <>
      <NextSeo
        title={props.Seo.seotitle}
        description={props.Seo.seodescription}
      />
      <Header dark={true} />
      <AboutBanner />
      <ValueSection />
      <Clients text="Fresh perspectives delivered" classbg="hidden xl:block" />
      <AboutPagethirdSection />
      <Teams slider={props.slider} />
      <ScheduleCall />
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const querySeo = encodeURIComponent(
    `*[ _type == "seo" && slug.current == "about"][0]`
  )
  const query = encodeURIComponent(`*[ _type == "aboutpage" ]`)

  const urlsSeo = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${querySeo}`
  const url = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${query}`

  const resultSeo = await fetch(urlsSeo).then((res) => res.json())
  const result = await fetch(url).then((res) => res.json())

  const Seo = resultSeo.result

  if (!Seo) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        Seo: Seo,
        slider: result.result.sort(function (a: any, b: any) {
          var c = new Date(a._createdAt).getTime()
          var d = new Date(b._createdAt).getTime()
          return d - c
        }),
      },
    }
  }
}
