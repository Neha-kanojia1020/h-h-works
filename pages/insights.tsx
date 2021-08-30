import { NextSeo } from 'next-seo'
import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import InsightsBanner from '../components/InsightsBanner/InsightsBanner'
import InsightsContent from '../components/InsightsContent/InsightsContent'
import InsightsForm from '../components/InsightsForm/InsightsForm'

const Insights = (props: any) => {

  return (
    <>
      <NextSeo
        title={props.Seo.seotitle}
        description={props.Seo.seodescription}
      />
      <section>
        <Header transParentOnMobile={true} dark={true} />
        <div className="z-10">
          <InsightsBanner articles={props} />
        </div>
        <InsightsContent articles={props.articles} />
        <InsightsForm />
        <Footer />
      </section>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent(
    `*[ _type == "articles" ]{title,image,date,category,readtime,slug,tag,author,_createdAt,excerpt,_updatedAt,readTime}`
  )
  const querySeo = encodeURIComponent(
    `*[ _type == "seo" && slug.current == "insights"][0]`
  )

  const url = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${query}`
  const urlsSeo = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${querySeo}`

  const result = await fetch(url).then((res) => res.json())
  const resultSeo = await fetch(urlsSeo).then((res) => res.json())

  const articles = result.result
  const Seo = resultSeo.result

  const queryforAuthor = encodeURIComponent(
    `*[ _type == "authors" && _id == "${articles[1].author._ref}" ]`
  )
  const urlforAuthor = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${queryforAuthor}`
  const resultforAuthor = await fetch(urlforAuthor).then((res) => res.json())

  const author = resultforAuthor.result

  if (!articles) {
    return {
      notFound: true,
    }
  } else if (!author) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        articles: articles.sort(function (a: any, b: any) {
          var c = new Date(a._createdAt).getTime()
          var d = new Date(b._createdAt).getTime()
          return d - c
        }),
        author: author,
        Seo: Seo,
      },
    }
  }
}

export default Insights
