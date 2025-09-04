
export interface ISignUpRequest {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface ISignInRequest {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: string;
}

export interface ICurrentUser {
  user: IUser;
  access_token: string;
}

export interface IUserInfo {
  userInformation: IUser | null;
}

//RootState interface=> used for state type in useSelector hook

export interface IUserInfoRootState {
  userInfo: IUserInfo;
}
