import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { subNumberAction } from '../store/features/counter';

export class Profile extends PureComponent {
  subNumber(num) {
    this.props.subNumber(num);
  }

  render() {
    const { counter, banners, recommends } = this.props;

    return (
      <div>
        <h2>Profile Counter: {counter}</h2>
        <div>
          <button onClick={(e) => this.subNumber(1)}>-1</button>
          <button onClick={(e) => this.subNumber(5)}>-5</button>
          <button onClick={(e) => this.subNumber(10)}>-10</button>
        </div>
        <div className="banners">
          <h2>轮播图数据：</h2>
          <ul>
            {banners.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
        <div className="recommends">
          <h2>推荐数据：</h2>
          <ul>
            {recommends.map((item, index) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends: state.home.recommends
});

const mapDispatchToProps = (dispatch) => ({
  subNumber: (number) => dispatch(subNumberAction(number))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
