import React from 'react';
import { BiLike } from "react-icons/bi";
import { PiUsers } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
const EasySteps = () => {
  return (
    <div className="mb-40">
      <p className='mb-5'>How It Works</p>
      <h2 className="sm:text-3xl font-semibold text-2xl mb-3">
        Find the Perfect Products in 3 Easy Steps
      </h2>
      <p className="mb-10">
        Our platform connects you with a community of experts and enthusiasts to
        help you discover <br className="hidden md:block" /> the best products
        for your needs.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-4">
        <div className="linear-border-l p-[1px] rounded-xl">
          <div className="bg-first rounded-xl p-5 w-full h-full">
            <IoMdSearch size={30} className="mb-3" />
            <h4 className="text-xl font-bold mb-2">Create Your Query</h4>
            <p className="font-light text-white/70">
              Describe your needs and preferences in detail to get the best
              recommendations.
            </p>
          </div>
        </div>
        <div className="linear-border-l p-[1px] rounded-xl">
          <div className="bg-first rounded-xl p-5 w-full h-full">
            <PiUsers size={30} className="mb-3" />
            <h4 className="text-xl font-bold mb-2">Connect with Experts</h4>
            <p className="font-light text-white/70">
              Join our community of product enthusiasts and experts to discuss
              your queries.
            </p>
          </div>
        </div>
        <div className="linear-border-l p-[1px] rounded-xl">
          <div className="bg-first rounded-xl p-5 w-full h-full">
            <BiLike size={30} className="mb-3" />
            <h4 className="text-xl font-bold mb-2">
              Get Personalized Recommendations
            </h4>
            <p className="font-light text-white/70">
              Receive tailored recommendations based on your specific
              requirements and feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasySteps;