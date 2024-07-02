import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Буквы с двойной подсветкой",
    paragraph:
      "",
    image: "https://static.tildacdn.com/tild3435-6430-4634-b837-663437366635/noroot.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["вывеска"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Буквы с контурной подсветкой",
    paragraph:
      "",
    image: "https://static.tildacdn.com/tild6562-6138-4337-b463-373261386665/1111_1.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["вывеска"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Буквы на дистанционных держателях.",
    paragraph:
      "",
    image: "https://static.tildacdn.com/tild3666-3237-4439-b431-363665623236/434324_1.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["вывеска"],
    publishDate: "2025",
  },
];
export default blogData;
