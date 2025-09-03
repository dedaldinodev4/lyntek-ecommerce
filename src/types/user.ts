export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  role?: string;
  token?: string;
}

export interface IUserInfo {
  userInformation: IUser | null;
}

//RootState interface=> used for state type in useSelector hook

export interface IUserInfoRootState {
  userInfo: IUserInfo;
}
