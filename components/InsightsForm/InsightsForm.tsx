import Image from 'next/image'
import Button from '../Buttons/Button'

const InsightsForm = () => {
  return (
    <section className="container text-base	lg:text-107  mx-auto mb-6 md:mb-20">
      <div className="bg-gray-100 md:bg-form-pattern bg-no-repeat bg-cover lg:flex md:items-center md:justify-between py-43 px-38 md:py-16 md:px-24">
        <div className="px-4 mb-4 py-5 flex justify-center order-1 md:order-2">
          <div>
            <Image
              objectFit="cover"
              width={400}
              height={300}
              src="/assets/home/hero-img.png"
              alt="cartoon of people standing in a lab"
              quality={100}
              loading="eager"
            />
          </div>
        </div>
        <div className="order-2 md:order-1">
          <h3 className="text-108 lg:text-109 font-bold mb-5 lg:max-w-xl">
            Do you want some fresh insights in your inbox?
          </h3>
          <p className="font-normal  mb-8 lg:max-w-lg xl:max-w-xl">
            Branding, design leadership, CX, UX and product development articles
            once a month. No spam, unsubscribe anytime and keep on lighting the
            candle of knowledge.
          </p>
          <form
            id="newsletterInsight"
            action="https://hhworks.us6.list-manage.com/subscribe/post"
            method="POST"
          >
            <input type="hidden" name="u" value="981e7cf38eb99a9fc57899f5b" />
            <input type="hidden" name="id" value="6cdc471fb1" />
            <input
              type="email"
              required
              placeholder="Your fancy email"
              className="block w-full mb-4 bg-white placeholder-gray-800 p-4"
              autoCapitalize="off"
              autoCorrect="off"
              name="MERGE0"
              id="MERGE0"
              size={25}
              style={{
                outline: 'none',
              }}
            />
            <Button
              text="Subscribe"
              className="font-semibold text-base px-4 py-2"
              asSubmit
            />
            <input
              type="hidden"
              name="ht"
              value="593f49d76f30b563a2bc2b9a789869584e71e73a:MTYyNDQ1Njg3NS45Mzk3"
            />
            <input type="hidden" name="mc_signupsource" value="hosted" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default InsightsForm
