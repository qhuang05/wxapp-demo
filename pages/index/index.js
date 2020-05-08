Page({
    data: {
        // swiper数据
        banners: [
            { image: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', bgcolor: '#1AAD19', text: 'A' },
            { image: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', bgcolor: '#2782D7', text: 'B' },
            { image: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', bgcolor: '#F1F1F1', text: 'C' }
        ],
        fileInfo:"",
        codeInfo:"",
        addressInfo:"",
    },
    onLoad() {
        // 显示当前页面的转发按钮
        wx.showShareMenu({
            withShareTicket: true
        })
    },
    // 标签切换
    toCartPage(){
        wx.switchTab({
            url: '/pages/cart/cart',
            success: function () { },
            fail: function () { }
        })
    },
    // 页面跳转
    toMoviePage(){
        wx.navigateTo({
            url: '/pages/movies/movies',
        })
    },
    // 返回顶部
    toTop(){
        wx.pageScrollTo({
            scrollTop: 0,
            // selector: '#banner'
        })
    },
    // 上传图片
    fileUpload() {
        let self = this;
        wx.chooseImage({
            sourceType: ['album'],
            success(res) {
                self.setData({
                    fileInfo: JSON.stringify(res)
                })
                const tempFilePaths = res.tempFilePaths;
                console.log(tempFilePaths);
                wx.uploadFile({
                    url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
                    filePath: tempFilePaths[0],
                    name: 'file',
                    formData: {
                        'user': 'test'
                    },
                    success(res) {
                        const data = res.data
                        wx.showModal({
                            title: '提示',
                            content: JOSN.stringify(data),
                            success(res) {
                                if (res.confirm) {
                                    console.log('用户点击确定')
                                } else if (res.cancel) {
                                    console.log('用户点击取消')
                                }
                            }
                        })
                    }
                })
            }
        })
    },
    // 扫一扫
    codeScan() {
        let self = this;
        wx.scanCode({
            success(res) {
                self.setData({
                    codeInfo: JSON.stringify(res)
                })
            }
        })
    },
    // 地址选择
    addressChoose(){
        let self = this;
        wx.chooseAddress({
            success(res){
                self.setData({
                    addressInfo: JSON.stringify(res)
                })
            }
        })
    },
    // 获取地理位置
    locationFetch(){
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success(res) {
                const latitude = res.latitude
                const longitude = res.longitude;
                wx.openLocation({
                    latitude,
                    longitude,
                    scale: 18
                })
            }
        });
    }
})