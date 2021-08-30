import { useContext } from 'react'
import { TabContext } from '../Tab/Tab'
import styles from './MobileSelect.module.scss'

interface props {
  menuData: {
    id: number
    text: string
  }[]
}

const MobileSelect = (props: props) => {
  const { menuData } = props

  const { setActiveTab } = useContext(TabContext)

  function ononchangeSelect(e: any) {
    setActiveTab(+e.target.value)
  }

  return (
    <>
      <div className={'lg:hidden relative z-40 mb-6 ' + styles.selectwrapper}>
        <select
          className={
            'px-4 py-3 flex items-center justify-between w-full text-left bg-gray-lightest rounded-md ' +
            styles.select
          }
          onChange={ononchangeSelect}
        >
          {menuData.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.text}
              </option>
            )
          })}
        </select>
      </div>
    </>
  )
}

export default MobileSelect
