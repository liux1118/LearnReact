import React from 'react';
import {
  // Routes,
  // Route,
  Link,
  // NavLink,
  // Navigate,
  useRoutes,
  useNavigate
} from 'react-router-dom';

// import Home from './pages/Home';
// import About from './pages/About';
// import HomeRecommend from './pages/HomeRecommend';
// import HomeRanking from './pages/HomeRanking';

// import Login from './pages/Login';
// import NotFound from './pages/NotFound';

import routes from './router';

const App = () => {
  // hooks：useNavigate，只能函数组件内用
  // 必须放到顶层
  const navigate = useNavigate();

  function navigateTo(path) {
    navigate(path);
  }

  return (
    <div className="app">
      <div className="header">
        <h2>Header</h2>
        <div className="nav">
          <Link to="/home">首页</Link>
          {/* <Link to="/home/recommend">歌单推荐</Link>
          <Link to="/home/recommend">榜单数据</Link> */}
          <Link to="/about">关于</Link>
          <Link to="/login">登录</Link>
          <Link to="/user?name=Kylin&age=23">用户</Link>

          <button onClick={(e) => navigateTo('/category')}>分类</button>
          <span onClick={(e) => navigateTo('/order')}>订单</span>
        </div>
        <hr />
      </div>
      <div className="content">
        {/* 映射关系：path => component */}
        {/* <Routes>
          Navigate重定向
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />}>
            重定向
            <Route path="/home" element={<Navigate to="/home/recommend" />} />
            <Route path="/home/recommend" element={<HomeRecommend />}></Route>
            <Route path="/home/ranking" element={<HomeRanking />}></Route>
          </Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes> */}
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <hr />
        <h2>Footer</h2>
      </div>
    </div>
  );
};

export default App;
