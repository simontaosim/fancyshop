import { EXPECT_HOME_CONTENT, RECEIVE_HOME_CONTENT } from "../actions/home";


export default function Home
(
    state=
    {
        products: [],
        card: {},
        shops: [],
        tags: [],
        categories: [],
        loading: "false"
    }, action
)
{
    switch(action.type){
        case EXPECT_HOME_CONTENT:
        return Object.assign({}, state, {
            loading: true,
        });
        case RECEIVE_HOME_CONTENT:
        return Object.assign({}, state, {
            loading: false,
            products: action.content.products,
            card: action.content.card,
        });
        default:
        return state;
    }

}