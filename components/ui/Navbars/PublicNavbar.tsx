"use client";
import axios from 'axios';
import { UserButton, currentUser, useUser } from "@clerk/nextjs";
import {
  CameraIcon,
  HeartIcon,
  GlobeAltIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import Search from "../Search/Search";
import { useEffect, useState } from 'react';
import { getCurrentUserId } from '@/lib/actions';
import { Loader } from 'lucide-react';
const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  )
}

export default function PublicNavbar() {
  const userId = useUser().user?.id;


  return (
    <div className='bg-[#F40092] h-[15vh] flex  z-50 flex-row fixed w-[100%] top-0 justify-center items-center '>
      <div className=" h-[10vh] rounded-2xl px-10 bg-[white] absolute grid grid-cols-3 w-[90%] border-b shadow-sm items-center justify-between">
        <div className="logo 2xl font-bold ml-5">
          <Link href="/feed">Recit Rendezvous</Link>
        </div>

        <Search placeholder="Search " />

        <div className="right flex justify-end">
          {/* HOST LIVE */}
          {/* <CameraIcon className="h-6 w-6 text-black-500" /> */} 
          
          <div className="explore ml-10">
            <Link href="/explore">
              <GlobeAltIcon className="h-6 w-6 text-black-500" />
            </Link>
          </div>
          <div className="mylist ml-10">
          <Link href="/mylist">
              <HeartIcon className="h-6 w-6 text-black-500"/>
            </Link>
          </div>
          <div className="chat  ml-10">
            <Link href="/dm">
              <ChatBubbleBottomCenterIcon className="h-6 w-6 text-black-500" />
            </Link>
          </div>

          <div className="notif  ml-10">
            <Link href="/notifications">
              <BellAlertIcon className="h-6 w-6 text-black-500" />
            </Link>
          </div>

          <div className=" ml-10">
          {userId ? (
          <UserButton afterSignOutUrl="/" userProfileUrl={`/profile/${userId}`}>
            <UserButton.UserProfileLink
              label="My Profile"
              url={`/profile?userId=${userId}`}
              labelIcon={<DotIcon />}
            />
          </UserButton>
        ) : (
          <Loader/> // Placeholder for loading state
        )}
          </div>
        </div>
      </div>
    </div>
  );
}
