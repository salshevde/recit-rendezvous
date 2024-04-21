"use client";
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Button } from "../button";

export default function PrivateNavbar() {
  const router = useRouter();
  return (
    <div className='bg-[#F40092] h-[15vh] flex  z-50 flex-row fixed w-[100%] top-0 justify-center items-center '>
    <div className=" h-[10vh] rounded-2xl px-10 bg-[white] absolute grid grid-cols-3 w-[90%] border-b shadow-sm items-center justify-between">
      <div className="w-content m-5">

        <Button onClick={router.back} className="">
          <ArrowLeftStartOnRectangleIcon className="h-6 w-6 text-black-500" />
        </Button>
      </div>
    </div>
    </div>
  );
}
