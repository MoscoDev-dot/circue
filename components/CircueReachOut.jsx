import { Container } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AvTimerIcon from '@mui/icons-material/AvTimer';
import Image from "next/image";

const CircueReachOut = () => {
  return (
    <div className="pt-50 overflow-x-hidden">
      <Container className="bg-red-100  rounded-t-[20vh] py-40" maxWidth={false}>
        <div className="flex flex-col  rounded-[20vh] md:px-10 px-2   bg-red-50 w-fit h-fit mx-auto py-30 justify-center gap-5 md:flex-row">
          <div className="md:pt-25">
            <p className="font-bold text-xl md:text-6xl">
              Still In doubt? We've <br /> got you covered.
            </p>
            <p className="md:text-2xl text-sm opacity-50 my-8">
              Shoot us a mail and the right  person <br /> would be in touch
            </p>
            <div className="flex  md:gap-5 gap-1">
              <div className="flex md:gap-2">
                <div>
                  <FavoriteBorderIcon className="text-red-500 text-md" />
                </div>
                <div>
                  <p className="font-bold  md:text-xl">
                    New Here? <br />
                    <span className="font-normal text-sm md:text-lg">
                      Hello@circue.app
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex md:gap-2">
                <div>
                  <AvTimerIcon className="text-red-500 text-md" />
                </div>
                <div>
                  <p className="font-bold  md:text-xl">
                    Got complaints? <br />
                    <span className="font-normal text-sm md:text-lg">
                     Support@circue.app
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src='/footerImg.webp' width={500} height={500} alt="footerImg" className="w-auto" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CircueReachOut;
