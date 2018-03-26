import { MClient } from '../config/asteroid.config.js';

export const EXPECT_HOME_CONTENT = "EXPECT_HOME_CONTENT";
export const LOAD_HOME_CONTENT = "LOAD_HOME_CONTENT";
export const RECEIVE_HOME_CONTENT = "RECEIVE_HOME_CONTENT";



export function expectHomeContent(){
    return {
        type: EXPECT_HOME_CONTENT,
    }
}

export function loadHomeContent(){
    return dispatch => {
        dispatch(expectHomeContent());
        let methodId = MClient.method("fancyshop.home");
        MClient.on("result", message => {
            if (!message.error && message.result && message.result.fromMethod === "fancyshop.home") {
                console.log(message.result);
                
               dispatch(receiveHomeContent(message.result));
            }
        })
    }
}

export function receiveHomeContent(content){
    return {
        type: RECEIVE_HOME_CONTENT,
        content
    }
}