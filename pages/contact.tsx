import ContactHeader from '../components/ContactHeader/ContactHeader'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Address from '../components/Address/Address'
import ScheduleCall from '../components/ScheduleCall/ScheduleCall'
import { NextSeo } from 'next-seo'
import React from 'react'

const contact = (props: any) => {
  return (
    <>
      <NextSeo
        title={props.Seo.seotitle}
        description={props.Seo.seodescription}
      />
      <Header dark={true} />
      <ContactHeader />
      <ScheduleCall from="contact" />
      <Address />
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const querySeo = encodeURIComponent(
    `*[ _type == "seo" && slug.current == "contact"][0]`
  )

  const urlsSeo = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${querySeo}`

  const resultSeo = await fetch(urlsSeo).then((res) => res.json())

  const Seo = resultSeo.result

  if (!Seo) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        Seo: Seo,
      },
    }
  }
}

export default contact
