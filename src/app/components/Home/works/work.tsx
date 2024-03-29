import Button from "@/app/utils/button";
import ProgressBar from "@/app/utils/progressbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function work() {
  return (
    <div className="pt-[120px]">
      <div className="text-center">
        <div className="flex items-center justify-center mb-5 gap-x-2">
          <div className="border-b-2 border-green-500 w-16"></div>
          <p className="font-bold text-3xl">Campaigns</p>
          <div className="border-b-2 border-green-500 w-16"></div>
        </div>
        <p className=" md:px-[5%] px-[2%] mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 mx-5 md:mx-15 md:gap-5 lg:mx-20 lg:gap-10">
      
           
        <div className=" mx-auto border-2 rounded-xl shadow-xl pb-3">
            <div className="flex justify-center">
            <Link href={"/campings/abc"}>
            
              <Image
                src={`/images/post-1.jpg`}
                alt="Donor"
                width={500}
                height={500}
                className="sm:h-max-[16rem] sm:w-max-[22rem] md:h-[16rem] md:w-[22rem]  hover:scale-105 cursor-pointer duration-300 mb-5 rounded-xl"
                loading="lazy"
              />
              </Link>
            </div>
            <ProgressBar maxValue={100} value={50} />

            <div className="flex justify-between px-2 mb-5">
              <div>
                Raised : <span className="text-[#5F646B]">5000</span>
              </div>
              <div>
                Goal : <span className="text-[#5F646B]">8000</span>
              </div>
            </div>
            <Link href={"/campings/abc"}>
            <p className="font-bold text-xl mb-5 hover:text-green-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              eos!
            </p>
            </Link>
            <div className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <Button text="Donate Now" goto="/donate" />
         
          </div>
        
          <div className=" mx-auto border-2 rounded-xl shadow-xl pb-3">
            <div className="flex justify-center">
            <Link href={"/campings/abc"}>
            
              <Image
                src={`/images/post-1.jpg`}
                alt="Donor"
                width={500}
                height={500}
                className="sm:h-max-[16rem] sm:w-max-[22rem] md:h-[16rem] md:w-[22rem]  hover:scale-105 cursor-pointer duration-300 mb-5 rounded-xl"
                loading="lazy"
              />
              </Link>
            </div>
            <ProgressBar maxValue={100} value={50} />

            <div className="flex justify-between px-2 mb-5">
              <div>
                Raised : <span className="text-[#5F646B]">5000</span>
              </div>
              <div>
                Goal : <span className="text-[#5F646B]">8000</span>
              </div>
            </div>
            <Link href={"/campings/abc"}>
            <p className="font-bold text-xl mb-5 hover:text-green-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              eos!
            </p>
            </Link>
            <div className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <Button text="Donate Now" goto="/donate" />
         
          </div>
          <div className=" mx-auto border-2 rounded-xl shadow-xl pb-3">
            <div className="flex justify-center">
            <Link href={"/campings/abc"}>
            
              <Image
                src={`/images/post-1.jpg`}
                alt="Donor"
                width={500}
                height={500}
                className="sm:h-max-[16rem] sm:w-max-[22rem] md:h-[16rem] md:w-[22rem]  hover:scale-105 cursor-pointer duration-300 mb-5 rounded-xl"
                loading="lazy"
              />
              </Link>
            </div>
            <ProgressBar maxValue={100} value={50} />

            <div className="flex justify-between px-2 mb-5">
              <div>
                Raised : <span className="text-[#5F646B]">5000</span>
              </div>
              <div>
                Goal : <span className="text-[#5F646B]">8000</span>
              </div>
            </div>
            <Link href={"/campings/abc"}>
            <p className="font-bold text-xl mb-5 hover:text-green-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              eos!
            </p>
            </Link>
            <div className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>

            <Button text="Donate Now" goto="/donate" />
         
          </div>
        </div>
      </div>
    </div>
  );
}
