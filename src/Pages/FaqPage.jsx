import React from 'react';
import { BsArrowRightCircleFill } from 'react-icons/bs'

const FaqPage = () => {
    return (
        <div className='max-w-6xl mx-auto'>
              <h2 className="text-center my-10 text-3xl  md:text-5xl font-semibold">FAQ's - Frequently Asked Questions</h2>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What's CoStay?
                </div>
                <div className="collapse-content">
                    <p className='flex items-center gap-3'> <BsArrowRightCircleFill className='text-4xl'></BsArrowRightCircleFill>CoStay is a home sharing and a community open to anyone who wants to share an ideal living space operated by Costay Management. We emphasize on premium living experience with a chic and minimalist design. We strive to provide a seamless living and quality experience for our tenants. We have got all the petty things in the home covered for you.</p>
                    <p className='flex items-center gap-3'> <BsArrowRightCircleFill className='text-4xl'></BsArrowRightCircleFill>CoStay is a home sharing and a community open to anyone who wants to share an ideal living space operated by Costay Management. We emphasize on premium living experience with a chic and minimalist design. We strive to provide a seamless living and quality experience for our tenants. We have got all the petty things in the home covered for you.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                <p>How many people can stay in a room?</p>
                </div>
                <div className="collapse-content">
                <p className='flex items-center gap-3'> <BsArrowRightCircleFill className=''></BsArrowRightCircleFill>We allow maximum 2 pax to stay in the room to ensure comfort for all tenants in the apartment.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Can I choose the type of bed in the room?
                </div>
                <div className="collapse-content">
                <p className='flex items-center gap-3'> <BsArrowRightCircleFill className=''></BsArrowRightCircleFill>Yes, you can! We understand that different residents have different needs. Hence you are able to choose whether to have a queen bed or twin single beds.</p>
                <p className='flex items-center gap-3'> <BsArrowRightCircleFill className=''></BsArrowRightCircleFill>Hence you are able to choose whether to have a queen bed or twin single beds.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can I ask the cleaner to clean my room?
                </div>
                <div className="collapse-content">
                <p className='flex items-center gap-3'> <BsArrowRightCircleFill className='text-3xl'></BsArrowRightCircleFill>Each resident will be given a tag to hang by the room door to request for cleaning. If you would like the cleaner to enter the room, you may hang the tag so that cleaner will enter.
                Covid-19 Update, due to rising cases and to minimise the risk of infection, we are currently cleaning the common area only.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Is car park included?
                </div>
                <div className="collapse-content">
                <p className='flex items-center gap-3'> <BsArrowRightCircleFill className='text-xl'></BsArrowRightCircleFill>Car park will not be included in the existing rental. However, the parking space is available for rent for RM 150 per month. Alternatively you may also park beside the guardhouse or by the roadside.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can we arrange for a viewing?
                </div>
                <div className="collapse-content">
                <p className='flex items-center gap-3'> <BsArrowRightCircleFill className=''></BsArrowRightCircleFill>Definitely and it's at your convenience. You may contact us to arrange a viewing.</p>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;