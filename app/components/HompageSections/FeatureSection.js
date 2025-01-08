import React from 'react'
import PropTypes from 'prop-types'
import ClipedText from '../ClipedText'
import CheckIcons from '../CheckIcons'
import Button from '../Button'

function FeatureSection(props) {
  return (
    <section className="flex justify-center py-32 bg-inherit bg-right bg-no-repeat" style={{ backgroundImage: 'url(/images/team-bg.jpg)' }}>
      <div className='w-[1400px] flex justify-between gap-x-20'>
        <div className='w-6/12 relative'>
          <div className=''>
            <div class="bg-purple-200 justify-center flex max-w-fit px-10 rounded-t-full ">
              <img className="-mt-20" src="/images/02-2.png" alt="" />
            </div>
            <div className='absolute left-2/4 top-0 '>
              <div className='flex justify-center items-center bg-orange-400 rounded-full h-[130px] w-[130px]'>
                <div className='relative flex justify-center items-center h-full'>
                  <i className=" absolute fa fa-long-arrow-right text-2xl text-white -rotate-45"></i>
                </div>
                <img className="absolute self-center top-0 bottom-0 animate-[spin_8s_linear_infinite] w-[100px] h-[100px]" src="/images/white-text.png" alt="" />
              </div>
            </div>

            <img className="absolute left-0 top-10 animate-[ltor_2s_ease-in-out_infinite]" src="/images/client-shape.png" alt="" />
            <img className="absolute bottom-5 right-20 animate-[ttob_2s_ease-in-out_infinite]" src="/images/box-shape-3.png" alt="" />


          </div>

        </div>
        <div className='flex w-6/12 justify-center flex-col gap-y-6 pr-28 items-start'>
          <ClipedText>Our Features</ClipedText>
          <h3 className='font-black text-5xl capitalize leading-[4rem]'>Let’s make something awesome together</h3>
          <p className='font-medium text-gray-600'>Every pleasure is to be welcomed and every pain avoided. certain
            circumstances and owing to the claims welcomed and every pain avoided
            certain circumstances</p>
          <div className='flex flex-wrap gap-6 mb-10'>
            <CheckIcons>30-day money back guarantee</CheckIcons>
            <CheckIcons>30-day money back guarantee</CheckIcons>
            <CheckIcons>30-day money back guarantee</CheckIcons>
            <CheckIcons>30-day money back guarantee</CheckIcons>
          </div>

          <Button url="contact">Explore Now</Button>
        </div>
      </div>
    </section>
  )
}

FeatureSection.propTypes = {}

export default FeatureSection
