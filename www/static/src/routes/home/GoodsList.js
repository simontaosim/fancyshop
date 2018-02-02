import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { Flex, WingBlank, WhiteSpace,ListView} from "antd-mobile";
import styles from './GoodsList.css';
import goodsImg from '../../assets/img/reward/good.jpg';
import good2Img from '../../assets/img/timg.jpg';
import '../../service/data/datasource';
import axios from 'axios';
import { connect } from 'react-redux';
import { productList } from '../../reducers/product.redux';
import { productinfo } from '../../map_props';



let page = 1;
class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: false,
      data: []
    };
  }

  componentDidMount() {
    this.props.productList();
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.prodcut !== this.props.product) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.product.goods),
        isLoading: false,
      });
    }else{
      console.log(1122)
    }
  }

  onEndReached = (event) => {
    console.log('reach end', event);
    this.setState({ isLoading: false });
  }

  render() {
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
    const data = this.state
    let index = data.length - 1;
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
            >{rowData.name}</div>
            <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
              <img style={{ height: '64px', marginRight: '15px' }} src={rowData.cover} alt="" />
              <div style={{ lineHeight: 1 }}>
                <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{rowData.description}</div>
                <div><span style={{ fontSize: '25px', color: '#FF6E27' }}><span style = {{color:'#FF6E27',fontSize:'20px',paddingRight:'5px'}}>¥</span>{rowData.price}</span></div>
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
          {this.state.isLoading ? 'Loading...' : '加载完成'}
        </div>)}
        renderRow={row}
        // renderSeparator={separator}
        className="am-list"
        pageSize={4}
        useBodyScroll
        onScroll={() => { console.log('scroll'); }}
        scrollRenderAheadDistance={500}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
      </div>
    );
  }
}

export default connect(productinfo,{productList})(GoodsList);
