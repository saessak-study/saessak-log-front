// api에 보낼 인터페이스

// url에 들어갈 api 변수
export interface cardAPIParams {
  limit: number;
  page: number;
}

// 게시글 전체를 보여주기 위한 타입 지정
export interface cardList {
  imageFile: string;
  commentCount: number;
  reactionCount: number;
}

// 게시글 전체를 불러올 때 사용하는 타입 지정
export interface postMainDTOList {
  postMainDTOList: {
    imageFile: string;
    commentCount: number;
    reactionCount: number;
  };
}
// 게시글 한 건에 대한 타입 지정
export interface cardEach {
  profileId: string;
  imageFile: string;
  postText: string;
  likeCount: number;
}

// 카드 개별값의 타입 지정
export interface ICardProfile {
  imageFile: string;
  reactionCount: number;
  commentCount: number;
}

// 카드 개별값의 타입 지정2
export interface cardProfileType {
  cardProfile: ICardProfile;
}


// createSlice extraReducers 개별 카드
export interface IcardEachState {
  loadCardEachList: cardEach[];
  loadCardEachLoading: boolean;
  loadCardEachDone: boolean;
  loadCardEachError: null | string;
}

// createSlice extraReducers의 카드뭉치
export interface IcardListState {
  loadCardList: cardList[];
  loadCardListLoading: boolean;
  loadCardListDone: boolean;
  loadCardListError: null | string;
}
