type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Blog = {
  id: number;
  pathUrl: string;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
