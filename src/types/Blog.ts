export interface Blog {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imagePublicId: string;
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