export interface postState {
  post: post[];
  loadPostLoading: boolean;
  loadPostDone: boolean;
  // loadPostError: null;
}

export interface Image {
  image: string | null;
}

interface post {
  imageFile: string;
  commentCount: number;
  reactionCount: number;
}
