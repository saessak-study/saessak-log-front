// api보낼 인터페이스

// 코멘트 1개의 인터페이스 -> response값으로 불려오는 녀석
export interface comment {
  commentId: number;
  profileId: string;
  comment: string;
  createdDate: string;
}

// 코멘트 api params에 들어갈 녀석
export interface commentAPIParams {
  postID: number;
  pageNum: number | null;
}

// 코멘트 생성하는 녀석
export interface createCommentData {
  comment: string;
  post: number;
  user: number;
}

// createSlice extraReducers 작성할 녀석
export interface IcommentState {
  loadCommentlimit: comment[];
  loadCommentList: comment[];
  loadCommentLoading: boolean;
  loadCommentDone: boolean;
  loadCommentError: null | string;
  hasMore: boolean;
  pageNum: number;
  createComment: createCommentData;
  createCommentLoading: boolean;
  createCommentDone: boolean;
  createCommentError: null | string;
}
