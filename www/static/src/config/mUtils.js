/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
    console.log(name);
    if (!name) return;
    if (typeof content !== 'string') {
      content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
    console.log(`${name},${content}`);
  }
  
  /**
   * 获取localStorage
   */
  export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
  }
  
  /**
   * 删除localStorage
   */
  export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
  }
  

  
 
 

  
  
  
 