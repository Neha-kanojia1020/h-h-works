import React from 'react'
import Container from '../../Container/Container'
import HeadingSub from '../../Headings/HeadingSub'

const WorkDetailChallenge = ({ challenges }: any) => {
  return (
    <section className="challenge">
      <Container>
        <HeadingSub
          sub="Challenge index"
          title={challenges?.challengeheading}
          classh2="pr-4 md:pr-8 xl:px-0 w-full xl:max-w-105xl max-w-full	 md:max-w-screen-lg	 lg:max-w-3xl	 loose-medium"
        />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-16 mt-8 pr-4">
          {challenges?.challengecolumns &&
            challenges?.challengecolumns.map((element: any, index: number) => {
              return (
                <p key={index} className="challenge-content">
                  {element}
                </p>
              )
            })}
        </div>
      </Container>
    </section>
  )
}

export default WorkDetailChallenge
