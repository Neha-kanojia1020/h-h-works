import React from 'react'
import styles from './PricingFilter.module.scss'

const PricingFilter = (props: {
  Filter?: any
  dynamicProjects: any
  workPage: boolean
  onSelectChange: any
}) => {
  const allProject = props.dynamicProjects

  const onSelectedProjectChange = (e: any) => {
    props.onSelectChange(+e.target.value)
    document.querySelector(`.heightFill`)?.classList.add('lg:block')
    document
      .querySelector(`.${styles.selectmain} +  div > div`)
      ?.classList.remove('hidden')
  }

  return (
    <>
      <div className={styles.selectmain}>
        <select
          className={
            'px-6 py-4.5 selectfilter cursor-pointer font-medium leading-19 mb-10 lg:mb-28 w-full text-left rounded'
          }
          onChange={onSelectedProjectChange}
        >
          <option key={110} value="default">
            Pick your type of project
          </option>

          {allProject &&
            allProject.map((item: any, index: any) => {
              return <option value={index}>{item.title}</option>
            })}
        </select>
      </div>
    </>
  )
}

export default PricingFilter
