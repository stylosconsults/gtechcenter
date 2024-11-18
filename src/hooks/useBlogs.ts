"use client";
import { useEffect, useState } from "react";
import { Blog, SavedBlog } from "../types/Blog";
import {
  createBlogApi,
  deleteBlogApi,
  fetchBlogsApi,
  fetchSingleBlogApi,
  updateBlogApi,
} from "../lib/blogs.api";

interface BlogSuccessMsgs {
  createSuccessMsg: string;
  updateSuccessMsg: string;
  getAllSuccessMsg: string;
  getSingleSuccessMsg: string;
  deleteSuccessMsg: string;
}

export function useBlogs() {
  const [blogs, setBlogs] = useState<SavedBlog[]>([]);
  const [singleBlog, setSingleBlog] = useState<SavedBlog | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [blogSuccessMsgs, setBlogSuccessMsgs] = useState<BlogSuccessMsgs>({
    createSuccessMsg: "",
    updateSuccessMsg: "",
    getAllSuccessMsg: "",
    getSingleSuccessMsg: "",
    deleteSuccessMsg: "",
  });

  const fetchBlogs = async () => {
    setLoading(true);
    setError("");

    try {
      const fetchedBlogs = await fetchBlogsApi();
      console.log("fetched blogs ", fetchedBlogs.blogs);
      setBlogs([...fetchedBlogs.blogs]);

      setBlogSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getAllSuccessMsg: fetchedBlogs.message,
      }));
    } catch (error) {
      setError((error as Error).message);

      setBlogSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getAllSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleBlog = async (blogId: string) => {
    setLoading(true);
    setError("");

    try {
      const fetchedBlog = await fetchSingleBlogApi(blogId);

      setSingleBlog({ ...fetchedBlog.blog });

      setBlogSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getSingleSuccessMsg: fetchedBlog.message,
      }));
    } catch (error) {
      setError((error as Error).message);

      setBlogSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getSingleSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const createBlog = async (newBlog: FormData) => {
    setLoading(true);
    setError("");

    try {
      const createdBlog = await createBlogApi(newBlog);

      setBlogs((previousBlogs) => [...previousBlogs, createdBlog.blog]);

      setBlogSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        createSuccessMsg: createdBlog.message,
      }));
    } catch (error) {
      setError((error as Error).message);
      setBlogSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        getSingleSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const updateBlog = async (blogId: string, updatedBlogData: FormData) => {
    setLoading(true);
    setError("");

    try {
      const updatedBlog = await updateBlogApi(blogId, updatedBlogData);
      console.log("updated msg ", updatedBlog.message);
      setBlogs((previousBlogs) =>
        previousBlogs.map((blog) =>
          blog._id === updatedBlog.blog._id ? updatedBlog.blog : blog
        )
      );

      setBlogSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        updateSuccessMsg: updatedBlog.message,
      }));
    } catch (error) {
      setError((error as Error).message);
      setBlogSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        updateSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (blogId: string) => {
    setLoading(true);
    setError("");

    try {
      const deleteStatus = await deleteBlogApi(blogId);
      setBlogs((previousBlogs) =>
        previousBlogs.filter((blog) => blog._id !== blogId)
      );

      if (deleteStatus === 204) {
        setBlogSuccessMsgs((previousSuccessMsgs) => ({
          ...previousSuccessMsgs,
          deleteSuccessMsg: "Blog deleted successfully",
        }));
      }
    } catch (error) {
      setError((error as Error).message);
      setBlogSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        deleteSuccessMsg: "",
      }));
    } finally {
      setLoading(false);
    }
  };

  return {
    blogs,
    singleBlog,
    loading,
    error,
    setError,
    blogSuccessMsgs,
    fetchSingleBlog,
    fetchBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
  };
}
