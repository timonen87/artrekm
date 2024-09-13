import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Калифорния 2012",
    paragraph:
      "california",
      pathUrl: "/summerprogram/california",
    image: "/images/blog/sammer_1.webp",
    author: {
      name: "California - 2012",
      image: "/images/blog/sammer_1.webp",
      designation: "California - 2012",
    },
    tags: ["США"],
    publishDate: "2012",
  },
  {
    id: 2,
    title: "Нью-Йорк",
    paragraph:
      "",
    pathUrl: "/summerprogram/new-york",
    image: "/images/blog/sammer_2.webp",
    author: {
      name: "Нью-Йорк",
      image: "/images/blog/sammer_3.webp",
      designation: "Нью-Йорк",
    },
    tags: ["США"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Шотландия ",
    paragraph:
      "",
    pathUrl: "/summerprogram/scotland",
    image: "/images/blog/sammer_4.webp",
    author: {
      name: "Шотландия",
      image: "/images/blog/sammer_4.webp",
      designation: "Шотландия",
    },
    tags: ["Шотландия"],
    publishDate: "2025",
  },
];
export default blogData;
