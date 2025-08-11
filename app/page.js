import Image from "next/image";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import Nav from "@/components/Nav";
import SlideContainer from "@/components/SlideContainer";
import DownloadApp from "@/components/DownloadApp";
import ScrollStack from "@/components/ScrollStack";
import ScrollStackALL from "@/components/ScrollStackALL";
import CircueClue from "@/components/CircueClue";
import PerfectCircue from "@/components/PerfectCircue";
import CircueReachOut from "@/components/CircueReachOut";



export default function Home() {
  return (
    <div className="">
      <Nav/>
      <SlideContainer/>
      <DownloadApp/>
      <ScrollStackALL/>
      <CircueClue/>
      <PerfectCircue/>
      <CircueReachOut/>
       <SmoothCursor /> 
    </div>
  );
}
