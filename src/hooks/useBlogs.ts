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

export function useBlogs() {
  const [blogs, setBlogs] = useState<SavedBlog[]>([]);
  const [singleBlog, setsingleBlog] = useState<SavedBlog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);

    try {
      const fetchedBlogs = await fetchBlogsApi();
      setBlogs([...fetchedBlogs]);

      console.log("fetched blogs ", fetchedBlogs);
      console.log("blogs state", blogs);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleBlog = async (blogId: string) => {
    setLoading(true);
    setError(null);

    try {
      const fetchedBlog = await fetchSingleBlogApi(blogId);
      setsingleBlog({ ...fetchedBlog });
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const createBlog = async (newBlog: Blog) => {
    setLoading(true);
    setError(null);

    try {
      const createdBlog = await createBlogApi(newBlog);
      setBlogs((previousBlogs) => [...previousBlogs, createdBlog]);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const updateBlog = async (blogId: string, updatedBlogData: Blog) => {
    setLoading(true);
    setError(null);

    try {
      const updatedBlog = await updateBlogApi(blogId, updatedBlogData);
      setBlogs((previousBlogs) =>
        previousBlogs.map((blog) =>
          blog._id === updatedBlog._id ? updatedBlog : blog
        )
      );
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (blogId: string) => {
    setLoading(true);
    setError(null);

    try {
      await deleteBlogApi(blogId);
      setBlogs((previousBlogs) =>
        previousBlogs.filter((blog) => blog._id !== blogId)
      );
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    blogs,
    singleBlog,
    loading,
    error,
    fetchSingleBlog,
    createBlog,
    updateBlog,
    deleteBlog,
  };
}
