import { jwtDecode } from "jwt-decode";
import { api } from "@/services";
import { ISignInRequest, IUser, ICurrentUser } from "@/types/user";


export const signInRequest = async (credentials: ISignInRequest): Promise<ICurrentUser| Error> => {
  const { email, password } = credentials;

  try {
    const request = await api.post('auth/login', {
      email, password
    })

    const { data } = request.data as ICurrentUser;
    return data;
  } catch(error) {
    return new Error('Email or password invalid: '+error); 
  }

}

export const recoverUserInformation = async (access_token: string) => {
  const data = jwtDecode(access_token) as { user: IUser }
  const { user } = data;

  try {
    
    const { id, email, role,name, phone } = user;

    return {
      id, email, role, name, phone
    }
  } catch(error) {
    console.error(error)
  }
}