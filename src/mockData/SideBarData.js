import React from 'react';
import { VscHome, VscStarEmpty, VscArrowSmallLeft } from 'react-icons/vsc';

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <VscHome />,
    cName: 'nav-text'
  },

  {
    title: 'Fav Videos',
    path: '/Favorites',
    icon: <VscStarEmpty />,
    cName: 'nav-text'
  }
];
