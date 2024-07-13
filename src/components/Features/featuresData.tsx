import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
 
      <Image src='/images/feature/icons_uslugi_1.png' width={180}  height={181} alt="Объемная буква без подсветки" />
    
    ),
    title: "Объемная буква без подсветки",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image src='/images/feature/icons_uslugi_2.png' width={180}  height={181} alt="Объемная буква с подсветкой" />
    ),
    title: "Объемная буква с подсветкой",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image src='/images/feature/icons_uslugi_3.png' width={180}  height={181} alt="Объемная световая буква из цветного оргстекла" />
    ),
    title: "Объемная световая буква из цветного оргстекла ",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image src='/images/feature/icons_uslugi_4.png' width={180}  height={181} alt="Объемная буква с подсветкой боковой поверхности" />
    ),
    title: "Объемная буква с подсветкой боковой поверхности",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image src='/images/feature/icons_uslugi_5.png' width={180}  height={181} alt="Объемная буква из толстого оргстекла с подсветкой" />
    ),
    title: "Объемная буква из толстого оргстекла с подсветкой",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image src='/images/feature/icons_uslugi_6.png' width={180}  height={181} alt="Объемная буква с контражурной подсветкой" />
    ),
    title: "Объемная буква с контражурной подсветкой",
    paragraph:
      "",
  },
];
export default featuresData;
