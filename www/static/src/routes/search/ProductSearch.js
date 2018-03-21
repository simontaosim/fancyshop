import React from 'react';
import { SearchBar, Flex} from 'antd-mobile';
import { Link } from 'react-router-dom';
import s from './ProductSearch.css';

class SearchBox extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.handleEnterKey);
  }
  componentWillUmount() {
    document.removeEventListener("keydown", this.handleEenterKey);
  }
  handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      console.log(123);
    }
  }
  render(){
    return(
      <div>
        {/* <Link to = "/searchresult"> */}
          <SearchBar placeholder="Search" maxLength={8} />
        {/* </Link> */}
        <div className = {s['search-item']}>
          <span className = {s['search-title']}>热门搜索</span><br/>
        <Flex justify = "start" wrap="wrap">
          <div className = {s['search-text']}>嘉实多</div>
          <div className = {s['search-text']}>车载手机支架</div>
          <div className = {s['search-text']}>车载香水</div>
          <div className = {s['search-text']}>嘉实多</div>
          <div className = {s['search-text']}>嘉实多</div>
          <div className = {s['search-text']}>嘉实多</div>
          <div className = {s['search-text']}>嘉实多</div>
        </Flex>
        </div>
      </div>
    )
  }
}

export default SearchBox;
