import React from 'react';
import {Link} from 'react-router-dom';
import { PullToRefresh,ListView} from "antd-mobile";
import '../../service/data/datasource';
import { connect } from 'react-redux';
import { gainRecommandProducts } from '../../actions/products';



// let data = [];
class GoodsList extends React.Component {
  constructor(props) {
    super(props);
    

    this.state = {
      // dataSource,
      isLoading: false,
      data: [],
      // page: 1,
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
   
  }

  onRefresh = () => {
    console.log(1231213123123);
  };

  onEndReached = (event) => {
    console.log(this.props.products)
  const page = this.props.products.page+1
    
    console.log(page);
    let { dispatch } = this.props;
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
    //  page += 1;
      
     dispatch(gainRecommandProducts(page,1,this.props.products.products));
      
    },1000)
    console.log('reach end', event);
  }

  render() {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    }).cloneWithRows(this.props.products.products)
    
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
    products: state.productShow
  }
}

export default connect(mapProducts)(GoodsList);
