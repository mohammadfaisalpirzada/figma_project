/* eslint-disable @next/next/no-img-element */

export default function ProjectShowcase() {
    return (
      <div className='flex justify-center'>


        {/* Left Section */}
        <div className="relative w-[400px] h-[829px] flex flex-col  justify-center">

          
          {/* Text "PROJECT" */}
          <h1 className="font-roboto font-light text-[64px] tracking-wide leading-none">
            PROJECT
          </h1>
  
          {/* Text "Lorum" */}
          <h1 className="font-roboto font-bold text-[64px] leading-none mt-[24px]">
            Lorum
          </h1>
  
          {/* Arrows */}
          <div className="flex items-center space-x-[20px] mt-[150px]">
            {/* Left Arrow */}
            <div className="bg-[#F2F2F2] w-[53px] h-[53px] flex justify-center items-center">
              <img src="/images/arrow-left.png" alt="Left Arrow" />
            </div>
  
            {/* Right Arrow */}
            <div className="bg-[#F2F2F2] w-[53px] h-[53px] flex justify-center items-center">
              <img src="/images/arrow-right.png" alt="Right Arrow" />
            </div>
          </div>
  
          {/* Page Numbers */}
          <div className="absolute bottom-[20px] left-[135px] flex items-center space-x-[10px]">
            <span className="text-[16px] font-light">01</span>
            <span className="text-[16px] font-light">/</span>
            <span className="text-[16px] font-light">02</span>
          </div>
        </div>
  

        {/* Right Section: Image */}
        <div className="w-[770px] h-[829px]">
          <img
            src="/images/Rectangle 6.png"  // Replace with the actual image
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }
  