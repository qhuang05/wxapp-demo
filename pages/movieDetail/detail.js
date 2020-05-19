const movieInfo = {
    src: "http://vali.cp31.ott.cibntv.net/youku/67733D1453741719DBF414C53/03000801005AC32A877B6C003E8803898A50A7-4AA2-D56A-8779-C0AC02483896.mp4?sid=052523731095219522262_00_Adb554c5b9330dcfc17e172878984aac2&amp;sign=35860c09f57a1703763a7d20a6226b08&amp;ctype=50&amp;hd=1",
    "title": '哈里波特',
    "rate": '8.6',
    "type": '科幻,悬疑/2016',
    "desc": "从小寄养在姨丈家里的哈利波特，饱受姨父一家人的歧视与欺侮，然而就在11岁生日那天，哈利波特得知了自己的身世，他的生活也随之发生了天翻地覆的改变。原来，哈利的父母是两位巫师，在同黑巫师的较量中被杀害了。\n......"
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        movie: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        const { id } = options;
        this.getMovieInfo(id)
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

    getMovieInfo(id) {
        wx.showLoading();
        // wx.request
        setTimeout(() => {
            this.setData({
                movie: Object.assign({}, movieInfo)
            });
            wx.hideLoading();
        }, 1000);
    }
})