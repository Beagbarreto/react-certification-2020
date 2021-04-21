import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },

  {
    title: 'Favorites',
    path: '/Favorites',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  }
];
