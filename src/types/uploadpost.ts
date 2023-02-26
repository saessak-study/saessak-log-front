// api보낼 인터페이스
export interface uploadPostContents {
  imageFile: File | null;
  postText: string;
}

// createSlice extraReducers 작성할 인터페이스
export interface uploadPostState {
  uploadPost: uploadPostContents[];
  uploadPostLoading: boolean;
  uploadPostDone: boolean;
  uploadPostError: null | string;
}
