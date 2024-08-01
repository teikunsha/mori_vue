const state = {
    goods: [
        {
            name: '木紋圓盤',
            price: 250,
            img: require('@/assets/img/osara_1.jpeg'),
            showingIcon: false
        },
        {
            name: '胡桃木時鐘',
            price: 990,
            img: require('@/assets/img/clock_1.jpeg'),
            showingIcon: false
        },
        {
            name: '橡木燈罩',
            price: 450,
            img: require('@/assets/img/lamp_1.jpeg'),
            showingIcon: false
        },
        {
            name: '貓咪造型開關蓋',
            price: 250,
            img: require('@/assets/img/cover_1.jpeg'),
            showingIcon: false
        },
        {
            name: '雪松木雙抽屜桌',
            price: 2500,
            img: require('@/assets/img/table_1.jpeg'),
            showingIcon: false
        }
    ],
    name: ''
}
    //修改state中的資料
const mutations = {
    // 修改 state 中的 name
    // 將傳遞進來的 n 傳遞給 name
    searchM: (state, n) => state.name = n

}
    // 非同步修改
const actions = {
    searchA:(context, n) => {context.commit('searchM', n)}
}
    // 取得計算屬性
const getters = {
    // showGoods 根據state.name的值變化
    showGoods: state => {
        if(state.name.trim() == '') {
            return state.goods
        }else{
            // 傳入的value.name
            console.log(state.name);
            return state.goods.filter(value=>value.name.indexOf(state.name)!=-1)
        }
    } 
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}