export interface Ipost {
  myPost: ImyPost[];
  loadMyPostLoading: boolean;
  loadMyPostDone: boolean;
  loadMyPostError: null | string;
}

export interface ImyPost {
  commentCount: number;
  imageFile: string;
  postId: number;
  profileId: string;
  reactionCount: number;
}
