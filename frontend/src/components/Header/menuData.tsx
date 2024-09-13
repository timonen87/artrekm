import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "О нас",
    path: "/about",
    newTab: false,
  },


  {
    id: 3,
    title: "Учебные программы",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Языковые программы",
        path: "/programms",
        newTab: false,
      },
      {
        id: 42,
        title: "Подготовка к ЕГЭ и ГИА",
        path: "/programm-details",
        newTab: false,
      },
      {
        id: 43,
        title: "Подготовка к школе",
        path: "/programm-details",
        newTab: false,
      },
      {
        id: 44,
        title: "Летние программы",
        path: "/summerprogram",
        newTab: false,
      },
      
     
    ],
    
  },
  {
    id: 42,
    title: "Контакты",
    path: "/contact",
    newTab: false,
  },
  
  // {
  //   id: 4,
  //   title: "Примеры страниц",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },

  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
