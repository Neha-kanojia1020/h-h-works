import React from 'react'
import ServicesCard from '../ServicesCard/ServicesCard'
import Container from '../../components/Container/Container'
import HeadingMedium from '../Headings/HeadingMedium'

const ServiceDeliver = ({ service }: any) => {
  console.log(service)

  return (
    <section className="what-we-deliver">
      <Container style={{ maxWidth: '1034px' }}>
        <HeadingMedium
          title="What we deliver "
          class="text-3xl xl:text-5xl font-bold"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 m-0 md:mt-5 xl:mt-5">
          <div className="">
            <ServicesCard
              img="sd-1.png"
              width="220"
              title="Research Lab"
              text="Uncertainty is a challenge for any organisation. We can run focus groups, A/B testing, data mining, usability tests with our new CO+LAB ideation and problem solving workshops to illuminate the best path for your organisation."
            />

            <ServicesCard
              img="sd-3.png"
              width="211"
              title="Digital Strategy"
              text="Cross platform implementation plan starting with a full brand health check right through to a complete roadmap of initiatives. Take advantage of our combined 40 years of experience in e-commerce, banking and strategy."
            />
          </div>
          <div className="">
            <ServicesCard
              img="sd-2.png"
              width="240"
              title="Brand Strategy"
              text="Goto market, or refresh your brand, with a well defined mission, vision and core values that align your entire brand to your target audience. H&H will bring your brand to life by bringing collaboration, creativity and storytelling that inspire, not only customers, but your own teams."
            />

            <div className="">
              <ServicesCard
                img="sd-4.png"
                width="209"
                title="Product Strategy"
                text="Starting with clearly defining your customer segments and mapping your products, goals, messaging and value proposition so you are ready to go to market and successfully launch your product."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ServiceDeliver
