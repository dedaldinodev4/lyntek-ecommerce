import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Página Inicial",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Produtos",
    newTab: false,
    path: "/shop",
  },
  {
    id: 3,
    title: "Meu Carrinho",
    newTab: false,
    path: "/cart",
  },
  {
    id: 3,
    title: "Contactos",
    newTab: false,
    path: "/contact",
  },
  {
    id: 4,
    title: "Conta",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Perfil",
        newTab: false,
        path: "/my-account",
      },
    ],
  },
  
];
