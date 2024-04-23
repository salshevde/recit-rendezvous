export type userCreatePayload = {
  data: {
    email_addresses: [
      {
        email_address: string,
        id: string
      }

    ],

    first_name: string,
    gender: string,
    id: string,
    image_url: string,
    last_name: string,

  },
}

export type RowDataType = {
  postId: string,
  postName: string,
  UserID: string,
  Email: string,
  FullName: string,
  RegistrationDate: Date
}


export type postDetails = {
  userId: string, 
  content: string, 
  title: string,
  postId: string, 
  mediaList: string[],
  likeCount: number,
  commentCount: number
}

export type UploadFileResponse
  // <TServerOutput> 
  = {
    name: string;
    size: number;
    key: string;
    url: string;

    // Matches what's returned from the serverside `onUploadComplete` callback
    // Will be `null` if `skipPolling` is set to `true`.
    // serverdata: TServerOutput;
  };
export type imageList = {
  imageUrl: string
}[]


export type searchResultType ={
  type: string,
  data: RowDataType
}
