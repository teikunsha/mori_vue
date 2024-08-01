const state = {
    goods: [
    ]
}

const mutations = {
    addM: (state, data) => {
        console.log(data);
        // 如果商品已經存在於data, 就只加數量
        let result = state.goods.find((value) => value.name == data.name)
        if(result) {
            result.num++
        }else{
            state.goods.push({ //新增一個商品
                name: data.name,
                price: data.price,
                img: data.img,
                showingIcon: data.showingIcon,
                num: 1
            })
        }
    },
    delM: (state, data) => {
        // 找到陣列state.goods中符合data的元素 刪除
        state.goods.forEach((value,index,arr) => {
            if(value.name == data.name) {
                arr.splice(index, 1)
            }
        });
    }
}

const actions = {
    addA: (context, data) => {
        context.commit('addM', data)
    },
    delA: (context, data) => {
        context.commit('delM', data)
    }
}

const getters = {
    totalPrice: state => {
        return state.goods.reduce((total, value, arr) => {
            return total + value.num * value.price
        }, 0)
    }

}

export default {
    // vuex中的store分模塊管理，需要在store的index.js中引入各個模塊，
    // 為了解決不同模塊命名衝突的問題，將不同模塊的namespaced:true，
    //之後在不同頁面中引入getter,actions,mutations時，需要加上所屬的模塊名
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}