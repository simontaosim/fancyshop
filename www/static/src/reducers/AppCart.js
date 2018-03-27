import { ADD_PRODUCTS_TO_APP_CART } from "../actions/app_cart";

// EDIT BY SIMON
export default function AppCart
(
    state={
        count: 0,
        productIds: [],//[id, id, id]
        products: [],
        shopIds:[],//[shopId, shopId, shopId]
        shopNames: [],
        shopProducts: {},//"shopId": [1,2,3]
        productCounts: {},//"productId": countNumber,
        productChecks: {},//"productId": "false",
        shopChecks: {},//"shopId": "false",
        status: "all-unselected",
        isCurrent: false,
        userId: null,
        newComing: "false",
        totalAmount: 0,
    }
)
{

    switch (action.type) {
        case ADD_PRODUCTS_TO_APP_CART:
            let productIds = state.productIds;
            let products = state.products;
            let shopIds = state.shopIds;
            let shopNames = state.shopNames;

            let newProductId = action.product._id;
            let newProduct = action.product;
            let newShopId = action.product.shopId;
            let newShopName = action.shopName;

            productIds.push(newProductId);
            products.push(newProduct);
            shopIds.push(newShopId);
            shopNames.push(newShopName);


            //deal shopProducts 
            let shopProducts = state.shopProducts;
            let newProductIndex = productIds.indexOf(newProductId);
            let productIndexs = shopProducts[newShopId];
            if (!productIndexs) {
                productIndexs=[];
            }
            productIndexs.push(newProductIndex);

            shopProducts[newShopId] = productIndexs;

            //deal products account

            let productCounts = state.productCounts;
            let productCount = productCounts[newProductId];

            if(!productCount){
                productCount = action.count;
            }else{
                productCount += action.count;
            }
            productCounts[newProductId] = productCount;

            //init check

            let shopChecks = state.shopChecks;
            shopChecks[newShopId] = false;

            let productChecks = state.productChecks;
            productChecks[newProductId] = false;

            //other

            let count = state.count;

            count += action.acount;




            return Object.assign({}, state, {
                count: 0,
                productIds,
                products,
                shopIds,
                shopNames,
                shopProducts,
                productCounts,
                productChecks,
                shopChecks,
                status: "all-unselected",
                totalAmount: 0,
            })
    
        default:
            break;
    }


}