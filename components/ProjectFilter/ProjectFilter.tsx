import React, { useState } from 'react'
import { TabGroup } from '../Tab/Tab'
import Projectcard from '../ProjectCard/ProjectCard'
import Button from '../Buttons/Button'
import MobileSelect from '../MobileSelect/MobileSelect'
import styles from './Projectfilter.module.scss'

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

const ProjectFilter = (props: {
  Filter?: any
  dynamicProjects: any
  workPage: boolean
}) => {
  const [isdropdown, setdropdown] = useState(false)
  function handledropdownclose(isdropdown: boolean) {
    setdropdown(!isdropdown)
  }

  const [allInsightsData] = useState(
    props.dynamicProjects
      ?.slice(0, 4)
      .reduce((resultArray: any, item: any, index: any, mainArray: any) => {
        const chunkIndex = Math.floor(index / (mainArray.length / 2))

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])
  )
  const [discoverData] = useState(
    props.dynamicProjects
      ?.filter((item: any) => item.category?.includes('Discover'))
      .slice(0, 4)
      .reduce((resultArray: any, item: any, index: any, mainArray: any) => {
        const chunkIndex = Math.floor(index / (mainArray.length / 2))

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])
  )
  const [planingData] = useState(
    props.dynamicProjects
      ?.filter((item: any) => item.category?.includes('Planning'))
      .slice(0, 4)
      .reduce((resultArray: any, item: any, index: any, mainArray: any) => {
        const chunkIndex = Math.floor(index / (mainArray.length / 2))

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])
  )
  const [createData] = useState(
    props.dynamicProjects
      ?.filter((item: any) => item.category?.includes('Create'))
      .slice(0, 4)
      .reduce((resultArray: any, item: any, index: any, mainArray: any) => {
        const chunkIndex = Math.floor(index / (mainArray.length / 2))

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])
  )
  const [growData] = useState(
    props.dynamicProjects
      ?.filter((item: any) => item.category?.includes('Grow'))
      .slice(0, 4)
      .reduce((resultArray: any, item: any, index: any, mainArray: any) => {
        const chunkIndex = Math.floor(index / (mainArray.length / 2))

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])
  )
  const [investData] = useState(
    props.dynamicProjects
      ?.filter((item: any) => item.category?.includes('Invest'))
      .slice(0, 4)
      .reduce((resultArray: any, item: any, index: any, mainArray: any) => {
        const chunkIndex = Math.floor(index / (mainArray.length / 2))

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [] // start a new chunk
        }

        resultArray[chunkIndex].push(item)

        return resultArray
      }, [])
  )

  return (
    <div className={`project-filters block md:mt-12`}>
      <div className="" id="tab">
        <TabGroup numTabs={5} initialActiveTab={0}>
          <div className="hidden lg:block">
            <TabGroup.TabList>
              <TabGroup.Tab
                index={0}
                className={`${styles['filter-button']} transition-colors duration-150 rounded-3xl mr-3 outline-none text-base `}
                activeClassName="bg-black text-white"
                inactiveClassName="bg-gray-100 text-black"
              >
                All work
              </TabGroup.Tab>
              <TabGroup.Tab
                index={1}
                className={`${styles['filter-button']} transition-colors duration-150 rounded-3xl m-3 outline-none`}
                activeClassName="bg-black text-white"
                inactiveClassName="bg-gray-100 text-black"
              >
                Discover
              </TabGroup.Tab>
              <TabGroup.Tab
                index={2}
                className={`${styles['filter-button']} transition-colors duration-150 rounded-3xl m-3 outline-none`}
                activeClassName="bg-black text-white"
                inactiveClassName="bg-gray-100 text-black"
              >
                Planning
              </TabGroup.Tab>
              <TabGroup.Tab
                index={3}
                className={`${styles['filter-button']}  transition-colors duration-150 rounded-3xl m-3 outline-none`}
                activeClassName="bg-black text-white"
                inactiveClassName="bg-gray-100 text-black"
              >
                Create
              </TabGroup.Tab>
              <TabGroup.Tab
                index={4}
                className={`${styles['filter-button']}  transition-colors duration-150 rounded-3xl m-3 outline-none`}
                activeClassName="bg-black text-white"
                inactiveClassName="bg-gray-100 text-black"
              >
                Grow
              </TabGroup.Tab>
              <TabGroup.Tab
                index={5}
                className={`${styles['filter-button']}  transition-colors duration-150 rounded-3xl m-3 outline-none`}
                activeClassName="bg-black text-white outline-none"
                inactiveClassName="bg-gray-100 text-black outline-none"
              >
                Invest
              </TabGroup.Tab>
            </TabGroup.TabList>
          </div>
          <div className="block px-8 sm:hidden">
            <TabGroup.TabList>
              <MobileSelect menuData={menuData} />
            </TabGroup.TabList>
          </div>

          <div className={styles.selectwrapper + ' hidden sm:block lg:hidden'}>
            <div className="hidden sm:block lg:hidden">
              <div className="px-0 d-flex pb-6 md:pb-0">
                <div className="flex-1">
                  <button
                    onClick={() => {
                      handledropdownclose(isdropdown)
                    }}
                    className="flex items-center justify-between w-full bg-gray-100 px-6 py-3 rounded mb-2"
                  >
                    <div className="font-normal ">All Works</div>
                  </button>
                </div>
                <div className={` ${!isdropdown ? 'hidden' : ''}  "flex-1"`}>
                  <TabGroup.TabList>
                    <TabGroup.Tab
                      index={2}
                      className="flex items-center justify-between w-full px-6 py-3 transition-colors duration-150 border "
                      activeClassName="bg-black text-white"
                      inactiveClassName="bg-gray-100 text-black"
                    >
                      Discover
                    </TabGroup.Tab>
                    <TabGroup.Tab
                      index={3}
                      className="flex items-center justify-between w-full  px-6 py-3  transition-colors duration-150 border "
                      activeClassName="bg-black text-white"
                      inactiveClassName="bg-gray-100 text-black"
                    >
                      Create
                    </TabGroup.Tab>
                    <TabGroup.Tab
                      index={4}
                      className="flex items-center justify-between w-full  px-6 py-3  transition-colors duration-150 border "
                      activeClassName="bg-black text-white"
                      inactiveClassName="bg-gray-100 text-black"
                    >
                      Grow
                    </TabGroup.Tab>
                    <TabGroup.Tab
                      index={5}
                      className="flex items-center justify-between w-full  px-6 py-3 transition-colors duration-150 border "
                      activeClassName="bg-black text-white outline-none"
                      inactiveClassName="bg-gray-100 text-black outline-none"
                    >
                      Invest
                    </TabGroup.Tab>
                  </TabGroup.TabList>
                </div>
              </div>
            </div>
          </div>
          <TabGroup.TabPanel
            index={0}
            // className="transition-all transform h-full"
            // activeClassName="opacity-100 duration-500 translate-x-0"
            // inactiveClassName="hidden opacity-0 -translate-x-2 overflow-hidden"
            className="h-full flex justify-center mt-6 md:mt-6"
            activeClassName="opacity-100 fade-in translate-x-0"
            inactiveClassName="hidden opacity-0 -translate-x-2"
          >
            <div className="flex flex-1 flex-col md:flex-row">
              <div className="md:flex-1 md:flex md:flex-col md:mt-28 md:mr-5">
                {allInsightsData &&
                  allInsightsData[0] &&
                  allInsightsData[0].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
              <div className="md:flex-1 md:mt-7 md:ml-5">
                {allInsightsData &&
                  allInsightsData[1] &&
                  allInsightsData[1].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
            </div>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={1}
            // className=" transition-all transform h-full"
            // activeClassName="opacity-100 duration-500 translate-x-0 "
            // inactiveClassName="hidden opacity-0 -translate-x-2 overflow-hidden"
            className="h-full flex justify-center mt-6 md:mt-6"
            activeClassName="opacity-100 fade-in translate-x-0"
            inactiveClassName="hidden opacity-0 -translate-x-2"
          >
            <div className="flex flex-1 flex-col md:flex-row">
              <div className="md:flex-1 md:flex md:flex-col md:mt-28 md:mr-5">
                {discoverData &&
                  discoverData[0] &&
                  discoverData[0].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
              <div className="md:flex-1 md:mt-7 md:ml-5">
                {discoverData &&
                  discoverData[1] &&
                  discoverData[1].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
            </div>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={2}
            // className="transition-all transform h-full"
            // activeClassName="opacity-100 duration-500 translate-x-0"
            // inactiveClassName="hidden opacity-0 -translate-x-2 overflow-hidden"
            className="h-full flex justify-center mt-6 md:mt-6"
            activeClassName="opacity-100 fade-in translate-x-0"
            inactiveClassName="hidden opacity-0 -translate-x-2"
          >
            <div className="flex flex-1 flex-col md:flex-row">
              <div className="md:flex-1 md:flex md:flex-col md:mt-28 md:mr-5">
                {planingData &&
                  planingData[0] &&
                  planingData[0].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
              <div className="md:flex-1 md:mt-7 md:ml-5">
                {planingData &&
                  planingData[1] &&
                  planingData[1].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
            </div>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={3}
            // className="transition-all transform h-full"
            // activeClassName="opacity-100 duration-500 translate-x-0 overflow-hidden"
            // inactiveClassName="hidden opacity-0 -translate-x-2 overflow-hidden"
            className="h-full flex justify-center mt-6 md:mt-6"
            activeClassName="opacity-100 fade-in translate-x-0"
            inactiveClassName="hidden opacity-0 -translate-x-2"
          >
            <div className="flex flex-1 flex-col md:flex-row">
              <div className="md:flex-1 md:flex md:flex-col md:mt-28 md:mr-5">
                {createData &&
                  createData[0] &&
                  createData[0].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
              <div className="md:flex-1 md:mt-7 md:ml-5">
                {createData &&
                  createData[1] &&
                  createData[1].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
            </div>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={4}
            // className="transition-all transform h-full"
            // activeClassName="opacity-100 duration-500 translate-x-0 overflow-hidden"
            // inactiveClassName="hidden opacity-0 -translate-x-2 overflow-hidden"
            className="h-full flex justify-center mt-6 md:mt-6"
            activeClassName="opacity-100 fade-in translate-x-0"
            inactiveClassName="hidden opacity-0 -translate-x-2"
          >
            <div className="flex flex-1 flex-col md:flex-row">
              <div className="md:flex-1 md:flex md:flex-col md:mt-28 md:mr-5">
                {growData &&
                  growData[0] &&
                  growData[0].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
              <div className="md:flex-1 md:mt-7 md:ml-5">
                {growData &&
                  growData[1] &&
                  growData[1].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
            </div>
          </TabGroup.TabPanel>
          <TabGroup.TabPanel
            index={5}
            // className="transition-all transform h-full"
            // activeClassName="opacity-100 duration-500 translate-x-0 overflow-hidden"
            // inactiveClassName="hidden opacity-0 -translate-x-2 overflow-hidden"
            className="h-full flex justify-center mt-6 md:mt-6"
            activeClassName="opacity-100 fade-in translate-x-0"
            inactiveClassName="hidden opacity-0 -translate-x-2"
          >
            <div className="flex flex-1 flex-col md:flex-row">
              <div className="md:flex-1 md:flex md:flex-col md:mt-28 md:mr-5">
                {investData &&
                  investData[0] &&
                  investData[0].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
              <div className="md:flex-1 md:mt-7 md:ml-5">
                {investData &&
                  investData[1] &&
                  investData[1].map((item: any, index: number) => (
                    <Projectcard key={index} propsData={item} />
                  ))}
              </div>
            </div>
          </TabGroup.TabPanel>
        </TabGroup>
        {!props.workPage && (
          <div className={`hidden sm:block `}>
            <Button to="/work" text="See more work" className="mt-5" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectFilter
