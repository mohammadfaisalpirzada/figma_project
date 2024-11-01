/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../../styles/ProjectsSection.module.css';

const ProjectsSection = () => {
  return (
    <div className="w-[1170px] h-[765px] mx-auto bg-white-100 p-8 relative">
      {/* Heading */}
      <h2 className={`${styles.heading} mb-6`}>
        Our Projects
      </h2>

      {/* Top Row Images */}
      <div className="flex mb-4">
        {/* First Image with Overlay */}
        <div className="relative w-[570px] h-[255px] bg-gray-300">
          <img src="/images/image14.png" alt="Project 1" className="w-full h-full object-cover" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center p-6">
            <h3 className="text-white text-4xl font-bold leading-tight mb-2">
              Sample <br /> Project
            </h3>
            <a href="#" className="text-white text-sm uppercase inline-flex items-center">
              VIEW MORE
              <img src="/images/ico-shape.png" alt="Arrow Icon" className="ml-2 w-[17px] h-[8px] opacity-80" />
            </a>
          </div>
        </div>

        {/* Second Image */}
        <div className="w-[570px] h-[255px] bg-gray-300 ml-[30px]">
          <img src="/images/image15.png" alt="Project 2" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom Row Images */}
      <div className="flex gap-[30px] mb-4">
        <div className="w-[270px] h-[255px] bg-gray-300">
          <img src="/images/image16.png" alt="Project 3" className="w-full h-full object-cover" />
        </div>
        <div className="w-[470px] h-[255px] bg-gray-300">
          <img src="/images/image17.png" alt="Project 4" className="w-full h-full object-cover" />
        </div>
        <div className="w-[370px] h-[255px] bg-gray-300">
          <img src="/images/image18.png" alt="Project 5" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* "ALL PROJECTS" Button */}
      <div className="absolute bottom-8 right-8">
        <a href="#" className="flex items-center bg-black text-white px-6 py-3 w-[222px] h-[71px] justify-center">
          <span className="text-sm font-medium uppercase">All Projects</span>
          <img src="/images/ico-shape.png" alt="Arrow Icon" className="ml-2 w-[17px] h-[18px]" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsSection;
