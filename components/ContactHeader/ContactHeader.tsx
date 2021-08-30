import React from 'react'

const Info = ({
  title,
  text,
  type,
}: {
  title: string
  text: string
  type?: string
}) => {
  let href = ''

  if (type) {
    href = `${type === 'email' ? 'mailto' : 'tel'}:${text}`
  } else {
    href = ''
  }
  return (
    <p className="flex flex-col items-start justify-start md:flex-row mr-10 mb-6 md:mb-4">
      <span className="font-normal text-1xl mr-4 min-w-101">{title}</span>
      {type ? (
        <a
          href={href}
          className="font-semibold text-base xl:text-1xl cs-underline relative"
        >
          {text}
        </a>
      ) : (
        <a className="font-semibold text-base xl:text-1xl cs-underline relative">
          {text}
        </a>
      )}
    </p>
  )
}

const ContactHeader = () => {
  return (
    <section className="container mx-auto px-6 pb-24 pt-6 lg:pt-24">
      <span
        className="block mb-6 md:mb-4  font-normal	  md:text-1xl md:leading-none	"
        style={{ color: '#121212' }}
      >
        Contact
      </span>
      <h1 className="text-101 lg:text-20xl font-bold mb-10 lg:mb-8">
        We love a good chat
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl">
        <Info
          title="General enquiries:"
          text="hello@hhworks.com"
          type="email"
        />
        <Info title="Tel:" text="+87 242345354" type="tel" />
        <Info title="Training enquiries:" text="carl@hhworks.co" type="email" />
        <Info title="Line:" text="@hhworksco" />
      </div>
    </section>
  )
}

export default ContactHeader
