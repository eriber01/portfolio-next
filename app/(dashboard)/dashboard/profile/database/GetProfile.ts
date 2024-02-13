import { ApiResponseMessage, api } from "@/app/utils";
import { Profile } from "../interface";
import { Status } from "@/app/interfaces";

interface GetProfileProps {
  res: Profile,
  message: string
  status: Status
}

export const GetProfile = async (): Promise<Profile | null> => {
  try {

    const { data } = await api.get<GetProfileProps>('/profile')

    if (data.status === 'success') {
      return data.res
    }

    ApiResponseMessage(data)
    return null
  } catch (error) {
    console.log(error);
    return null
  }
}