"use client";
import { currentUser, useUser } from "@clerk/nextjs";
import axios from "axios";
import Image from "next/image";
import profileImgSample from "@/public/New folder/sampleProfile.png";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurrentUserId } from "@/lib/actions";
import { Button } from "../button";
import CreatePostButton, { FriendButtons, MyButtons } from "./buttons";
axios.defaults.baseURL = "http://localhost:3000";
export default function ProfileCard() {
  const userId = useUser().user?.id;
  const profileId = useSearchParams().get("userId");

  return (
    <div className="profile w-[100%] h-[80vh] my-5 grid">
      <div className="checkered-container  rounded-2xl z-0 grid grid-cols-7 grid-rows-5 relative self-center ">
        <div className="row-end-2  col-start-4 relative">
          <Image
            width={150}
            height={100}
            src={"https://www.investopedia.com/thmb/8-gLOsCajX0ZvU5FFXxO11ClvGQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1463460814-286d8f0f5acc46af8e1f40010327bc5b.jpg"}
            alt=""
            className="relative z-10 rounded-full"
          />
        </div>
        <div className="bg-pink-500 opacity-60 font-mono text-white rounded-2xl col-span-5 row-span-3 row-start-2 col-start-2 flex justify-between items-center flex-col z-1 relative">
          <div className="text-3xl">
            {/* {userDetails?.firstName} {userDetails?.lastName} */}
          </div>

          <div className="text-2xl">Bio</div>

          <div className="text-xl">favorite quote</div>

          <div>socials</div>
          <div></div>
        </div>
        <div className="row-start-2 col-start-4"></div>
        {userId == profileId ? (
          <MyButtons />
          
        ) : (
          <FriendButtons selfId={userId!} otherId={profileId!} />
        )}
      </div>

      <div>
      {userId == profileId ? (
          <CreatePostButton/>
          
        ) : (
          <div></div>
        )}
      
      </div>
    </div>
  );
}
