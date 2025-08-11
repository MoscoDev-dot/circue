import { PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavText from "./NavText";
import { BorderBeam } from "./magicui/border-beam";
import { FlipText } from "./magicui/flip-text";
import { TextAnimate } from "@/components/magicui/text-animate";



const DownloadApp = () => {
  return (
    <div className="overflow-x-hidden mt-0 md:mt-10">
      <div className="grid md:grid-cols-2 px-5 grid-cols-1 py-20 lg:py-20 md:py-10 gap-4">
        {/* first column */}
        <div className="text-center">
          <div className="font-bold md:text-[40px]  text-[20px] text-[#000000]">
           Download the app now 
          </div>
          <div className="text-neutral-500 font-semibold  text-[20px] italic">
           Experience the world like a local for your travels with the 
            Circue app 
          </div>
          <p className="text-neutral-700 pb-8 font-semibold text-[20px] italic">
            Donwload now.
          </p>
          <div className="flex justify-center gap-4">
            <Link  href='#'>
            <div className="flex rounded-full md:py-4 py-2 md:px-10 px-5 bg-red-100">
              <Image
                src="/apple-store.svg"
                width={30}
                height={30}
                alt="app store"
              />
              <p className=" mx-3 text-sm">
                Get it on <br /> Appstore
              </p>
            </div>
            </Link>
           <Link href='#'>
            <div className="flex rounded-full md:py-4 py-2 md:px-10 px-5 bg-neutral-300">
              <Image
                src="/google-play.svg"
                width={30}
                height={30}
                alt="playstore"
              />
              <p className="mx-3 text-sm">
                Get it on <br /> Playstore
              </p>
              
            </div>
            
           </Link>
          </div>
        </div>

        {/* second column */}

        <div>
          <div className="relative w-full h-70 md:h-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/IMG_7418.webp"
                alt="image"
                className="lg:w-[40vh] md:w-[25vh] w-[20vh]"
                width={250}
                height={200}
              />
              
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="md:w-[80vh] w-[40vh] text-center bg-red-100 lg:h-[35vh] md:h-[20vh] h-[15vh] rounded-[4vw] border border-neutral-300 flex items-center justify-center">
                <NavText/>
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default DownloadApp;
