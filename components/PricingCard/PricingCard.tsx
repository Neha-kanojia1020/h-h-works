import styles from './PricingCard.module.scss'
import PricingForm from '../PricingForm/PricingForm'
import React, { useState, useEffect } from 'react'
import { urlFor } from '../../sanity'
import Image from 'next/image'

export default function PricingCard({
  selectedProject,
  totalPrice,
  classes,
}: {
  timesRendered: number
  classes: string
  selectedProject:
    | {
        title: string
        smallprice: string
        mediumprice: string
        largeprice: string
        addons: {
          addonname: string
          costinTbh: string
        }[]
        allpackages: {
          name: string
        }[]
        image: string
      }
    | undefined
  totalPrice: string
}) {
  const [currencyTo, setCurrencyTo] = useState('THB')
  const [currencyFrom] = useState('THB')
  const [anim, Setanim] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState<string | number>(0)
  const [totalProjectCost, settotalProjectCost] = useState<any>(
    totalPrice ? +totalPrice : undefined
  )

  const [selectedAddon, setSelectedAddon] = useState<
    [] | { Addoname: string }[]
  >([])

  function ResetCheckboxes() {
    function myFunction(element: any) {
      element.checked = false
    }
    document
      .querySelectorAll(`.${styles.pricingCard} input[type="checkbox"]`)
      .forEach(myFunction)
  }

  function ResetRadio() {
    function myFunction(element: any) {
      element.checked = false

      if (element.value == 'smallprice') element.checked = true
    }
    document
      .querySelectorAll(`.${styles.pricingCard} input[type="radio"]`)
      .forEach(myFunction)
  }

  useEffect(() => {
    settotalProjectCost(+totalPrice)

    Setanim(false)
  }, [totalPrice])

  useEffect(() => {
    setSelectedAddon([])
    ResetRadio()
    ResetCheckboxes()
    settotalProjectCost(totalPrice ? +totalPrice : undefined)
  }, [selectedProject])

  const onChangeRadio = (e: any) => {
    if (selectedProject) {
      const datakeys: {
        0: 'smallprice'
        1: 'mediumprice'
        2: 'largeprice'
      } = {
        0: 'smallprice',
        1: 'mediumprice',
        2: 'largeprice',
      }

      const val = e.target.value as 'smallprice' | 'mediumprice' | 'largeprice'
      const oldval = datakeys[selectedRadio as 0 | 1 | 2]
      const increasedValuesFromAddons =
        totalProjectCost - +selectedProject[oldval]

      settotalProjectCost(
        +selectedProject[val] +
          (increasedValuesFromAddons > 0 ? increasedValuesFromAddons : 0)
      )
      Setanim((prev) => !prev)
      setSelectedRadio(e.target.dataset.key)
    }
  }

  const onAddOnChange = (e: any) => {
    Setanim((prev) => !prev)

    if (e.target.checked) {
      setSelectedAddon((prev: any) => {
        prev.push({ Addoname: e.target.id })
        return prev
      })

      settotalProjectCost((prev: number) => {
        if (prev) {
          return prev + +e.target.value
        }
      })
    } else {
      setSelectedAddon((prev: any) => {
        const newArray = prev.filter((item: { Addoname: string }) => {
          return item.Addoname !== e.target.id
        })

        return newArray
      })

      settotalProjectCost((prev: number) => {
        if (prev) {
          return prev - +e.target.value
        }
      })
    }
  }

  const onCurrencyChange = (e: any) => {
    setCurrencyTo(e.target.value)
  }
  return (
    <div
      className={`${styles.pricingCard} ${classes} p-8 lg:p-14 bg-white font-normal text-black rounded-lg w-screen lg:w-full	 lg:absolute`}
    >
      <div className={'pb-6 md:pb-10'}>
        <div className={'w-3/5 lg:inline-block lg:w-1/5	 '}>
          {selectedProject && (
            <Image
              layout="fixed"
              width={190}
              height={168}
              src={urlFor(selectedProject?.image as any).url() as any}
            />
          )}
        </div>
        <div
          className={
            styles.pricingCard__content + ' align-top	 md:ml-6 inline-block '
          }
        >
          <h2 className="text-xl 	mt-6  md:text-21xl font-semibold leading-loose-110	">
            {selectedProject?.title}
          </h2>
          <div
            className={
              styles.pricingCard__content__price + ' mt-2 flex justify-between '
            }
          >
            <div className={styles.pricingCard__content__price__left}>
              <h2
                className={`inline-block	 text-4xl md:text-4xl font-semibold leading-loose-110 ${
                  anim ? 'fade-in' : 'fade-in2'
                }	`}
              >
                <App
                  currencyTo={currencyTo}
                  currencyFrom={currencyFrom}
                  value={totalProjectCost}
                />
              </h2>
              <span className="font-normal leading-loose-110 block md:inline-block mx-0 mt-2 md:mt-0 md:mx-2.5">
                starting price + exl vat
              </span>
            </div>
            <div
              className={
                styles.pricingCard__content__price__right +
                '	 absolute lg:relative'
              }
            >
              <select
                className="lg:mx-4 font-medium rounded pl-4 h-full	leading-none"
                onChange={onCurrencyChange}
              >
                <option value="THB">THB</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="EUR">EUR</option>
                <option value="SEK">SEK</option>
              </select>
            </div>
          </div>
          <div className={'mt-6'}>
            <h4 className="font-semibold 	 md:my-1 leading-loose-110	">
              Project size
            </h4>
            <div
              className={
                styles.pricingCard__Options + ' mt-4  flex md:ml-2 md:mt-3 '
              }
            >
              <div className={' relative font-medium mr-10'}>
                <input
                  onChange={onChangeRadio}
                  value="smallprice"
                  name="radio"
                  data-key={0}
                  type="radio"
                  id="small"
                  defaultChecked
                  className={styles.pricingCard__radio}
                />
                <div className=""></div>
                <label htmlFor="small" className="cursor-pointer ">
                  Small
                </label>
              </div>
              <div className={'relative font-medium mr-10'}>
                <input
                  onChange={onChangeRadio}
                  value="mediumprice"
                  data-key={1}
                  name="radio"
                  id="medium"
                  type="radio"
                  className={styles.pricingCard__radio}
                />
                <div className=""></div>
                <label htmlFor="medium" className="cursor-pointer ">
                  Medium
                </label>
              </div>
              <div className={'relative font-medium mr-10'}>
                <input
                  onChange={onChangeRadio}
                  value="largeprice"
                  name="radio"
                  id="large"
                  data-key={2}
                  type="radio"
                  className={styles.pricingCard__radio}
                />
                <div className=""></div>
                <label htmlFor="large" className="cursor-pointer ">
                  Large
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className={styles.pricingCard__packages + 'pb-0 lg:pb-5'}>
        <h3 className="font-semibold text-lg  leading-loose-110	lg:text-xl lg:leading-7 mb-4 lg:mb-4	">
          Package includes
        </h3>
        <div className="flex justify-between flex-wrap">
          {selectedProject &&
            selectedProject.allpackages?.map((item: any) => {
              return (
                <div className="relative leading-none	 font-normal w-full lg:w-1/3  flex items-center mb-5 	">
                  <div className="inline-block mr-3 align-middle">
                    <Image
                      layout="fixed"
                      width={24}
                      height={24}
                      src="/assets/checkmark--filled.svg"
                    />
                  </div>
                  {item.packagename}
                </div>
              )
            })}
        </div>
      </div>
      <hr className="mt-1 md:mt-5 lg:mt-0" />
      <div
        className={
          styles.pricingCard__addons + ' ' + styles.pricingCard__packages
        }
      >
        <h3 className="font-semibold text-lg leading-loose-110	lg:text-xl lg:leading-7 mb-4 lg:mb-4	">
          Make it even better with
        </h3>
        <div className="flex flex-col	lg:flex-row	 lg:justify-start flex-wrap">
          {selectedProject &&
            selectedProject.addons?.map((item) => {
              return (
                <div className="flex leading-6 items-center lg:items-start	relative font-normal w-full max-w-max	md:mr-4 lg:mr-7	mb-5 lg:leading-5	">
                  <input
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                    onChange={onAddOnChange}
                    value={item.costinTbh}
                    id={item.addonname}
                    type="checkbox"
                    className="opacity-0 cursor-pointer h-5	w-6 z-10	left-1 top-1	absolute"
                  />
                  <label className="inline-block relative mb-0 font-normal align-middle  pl-10 cursor-pointer	"></label>
                  {item.addonname}(+{' '}
                  <App
                    currencyTo={currencyTo}
                    currencyFrom={currencyFrom}
                    value={item.costinTbh}
                  />
                  )
                </div>
              )
            })}
        </div>
      </div>
      <hr className="mt-1  md:mt-5 lg:mt-5" />
      <h3 className="font-semibold text-lg leading-loose-110	lg:text-xl lg:leading-7 mb-4 lg:mb-4">
        Next steps
      </h3>
      <p className="font-normal leading-6 lg:w-3/4		">
        Now we have an idea of the starting price and your core requirements we
        can contact you for your free scoping workshop.{' '}
      </p>
      <PricingForm
        projectname={selectedProject && selectedProject.title}
        selectedAddon={selectedAddon}
        totalProjectCost={totalProjectCost}
      />
    </div>
  )
}

export function App({
  currencyTo,
  currencyFrom,
  value,
}: {
  currencyTo: any
  currencyFrom: any
  value: any
}) {
  const [allExchangeRates, setAllExchangeRates] = useState<any>()

  useEffect(() => {
    convert().then(function (result) {
      setAllExchangeRates(result)
    })
  }, [])

  const convert = async () => {
    const res = await fetch(
      `https://openexchangerates.org/api/latest.json?app_id=a952b8ede4204cceb36d9d283712a2c6`
    )
    const { rates } = await res.json()

    return rates
  }

  return (
    <>
      {allExchangeRates &&
        Math.round(
          (allExchangeRates[currencyTo] / allExchangeRates[currencyFrom]) *
            value
        ).toLocaleString() +
          ' ' +
          currencyTo}
    </>
  )
}
