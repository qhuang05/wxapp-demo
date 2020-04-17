Page({
    data: {
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
    },
    onLoad() {
        // wx.showToast({
        //     title: '成功',
        //     icon: 'success',
        //     duration: 2000
        // })
        // wx.showModal({
        //     title: '提示',
        //     content: '这是一个模态弹窗',
        //     success(res) {
        //         if (res.confirm) {
        //             console.log('用户点击确定')
        //         } else if (res.cancel) {
        //             console.log('用户点击取消')
        //         }
        //     }
        // })
        // wx.showLoading({
        //     title: '加载中',
        // })
        // wx.showActionSheet({
        //     itemList: ['A', 'B', 'C'],
        //     success(res) {
        //         console.log(res.tapIndex)
        //     },
        //     fail(res) {
        //         console.log(res.errMsg)
        //     }
        // })
        // wx.showNavigationBarLoading()
        // wx.setNavigationBarTitle({
        //     title: '当前页面'
        // })
        // wx.setNavigationBarColor({
        //     frontColor: '#ffffff',
        //     backgroundColor: '#ff0000',
        //     animation: {
        //         duration: 400,
        //         timingFunc: 'easeIn'
        //     }
        // })
        // wx.setTopBarText({
        //     text: 'hello, world!'
        // })

        // wx.getLocation({
        //     type: 'gcj02', //返回可以用于wx.openLocation的经纬度
        //     success(res) {
        //         const latitude = res.latitude
        //         const longitude = res.longitude
        //         wx.openLocation({
        //             latitude,
        //             longitude,
        //             scale: 18
        //         })
        //     }
        // })

        // wx.showShareMenu({
        //     withShareTicket: false
        // })
    },
    onShow() {},
    showEnv() {
        // wx.switchTab({
        //     url: '/pages/cart/cart',
        //     success: function(){
        //     },
        //     fail: function(){
        //     }
        // })
    },
    clickHandler(){
        // wx.chooseAddress({
        //     success(res) {
        //         wx.showToast({
        //             title: res.telNumber,
        //             icon: 'success',
        //             duration: 2000
        //         })
        //         console.log(res.userName)
        //         console.log(res.postalCode)
        //         console.log(res.provinceName)
        //         console.log(res.cityName)
        //         console.log(res.countyName)
        //         console.log(res.detailInfo)
        //         console.log(res.nationalCode)
        //         console.log(res.telNumber)
        //     }
        // });

        wx.scanCode({
            success(res) {
                wx.showModal({
                    title: '提示',
                    content: JSON.stringify(res),
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
    },
    gotoTop(){
        wx.pageScrollTo({
            selector: '#tt2'
        })
    },
    fileUpload(){
        wx.chooseImage({
            sourceType: ['album'],
            success(res) {
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
                        //do something
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
    }
})