import axios, { AxiosError } from "axios";
import { Blog, ResponseBlog, ResponseBlogs, SavedBlog } from "../types/Blog";
import Cookies from "js-cookie";

const BASEURL = "http://localhost:3001/api"
const apiClient = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

const token = Cookies.get("auth_token")


export const fetchBlogsApi = async (): Promise<ResponseBlogs> => {
  try {
    const response = await apiClient.get("/blogs");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data);
    }
    throw error;
  }
};

export const fetchSingleBlogApi = async (
  blogId: string
): Promise<ResponseBlog> => {
  try {

    const response = await apiClient.get(`/blogs/${blogId}`);
    return response.data;

  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data);
    }
    throw error;
  }
};

export const createBlogApi = async (
  newBlog: FormData
): Promise<ResponseBlog> => {
  try {
    const response = await axios.post(`${BASEURL}/blogs`, newBlog, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`

      },
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const updateBlogApi = async (
  blogId: string,
  updatedBlog: FormData
): Promise<ResponseBlog> => {
  try {
    const response = await axios.put(`${BASEURL}/blogs/${blogId}`, updatedBlog, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;

  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw error;
  }
};

export const deleteBlogApi = async (blogId: string): Promise<number> => {
  try {
    const response = await axios.delete(`${BASEURL}/blogs/${blogId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.status
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }
    throw error
  }
};
