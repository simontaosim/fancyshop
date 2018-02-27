import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { Flex, WingBlank, WhiteSpace,ListView, Icon} from "antd-mobile";
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
import { MClient } from '../../config/asteroid.config.js';



let page = 1;
// let data = [];
class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: false,
      data: [],
      // page: 1,
    };
  }

  componentDidMount() {
    // this.props.productList();
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    console.log(nextProps.recommandProducts);
    console.log(this.props.products.products)
    if (nextProps.recommandProducts !== this.props.products.products) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.recommandProducts.products),
        isLoading: false,
      });
    }else{
      console.log(1122)
    }
  }

  onEndReached = (event) => {
    console.log(page);
    let { dispatch } = this.props;
    this.setState({
      isLoading: true,
    });
    // MClient.subscribe('app.get.recommend.products',page,3);
    // MClient.connect();
    // let products = [];
    // MClient.ddp.on("added", ({collection, id, fields}) => {
    //   console.log(fields)
    //   if(collection==='products'){
    //     if(products.length< 3){
    //       fields.id = id
    //       products.push(fields)
    //     }
    //   }
    // })
    // console.log(data);
    // console.log(products);
    // data = data.slice().concat(products);
    // console.log(data);
    setTimeout(() => {
     page += 1;
      
     dispatch(gainRecommandProducts(page,10,this.props.products.products));
      
    },600)
    console.log('reach end', event);
    // this.setState({ isLoading: false });
  }

  render() {
  // console.log(history)
    
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
    // const data = this.state
    // let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      return (
        <div key={rowData.id} style={{ padding: '0 15px' }}>
          <Link to={`/product/${rowData.id}`}>
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
        dataSource={this.state.dataSource}
        // renderHeader={() => <span>header</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? <Icon type='loading' /> : null}
        </div>)}
        renderRow={row}
        // renderSeparator={separator}
        className="am-list"
        pageSize={1}
        useBodyScroll
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
      </div>
    );
  }
}
function mapProducts(state) {
  return {
    products: state.productShow
  }
}

export default connect(mapProducts)(GoodsList);
