import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import MobileSelect from '../MobileSelect/MobileSelect'

import { TabGroup } from '../Tab/Tab'

const menuData = [
  {
    id: 0,
    text: 'All Insights',
  },
  {
    id: 1,
    text: 'Discover',
  },
  {
    id: 2,
    text: 'Planning',
  },
  {
    id: 3,
    text: 'Create',
  },
  {
    id: 4,
    text: 'Grow',
  },
  {
    id: 5,
    text: 'Invest',
  },
]

const InsightsContent = (props: any) => {
  const [activechunkForAll, setActivechunkForAll] = useState(0)

  const [hashToGo, setHashToGo] = useState<number | null>(null)
  const [maxArticlesToShow] = useState(6)
  const [activechunkForPlanning, setActivechunkForPlanning] = useState(0)
  const [activechunkForDiscover, setActivechunkForDiscover] = useState(0)
  const [activechunkForCreate, setActivechunkForCreate] = useState(0)
  const [activechunkForGrowth, setActivechunkForGrowth] = useState(0)
  const [activechunkForInvest, setActivechunkForInvest] = useState(0)

  const [allInsightsData, setAllInsightData] = useState(
    props.articles.reduce((resultArray: any, item: any, index: any) => {
      const chunkIndex = Math.floor(index / maxArticlesToShow)

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])[activechunkForAll]
  )
  const [discoverData, setDiscoverData] = useState(
    props.articles
      .filter((item: any) => item.category.includes('Discover'))
      .reduce((resultArray: any, item: any, index: any) => {
        const chunkIndex = Math.floor(index / maxArticlesToShow)

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])[activechunkForDiscover]
  )

  const [planingData, setPlaningData] = useState(
    props.articles
      .filter((item: any) => item.category.includes('Planning'))
      .reduce((resultArray: any, item: any, index: any) => {
        const chunkIndex = Math.floor(index / maxArticlesToShow)

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])[activechunkForPlanning]
  )
  const [createData, setcreateData] = useState(
    props.articles
      .filter((item: any) => item.category.includes('Create'))
      .reduce((resultArray: any, item: any, index: any) => {
        const chunkIndex = Math.floor(index / maxArticlesToShow)

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])[activechunkForCreate]
  )
  const [growData, setgrowData] = useState(
    props.articles
      .filter((item: any) => item.category.includes('Grow'))
      .reduce((resultArray: any, item: any, index: any) => {
        const chunkIndex = Math.floor(index / maxArticlesToShow)

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])[activechunkForGrowth]
  )
  const [investData, setinvestData] = useState(
    props.articles
      .filter((item: any) => item.category.includes('Invest'))
      .reduce((resultArray: any, item: any, index: any) => {
        const chunkIndex = Math.floor(index / maxArticlesToShow)

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])[activechunkForInvest]
  )

  useEffect(() => {
    const menuSelect = menuData.find((item) => {
      return (
        item.text.toLowerCase() ==
        window.location.hash.replace('#', '').toLowerCase()
      )
    })

    const elementtoScrollTo =
      menuSelect && document.querySelector(`[role="tablist"]`)

    const timeOut = setTimeout(() => {
      elementtoScrollTo && elementtoScrollTo.scrollIntoView()
      //elementtoScrollTo && window.scrollBy(0, -200); // Scroll 100px to the right
    }, 1000)
    setHashToGo((menuSelect && menuSelect.id) || null)

    return () => {
      clearTimeout(timeOut)
    }
  }, [])

  useEffect(() => {
    activechunkForAll !== 0 &&
      setAllInsightData((oldvalue: any) => {
        return [
          ...oldvalue,
          ...props.articles.reduce(
            (resultArray: any, item: any, index: any) => {
              const chunkIndex = Math.floor(index / maxArticlesToShow)

              if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
              }

              resultArray[chunkIndex].push(item)

              return resultArray
            },
            []
          )[activechunkForAll],
        ]
      })
  }, [activechunkForAll])

  useEffect(() => {
    activechunkForPlanning !== 0 &&
      setPlaningData((oldvalue: any) => {
        return [
          ...oldvalue,
          ...props.articles
            .filter((item: any) => item.category.includes('Planning'))
            .reduce((resultArray: any, item: any, index: any) => {
              const chunkIndex = Math.floor(index / maxArticlesToShow)

              if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
              }

              resultArray[chunkIndex].push(item)

              return resultArray
            }, [])[activechunkForPlanning],
        ]
      })
  }, [activechunkForPlanning])

  useEffect(() => {
    activechunkForDiscover !== 0 &&
      setDiscoverData((oldvalue: any) => {
        return [
          ...oldvalue,
          ...props.articles
            .filter((item: any) => item.category.includes('Discover'))
            .reduce((resultArray: any, item: any, index: any) => {
              const chunkIndex = Math.floor(index / maxArticlesToShow)

              if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
              }

              resultArray[chunkIndex].push(item)

              return resultArray
            }, [])[activechunkForDiscover],
        ]
      })
  }, [activechunkForDiscover])

  useEffect(() => {
    activechunkForCreate !== 0 &&
      setcreateData((oldvalue: any) => {
        return [
          ...oldvalue,
          ...props.articles
            .filter((item: any) => item.category.includes('Create'))
            .reduce((resultArray: any, item: any, index: any) => {
              const chunkIndex = Math.floor(index / maxArticlesToShow)

              if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
              }

              resultArray[chunkIndex].push(item)

              return resultArray
            }, [])[activechunkForCreate],
        ]
      })
  }, [activechunkForCreate])

  useEffect(() => {
    activechunkForInvest !== 0 &&
      setinvestData((oldvalue: any) => {
        return [
          ...oldvalue,
          ...props.articles
            .filter((item: any) => item.category.includes('Invest'))
            .reduce((resultArray: any, item: any, index: any) => {
              const chunkIndex = Math.floor(index / maxArticlesToShow)

              if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
              }

              resultArray[chunkIndex].push(item)

              return resultArray
            }, [])[activechunkForInvest],
        ]
      })
  }, [activechunkForInvest])

  useEffect(() => {
    activechunkForGrowth !== 0 &&
      setgrowData((oldvalue: any) => {
        return [
          ...oldvalue,
          ...props.articles
            .filter((item: any) => item.category.includes('Grow'))
            .reduce((resultArray: any, item: any, index: any) => {
              const chunkIndex = Math.floor(index / maxArticlesToShow)

              if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
              }

              resultArray[chunkIndex].push(item)

              return resultArray
            }, [])[activechunkForGrowth],
        ]
      })
  }, [activechunkForGrowth])

  return (
    <section className="container relative z-40 mx-auto px-8 xl:px-0 mb-8 md:mb-0">
      <TabGroup numTabs={menuData.length} initialActiveTab={hashToGo || 0}>
        <TabGroup.TabList>
          <div className="insights-tab-list pb-3 mb-101 hidden lg:flex items-center flex-nowrap w-full overflow-x-scroll">
            {menuData &&
              menuData.map((item) => (
                <TabGroup.Tab
                  key={item.id}
                  index={item.id}
                  className="text-base mr-8 px-8 py-3 whitespace-nowrap rounded-full"
                  activeClassName="bg-black text-white"
                  inactiveClassName="bg-gray-lightest text-black"
                >
                  {item.text}
                </TabGroup.Tab>
              ))}
          </div>
          <MobileSelect menuData={menuData} />
        </TabGroup.TabList>
        <TabGroup.TabPanel
          index={0}
          className=""
          activeClassName="block fade-in"
          inactiveClassName="hidden"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-101 gap-y-8 md:gap-y-10">
            {allInsightsData &&
              allInsightsData.map((item: any, index: number) => (
                <Card item={item} key={index} />
              ))}
          </div>
          <button
            onClick={() => {
              setActivechunkForAll((prevState: any) => {
                return prevState + 1
              })
              //return  loadMoreBlogs(discoverData, setDiscoverData)
            }}
            className={`mt-8 mb-12 md:mb-20 md:mt-10 block mx-auto py-1.5 md:py-2 px-8 border rounded border-grey-300  ${
              allInsightsData?.length === props.articles.length ||
              !allInsightsData
                ? 'opacity-0 pointer-events-none'
                : ''
            }`}
          >
            Read more
          </button>
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={1}
          className=""
          activeClassName="block fade-in"
          inactiveClassName="hidden"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-101 gap-y-8 md:gap-y-10">
            {discoverData &&
              discoverData.map((item: any, index: number) => (
                <Card item={item} key={index} />
              ))}
          </div>
          <button
            onClick={() => {
              setActivechunkForDiscover((prevState: any) => {
                return prevState + 1
              })
            }}
            className={`mt-8 mb-12 md:mb-20 block mx-auto py-1.5 md:py-2 px-8 border-2 border-grey-300 rounded-sm ${
              discoverData?.length ===
                props.articles.filter((item: any) =>
                  item.category.includes('Discover')
                ).length || !discoverData
                ? 'opacity-0 pointer-events-none'
                : ''
            }`}
          >
            Read more
          </button>
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={2}
          className=""
          activeClassName="block fade-in"
          inactiveClassName="hidden"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-101 gap-y-8 md:gap-y-10">
            {planingData &&
              planingData.map((item: any, index: number) => (
                <Card item={item} key={index} />
              ))}
          </div>
          <button
            onClick={() =>
              setActivechunkForPlanning((prevState: any) => {
                return prevState + 1
              })
            }
            className={`mt-8 mb-12 md:mb-20 block mx-auto py-1.5 md:py-2 px-8 border-2 border-grey-300 rounded-sm ${
              planingData?.length ===
                props.articles.filter((item: any) =>
                  item.category.includes('Planning')
                ).length || !planingData
                ? 'opacity-0 pointer-events-none'
                : ''
            }`}
          >
            Read more
          </button>
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={3}
          className=""
          activeClassName="block fade-in"
          inactiveClassName="hidden"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-101  gap-y-8 md:gap-y-10">
            {createData &&
              createData.map((item: any, index: number) => (
                <Card item={item} key={index} />
              ))}
          </div>
          <button
            onClick={() => {
              setActivechunkForCreate((prevState: any) => {
                return prevState + 1
              })
            }}
            className={`mt-8 mb-12 md:mb-20 md:mt-10 block mx-auto py-1.5 md:py-2 px-8 border-2 border-grey-300 rounded-sm ${
              createData?.length ===
                props.articles.filter((item: any) =>
                  item.category.includes('Create')
                ).length || !createData
                ? 'opacity-0 pointer-events-none'
                : ''
            }`}
          >
            Read more
          </button>
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={4}
          className=""
          activeClassName="block fade-in"
          inactiveClassName="hidden"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-101 gap-y-8 md:gap-y-10">
            {growData &&
              growData.map((item: any, index: number) => (
                <Card item={item} key={index} />
              ))}
          </div>
          <button
            onClick={() => {
              setActivechunkForGrowth((prevState: any) => {
                return prevState + 1
              })
            }}
            className={`mt-8 mb-12 md:mb-20 block mx-auto py-1.5 md:py-2 px-10 border-2 border-grey-300 rounded-sm ${
              growData?.length ===
                props.articles.filter((item: any) =>
                  item.category.includes('Grow')
                ).length || !growData
                ? 'opacity-0 pointer-events-none'
                : ''
            }`}
          >
            Read more
          </button>
        </TabGroup.TabPanel>
        <TabGroup.TabPanel
          index={5}
          className=""
          activeClassName="block fade-in"
          inactiveClassName="hidden"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-101 gap-y-8 md:gap-y-10">
            {investData &&
              investData.map((item: any, index: number) => (
                <Card item={item} key={index} />
              ))}
          </div>
          <button
            onClick={() => {
              setActivechunkForInvest((prevState: any) => {
                return prevState + 1
              })
            }}
            className={`mt-8 mb-12 md:mb-20 block mx-auto py-1.5 md:py-2 px-8 border-2 border-grey-300 rounded-sm ${
              investData?.length ===
                props.articles.filter((item: any) =>
                  item.category.includes('Invest')
                ).length || !investData
                ? 'opacity-0 pointer-events-none'
                : ''
            }`}
          >
            Read more
          </button>
        </TabGroup.TabPanel>
      </TabGroup>
    </section>
  )
}

export default InsightsContent
