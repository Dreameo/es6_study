// 定义方法， 设置哪些方法可以被其他js调用

export default {
    // 方法前面不需要function关键字了
    getList() {
        console.log('获取数据列表')
    }
    ,
    save() {
        console.log('保存数据')
    }
}
