// export interface RawBlog{
//   title: string;
//   category: string;
//   description: string;
//   file: File
// }


export interface Blog {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imagePublicId: string;
  fileName: string;
  lastlyUpdatedDate: string;
  lastlyUpdatedTime: string;
}

export interface SavedBlog extends Blog {
  _id: string;
}
export interface ResponseBlog {
  blog: SavedBlog;
  message: string
}

export interface ResponseBlogs {
  blogs: SavedBlog[];
  message: string
}