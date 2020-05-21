const Products = require('../../data/product.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [],
        activeTab: 0,
        list: [],
        loading: false,
        minHeight:0,
        isInit: true,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const tabs = [
            {id: 1001, title: '首页'},
            {id: 1002, title: '外卖'},
            {id: 1003, title: '商超生鲜'},
            {id: 1004, title: '美食饮品'},
            {id: 1005, title: '生活服务'},
            {id: 1006, title: '休闲娱乐'},
            {id: 1007, title: '出行'},
        ];
        this.setData({ tabs });
        this.getList(this.data.activeTab, true);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        this.getList(this.data.activeTab, false);
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    onTabClick(e) {
        const index = e.detail.index
        this.setData({ activeTab: index })
    },

    onChange(e) {
        const index = e.detail.index
        this.setData({ activeTab: index });
        this.getList(this.data.activeTab, true);
        
        // if(this.data.minHeight==0){
        //     const self = this;
        //     const query = wx.createSelectorQuery();
        //     query.select('#header').boundingClientRect();
        //     query.select('#fixedTabs').boundingClientRect();
        //     query.selectViewport().scrollOffset();
        //     query.exec(function (res) {
        //         console.log(res, res[0].height + res[1].height);
        //         self.setData({ minHeight: (res[0].height + res[1].height - 50)+'px' });
        //     });
        // }
    },

    getList(tabIndex, isReload){
        if(isReload){
            this.setData({ list: [] });
        }
        this.setData({ loading: true });
        let length = this.data.list.length;
        setTimeout(()=>{
            this.setData({
               [`list[${length}]`]: [...Products],
               loading: false,
            });
            if(isReload && !this.data.isInit){
                // wx.pageScrollTo({
                //     scrollTop: 240,
                //     duration: 0
                // });
            }
            this.setData({ isInit: false })
        }, 1000);
    }
})