import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { Flex, PullToRefresh,ListView,Icon} from "antd-mobile";
import styles from './GoodsList.css';
import goodsImg from '../../assets/img/reward/good.jpg';
import good2Img from '../../assets/img/timg.jpg';
import '../../service/data/datasource';
import axios from 'axios';
import { connect } from 'react-redux';
import { productList, product } from '../../reducers/product.redux';
import { productinfo } from '../../map_props';
import { productShow } from '../../reducers/product';
import { gainRecommandProducts } from '../../actions/products';
import { getProducts } from '../../actions/productsAction';
import { MClient } from '../../config/asteroid.config.js';



// let data = [];
class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      isLoading: false,
      data: [],
    };
  }

  componentDidMount() {
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
  }

  onRefresh = () => {
    console.log(1231213123123);
  };

  onEndReached = (event) => {
  const page = this.props.products.page+1
    let { dispatch } = this.props;
    this.setState({
      isLoading: true,
    });
    dispatch(getProducts(page,1,this.props.products.list));
  }

  render() {
    let {products} = this.props;
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }).cloneWithRows(products.list)
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    const row = (rowData, sectionID, rowID) => {
      return (
        <div key={rowData._id} style={{ padding: '0 15px' }}>
          <Link to={`/product/${rowData._id}`}>
            <div
              style={{
                lineHeight: '50px',
                color: '#888',
                fontSize: 18,
                borderBottom: '1px solid #F6F6F6',
              }}
            >{rowData.name_zh}</div>
            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
              <img style={{ height: '64px', marginRight: '15px' }} src={rowData.cover} alt="" />
              <div style={{ lineHeight: 1 }}>
                <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.description}</div>
                <div><span style={{ fontSize: '25px', color: '#FF6E27' }}><span style = {{color:'#FF6E27',fontSize:'20px',paddingRight:'5px'}}>¥</span>{rowData.price/100}</span></div>
              </div>
            </div>
          </Link>
        </div>
      );
    };
    return (
      <div style = {{width:'100%'}}>
      <ListView
        ref={el => this.lv = el}
        dataSource={dataSource}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? '加载中' : null}
        </div>)}
        renderRow={row}
        className="am-list"
        pageSize={1}
        useBodyScroll
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
        pullToRefresh={
          <PullToRefresh
            refreshing={false}
            onRefresh={this.onRefresh}
          />
        }
      />
      </div>
    );
  }
}
function mapProducts(state) {
  return {
    products: state.ProductsReducer
  }
}

export default connect(mapProducts)(GoodsList);
