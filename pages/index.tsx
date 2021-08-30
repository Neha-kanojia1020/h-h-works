import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LastSection from '../components/HomeLast/HomeLast'
import LatestUpdates from '../components/ArticlesHome/ArticlesHome'
import HeroSection from '../components/HeroSection/HeroSection'
import Projects from '../components/Work/Projects'
import HeroBottomSection from '../components/HeroBottom/HeroBottom'
import { NextSeo } from 'next-seo'
import React from 'react'

type Article = {
  title: string
  category: string[]
  date: string
  image: any
  readtime: string
  slug: any
}

type Project = {
  image: any
  heading: string
  title: string
  slug: any
  readtime: string
  category: string[]
  _updatedAt: string
}
type HomeProps = {
  Seo: any
  latestArticles: Article[]
  latestProject: Project[]
}

function HomePage(props: HomeProps) {
  return (
    <>
      <Header dark={true} />
      <NextSeo
        title={props.Seo.seotitle}
        description={props.Seo.seodescription}
      />
      <HeroSection />
      <HeroBottomSection />
      <Projects
        sub="Recent projects"
        title="From startups to industry icons, we evolve ideas and products into
            better lifestyle experiences."
        Filter={false}
        homePage={true}
        dynamicProjects={props.latestProject}
        class="px-8 md:px-0 pr-10"
      />
      <LatestUpdates Project={props.latestArticles} />
      <LastSection />
      <Footer />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = encodeURIComponent(
    `*[ _type == "projects"  && latest == true ][0...4]{title,image,category,slug,readtime,heading,_createdAt}`
  )
  const queryArticles = encodeURIComponent(
    `*[ _type == "articles"  && latest == true ][0...6]{title,image,date,category,readtime,slug,_createdAt}`
  )
  const querySeo = encodeURIComponent(
    `*[ _type == "seo" && slug.current == "home"][0]`
  )

  const url = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${query}`
  const urlsArticles = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${queryArticles}`
  const urlsSeo = `https://xjqjsaem.api.sanity.io/v1/data/query/handh?query=${querySeo}`

  const result = await fetch(url).then((res) => res.json())
  const resultArticles = await fetch(urlsArticles).then((res) => res.json())
  const resultSeo = await fetch(urlsSeo).then((res) => res.json())

  const latestProject = result && result.result
  const latestArticles = resultArticles.result
  const Seo = resultSeo.result

  if (!latestProject) {
    return {
      notFound: true,
    }
  } else if (!latestArticles) {
    return {
      notFound: true,
    }
  } else {
    return {
      props: {
        latestProject: latestProject.sort(function (a: any, b: any) {
          var c = new Date(a._createdAt).getTime()
          var d = new Date(b._createdAt).getTime()
          return d - c
        }),
        latestArticles: latestArticles.sort(function (a: any, b: any) {
          var c = new Date(a._createdAt).getTime()
          var d = new Date(b._createdAt).getTime()
          return d - c
        }),
        Seo: Seo,
      },
    }
  }
}

export default HomePage
