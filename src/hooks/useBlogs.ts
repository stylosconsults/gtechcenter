"use client";
import { useEffect, useState } from "react";
import {  SavedBlog } from "../types/Blog";
import {
  createBlogApi,
  deleteBlogApi,
  fetchBlogsApi,
  fetchSingleBlogApi,
  updateBlogApi,
} from "../lib/blogs.api";
import toast from "react-hot-toast";

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
    setBlogSuccessMsgs((previousSuccessMsgs) => ({
      ...previousSuccessMsgs,
      getAllSuccessMsg: "",
    }));

    try {
      const fetchedBlogs = await fetchBlogsApi();
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
    setBlogSuccessMsgs((previousSuccessMsgs) => ({
      ...previousSuccessMsgs,
      getSingleSuccessMsg: "",
    }));
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
    setBlogSuccessMsgs((previousSuccessMsgs) => ({
      ...previousSuccessMsgs,
      createSuccessMsg: "",
    }));

    try {
      const createdBlog = await toast.promise(createBlogApi(newBlog), {
        loading: "Wait !! Creating blog ...",
        success: (data) => data.message,
        error: (err) => err.message,
      });

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
    setBlogSuccessMsgs((previousSuccessMsgs) => ({
      ...previousSuccessMsgs,
      updateSuccessMsg: "",
    }));

    try {
      const updatedBlog = await toast.promise(
        updateBlogApi(blogId, updatedBlogData),
        {
          loading: "Wait !! Updating blog ...",
          success: (data) => data.message,
          error: (err) => err.message,
        }
      );
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
    setBlogSuccessMsgs((previousSuccessMsgs) => ({
      ...previousSuccessMsgs,
      deleteSuccessMsg: "",
    }));
  
    try {
      await toast.promise(deleteBlogApi(blogId), {
        loading: "Wait !! Deleting blog ...",
        success: "Blog deleted successfully",
        error: (err) => err.message,
      });
  
      // Directly update the blogs state
      setBlogs((previousBlogs) =>
        previousBlogs.filter((blog) => blog._id !== blogId)
      );

      // await fetchBlogs()

  
      setBlogSuccessMsgs((previousSuccessMsgs) => ({
        ...previousSuccessMsgs,
        deleteSuccessMsg: "Blog deleted successfully",
      }));
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
  

  useEffect(() => {
    fetchBlogs();
  }, []);
 


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
