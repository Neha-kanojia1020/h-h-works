import Container from '../Container/Container'

const DarkSection = (props: any) => {
  return (
    <section className="bg-black">
      <Container>
        <div className=" content text-white xl:w-112">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
            {props.service.darksectionheading}
          </h2>
          <p className="mt-6 text-base	xl:text-lg leading-8">
            {props.service.darksectioncontent}
          </p>
        </div>
      </Container>
    </section>
  )
}

export default DarkSection
