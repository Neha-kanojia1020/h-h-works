import React from 'react'
import Container from '../../Container/Container'
import ProjectBrief from '../WorkBrief/WorkBrief'
import styles from './Workdetailbanner.module.scss'

const WorkDetailBanner = ({ projectDetail }: any) => {
  return (
    <section className="work-banner">
      <Container>
        <div className="flex-1 font-inter pb-6 xl:px-0 md:m-0 text-base sm:text-1xl leading-normal mb-1">
          {projectDetail.technology}
        </div>
        <h2
          className={`text-22xl xl:text-24xl ${styles['work-detail-heading']} pr-10 xl:pr-80`}
        >
          {projectDetail.WorkDetailBanner?.introHeading}
        </h2>
        <ProjectBrief projectDetail={projectDetail} />
      </Container>
    </section>
  )
}

export default WorkDetailBanner
