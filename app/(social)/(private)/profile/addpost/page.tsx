import CreatePostForm from "@/components/ui/profile/post/CreatePostForm";

export default function AddPostPage() {
  return (
    <div className="mt-[15vh] overflow-hidden grid h-[100%]  bg-gray-100 grid-flow-col grid-cols-[1fr_3fr_1fr] ">
      <div></div>
            <div className="main flex flex-col items-center justify-center bg-pink-500 m-5  rounded-xl">
                <CreatePostForm/>
            </div>
     
    </div>
  );
}
