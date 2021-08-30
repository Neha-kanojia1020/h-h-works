import Image from 'next/image'
import React, { useState } from 'react'
import Container from '../Container/Container'
import HeadingSub from '../Headings/HeadingSub'
import ArrowRight from '../icons/ArrowRight'
import { useFormik } from 'formik'

const CaseStudy = () => {
  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
    },
    onSubmit: (values) => {
      console.log(values)
      setSuccess(true)
    },
    validate: (values) => {
      let errors: any = {}

      if (!values.Name) {
        errors.Name = 'This field is required'
      }

      if (!values.Email) {
        errors.Email = 'This field is required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
      ) {
        errors.Email = 'Email is invalid'
      }

      return errors
    },
  })

  const [success, setSuccess] = useState(false)

  return (
    <section className="case-study">
      <Container>
        <div className="grid grid-col-1 xl:grid-cols-2 items-center">
          <div className="col-1">
            <div className="mobile-col block xl:hidden">
              <Image
                src="/assets/download-case.png"
                layout="responsive"
                height={500}
                width={611}
                alt="img"
                quality={100}
                loading="eager"
              />
            </div>

            <HeadingSub
              sub="This is just 20% of the full story"
              title="Download complete case study"
              classh2="loose-10.5"
            />
            <form id="caseStudyEnquiry" onSubmit={formik.handleSubmit}>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="bg-white px-3 py-5 placeholder-black text-black relative rounded text-base border-0 outline-none focus:outline-none focus:none w-full xl:w-104 mt-8"
                onChange={formik.handleChange}
                value={formik.values.Name}
              />
              {formik.errors.Name && (
                <p
                  //readOnly
                  style={{ color: '#dc3545', outline: 'none' }}
                  className={'px-2 py-0 mb-6 mt-2   bg-transparent  '}
                  //value="This field is required."
                >
                  {formik.errors.Name}
                </p>
              )}
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="bg-white px-3 py-5 placeholder-black text-black relative rounded text-base border-0 outline-none focus:outline-none focus:none w-full xl:w-104 mt-6"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={formik.handleChange}
                value={formik.values.Email}
              />
              {formik.errors.Email && (
                <p
                  style={{ color: '#dc3545', outline: 'none' }}
                  className={'px-2 py-0 mb-6 mt-2   bg-transparent  '}
                  //value="This field is required."
                >
                  {formik.errors.Email}
                </p>
              )}
              <div className={`flex items-center mt-10`}>
                <ArrowRight />

                <input
                  type="submit"
                  value="Send"
                  className="ml-13 bg-transparent cursor-pointer font-semibold"
                />
              </div>
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
          <div className="col-2 hidden xl:block">
            <Image
              src="/assets/download-case.png"
              layout="fixed"
              height={430}
              width={577}
              alt="img"
              quality={100}
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CaseStudy
