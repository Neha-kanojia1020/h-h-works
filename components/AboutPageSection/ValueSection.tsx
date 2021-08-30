type IvalebocProps = {
  title: string
  description: string
}

export function ValueBox(props: IvalebocProps) {
  return (
    <>
      <div className="values">
        <h2 className="text-white font-inter font-bold text-102 md:text-23xl pb-4 md:py-6">
          {props.title}
        </h2>
        <div className="text-gray-101 text-base md:text-1xl md:leading-8 xl:pr-16">
          {props.description}
        </div>
      </div>
    </>
  )
}

export default function ValueSection() {
  const data = {
    box1: {
      title: 'Colloborative',
      description:
        'We noticed that when we work collaboratively with our clients through discovery ideation, creation and launch, the success multiplies while the tasks are divided. As a result we put collaboration at the internal and external of our company.',
    },
    box2: {
      title: 'Integrity',
      description: 'Integrity',
    },
    box3: {
      title: 'Inspired',
      description:
        'We inspire each other, we inspire our clients to push their brands further, and we aim to inspire everyone we work with. Being inspired helps in our collaboration and , and to enjoy coming to work every day.',
    },
    box4: {
      title: 'Innovative',
      description:
        'The joy of discovering new processes, creative ideas and innovative ways to communicate and build new experiences fuels us. While  is around ideation and thought, our innovation is all about doing!',
    },
  }
  return (
    <section className="bg-black md:mb-24">
      <div className="container mx-auto flex flex-col px-8 xl:px-0 py-12 md:pt-24 md:pb-28">
        <div className="flex-1">
          <h2 className="text-white font-inter text-21xl xl:text-5xl font-semibold xl:font-bold pr-6 gradient-text pb-0 xl:pb-10">
            Values
          </h2>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 max-w-6xl">
            <ValueBox
              title={data.box1.title}
              description={data.box1.description}
            />
            <ValueBox
              title={data.box2.title}
              description={data.box1.description}
            />
            <ValueBox
              title={data.box3.title}
              description={data.box1.description}
            />
            <ValueBox
              title={data.box4.title}
              description={data.box1.description}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
