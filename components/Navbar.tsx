import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { BellAlertIcon, ChatBubbleBottomCenterIcon } from "@heroicons/react/16/solid";

export default function Navbar() {
  return (
    <div className=" h-[10vh] bg-white grid grid-cols-3 fixed z-100 top-0 w-full border-b shadow-sm items-center justify-between">
      <div className="logo 2xl font-bold ml-5">Recit Rendezvous</div>

      <div className="search">Search bar Here</div>

      <div className="right flex justify-end">
        <div className="chat  ml-10">
          <ChatBubbleBottomCenterIcon className="h-6 w-6 text-black-500"/>

        </div>

        <div className="notif  ml-10">
          <BellAlertIcon className="h-6 w-6 text-black-500"/>
        </div>
        <div className=" ml-10">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
}
