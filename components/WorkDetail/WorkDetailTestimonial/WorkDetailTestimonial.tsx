import Image from 'next/image'
import HeadingMedium from '../../Headings/HeadingMedium'
import { urlFor } from '../../../sanity'

const WorkDetailTestimonial = ({ testimonials }: any) => {
  return (
    <section className="bg-black testimonial text-center">
      <div className="container mx-auto py-10 p-6 xl:px-0 xl:py-48">
        <HeadingMedium
          title={testimonials?.testimonialheading}
          class="gradient-text px-6 xl:px-36 font-semibold"
        />
        <div className="xl:flex justify-center items-center testimonial-content mt-10">
          <div className="testimonial-avator pr-6">
            {testimonials?.testimonialwriterimage && (
              <Image
                src={urlFor(testimonials?.testimonialwriterimage).url() as any}
                alt="feature-img"
                height={60}
                width={60}
                layout="fixed"
                quality={100}
                loading="eager"
              />
            )}
          </div>
          <div className="text-white testimonial-name">
            {testimonials?.testimonialwriter}
          </div>
        </div>
      </div>
    </section>
  )
}
export default WorkDetailTestimonial
