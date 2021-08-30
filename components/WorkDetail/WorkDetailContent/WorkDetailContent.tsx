import React from 'react'
import Container from '../../Container/Container'
import PortableText from '@sanity/block-content-to-react'
import styles from './Workdetailcontent.module.scss'

const BlockRenderer = (props: any) => {
  const { style = 'normal' } = props.node

  if (style == 'h3') {
    return React.createElement(
      style,
      { className: `text-23xl xl:text-4xl pr-14 xl:pr-32 font-bold` },
      props.children
    )
  }

  if (style == 'normal') {
    return <p className={`hidden`}>{props.children}</p>
  }

  // Fall back to default handling
  return PortableText.defaultSerializers.types.block(props)
}

const RightColBlockRenderer = (props: any) => {
  const { style = 'normal' } = props.node

  if (style == 'h3') {
    return React.createElement(style, { className: `hidden` }, props.children)
  }

  if (style == 'normal') {
    return <p className={`mb-4`}>{props.children}</p>
  }

  // Fall back to default handling
  return PortableText.defaultSerializers.types.block(props)
}

const WorkDetailContent = ({ projectDetail }: any) => {
  return (
    <section className="work-detail-content">
      <Container>
        {projectDetail.backstory && (
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
            <div className="content-left">
              {projectDetail.technology && (
                <div className="font-inter px-0 xl:px-0 md:m-0 text-base sm:text-1xl leading-normal mb-1 mt-5">
                  {projectDetail.technology + ' and the '}
                  backstory
                </div>
              )}
              <div className="pt-6">
                <PortableText
                  blocks={projectDetail.backstory}
                  serializers={{
                    types: { block: BlockRenderer },
                  }}
                  projectId="xjqjsaem"
                  dataset="handh"
                />
              </div>
            </div>
            <div className={`${styles['content-right']} pr-5 xl:pr-10 pt-10`}>
              {projectDetail.backstory && (
                <PortableText
                  blocks={projectDetail.backstory}
                  serializers={{
                    types: { block: RightColBlockRenderer },
                  }}
                  projectId="xjqjsaem"
                  dataset="handh"
                />
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

export default WorkDetailContent
