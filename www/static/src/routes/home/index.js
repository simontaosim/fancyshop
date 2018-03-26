/*
  Author @Simon xsqfeather@gmail.com
  首页内容
*/
import React from 'react'
import { connect } from 'react-redux';
import { Flex, Carousel, WhiteSpace, Toast } from 'antd-mobile';
import {setAppTitle, setLeftBackTo} from '../../actions/app.js';
import './index.css';
import {getHomeTags} from '../../actions/app.js'
import { getProducts } from '../../actions/productsAction'; 
import { Link } from 'react-router-dom';
import { loadHomeContent } from '../../actions/home.js';



class AppHome extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      data: ['','',''],
      good: [],
      shops: [],
    }

  }
  componentDidMount(){
    const { dispatch, content } = this.props;
    dispatch(setLeftBackTo(""));
    setTimeout(() => {
     this.setState({
       data: ['banner1.jpeg', 'banner2.jpeg', 'banner3.jpeg'],
     });
   }, 100);
   if (content.products.length === 0) {
      dispatch(loadHomeContent());
      
    } else {
      return Toast.loading("载入中");
    }
    dispatch(setAppTitle(this.props.path));
  }

  componentWillReceiveProps(nextProps){
    const { dispatch, content } = nextProps;
    if(content.loading){
      Toast.loading("载入中");
    }else{
      Toast.hide();
    }
    
    
  }

  render(){
   
    const { content, dispatch } = this.props;
    let cardId = content.card._id;
    let carShopId = content.card.shopId;
    return (
        <Flex  direction="column" className="flex-container ">
            <Carousel
              autoplay={false}
              infinite
              selectedIndex={1}
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
              {this.state.data.map(ii => (
                <Link
                  key={ii}
                  to={"/product/"+cardId}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={`http://wanchehui.oss-cn-qingdao.aliyuncs.com/static/${ii}`}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'top' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </Link>
              ))}
            </Carousel>
            <WhiteSpace/>

          <Flex  direction="row" align="center" justify="around" style={{width: "100%"}}>
            <Flex direction="row" justify="around" align="center" style={{background: "brown", color: "white",width: "50%",height: "100px"}} >
              <Link style={{color: "white"}}  to={"/facilitator/"+carShopId}>万人车汇自营店</Link>
            </Flex>
            <Flex  direction="column"  align="center" style={{height: "100px", width: "50%"}}>
              <Flex justify="around" style={{height: "49px", background: "white", color: "grey", width: "100%"}}>收入排行</Flex>
              <Flex justify="around" style={{height: "49px", background: "grey", color: "white", width: "100%"}}>成为会员</Flex>
            </Flex>
          </Flex>

          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />

        </Flex>
    )
  }
}
function indexHome(state){
  return {
    appInfo: state.AppInfo,
    content: state.Home
  }
}
export default connect(indexHome)(AppHome);
