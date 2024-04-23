"use server"
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { currentUser, useUser } from '@clerk/nextjs';
import clientPromise from '../mongoDB/db';
import axios from 'axios';
import { title } from 'process';
axios.defaults.baseURL = "http://localhost:3000";

const FormSchema = z.object({
  // id: z.string(), // randomize
  title: z.string({
    invalid_type_error: 'Please enter a post title',
  }),
  content: z.string(),
  imagesList: z.string()
});


const createPost = FormSchema.omit({});


export async function CreatePost(formData: FormData) {

  const validatedFields = (createPost.safeParse({
    title: formData.get('post-title'),
    content: formData.get('post-content'),
    imagesList: (formData.get('images-list')),
    userId: formData.get('userId')
  })).data
  const currUser = await currentUser();
  const userId = currUser?.id;
  
  const query = {
    title:validatedFields?.title,
    content:validatedFields?.content,
    userId:userId,
    imagesList: validatedFields?.imagesList
  }

  const queryFetch = await axios.post('api/user-profile/posts', query)
  
  revalidatePath(`/profile?userId=${userId}`); 
  redirect(`/profile?userId=${userId}`);
}