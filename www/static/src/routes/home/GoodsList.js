import React from 'react';
import {Link} from 'react-router-dom';
import { PullToRefresh,ListView} from "antd-mobile";
import '../../service/data/datasource';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productsAction';



// let data = [];
class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      isLoading: false,
      data: [],
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  onRefresh = () => {
  };

  onEndReached = (event) => {
    let { dispatch,products} = this.props;
    const page = products.page + 1
    this.setState({
      isLoading: true,
    });
    console.log(page);
    dispatch(getProducts(page, products.pagesize,this.props.products.list));
  }

  render() {
    let {products} = this.props;
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }).cloneWithRows(products.list)
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
            <div style={{ display: 'flex', padding: '15px 0' }}>
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
