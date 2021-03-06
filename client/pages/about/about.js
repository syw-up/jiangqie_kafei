/*
 * 酱茄小程序开源版 v1.0.8
 * Author: 酱茄
 * Help document: https://www.jiangqie.com/docs/kaiyuan/id1
 * github: https://github.com/longwenjunjie/jiangqie_kafei
 * gitee: https://gitee.com/longwenjunj/jiangqie_kafei
 * License：MIT
 * Copyright ️ 2020 www.jiangqie.com All rights reserved.
 */

const Constant = require('../../utils/constants');

Page({
    data: {
        version: Constant.JQ_VERSION
    },

    onLoad: function (options) {

    },

    copy: function (e) {
        let text = e.currentTarget.dataset.text;
        wx.setClipboardData({
            data: text,
            success(res) {
                wx.getClipboardData({
                    success(res) {
                        wx.showToast({
                            title: '微信号已复制',
                        });
                    }
                })
            }
        })
    },

    tipClick: function () {
        wx.showToast({
            icon: 'none',
            title: '酱茄小程序开源版 v1.0.8',
        })
    }
})