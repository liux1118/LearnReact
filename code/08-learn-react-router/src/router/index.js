import React from 'react';
import { Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import HomeRecommend from '../pages/HomeRecommend';
import HomeRanking from '../pages/HomeRanking';
import HomeSongMenu from '../pages/HomeSongMenu';
import Category from '../pages/Category';
import Order from '../pages/Order';
import Detail from '../pages/Detail';
import User from '../pages/User';
// import About from "../pages/About"
// import Login from "../pages/Login"
import NotFound from '../pages/NotFound';

// 分包处理 懒加载
const About = React.lazy(() => import('../pages/About'));
const Login = React.lazy(() => import('../pages/Login'));

const routes = [
  {
    path: '/',
    // 重定向
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to="/home/recommend" />
      },
      {
        path: '/home/recommend',
        element: <HomeRecommend />
      },
      {
        path: '/home/ranking',
        element: <HomeRanking />
      },
      {
        path: '/home/songmenu',
        element: <HomeSongMenu />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/category',
    element: <Category />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  },
  {
    path: '/order',
    element: <Order />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default routes;
