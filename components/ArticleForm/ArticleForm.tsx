import Image from 'next/image'
import Button from '../Buttons/ButtonDark'
import React, { useState } from 'react'
import { useFormik } from 'formik'

const ArticleForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      setSuccess(true)
      resetForm()
    },
    validate: (values) => {
      let errors: any = {}

      if (!values.name) {
        errors.name = 'This field is required'
      }

      if (!values.email) {
        errors.email = 'This field is required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Email is invalid'
      }

      if (!values.message) {
        errors.message = 'This field is required'
      }

      return errors
    },
  })

  const [success, setSuccess] = useState(false)

  return (
    <section className="bg-black text-white px-6 py-10 md:p-10 lg:p-20 ">
      <div className="flex gap-5 xl:gap-20 flex-col md:flex-row items-center container mx-auto">
        <div className="max-w-xl mx-auto flex-1">
          <h1 className="gradient-text mb-6 md:mb-10 text-4xl sm:text-5xl font-bold">
            Would you like to know how design sprints can help your business?
          </h1>
          <div className="mb-10 flex items-start">
            <Image
              src="/assets/kaj.webp"
              width={100}
              height={100}
              quality={100}
              alt="avatar"
              className="rounded-full"
              loading="eager"
            />
            <div className="ml-5 text-xl font-normal">
              <p>Kaj Heaper, Design Sprint Specialist</p>
              <p>kaj@gmail.com</p>
              <p>+46325263534</p>
            </div>
          </div>
        </div>
        <div className="flex-1	">
          <form id="enquiryFormInsightDetail" onSubmit={formik.handleSubmit}>
            <input
              style={{
                outline: 'none',
              }}
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Whats your name"
              className={`px-5 py-4 ${
                formik.errors.name ? 'mb-0' : 'mb-8'
              } bg-gray-medium w-full placeholder-gray-50 rounded`}
            />
            {formik.errors.name && (
              <input
                readOnly
                style={{ color: '#dc3545', outline: 'none' }}
                className={'px-5 py-0 mb-6 mt-2 bg-black   '}
                value={formik.errors.name}
              />
            )}
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              style={{
                outline: 'none',
              }}
              placeholder="Your fancy email"
              className={`px-5 py-4  ${
                formik.errors.email ? 'mb-0' : 'mb-8'
              } bg-gray-medium w-full placeholder-gray-50 rounded`}
            />

            {formik.errors.email && (
              <input
                readOnly
                style={{ color: '#dc3545', outline: 'none' }}
                className={'px-5 py-0  mb-6 mt-2  bg-black  '}
                value={formik.errors.email}
              />
            )}
            <input
              type="text"
              placeholder="Tell us about your project"
              style={{
                outline: 'none',
              }}
              name="message"
              className={`px-5 py-4  ${
                formik.errors.message ? 'mb-0' : 'mb-8'
              } bg-gray-medium w-full placeholder-gray-50 rounded`}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
            {/* {errors.message && touched.message && errors.message} */}
            {formik.errors.message && (
              <input
                readOnly
                style={{ color: '#dc3545', outline: 'none' }}
                className={'px-5 py-0 mb-6 mt-2  bg-black    '}
                value={formik.errors.message}
              />
            )}
            <Button type="submit" text="Send" />
            {success && (
              <p
                className="mt-3"
                style={{
                  border: '2px solid green',
                  padding: 5,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                {'Message Sent'}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
export default ArticleForm
