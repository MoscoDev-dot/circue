"use client";

import { useEffect } from "react";
import { animate, scroll } from "motion";
import FirstSlideText from "./FirstSlideText";
import SecondSlideText from "./SecondSlideText";
import ThirdSlideText from "./ThirdSlideText";

const SlideContainer = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".text-slide");
    const container = document.querySelector(".text-group-container");
    const textGroup = document.querySelector(".text-group");
    const progressBar = document.querySelector(".progress");

    // Only run animations if elements exist
    if (items.length > 0 && container && textGroup) {
      scroll(
        animate(textGroup, {
          transform: ["none", `translateX(-${items.length - 1}00vw)`],
        }),
        { target: container }
      );
    }

    if (progressBar && container) {
      scroll(
        animate(progressBar, { scaleX: [0, 1] }),
        { target: container }
      );
    }
  }, []);

  return (
    <div>
      <article id="gallery" className="w-screen mt-10">
        {/* Horizontal Scroll Section */}
        <section className="text-group-container h-[500vh] relative">
          {/* Single background image */}
          <div
            className="sticky top-0 overflow-hidden h-screen bg-contain bg-[position:center_top_5rem] bg-no-repeat"
            style={{
              backgroundImage: "url('/appFeatures.webp')",
            }}
          >
            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text group container */}
            <div className="relative z-10 flex h-full">
              <div className="text-group flex">
                {/* Slide 1 */}
                <div className="text-slide flex w-screen h-screen flex-none items-center justify-center p-10 text-white">
                  <FirstSlideText
                    text1="Travel the world with extra help"
                    text2="Imagine a world where traveling and relocation is seamless and enjoyable. Circue makes it possible to enjoy access to all the help and support you need while traveling abroad or relocating to a new area."
                  />
                </div>

                {/* Slide 2 */}
                <div className="text-slide flex w-screen h-screen flex-none items-center justify-center p-10 text-white">
                  <SecondSlideText />
                </div>

                {/* Slide 3 */}
                <div className="text-slide flex w-screen h-screen flex-none items-center justify-center p-10 text-white">
                  <ThirdSlideText />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Progress Bar */}
      <div className="progress fixed left-0 right-0 h-[5px] bg-[#9911ff] bottom-[50px] origin-left scale-x-0"></div>
    </div>
  );
};

export default SlideContainer;
