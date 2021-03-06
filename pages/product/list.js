const utils = require('../../utils/util.js')
Page({
    /**
     * 页面的初始数据
     */
    data: {
        product: {
            hidden: true,
            detail: {
                name: '产品名称：T恤'
            }
        },
        time: '2020-06-06 20:00:00',
        time2: '2020-06-07'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            time: utils.formatTime(new Date(this.data.time))
        })
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

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    chooseProduct(){
       this.setData({
           'product.hidden': false
       })
    },
    hideProduct(){
        this.setData({
            'product.hidden': true
        })
    },
    tplClickHandler(){
        this.setData({
            'product.detail.name': '帽子'
        })
    }
})