import Mock from 'mockjs';


var Random = Mock.Random;
Random.extend({
    spec: function(date) {
        var specs = ['4L 白羊座', '3L 金牛座', '4L 双子座', '4L 巨蟹座', '3L 狮子座', '2L 处女座', '1L 天秤座', '2L 天蝎座', '1L 射手座', '4L 摩羯座', '6L 水瓶座', '7L 双鱼座']
        return this.pick(specs)
    },
    shop_name: function(date) {
        var shop_names = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
        return this.pick(shop_names)
    },
    bank: function(date) {
        var banks = ['建设银行','中国银行','招商银行','农业银行']
        return this.pick(banks)
    }
})
Random.spec()
Random.shop_name()
Random.bank()
let img = Random.image()
Mock.mock('@spec')
Mock.mock('@shop_name')
Mock.mock('@bank')
Mock.mock('/users',{'list|10':[{
        'id|+1': 1,
        name: '@name',
        "age|1-100": 1,
        first: '@FIRST',
        img: img
    }],
        'last': '@last'
    }
)

//订单列表
Mock.mock('/orderlist',{
    'list|3': [{
        name: '@name',
        spec: '@spec',
        'price|1-1000': 1,
        'num|1-100': 1
    }],
    shop_name:'@shop_name'
})


Mock.mock('/orderlist1',{
    'list|3': [{
        name: '@name',
        spec: '@spec',
        'price|1-1000': 1,
        'num|1-100': 1
    }],
    shop_name:'@shop_name'
})

Mock.mock('/orderlist2',{
    'list|3': [{
        name: '@name',
        spec: '@spec',
        'price|1-1000': 1,
        'num|1-100': 1
    }],
    shop_name:'@shop_name'
})


Mock.mock('/orderlist3',{
    'list|2': [{
        name: '@name',
        spec: '@spec',
        'price|1-1000': 1,
        'num|1-100': 1
    }],
    shop_name:'@shop_name'
})
//购物车
Mock.mock('/shop_car',{
    'list|1-3': [{
        img: img,
        spce: '@spec',
        name: '@name',
        'price|100-1000': 100,
        'num': 1
    }],
    shop_name: '@shop_name'
})
//提现
Mock.mock('/withdrawal',{
    'list|1-3': [{
        username: '@name',
        account: '@name',
        bank: '@bank',
        card_num: /\d{20}/ ,
        status: '@boolean'
    }]
})

//提现记录

Mock.mock('withdrawalRecord',{
    'list|1-3': [{
        price: /\d{6}/,
        status: '@boolean',
        amount: /\d{2}/,
        account: /\d{2}/
    }],
    'balance': /\d{2}/
})


//我的钱包
Mock.mock('/myWallet',{
    'income': /\d{2}/,
    'balance': /\d{2}/,
    'list|1-3': [{
        reason: '分销收入',
        amount: /\d{2}/,
        remark: '来自xxx的购买',
        time: Random.time('H')+'分钟前'
    }]
})
