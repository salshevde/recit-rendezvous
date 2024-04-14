import plantsImg from "@/public/Landing Page/Shopaholics Mostera.png";
import bgImg from "@/public/Landing Page/Background.png";
import boxImg from "@/public/Landing Page/Shopaholics Delivery Boxes.png";
import postImg from "@/public/Landing Page/Posts.png";
import chatsImg from "@/public/Landing Page/Shopaholics Communication.png";



import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <div className="bg-[#FFD4CC] h-[100vh] color-black grid grid-cols-10 grid-rows-7 overflow-hidden">
      <Image src={bgImg} alt="" className="col-span-full row-start-1"/>

      {/* LINK HERE */}
      
      <Link href = "/sign-in" className="col-start-1 row-start-1 m-5 text-2xl">Login</Link> 
      
      <Image src={boxImg} alt="" className="row-start-3"/>
      <div className="col-span-2 col-start-2 row-start-2 text-5xl font-bold">
        Recit Rendezvous
      </div>
      <Image src={chatsImg} alt=""className="col-start-4 row-start-2"/>

      {/* LINK HERE */}
      <Link href = "/sign-up"  className="col-start-4 row-start-1 m-5 text-2xl">
        Sign Up
      </Link>
      <Image src={postImg} alt="" className="col-start-5 row-start-1 col-span-4 z-10 "/>
      <Image src={plantsImg} alt="" className="col-start-4 row-start-3 col-span-2 z-0"/>
    </div>
  );
}
