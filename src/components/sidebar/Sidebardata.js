import React from 'react';
import { FaBuysellads, FaSellcast, FaUsersCog } from 'react-icons/fa';
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineLogout,
} from 'react-icons/ai';
import { IoIosBarcode } from 'react-icons/io';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { BiSupport } from 'react-icons/bi';

export const SideBarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiOutlineDashboard />,
  },
  {
    title: 'Products',
    icon: <AiOutlineShoppingCart />,
    iconClosed: <RiArrowDownSFill />,
    iconOpened: <RiArrowUpSFill />,
    subNav: [
      {
        title: 'Manage products',
        path: '/manageproducts',
        icon: <FaBuysellads />,
      },
      {
        title: 'Sell products',
        path: '/sellproducts',
        icon: <FaSellcast />,
      },
    ],
  },

  {
    title: 'Manage users',
    path: '/users',
    icon: <FaUsersCog />,
  },
  {
    title: 'Advanced',
    path: '/advanced',
    icon: <IoIosBarcode />,
  },
  {
    title: 'Support',
    path: '/support',
    icon: <BiSupport />,
  },
  {
    title: 'Logout',
    path: '/login',
    icon: <AiOutlineLogout />,
  },
];
