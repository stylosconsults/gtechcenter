"use client";
import { useEffect, useState } from "react";
import { SavedBlog } from "../types/Blog";
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
  const [error, setError] = useState<string>("");
  const [blogSuccessMsgs, setBlogSuccessMsgs] = useState<BlogSuccessMsgs>({
    createSuccessMsg: "",
    updateSuccessMsg: "",
    getAllSuccessMsg: "",
    getSingleSuccessMsg: "",
    deleteSuccessMsg: "",
  });

  const [loadingStates, setLoadingStates] = useState({
    loadingAllBlogs: false,
    loadingSingleBlog: false,
    loadingCreateBlog: false,
    loadingUpdateBlog: false,
    loadingDeleteBlog: false,
  });

  const fetchBlogs = async () => {
    setLoadingStates((prev) => ({
      ...prev,
      loadingAllBlogs: true,
    }));
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
      setLoadingStates((prev) => ({
        ...prev,
        loadingAllBlogs: false,
      }));
    }
  };

  const fetchSingleBlog = async (blogId: string) => {
    setLoadingStates((prev) => ({
      ...prev,
      loadingSingleBlog: true,
    }));
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
      setLoadingStates((prev) => ({
        ...prev,
        loadingSingleBlog: false,
      }));
    }
  };

  const createBlog = async (newBlog: FormData) => {
    setLoadingStates((prev) => ({
      ...prev,
      loadingCreateBlog: true,
    }));
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
      setLoadingStates((prev) => ({
        ...prev,
        loadingCreateBlog: false,
      }));
    }
  };

  // const updateBlog = async (blogId: string, updatedBlogData: FormData) => {
  //   setLoadingStates((prev) => ({
  //     ...prev,
  //     loadingUpdateBlog: true,
  //   }));
  //   setError("");
  //   setBlogSuccessMsgs((previousSuccessMsgs) => ({
  //     ...previousSuccessMsgs,
  //     updateSuccessMsg: "",
  //   }));

  //   try {
  //     const updatedBlog = await toast.promise(
  //       updateBlogApi(blogId, updatedBlogData),
  //       {
  //         loading: "Wait !! Updating blog ...",
  //         success: (data) => data.message,
  //         error: (err) => err.message,
  //       }
  //     );
  //     setBlogs((previousBlogs) =>
  //       previousBlogs.map((blog) =>
  //         blog._id === updatedBlog.blog._id ? updatedBlog.blog : blog
  //       )
  //     );

  //     setBlogSuccessMsgs((previousSuccessMsgs) => ({
  //       ...previousSuccessMsgs,
  //       updateSuccessMsg: updatedBlog.message,
  //     }));
  //   } catch (error) {
  //     setError((error as Error).message);
  //     setBlogSuccessMsgs((previousSuccessMsgs) => ({
  //       ...previousSuccessMsgs,
  //       updateSuccessMsg: "",
  //     }));
  //   } finally {
  //     setLoadingStates((prev) => ({
  //       ...prev,
  //       loadingUpdateBlog: false,
  //     }));
  //   }
  // };

  // In useBlogs hook, modify the updateBlog function:
const updateBlog = async (blogId: string, updatedBlogData: FormData) => {
  // Only update loading state if not already loading
  if (!loadingStates.loadingUpdateBlog) {
      setLoadingStates((prev) => ({
          ...prev,
          loadingUpdateBlog: true,
      }));
  }
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
      
      // Update blogs state only after successful update
      setBlogs((previousBlogs) =>
          previousBlogs.map((blog) =>
              blog._id === updatedBlog.blog._id ? updatedBlog.blog : blog
          )
      );

      setBlogSuccessMsgs((previousSuccessMsgs) => ({
          ...previousSuccessMsgs,
          updateSuccessMsg: updatedBlog.message,
      }));
      
      // Reset loading state only after everything is done
      setLoadingStates((prev) => ({
          ...prev,
          loadingUpdateBlog: false,
      }));
      
      return updatedBlog; // Return the updated blog data
  } catch (error) {
      setError((error as Error).message);
      setBlogSuccessMsgs((previousSuccessMsgs) => ({
          ...previousSuccessMsgs,
          updateSuccessMsg: "",
      }));
      // Reset loading state in case of error
      setLoadingStates((prev) => ({
          ...prev,
          loadingUpdateBlog: false,
      }));
      throw error;
  }
};
  const deleteBlog = async (blogId: string) => {
    setLoadingStates((prev) => ({
      ...prev,
      loadingDeleteBlog: true,
    }));
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
      setLoadingStates((prev) => ({
        ...prev,
        loadingDeleteBlog: false,
      }));
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    blogs,
    singleBlog,
    loadingStates,
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
