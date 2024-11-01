/* eslint-disable @next/next/no-img-element */

export default function AboutComponent() {
    return (
      <div className="bg-[#FBFBFB] w-[1170px] h-[465px] flex mx-auto items-center">
        {/* Left Section with Images */}
        <div className="relative">
          {/* First Image - Rectangle 8 */}
          <div className="w-[270px] h-[265px] mb-[20px]">  {/* Added margin at bottom */}
            <img
              src="/images/Rectangle 8.png"
              alt="Rectangle 8"
              className="object-cover w-full h-full"
            />
          </div>
  
          {/* Third Image - Rectangle 10 */}
          <div className="w-[270px] h-[140px]">
            <img
              src="/images/Rectangle 10.png"
              alt="Rectangle 10"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
  
        {/* Second Image - Rectangle 9 */}
        <div className="ml-[50px] w-[270px] h-[345px]">
          <img
            src="/images/Rectangle 9.png"
            alt="Rectangle 9"
            className="object-cover w-full h-full"
          />
        </div>
  
        {/* Right Section with Text */}
        <div className="ml-[50px]">
          {/* "About" Text */}
          <h1 className="font-roboto font-light text-[64px] text-left">
            About
          </h1>
  
          {/* Paragraph Text */}
          <p className="font-roboto font-light text-[16px] text-left mt-[10px] max-w-[400px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
  
          {/* "Read More" Button */}
          <div className="flex items-center mt-[30px]">
            <div className="bg-[#F2F2F2] w-[222px] h-[71px] flex justify-center items-center cursor-pointer">
              <span className="font-roboto font-light text-[16px]">
                READ MORE
              </span>
              <img src="/images/arrow-right.png" alt="Right Arrow" className="ml-[10px]" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  