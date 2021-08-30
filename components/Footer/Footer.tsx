import Link from 'next/link'
import React from 'react'
import ButtonDark from '../Buttons/ButtonDark'
import HeadingLarge from '../Headings/HeadingLarge'
import LogoFooter from '../icons/LogoFooter'

type IFooterProps = {
  dark?: boolean
  hidesignIn?: boolean
}

export default function Footer(props: IFooterProps) {
  const dark = props.dark

  return (
    <>
      <footer className={`bg-${dark ? 'white' : 'black'}`}>
        <div className="container mx-auto py-8 px-8 xl:px-0 xl:pt-24 xl:pb-12">
          <div className="flex-1 flex-cols">
            <div className="text-white text-3xl xl:text-5xl leading-normal">
              <HeadingLarge title="Challenge in mind?" />
              <HeadingLarge title="Let’s talk." />
            </div>
            <ButtonDark
              className="text-white md:mt-12 mt-6"
              text="Tell us everything"
              asLink
              to={'/contact'}
            />

            <div className="flex text-white mt-8 xl:mt-16 md:flex-row flex-col text-base xl:text-lg xl:w-full">
              <div className="flex-1 flex-start xl:w-100">
                <span className="font-medium">Offices</span>
                <div className="flex flex-col md:flex-row xl:w-103">
                  <div className="flex-1 mt-4 xl:mt-8">
                    <p className="leading-7">
                      Stockholm <br /> Strålgatan 45, Stockholm, Sweden <br />
                      +46 707 293 723
                      <br />
                      sthlm@hhworks.co
                    </p>
                  </div>
                  <div className="flex-1 mt-4 xl:mt-8 leading-7">
                    <p className="leading-7">
                      Bangkok <br /> 47 Watcharapol, Bangkok, Thailand <br />{' '}
                      +66 619 151 785 <br />
                      bkk@hhworks.co
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex-start mt-8 md:mt-0 text-base xl:text-lg xl:ml-9">
                <span className="font-medium">Connect</span>
                <div className="flex mt-4 xl:mt-8">
                  <div className="flex flex-col justify-around">
                    <div>
                      <Link href="https://www.linkedin.com/company/hhworks">
                        LinkedIn
                      </Link>
                    </div>
                    <div>
                      <Link href="#">Instagram</Link>
                    </div>
                    <div>
                      <Link href="https://www.facebook.com/hhworksconsultancy">
                        Facebook
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col justify-around ml-9">
                    <div>
                      <Link href="https://dribbble.com/hnhworks">Dribble</Link>
                    </div>
                    <div>
                      <Link href="https://medium.com/@hhworks">Medium</Link>
                    </div>
                    <div>
                      <Link href="#">Newsletter</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col md:flex-row flex-start md:items-center justify-between mt-20`}
          >
            <div className="flex flex-start text-gray opacity-50">
              <LogoFooter />
            </div>
            <div className="footer-text py-2 sm:py-0">
              ©2020 H&H Works Co.Ltd.
            </div>
          </div>
        </div>
      </footer>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/8797205.js"
      ></script>
    </>
  )
}
