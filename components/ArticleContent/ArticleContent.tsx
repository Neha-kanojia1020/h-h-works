import React, { useEffect, useState } from 'react'
import Button from '../Buttons/ButtonDark'
import urlBuilder from '@sanity/image-url'
import PortableText from '@sanity/block-content-to-react'
import Image from 'next/image'

const urlFor = (source: any) =>
  urlBuilder({ projectId: 'xjqjsaem', dataset: 'handh' }).image(source)

const BlockRenderer = (props: any) => {
  const { style = 'normal' } = props.node

  if (style == 'h2') {
    return React.createElement(
      style,
      { className: `text-102 lg:text-5xl font-bold mb-6` },
      props.children
    )
  }

  if (style == 'h3') {
    return React.createElement(
      style,
      { className: `text-1xl lg:text-xl lg:text-xl font-semibold mb-6` },
      props.children
    )
  }

  if (style == 'title') {
    return <p className={`text-md font-normal mb-8`}>{props.children}</p>
  }

  if (style == 'normal') {
    return (
      <p className={`text-1xl lg:text-xl font-normal mb-6`}>{props.children}</p>
    )
  }

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '')
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children
    )
  }

  if (style === 'blockquote') {
    return <blockquote>- {props.children}</blockquote>
  }

  // Fall back to default handling
  return PortableText.defaultSerializers.types.block(props)
}

const ImageRenderer = (props: any) => {
  return (
    <div className="mb-2 lg:mb-14 w-full max-w-3xl dynamicImage">
      <div className="relative aspect-w-4 aspect-h-5 sm:aspect-w-16 sm:aspect-h-9 mb-4">
        <Image src={urlFor(props.node.asset).url() as string} layout="fill" />
        {props.children}
      </div>
      {props.node.caption && (
        <div className="hidden lg:block text-left text-base font-normal text-gray-medium-2 px-2 whitespace-nowrap">
          {props.node.caption}
        </div>
      )}
    </div>
  )
}

const ArticleContent = (props: any) => {
  const [value, setvalue] = useState('')

  useEffect(() => {
    let allElements: any

    let selectedElement = document.getElementById('selecttoMove')

    if (document.querySelector('.dynamic')?.childNodes) {
      let dynamicMain = document.querySelector('.dynamic')

      allElements = dynamicMain && Array.from(dynamicMain?.childNodes)
    }

    let indexs =
      allElements &&
      allElements.reduce(function (a: any, e: any, i: number) {
        if (e.classList.contains('dynamicImage')) a.push(i)
        return a
      }, [])

    let arrs = []

    let startindex = 0
    indexs &&
      indexs.forEach((item: any) => {
        arrs.push(allElements.slice(startindex, item + 1))
        startindex = item + 1
      })

    arrs.push(allElements && allElements.slice(startindex))

    arrs.forEach((item, index) => {
      if (index == arrs.length - 1) {
      } else {
        item.splice(item.length - 1, 1)
      }
    })

    arrs.forEach((item) => {
      var wrapper = document.createElement('div')
      wrapper.setAttribute('class', 'px-6 mb-0 lg:mb-10')

      item && item[0] && item[0].parentNode.insertBefore(wrapper, item[0])

      item &&
        item.forEach((itemtoappend: any) => {
          wrapper.appendChild(itemtoappend)
        })
    })

    let stronginP = document.querySelectorAll('p strong:only-child')

    Array.from(stronginP).forEach((item: any) => {
      item.parentNode &&
        item.parentNode?.setAttribute(
          'class',
          'text-1xl lg:text-xl font-normal'
        )
    })

    let dynamicMain = document.querySelector('.dynamic')
    if (selectedElement && selectedElement.parentNode && dynamicMain) {
      document
        .querySelector('.dynamic')
        ?.insertBefore(selectedElement, dynamicMain.children[2])
      //selectedElement.parentNode.insertBefore(selectedElement.parentNode, selectedElement.previousElementSibling);
    }
  }, [])

  return (
    <div className=" maxWidthSet m-auto">
      <PortableText
        blocks={props.articleDetails.content}
        serializers={{ types: { block: BlockRenderer, image: ImageRenderer } }}
        projectId="xjqjsaem"
        dataset="handh"
        className=" dynamic  mt-12"
      />

      <div
        id="selecttoMove"
        className="bg-black text-white w-full max-w-3xl mx-auto p-10 xl:pr-32 mb-12"
      >
        <h3 className="gradient-text text-23xl lg:text-21xl font-bold mb-8">
          Do you want some fresh insights in your inbox?
        </h3>
        <form
          action="https://hhworks.us6.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="981e7cf38eb99a9fc57899f5b" />
          <input type="hidden" name="id" value="6cdc471fb1" />
          <input
            style={{
              outline: 'none',
            }}
            type="email"
            className="bg-gray-medium placeholder-gray-50 p-4 w-full mb-8"
            placeholder="Your fancy email"
            autoCapitalize="off"
            autoCorrect="off"
            name="MERGE0"
            id="MERGE0"
            required
            size={25}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
          />

          <Button text="Send" />
          <input
            type="hidden"
            name="ht"
            value="593f49d76f30b563a2bc2b9a789869584e71e73a:MTYyNDQ1Njg3NS45Mzk3"
          />
          <input type="hidden" name="mc_signupsource" value="hosted" />
        </form>
      </div>
    </div>
  )
}

export default ArticleContent
