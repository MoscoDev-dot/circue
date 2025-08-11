"use client";
import React, { useEffect } from "react";
import { animate, scroll } from "motion";
import Image from "next/image";
import { AuroraText } from "./magicui/aurora-text";
import { Container } from "@mui/material";

const Clue = () => {
  const photos = [
    {
      src: "/howItWorks1.webp",
      label: "Set up your profile in less than 30 seconds",
    },
    { src: "/howItWorks2.webp", label: "Select your preferred feed content" },
    { src: "/howItWorks3.webp", label: "Connect with your friends" },
    { src: "/howItWorks4.webp", label: "Create or join groups" },
    {
      src: "/howItWorks5.webp",
      label: "Share live locations with your friends",
    },
    { src: "/howItWorks6.webp", label: "Help people find there way around" },
    {
      src: "/howItWorks3.webp",
      label: "Get translations to foreign languages",
    },
  ];

  useEffect(() => {
    const container = document.querySelector(".img-group-container");
    const group = document.querySelector(".img-group");

    if (!container || !group) return;

    const containerWidth = container.clientWidth;
    const groupWidth = group.scrollWidth;
    const maxTranslateX = groupWidth - containerWidth;

    // Animate gallery horizontally during vertical scroll
    scroll(
      animate(group, {
        transform: ["none", `translateX(-${maxTranslateX}px)`],
      }),
      { target: container }
    );

    // Progress bar animation
    scroll(animate(".progress", { scaleX: [0, 1] }), {
      target: container,
    });
  }, []);

  return (
    <div >
        <Container className="" maxWidth={false}>
      <article id="gallery">
        <header>
          <h2 className="text-5xl text-center pt-20 font-bold mb-6">
            The <AuroraText>Clue</AuroraText> to <br /> your{" "}
            <AuroraText>Circle</AuroraText>
          </h2>
        </header>
        <div className="lg:hidden text-center">
          <Image
            src="/appFeatures.webp"
            alt="appfeatures"
            width={500}
            height={500}
            className=" md:w-[500] w-[100] mx-auto  md:pt-20 pt-0"
          />
          <p className="opacity-50 pb-8">
            It's never been easier to reach out, ask questions and be connected
            wherever you are! Find out how Circue works.
          </p>
        </div>
        <section className="img-group-container hidden lg:block relative h-[140vh]">
          <div className="sticky top-0 h-screen overflow-hidden flex items-center">
            <ul className="img-group  flex gap-30 px-5">
              <Image
                src="/appFeatures.webp"
                alt="appfeatures"
                width={500}
                height={500}
                className=" md:w-[500] w-[100] md:pt-20 pt-0"
              />
              {photos.map((photo, idx) => (
                <li
                  className="img-container  flex-shrink-0 flex flex-col items-center justify-center"
                  key={idx}
                >
                  <Image
                    src={photo.src}
                    alt={photo.label}
                    width={250}
                    height={250}
                    className=" border-2 border-red-100 shadow-lg p-5 rounded-lg "
                  />
                  <h3 className="mt-2 text-md ">{photo.label}</h3>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
      </Container>
    </div>
  );
};

export default Clue;
