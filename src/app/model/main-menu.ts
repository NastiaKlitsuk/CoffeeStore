import { UserMessage } from './user-message';

export enum MAIN_MENU {
  Order = 'ORDER',
  Cards = 'CARDS',
  Gifts = 'GIFTS',
  Stores = 'STORES'
}

export interface Menu {
  name: string;
  subMenu: Menu[];
  userMessage?: UserMessage;
}

export const menu: Menu[] = [
  {
    name: MAIN_MENU.Order,
    subMenu: [
      { name: 'Order', subMenu: [] },
      { name: 'Previous', subMenu: [] },
      { name: 'Favorite', subMenu: [] }
    ]
  },
  {
    name: MAIN_MENU.Cards,
    subMenu: [],
    userMessage: {
      message: 'Coffee store cards'
    }
  },
  {
    name: MAIN_MENU.Gifts,
    subMenu: [],
    userMessage: {
      message: 'Gift cards'
    }
  },
  {
    name: MAIN_MENU.Stores,
    subMenu: []
  }
];
