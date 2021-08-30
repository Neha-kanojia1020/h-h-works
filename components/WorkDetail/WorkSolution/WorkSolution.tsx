import React, { useEffect } from 'react'
import Container from '../../Container/Container'
import Portabconstext from '@sanity/block-content-to-react'

const BlockRenderer = (props: any) => {
  const { style = 'normal' } = props.node

  if (style == 'h3') {
    return (
      <div className="flex-1 xl:px-0 my-5 md:mt-8 md:m-0 xl:pr-8">
        <h3 className="text-4xl xl:text-5xl font-bold w-full max-w-full md:max-w-screen-lg lg:max-w-5xl loose-medium">
          {props.children}
        </h3>
      </div>
    )
  }

  if (style == 'normal') {
    return (
      <p className={`w-full xl:max-w-106xl text-1xl pr-4 mt-10`}>
        {props.children}
      </p>
    )
  }

  // Fall back to default handling
  return Portabconstext.defaultSerializers.types.block(props)
}

const WorkSolution = ({ solution }: any) => {
  useEffect(() => {
    document
      .querySelector('.work-solution p:first-child')
      ?.classList.add('mt-0')
    document
      .querySelector('.work-solution p:first-child')
      ?.classList.remove('mt-10')
  }, [])
  return (
    <section className="work-solution">
      <Container>
        <Portabconstext
          blocks={solution}
          serializers={{ types: { block: BlockRenderer } }}
          projectId="xjqjsaem"
          dataset="handh"
          className="pr-0 md:pr-26 md:max-w-5xl	"
        />
      </Container>
    </section>
  )
}
export default WorkSolution
