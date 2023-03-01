// api보낼 인터페이스
export interface uploadPostContents {
  file: File | null;
  postText: string;
}

// createSlice extraReducers 작성할 인터페이스
export interface uploadPostState {
  uploadPostReponse: [];
  uploadPostLoading: boolean;
  uploadPostDone: boolean;
  uploadPostError: null | string;
}
