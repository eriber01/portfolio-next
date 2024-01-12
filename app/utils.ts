import axios from "axios";
import { toast } from "react-toastify";
import { savedMessageProps } from "./interfaces";

export const api = axios.create({ baseURL: '/api/' })


export const ApiResponseMessage = ({ message, status }: savedMessageProps) => {
  if (status === 'success') {
    toast.success(message)
    return
  }

  toast.error(message)
}