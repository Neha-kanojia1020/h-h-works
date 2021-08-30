import ArticleViewAll from '../components/ArticleViewAll/ArticleViewAll'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ThanksHeader from '../components/ThanksHeader/ThanksHeader'
import WhatNext from '../components/WhatNext.tsx/WhatNext'

const Thanks = (props: any) => {
  return (
    <>
      <Header dark={true} />
      <ThanksHeader />
      <WhatNext />
      <ArticleViewAll
        thankspage
        allArticles={props.allArticles}
        text="Time for a quick read?"
      />
      <Footer />
    </>
  )
}
export const getServerSideProps = async () => {
  const query = encodeURIComponent(
    `*[ _type == "articles" ][0...3]{title,image,date,readtime,slug,tag,excerpt,_createdAt}`
  )

  const url = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${query}`
  const result = await fetch(url).then((res) => res.json())
  const allArticles = result.result

  if (!allArticles) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        allArticles: allArticles.sort(function (a: any, b: any) {
          var c = new Date(a._createdAt).getTime()
          var d = new Date(b._createdAt).getTime()
          return d - c
        }),
      },
    }
  }
}
export default Thanks
