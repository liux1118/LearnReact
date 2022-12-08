import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

import { addNumberAction } from '../store/features/counter';
// import { changeBanners, changeRecommends } from '../store/features/home';
// import store from '../store';

import { fetchHomeMultidataAction } from '../store/features/home';

export class Home extends PureComponent {
  componentDidMount() {
    // axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
    //   const data = res.data.data;
    //   const banners = data.banner.list;
    //   const recommends = data.recommend.list;

    //   store.dispatch(changeBanners(banners));
    //   store.dispatch(changeRecommends(recommends));
    // });

    this.props.fetchHomeMultidata();
  }
  addNumber(num) {
    this.props.addNumber(num);
  }

  render() {
    const { counter } = this.props;

    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <div>
          <button onClick={(e) => this.addNumber(1)}>+1</button>
          <button onClick={(e) => this.addNumber(5)}>+5</button>
          <button onClick={(e) => this.addNumber(10)}>+10</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
});

const mapDispatchToProps = (dispatch) => ({
  addNumber: (number) => dispatch(addNumberAction(number)),
  // 此处map，其他组件也可使用
  fetchHomeMultidata: () => dispatch(fetchHomeMultidataAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
