import React from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank, Flex} from 'antd-mobile';
import { Link } from 'react-router-dom';
import s from './ProductSearch.css';

class SearchBox extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div>
        <Link to = "/searchresult">
          <SearchBar placeholder="Search" maxLength={8} />
        </Link>
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
