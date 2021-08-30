import React from 'react'
import Button from '../../Buttons/Button'
import styles from './Workbrief.module.scss'

const ProjectBrief = ({ projectDetail }: any) => {
  return (
    <>
      <div className="flex flex-col	xl:flex-row mt-16 w-full">
        <div className={styles['project-brief']}>
          <div>
            <h6 className="text-base font-medium">Expertise</h6>
            <p className={styles['project-brief-color']}>
              {projectDetail.WorkDetailBanner?.expertise}
            </p>
          </div>
        </div>
        <div className={styles['project-brief']}>
          <div>
            <h6 className="text-base font-medium">Platforms</h6>
            <p className={styles['project-brief-color']}>
              {projectDetail.WorkDetailBanner?.platforms}
            </p>
          </div>
        </div>
        <div className={styles['project-brief']}>
          <div>
            <h6 className="text-base font-medium">Results</h6>
            <p className={styles['project-brief-color']}>
              {projectDetail.WorkDetailBanner?.result}
            </p>
          </div>
        </div>
        <div className={styles['project-brief']}>
          {projectDetail.WorkDetailBanner?.downloadLink && (
            <div>
              <h6 className="text-base font-medium">Interested?</h6>
              <Button
                to={projectDetail.WorkDetailBanner?.downloadLink}
                text="Download the product"
                className="project-detail-button"
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProjectBrief
