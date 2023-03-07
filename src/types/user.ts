export interface Iuser {
  myInfo: Imyinfo;
  loadMyInfoLoading: boolean;
  loadMyInfoDone: boolean;
  loadMyInfoError: null | string;
  changePasswordLoading: boolean;
  changePasswordDone: boolean;
  changePasswordError: null | string;
  subscribeLoading: boolean;
  subscribeDone: boolean;
  subscribeError: null | string;
}

interface Imyinfo {
  profileId: null | string;
  email: null | string;
  name: null | string;
}

export interface Ipassword {
  password: string;
  passwordCheck: string;
}
