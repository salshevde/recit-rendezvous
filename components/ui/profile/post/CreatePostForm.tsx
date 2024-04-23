"use client";

import Link from "next/link";
import { UploadButton } from "@/components/utils/uploadThing/uploadThing";
import { CreatePost } from "@/lib/forms/create-post";
import { UploadFileResponse} from "@/lib/definitions";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle} from "lucide-react";
import { Button } from "../../button";

export default function CreatePostForm() {
  // const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createPost, initialState);
  const [images, setImages] = useState<UploadFileResponse[]>([]);
  const [imageIndex, setImageIndex] = useState(0);
  const title = images.length ? (
    <>
      <p>Upload Complete!</p>
      <p className="mt-2">{images.length} Images</p>
    </>
  ) : null;

  const imgList =images.length ? (
    <div>
      {title}
    <div className="flex place-center mt-2">
      
      <ArrowLeftCircle className="w-[5vh] self-end" onClick={()=>{
        setImageIndex((imageIndex<=0)?images.length-1:imageIndex-1)
      }}/>
      <div className="w-[80%]">
        <Image src={images[imageIndex].url} alt="" width={800} height={800} />
      </div>
      <ArrowRightCircle className="w-[5vh] self-end" onClick={()=>{
        setImageIndex((imageIndex<images.length-1)?imageIndex+1:0)
      }}/>
    </div>
    </div>
  ):null;

  async function OnSubmitPost(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try {
      const form = e.currentTarget;
      console.log(form)
      const data = new FormData(form);
      const imgList:string[] = []
      images.forEach((image)=>{
        imgList.push(image.url);
      })

      const imgValue = imgList.toString()
      data.append("images-list", imgValue)

      
      const res = await CreatePost(data);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form
    onSubmit={OnSubmitPost}
      className="bg-white w-[80%] h-auto rounded-sm text-center
      p-10"
    >
      <div>
        {/* Post Title */}
        <label htmlFor="post-title">Post Title </label>
        <br />
        <input
          type="text"
          name="post-title"
          id="post-title"
          className="w-[80%]"
        />
      </div>
      <div>
        {/* Post Image */}
        <label htmlFor="post-images">Post images </label>
        <br />
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            if (res) {
              setImages(res);
              
              const json = JSON.stringify(res);
              console.log(json);
            }
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
          onBeforeUploadBegin={(files) => {
            // Preprocess files before uploading (e.g. rename them)
            return files.map(
              (f) => new File([f], "renamed-" + f.name, { type: f.type })
            );
          }}
          onUploadBegin={(name) => {
            // Do something once upload begins
            console.log("Uploading: ", name);
          }}
        />
        <div>{imgList}</div>

        <input
          type="text"
          name="post-images"
          id="post-images"
          className="w-[80%]"
        />
      </div>
      <div>
        {/* Post Content */}
        <label htmlFor="post-content">Post Content </label>
        <br />
        <textarea name="post-content" id="post-content" className="w-[80%]" />
      </div>

      <div>
        <div className="flex justify-between">
      <Link
          href="/feed" // Lead to user
          className="flex h-10 items-center rounded-lg bg-red-400 px-4 text-sm font-medium text-white transition-colors hover:bg-red-700 w-[10vw]"
        >
          Cancel
        </Link>
        <Button type="submit" className="w-[10vw]">Add Post</Button>
        </div>
      </div>
    </form>
  );
}
