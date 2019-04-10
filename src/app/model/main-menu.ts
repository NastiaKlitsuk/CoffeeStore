import { UserMessage } from './user-message';

export enum MAIN_MENU {
  Order = 'ORDER',
  Cards = 'CARDS',
  Gift = 'GIFT',
  Stores = 'STORES'
}

export enum SUB_MENU {
  Menu = 'Menu',
  Favorite = 'Favorite',
  Previous = 'Previous'
}

export enum MenuRoutes {
  menu = 'menu',
  favorite = 'favorite',
  previous = 'previous',
  cards = 'cards',
  stores = 'stores',
  gift = 'gift'
}
export interface Menu {
  name: string;
  subMenu: Menu[];
  userMessage?: UserMessage;
  navigateTo: string;
}

export const menu: Menu[] = [
  {
    name: MAIN_MENU.Order,
    subMenu: [
      { name: SUB_MENU.Menu, subMenu: [], navigateTo: MenuRoutes.menu },
      { name: SUB_MENU.Favorite, subMenu: [], navigateTo: MenuRoutes.favorite },
      { name: SUB_MENU.Previous, subMenu: [], navigateTo: MenuRoutes.previous }
    ],
    navigateTo: MenuRoutes.menu
  },
  {
    name: MAIN_MENU.Cards,
    subMenu: [],
    userMessage: {
      message: 'Coffee store cards'
    },
    navigateTo: MenuRoutes.cards
  },
  {
    name: MAIN_MENU.Gift,
    subMenu: [],
    userMessage: {
      message: 'Gift cards'
    },
    navigateTo: MenuRoutes.gift
  },
  {
    name: MAIN_MENU.Stores,
    subMenu: [],
    navigateTo: MenuRoutes.stores
  }
];
