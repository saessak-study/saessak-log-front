// api보낼 인터페이스

// 코멘트 1개의 인터페이스 -> response값으로 불려오는 녀석
export interface comment {
  profileId: string;
  comment: string;
  createdDate: string;
}

// 코멘트 api params에 들어갈 녀석
export interface commentAPIParams {
  postId: number;
  limit: number;
  page: number | null;
}

// 코멘트 생성하는 녀석
export interface createComment {
  comment: string;
  post: number;
  user: number;
}

// createSlice extraReducers 작성할 녀석
export interface IcommentState {
  loadCommentList: comment[];
  loadCommentLoading: boolean;
  loadCommentDone: boolean;
  loadCommentError: null | string;
  createComment: createComment;
  createCommentLoading: boolean;
  createCommentDone: boolean;
  createCommentError: null | string;
}
