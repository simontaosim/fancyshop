import { RECEIVE_PRODUCT_BYID,ADD_COUNT,RECEIVE_SHOP_PRODUCTS_BYSHOPID,GET_RECOMMAND_PRODUCTS} from '../actions/products.js'
const initState = {
	product:{
    "_id" : null,
  	"isSale" : true,
  	"name_zh" : "",
  	"name" : "",
  	"price" : NaN,
  	"description" : "",
  	"brief" : "",
  	"images" : [
  		""
  	],
  	"cover" : "",
  	"shopId" : null,
  	"createdByUserId" : null,
  	"properties" : [ ],
  	"specifications" : [ ],
  	"endPrice" : NaN,
  	"curency" : "cny",
  	"agencyLevelCount" : NaN,
  	"agencyLevelPrices" : [
  		NaN,
  		NaN
  	],
  	"hasSoldCount" : NaN,
  	"acl" : {
  		"own" : {
  			"roles" : [
  				"shop_owner"
  			],
  			"users" : [ ]
  		},
  		"read" : {
  			"roles" : [
  				"nobody",
  				"login_user"
  			]
  		},
  		"write" : {
  			"roles" : [
  				"shop_owner",
  				"shop_manager"
  			],
  			"users" : [ ]
  		},
  		"buy" : {
  			"roles" : [
  				"login_user"
  			]
  		}
  	},
  	"createdAt" : null,
  	"isTool" : false,
  	"roleName" : "",
		"categoryId" : null,
	},
	"deliver": "自提",
	"address": "四川 成都",
	"inventory": 39,
	"sales": 74,
	"count": 1,
	products: [],
	shopProducts: [],
	page: 1,
}

export function productShow(state=initState, action){
    switch (action.type) {
			case  RECEIVE_PRODUCT_BYID:
				return Object.assign({},state,{
					product: action.product
				})
			case ADD_COUNT:
				return Object.assign({},state,{ 
					count: action.count
					})
			case RECEIVE_SHOP_PRODUCTS_BYSHOPID:
				return Object.assign({},state,{
					shopProducts: action.products
				})
			case GET_RECOMMAND_PRODUCTS:
				return Object.assign({},state,{
					products: action.products,
					page: action.page
				})
      		default:
				return state
    }
  }
