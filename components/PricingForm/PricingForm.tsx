import { useState, useEffect } from 'react'
import styles from './PricingForm.module.scss'
import { useFormik } from 'formik'
import Router from 'next/router'

export default function PricingForm({
  totalProjectCost,
  selectedAddon,
  projectname,
}: {
  totalProjectCost: any
  selectedAddon: any
  projectname?: string
}) {
  const [success, setSuccess] = useState(false)
  const [isMobile, SetMobile] = useState<any>(null)

  useEffect(() => {
    setSuccess(false)
  }, [projectname])

  useEffect(() => {
    SetMobile(
      window.navigator.userAgent.match(
        /(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tabconst|up\.browser|up\.link|webos|wos)/i
      )
    )
  }, [])

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      job: '',
      accept: '',
      projectbrief: '',
    },
    onSubmit: (values, { resetForm }) => {
      setSuccess(true)
      resetForm()
      Router.push('/thanks')

      console.log(values)
    },
    validate: (values) => {
      const errors: any = {}

      if (!values.name) {
        errors.name = 'Name is required'
      }

      if (!values.email) {
        errors.email = 'Email is required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Email is invalid'
      }

      if (!values.job) {
        errors.job = 'Job is required'
      }

      if (!values.accept) {
        errors.accept = 'This field is required'
      }

      if (!values.date) {
        errors.date = 'This field is required'
      }

      if (!values.projectbrief) {
        errors.projectbrief = 'Brief is required'
      }

      return errors
    },
    validateOnChange: false,
    validateOnBlur: false,
  })

  const textareaInputChange = (e: any) => {
    e.target.style.height = e.target.scrollHeight + 'px'
  }

  const onBlurHandle = (e: any) => {
    if (e.target.value.length == 0) {
      e.target.classList.remove(styles.activetextarea)
    } else {
      e.target.classList.add(styles.activetextarea)
    }
  }

  const focusInput = (e: any) => {
    e.target.previousElementSibling.focus()
  }

  return (
    <form
      id="pricingCard"
      onSubmit={formik.handleSubmit}
      className={`${styles.pricingForm} flex flex-wrap mt-4 lg:mt-8`}
    >
      <div className={' w-full mb-4 relative'}>
        <textarea
          onBlur={onBlurHandle}
          onInput={textareaInputChange}
          name="projectbrief"
          onChange={formik.handleChange}
          value={formik.values.projectbrief}
          className="w-full text-black  leading-6	 rounded font-normal outline-none"
        ></textarea>
        <span
          onClick={focusInput}
          className="absolute left-4   font-normal	leading-none"
        >
          Project rough brief
        </span>
      </div>
      {formik.errors.projectbrief && (
        <div
          style={{ color: '#dc3545', outline: 'none' }}
          className={'w-full md:w-full md:pl-0 -mt-6	mb-3 relative'}
        >
          <div className="w-full md:w-1/2 pl-3 relative">
            {formik.errors.projectbrief}
          </div>
        </div>
      )}
      <div className={'w-full text-black md:w-1/2 md:pr-2 mb-4 relative'}>
        <input
          onBlur={onBlurHandle}
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="w-full rounded leading-none font-normal outline-none"
        />

        <span
          onClick={focusInput}
          className="absolute left-4 font-normal leading-none"
        >
          Name
        </span>
        {formik.errors.name && (
          <div
            style={{ color: '#dc3545', outline: 'none' }}
            className="absolute top-full  pl-4	"
          >
            {formik.errors.name}
          </div>
        )}
      </div>
      {(formik.errors.name || formik.errors.email) && (
        <div
          style={{ color: '#dc3545', outline: 'none' }}
          className={'w-full mt-5 md:hidden '}
        ></div>
      )}
      <div className={'w-full md:w-1/2 md:pl-2 mb-4 relative'}>
        <input
          onBlur={onBlurHandle}
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="w-full text-black leading-none rounded font-normal outline-none"
        />

        <span
          onClick={focusInput}
          className="absolute left-4 md:left-7 font-normal leading-none"
        >
          Email
        </span>
        {formik.errors.email && (
          <div
            style={{ color: '#dc3545', outline: 'none' }}
            className="absolute top-full pl-4"
          >
            {formik.errors.email}
          </div>
        )}
      </div>
      {(formik.errors.name || formik.errors.email) && (
        <div
          style={{ color: '#dc3545', outline: 'none' }}
          className={'w-full mt-5 '}
        ></div>
      )}
      <div className={'w-full md:w-1/2 relative md:pr-2 mb-4'}>
        <input
          onBlur={onBlurHandle}
          name="job"
          onChange={formik.handleChange}
          value={formik.values.job}
          className="w-full text-black leading-none rounded font-normal outline-none"
        />
        <span
          onClick={focusInput}
          className="absolute left-4 font-normal leading-none"
        >
          Job title
        </span>
        {formik.errors.job && (
          <div
            style={{ color: '#dc3545', outline: 'none' }}
            className="absolute top-full pl-4"
          >
            {formik.errors.job}
          </div>
        )}
      </div>
      {(formik.errors.job || formik.errors.date) && (
        <div
          style={{ color: '#dc3545', outline: 'none' }}
          className={'w-full mt-5 md:hidden'}
        ></div>
      )}
      <div className={'w-full md:w-1/2 relative md:pl-2 mb-4'}>
        <input
          onBlur={onBlurHandle}
          name="date"
          type="date"
          onFocus={(e) => {
            if (isMobile) {

              e.target.focus()
            }
          }}
          onChange={formik.handleChange}
          value={formik.values.date}
          className="w-full bg-transparent rounded leading-none text-black font-normal outline-none"
        />
        <span
          onClick={focusInput}
          className="absolute bg-white pointer-events-none left-4 md:left-7 font-normal leading-none"
        >
          Project prefered start date
        </span>
        {formik.errors.date && (
          <div
            style={{ color: '#dc3545', outline: 'none' }}
            className="absolute top-full	 pl-4"
          >
            {formik.errors.date}
          </div>
        )}
      </div>
      {(formik.errors.job || formik.errors.date) && (
        <div
          style={{ color: '#dc3545', outline: 'none' }}
          className={'w-full mt-5 '}
        ></div>
      )}
      <input
        name="addons"
        value={JSON.stringify(selectedAddon)}
        className="hidden"
      />
      <input name="projectcost" value={totalProjectCost} className="hidden" />
      <input name="projectname" value={projectname} className="hidden" />
      <div
        className={
          ' w-full mt-2 pl-0 lg:pl-0 relative flex justify-between lg:mt-7 flex-wrap ' +
          styles.formfooter
        }
      >
        <div>
          <input
            className={
              'opacity-0 cursor-pointer h-5	w-6 z-10 left-1 top-2	absolute '
            }
            type="checkbox"
            name="accept"
            onChange={formik.handleChange}
            value={formik.values.accept}
          />
          <label
            className={
              'inline-block  pl-0 cursor-pointer	' +
              (formik.errors.accept ? styles.errorcheckbox : '')
            }
            htmlFor="checkbox"
          ></label>
        </div>
        <span
          data-last={true}
          className="font-normal m-0 leading-5 lg:pr-0 text-sm w-11/12 lg:w-70"
        >
          By submitting this form you agree to the H&H privacy policy & consent
          to your details being collected to help us answer enquiry best as
          possible. H&H also promises not to share any of the information with
          any 3rd parties.
        </span>

        <input
          type="submit"
          value="Get a fresh perspective"
          className={
            `w-full font-normal md:mt-4 lg:mt-0 md:w-auto bg-black text-white inline-block rounded button ${styles.submit}`
          }
        />
      </div>

      {success && (
        <p
          className="mt-3 w-full"
          style={{
            border: '1px solid green',
            padding: 5,
            textAlign: 'center',
          }}
        >
          {'Message Sent'}
        </p>
      )}
    </form>
  )
}
