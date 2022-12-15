import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams
} from 'react-router-dom';

// 高阶组件: 函数
function withRouter(WrapperComponent) {
  return function (props) {
    // 1.导航
    const navigate = useNavigate();

    // 2.动态路由的参数: /detail/:id
    const params = useParams();

    // 3.查询字符串的参数: /user?name=why&age=18
    // （1）
    const location = useLocation();

    // （2）
    const [searchParams] = useSearchParams();
    // 转成普通对象
    const query = Object.fromEntries(searchParams);

    const router = { navigate, params, location, query };

    return <WrapperComponent {...props} router={router} />;
  };
}

export default withRouter;
