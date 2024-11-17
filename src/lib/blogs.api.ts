import axios, { AxiosError } from "axios";
import { Blog, SavedBlog } from "../types/Blog";

const apiClient = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchBlogsApi = async (): Promise<SavedBlog[]> => {
  try {
    const response = await apiClient.get("/blogs");
    return response.data.blogs;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("axios error", error.message);
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const fetchSingleBlogApi = async (
  blogId: string
): Promise<SavedBlog> => {
  try {
    const response = await apiClient.get(`/blogs/${blogId}`);
    return response.data.blog;
  } catch (error) {
    throw new Error("Failed to fetch blog");
  }
};

export const createBlogApi = async (newBlog: Blog): Promise<SavedBlog> => {
  try {
    const response = await apiClient.post("/blogs", newBlog);
    console.log("created blog", response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("axios error", error.message);
      throw new Error(error.response?.data.message);
    }
    throw error;
  }
};

export const updateBlogApi = async (
  blogId: string,
  updatedBlog: Blog
): Promise<SavedBlog> => {
  try {
    const response = await apiClient.put(`/blogs/${blogId}`, updatedBlog);

    console.log("updated blog", response.data);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("axios error", error.message);
      throw new Error(error.response?.data.message);
    }

    throw error
  }
};

export const deleteBlogApi = async (blogId: string): Promise<void> => {
  try {
    const response = await apiClient.delete(`/blogs/${blogId}`);
    console.log("after blog_delete ", response.data);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("axios error", error.message);
      throw new Error(error.response?.data.message);
    }
  }
};
