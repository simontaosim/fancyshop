import React from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank, Flex} from 'antd-mobile';
import { Link } from 'react-router-dom';

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
        <div style = {{padding:'10px'}}>
          <span style = {{fontSize:'16px'}}>热门搜索</span><br/>
        <Flex justify = "start" wrap="wrap">
          <div style = {{backgroundColor:'#eee',padding:'6px 10px',borderRadius:'10px',margin:'5px 10px'}}>嘉实多</div>
          <div style = {{backgroundColor:'#eee',padding:'6px 10px',borderRadius:'10px',margin:'5px 10px'}}>车载手机支架</div>
          <div style = {{backgroundColor:'#eee',padding:'6px 10px',borderRadius:'10px',margin:'5px 10px'}}>车载香水</div>
          <div style = {{backgroundColor:'#eee',padding:'6px 10px',borderRadius:'10px',margin:'5px 10px'}}>嘉实多</div>
          <div style = {{backgroundColor:'#eee',padding:'6px 10px',borderRadius:'10px',margin:'5px 10px'}}>嘉实多</div>
          <div style = {{backgroundColor:'#eee',padding:'6px 10px',borderRadius:'10px',margin:'5px 10px'}}>嘉实多</div>
          <div style = {{backgroundColor:'#eee',padding:'6px 10px',borderRadius:'10px',margin:'5px 10px'}}>嘉实多</div>

        </Flex>
        </div>
      </div>
    )
  }
}

export default SearchBox;
