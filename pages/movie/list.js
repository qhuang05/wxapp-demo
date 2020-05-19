const Movies = require('../../data/movie.js');
Page({
    data: {
        loading: false,
        list: [],
        page: 1,
        perPage: 6
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getList();
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
        wx.showNavigationBarLoading();
        this.setData({
            page: 1,
            list: []
        });
        this.getList(true, ()=>{
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        });
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        let { page } = this.data;
        this.setData({ page: ++page });
        this.getList();
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    getList(isRefresh, callback){
        let {page, perPage} = this.data;
        if(!isRefresh){
            this.setData({loading:true});
        }
        // wx.request({
        //     url: '',
        //     success: (res) => {}
        // })
        setTimeout(()=>{
            const newData = [...Movies];
            this.setData({
                loading: false,
                list: [...this.data.list, ...newData]
            });
            if(callback){
                callback();
            }
        }, 1000);
    },

    showDetail(event){
        let id = event.currentTarget.dataset.id;
        wx.navigateTo({
            url: `/pages/movieDetail/detail?id=${id}`,
        })
    }
})