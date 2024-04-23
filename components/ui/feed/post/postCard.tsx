"use client";
import Image from "next/image";
import sampleProfile from "@/public/New folder/sampleProfile.png";
import samplePostpic from "@/public/New folder/queen.jpeg";
import {
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  CircleChevronRightIcon,
} from "lucide-react";
import Link from "next/link";
import { postDetails } from "@/lib/definitions";
import { useEffect, useState } from "react";
import { currentUser, useUser } from "@clerk/nextjs";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

export default function PostCard({ post }: { post: postDetails }) {
  const intUserId = useUser().user;
  const intUserLoaded = useUser().isLoaded
  const [imageIndex, setImageIndex] = useState(0);
  const imgCount = post.mediaList?.length;

  const [like, setLike] = useState(0); //get set Ref
  

  const [myList, setmyList] = useState(0); //get set Ref

  const query = `?posterId=${post.userId}&likerId=${intUserId}&postId=${post.postId}`
  // const queryData = {
  //   posterId: post.userId,
  //   likerId: intUserId,
  //   postId: post.postId
  // }

  // combine the functions dumbass
  async function Like() {
    const res = await axios.post(`api/user-profile/posts/likes${query}`)
    setLike(1);
  }
  
  async function UnLike() {
    const res = await axios.delete(`api/user-profile/posts/likes${query}`)
    setLike(0);
  }
  function List() {
    // post
    setmyList(1);
  }
  function UnList() {
    // delete
    setmyList(0);
  }

  useEffect(() => {
    
    async function getLike() {
      const getRes = (await axios.get(`api/user-profile/posts/likes${query}`)).data.postList
      const res = (getRes.find((liker:string)=>{
        return liker
    }))

    console.log(intUserLoaded)
    if(intUserLoaded){
      console.log(getRes)
      console.log(intUserId)
      setLike(getRes[0]== intUserId?1:0)
    }
}
    getLike()
    }, [intUserLoaded,
      intUserId,
      query
    ]);


  return (
    <div className=" bg-pink-500 w-[100%] my-[5vh] flex justify-center content-center rounded-2xl m-[10px] text-center text-2xl text-white">
      <div className="w-[80%]  grid-rows-10 grid-cols-9 p-[20px]">
        <div className="top-bar flex flex-row  ">
          <Link href={`/profile?userId=${post.userId}`}>
            <Image
              src={sampleProfile}
              alt=""
              className="rounded-full w-[54px] h-[54px]"
            />

            <div className=" ml-5 user-avatar text-xl font-bold border-solid border-black">
              {post.userId}
              <div className="text-gray-400 w-fit font-semibold ">
                @username
              </div>
            </div>
          </Link>
        </div>
        <div className="bio  border-solid border-black text-lg">
          {post.title}
        </div>
        <div className="content bg-slate-50 border-solid border-black text-black  rounded-lg">
          {post.mediaList && post.mediaList[0] ? (
            <div className="flex place-center mt-2">
              <ArrowLeftCircle
                className="w-[5vh] self-center"
                onClick={() => {
                  setImageIndex(
                    imageIndex <= 0 ? imgCount - 1 : imageIndex - 1
                  );
                }}
              />
              <div className="w-[80%]">
                <Image
                  src={post.mediaList[imageIndex]}
                  alt=""
                  width={800}
                  height={800}
                />
              </div>
              <ArrowRightCircle
                className="w-[5vh] self-center"
                onClick={() => {
                  setImageIndex(imageIndex < imgCount - 1 ? imageIndex + 1 : 0);
                }}
              />
            </div>
          ) : null}
        </div>
        <div className="bio  border-solid border-black text-lg">
          {post.content}
        </div>

        <div className="react-bar border-solid border-black flex flex-row justify-between p-5">
          <Link href={`/profile/post/${post.userId}/${post.postId}`}>
            <ChatBubbleOvalLeftIcon className="w-[30px]" />
          </Link>

          <button>
            <HeartIcon
              className="w-[30px]"
              fill={like ? "white" : "transparent"}
              onClick={like ? UnLike : Like}
            />

            {post.likeCount}
          </button>
          <button>
            <BookmarkIcon
              className="w-[30px]"
              fill={myList ? "white" : "transparent"}
              onClick={myList ? UnList : List}
            />
          </button>

          <button>
            <CircleChevronRightIcon />
            {post.commentCount}
          </button>
        </div>
        {/*             TOP COMMENT - SORT BY MOST
            <div className="comments  border-solid border-black">Comments</div> */}
        <br />
      </div>
    </div>
  );
}
