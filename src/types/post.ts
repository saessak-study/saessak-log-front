export interface Ipost {
  myPost: ImyPost[];
  singlePost: IsinglePost | null;
  loadMyPostLoading: boolean;
  loadMyPostDone: boolean;
  loadMyPostError: null | string;
  hasMoreMyPost: boolean;
  mySubPost: ImySubPost[];
  myPostPageNum: number;
  loadMySubPostLoading: boolean;
  loadMySubPostDone: boolean;
  loadMySubPostError: null | string;
  hasMoreSubPost: boolean;
  subPostPageNum: number;
}

export interface ImyPost {
  commentCount: number;
  imageFile: string;
  postId: number;
  profileId: string;
  reactionCount: number;
}

export interface ImySubPost {
  commentCount: number;
  imageFile: string;
  postId: number;
  profileId: string;
  reactionCount: number;
}

export interface IsinglePost {
  profileId: string;
  imageFile: string;
  postText: string;
  likeCount: number;
  subscribe: boolean;
  like: boolean;
}
