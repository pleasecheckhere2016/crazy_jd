(window.webpackJsonp = window.webpackJsonp || []).push([[15, 3, 24], Array(29).concat([function (e, t, a) {
    "use strict";
    a.r(t);
    var n = a(0)
        , o = a(1)
        , i = a(205)
        , r = a(54)
        , s = a(206)
        , c = a(158)
        , l = a(7)
        , p = a(8)
        , u = a(147)
        , d = a(146)
        , m = a(85)
        , h = a(201)
        , f = a(53)
        , g = a(159)
        , _ = a(202)
        , b = a(52)
        , y = a(35)
        , j = a.n(y)
        , v = a(33)
        , E = a(3)
        , k = function canvasToTempFilePath(e, t) {
        var a = e.canvasId
            , o = e.fileType
            , i = e.quality
            , r = e.success
            , s = e.fail
            , c = e.complete
            , l = "__taroref_" + a
            , p = Object(E.e)(l, t)
            , u = Object(n.k)(p);
        try {
            var d = {
                "tempFilePath": u.querySelector("[canvasId=" + a + "]").toDataURL("image/" + (o || "png"), i),
                "res": "canvasToTempFilePath:ok"
            };
            return r && r(d),
            c && c(),
                Promise.resolve(d)
        } catch (e) {
            var m = {
                "errMsg": e.message
            };
            return s && s(m),
            c && c(),
                Promise.reject(m)
        }
    }
        , w = function () {
        return function (e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function sliceIterator(e, t) {
                    var a = []
                        , n = !0
                        , o = !1
                        , i = void 0;
                    try {
                        for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (a.push(r.value),
                        !t || a.length !== t); n = !0)
                            ;
                    } catch (e) {
                        o = !0,
                            i = e
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    return a
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
        , D = function createCanvasContext(e, t) {
        var a = "__taroref_" + e
            , o = Object(E.e)(a, t)
            , i = Object(n.k)(o).querySelector("[canvasId=" + e + "]")
            , r = i.getContext("2d")
            , s = []
            , c = function enqueueActions(e) {
            return function () {
                for (var t = arguments.length, a = Array(t), n = 0; n < t; n++)
                    a[n] = arguments[n];
                s.push({
                    "func": e,
                    "args": a
                })
            }
        }
            , l = {};
        return [["setFillStyle", function (e) {
            r.fillStyle = e
        }
        ], ["setFontSize", function (e) {
            r.font = e
        }
        ], ["setGlobalAlpha", function (e) {
            r.globalAlpha = e
        }
        ], ["setLineDash", function (e, t) {
            r.setLineDash(e),
                r.lineDashOffset = t
        }
        ], ["setLineCap", function (e) {
            r.lineCap = e
        }
        ], ["setLineJoin", function (e) {
            r.lineJoin = e
        }
        ], ["setLineWidth", function (e) {
            r.lineWidth = e
        }
        ], ["setMiterLimit", function (e) {
            r.miterLimit = e
        }
        ], ["setShadow", function (e, t, a, n) {
            r.shadowOffsetX = e,
                r.shadowOffsetY = t,
                r.shadowColor = a,
                r.shadowBlur = n
        }
        ], ["setStrokeStyle", function (e) {
            r.strokeStyle = e
        }
        ], ["setTextAlign", function (e) {
            r.textAlign = e
        }
        ], ["setTextBaseline", function (e) {
            r.textBaseline = e
        }
        ]].forEach(function (e) {
            var t = w(e, 2)
                , a = t[0]
                , n = t[1];
            Object.defineProperty(l, a, {
                "get": function get() {
                    return c(n)
                },
                "enumerable": !0
            })
        }),
            [["arc"], ["arcTo"], ["beginPath"], ["bezierCurveTo"], ["clearRect"], ["clip"], ["closePath"], ["createCircularGradient"], ["createLinearGradient"], ["createPattern"], ["drawImage"], ["fill"], ["fillRect"], ["fillText"], ["lineTo"], ["measureText", !0], ["moveTo"], ["quadraticCurveTo"], ["rect"], ["restore"], ["rotate"], ["save"], ["scale"], ["setTransform"], ["stroke"], ["strokeRect"], ["strokeText"], ["transform"], ["translate"]].forEach(function (e) {
                var t = w(e, 2)
                    , a = t[0]
                    , n = t[1];
                Object.defineProperty(l, a, {
                    "get": n ? function () {
                            return r[a].bind(r)
                        }
                        : function () {
                            return c(r[a])
                        }
                    ,
                    "enumerable": !0
                })
            }),
            ["fillStyle", "font", "globalAlpha", "lineCap", "lineDashOffset", "lineJoin", "lineWidth", "miterLimit", "shadowOffsetX", "shadowOffsetY", "shadowColor", "shadowBlur", "strokeStyle", "textAlign", "textBaseline", "direction", "globalCompositeOperation", "imageSmoothingEnabled ", "imageSmoothingQuality", "filter"].forEach(function (e) {
                Object.defineProperty(l, e, {
                    "get": function get() {
                        return r[e]
                    },
                    "set": function set(t) {
                        return c(function () {
                            r[e] = t
                        })(),
                            !0
                    }
                })
            }),
            Object.defineProperty(l, "draw", {
                "value": function draw() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                        , t = arguments[1];
                    try {
                        return e || r.clearRect(0, 0, i.width, i.height),
                            s.forEach(function (e) {
                                var t = e.func
                                    , a = e.args;
                                t.apply(r, a)
                            }),
                            function emptyActions() {
                                s.length = 0
                            }(),
                        t && t(),
                            Promise.resolve()
                    } catch (e) {
                        return Promise.reject({
                            "errMsg": e.message
                        })
                    }
                }
            }),
            l
    }
        , T = (a(83),
        function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }());
    var N, A, x, M, S, C, P, I, O, F, R, z = void 0;
    z = a(64),
        N = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-1.png?Expires=1765701346&AccessKey=3zEbsL6yqjndEXUe&Signature=cxpbvLD4LLL%2FqEWEc0C0fhVCJdo%3D",
        A = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-2.png?Expires=1765701392&AccessKey=3zEbsL6yqjndEXUe&Signature=phisk0yMzVjKmngCRpru25Mnh1k%3D",
        x = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-3.png?Expires=1765701419&AccessKey=3zEbsL6yqjndEXUe&Signature=vt9H105yz2iXeyz1Zb6Hf8%2F6WV0%3D",
        M = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-4.png?Expires=1765701447&AccessKey=3zEbsL6yqjndEXUe&Signature=a7RlUF4A%2BstUybbxJyr0xS9mt94%3D",
        S = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-5.png?Expires=1765701480&AccessKey=3zEbsL6yqjndEXUe&Signature=Q1Iz6WQu%2Fby221JiO92I%2FtUkCHY%3D",
        C = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-6.png?Expires=1765701505&AccessKey=3zEbsL6yqjndEXUe&Signature=BD%2FYHgYsf72b8cBHBAyE6WONXXQ%3D",
        P = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-7.png?Expires=1765701528&AccessKey=3zEbsL6yqjndEXUe&Signature=ayg3uXTTw%2B%2FIgbKHUCLThs9EE%2B4%3D",
        I = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-8.png?Expires=1765701564&AccessKey=3zEbsL6yqjndEXUe&Signature=b5P5W8ZtK%2Bx%2F9enIZgdub3Q3LFg%3D",
        O = "https://storage.360buyimg.com/bucket-babel-dog/cake_dog9.png?Expires=1765701288&AccessKey=3zEbsL6yqjndEXUe&Signature=zylbfZOBf7%2FShvDVD6XvL2amS7U%3D",
        F = "https://img11.360buyimg.com/imagetools/jfs/t1/157722/21/9415/22693/603c91a9E16c450ff/7a85a34a49cfa7cf.png",
        R = "https://storage.360buyimg.com/bucket-babel-dog/qr.png?Expires=1765716136&AccessKey=3zEbsL6yqjndEXUe&Signature=ORUuGvZuuR6aCciEVDBtp2A6F6U%3D";
    var U = function (e) {
        function ShareImg(e) {
            !function _classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, ShareImg);
            var t = function _possibleConstructorReturn(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (ShareImg.__proto__ || Object.getPrototypeOf(ShareImg)).call(this, e));
            return t.state = {
                "isOpenSet": !1,
                "shareImgBase64": "",
                "showImg": !1,
                "shareh5Img": "",
                "shareAppImg": "",
                "shareName": "",
                "shareBackgroundColor": "",
                "age": 0,
                "currYearText": "",
                "currYear": "",
                "currMonth": "",
                "currDay": "",
                "qr": null,
                "shareImgIcon": "",
                "wxQr": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/wx-jddog-icon-qr.png&auth=zs2PH+7i44Q4lvJN2efuZX7SjDhhPTQ2JmU9MTk3MjA3Nzk3NiZ0PTE1NzIwNzc5NzcmZj00N18xOTEwXzI1MTBfNDk1JnI9RnNzcnRHbHlRTQ==",
                "myLogoUrl": ""
            },
                t
        }

        return function _inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(ShareImg, o["a"].Component),
            T(ShareImg, [{
                "key": "componentWillMount",
                "value": function componentWillMount() {
                    var e = this.props
                        , t = e.name
                        , a = e.registerYear
                        , n = e.logoUrl;
                    console.log(this.props.logoUrl);
                    var o = new Date
                        , i = new Date(a)
                        , r = o.getFullYear() - 1 + 2 - i.getFullYear();
                    switch (this.setState({
                        "age": r,
                        "currYear": o.getFullYear(),
                        "currMonth": o.getMonth() + 1 + " ",
                        "currDay": o.getDate() + " ",
                        "qr": R,
                        "myLogoUrl": n
                    }),
                        t) {
                        case "standard":
                            this.setState({
                                "shareh5Img": N,
                                "shareName": "朋克狗",
                                "shareBackgroundColor": "#5D77FF",
                                "shareAppImg": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/get-dog-1.png&auth=d0BmQx6QJZ+icpl3DjhrLGIZQqRhPTQ2JmU9MTk3MTE5NTYxOSZ0PTE1NzExOTU2MjAmZj03Ml8xOTEwXzM5NjdfMjEwJnI9a0tYWXNTeENCOQ=="
                            });
                            break;
                        case "leisure":
                            this.setState({
                                "shareh5Img": A,
                                "shareName": "夹克狗",
                                "shareBackgroundColor": "#B093FF",
                                "shareAppImg": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/get-dog-2.png&auth=ZcCDPjlCJ0eRnw+AeMNHG5qFHa9hPTQ2JmU9MTk3MTE5NTY3MiZ0PTE1NzExOTU2NzMmZj0yNl8xOTEwXzE0NDJfNTY0JnI9Y1ZkbU41dVN2RQ=="
                            });
                            break;
                        case "winter":
                            this.setState({
                                "shareh5Img": x,
                                "shareName": "过节狗",
                                "shareBackgroundColor": "#FF586D",
                                "shareAppImg": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/get-dog-3.png&auth=fC6ZJU9+ih9L5rczqnHMETRfhfthPTQ2JmU9MTk3MTE5NTcwMiZ0PTE1NzExOTU3MDMmZj00N18xOTEwXzE0NDhfODUmcj1adVFpRVJPNFcx"
                            });
                            break;
                        case "rabbit":
                            this.setState({
                                "shareh5Img": M,
                                "shareName": "兔兔狗",
                                "shareBackgroundColor": "#FFFF13",
                                "shareAppImg": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/get-dog-4.png&auth=CSt5LNpfROmbBGPlSZVyidmr3/JhPTQ2JmU9MTk3MTE5NTczNCZ0PTE1NzExOTU3MzUmZj0yNV8xOTEwXzE0NDRfNzMmcj1QOHY4Z2VtaDNi"
                            });
                            break;
                        case "minions":
                            this.setState({
                                "shareh5Img": S,
                                "shareName": "工装狗",
                                "shareBackgroundColor": "#40F8CF",
                                "shareAppImg": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/get-dog-5.png&auth=EOROvVu/aGC3f5pSTtrB/NhVA5xhPTQ2JmU9MTk3MTE5NTc2MyZ0PTE1NzExOTU3NjQmZj0yNl8xOTEwXzE0NDJfNTg5JnI9QmRsN1VobjNPeA=="
                            });
                            break;
                        case "newYear":
                            this.setState({
                                "shareh5Img": C,
                                "shareName": "鼠鼠狗",
                                "shareBackgroundColor": "#FF4F4F",
                                "shareAppImg": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/mijoy.png&auth=0AIbFvEuCWTKCWPDv1le4Z1wPophPTQ2JmU9MTk3NzY5MzY3MiZ0PTE1Nzc2OTM2NzMmZj02Ml8xOTEyXzI4NjdfNzcmcj1uM29wTmJXTDJK"
                            });
                            break;
                        case "valentine":
                            this.setState({
                                "shareh5Img": P,
                                "shareName": "爱情狗",
                                "shareBackgroundColor": "#B093FF",
                                "shareAppImg": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/get-dog-7.png&auth=L8u0f8Of+oHd9A35vjWR61OzQU1hPTQ2JmU9MTk4MTU3ODAzNSZ0PTE1ODE1NzgwMzYmZj04MV8yMDAyXzM4NF83MSZyPUxldDBWYWE5V2c="
                            });
                            break;
                        case "butterfly":
                            this.setState({
                                "shareh5Img": I,
                                "shareName": "蝴蝶狗",
                                "shareBackgroundColor": "#FF586D",
                                "shareAppImg": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/suits/get-dog-8.png&auth=k747Epxfy6Kq5sBfrKwEPxxxMVlhPTQ2JmU9MTk4MjgxMzI3NSZ0PTE1ODI4MTMyNzYmZj00Nl8yMDAyXzI2NzlfNDQ1JnI9QTY2dmZaekdPWg=="
                            });
                            break;
                        case "cake":
                            this.setState({
                                "shareh5Img": O,
                                "shareName": "烘焙大师",
                                "shareBackgroundColor": "#5D77FF",
                                "shareAppImg": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/suits/cake_dog9.png&auth=7Wo3ZY5W3jEB8zaHAWGPY4LCqOVhPTQ2JmU9MTk5MTc1NTA4MCZ0PTE1OTE3NTUwODEmZj0yMV8yMDA2XzMwNF8zNzYmcj1ZYnM3VmhoeXNt"
                            });
                            break;
                        case "midAutumn":
                            this.setState({
                                "shareh5Img": F,
                                "shareName": "奔月",
                                "shareBackgroundColor": "#5D77FF",
                                "shareAppImg": "https://img11.360buyimg.com/imagetools/jfs/t1/157722/21/9415/22693/603c91a9E16c450ff/7a85a34a49cfa7cf.png"
                            })
                    }
                }
            }, {
                "key": "componentDidMount",
                "value": function componentDidMount() {
                    var e = this;
                    Object(s.b)({
                        "title": "分享图生成中..."
                    }),
                        Object(m.a)({
                            "src": this.state.shareh5Img
                        }).then(function (t) {
                            Object(m.a)({
                                "src": e.props.logoUrl
                            }).then(function (t) {
                                Object(m.a)({
                                    "src": e.state.qr
                                }).then(function (t) {
                                    var a = setTimeout(function () {
                                        clearTimeout(a),
                                            e.drawImageH5()
                                    }, 100)
                                })
                            })
                        })
                }
            }, {
                "key": "componentWillUnmount",
                "value": function componentWillUnmount() {
                }
            }, {
                "key": "componentDidShow",
                "value": function componentDidShow() {
                }
            }, {
                "key": "componentDidHide",
                "value": function componentDidHide() {
                }
            }, {
                "key": "componentWillReceiveProps",
                "value": function componentWillReceiveProps(e) {
                }
            }, {
                "key": "drawImageH5",
                "value": function drawImageH5() {
                    var e = this
                        , t = this
                        , a = document.getElementById("shareImg");
                    z(a, {
                        "scale": 2,
                        "useCORS": !0,
                        "allowTaint": !0,
                        "width": a.clientWidth - 1,
                        "height": a.clientHeight - 1
                    }).then(function (a) {
                        try {
                            console.log(a, "canvas");
                            var n = a.toDataURL("image/png");
                            console.log(n, "base64Url"),
                                t.setState({
                                    "shareImgBase64": n
                                });
                            var o = null;
                            Object(m.a)({
                                "src": n,
                                "success": function success(t) {
                                    e.setState({
                                        "showImg": !0
                                    }),
                                        o = setTimeout(function () {
                                            Object(s.a)(),
                                                clearTimeout(o)
                                        }, 400)
                                },
                                "fail": function fail(e) {
                                    Object(s.d)({
                                        "title": "生成分享图失败～"
                                    }),
                                        Object(s.a)()
                                }
                            })
                        } catch (e) {
                            Object(s.d)({
                                "title": "生成分享图失败～"
                            }),
                                Object(s.a)()
                        }
                    })
                }
            }, {
                "key": "saveImg",
                "value": function saveImg() {
                    var e = this;
                    k({
                        "x": 0,
                        "y": 0,
                        "canvasId": "canvasSharImg",
                        "success": function success(t) {
                            var a = t.tempFilePath;
                            e.setState({
                                "shareImgIcon": a
                            })
                        },
                        "fail": function fail(e) {
                        }
                    }, this.$scope)
                }
            }, {
                "key": "drawImage",
                "value": function drawImage() {
                    var e = this
                        , t = D("canvasSharImg", this.$scope)
                        , a = this;
                    Object(m.a)({
                        "src": a.state.shareAppImg,
                        "success": function success(n) {
                            Object(m.a)({
                                "src": a.state.wxQr,
                                "success": function success(o) {
                                    Object(m.a)({
                                        "src": a.props.logoUrl,
                                        "success": function success(a) {
                                            t.setFillStyle(e.state.shareBackgroundColor),
                                                t.fillRect(0, 0, 262, 439),
                                                t.drawImage(a.path, 186, 8, 80, 40),
                                                t.drawImage(n.path, 8, 40, 237, 256),
                                                t.setFillStyle("#000000"),
                                                t.setFontSize(20),
                                                4 === e.state.shareName.length ? t.fillText(e.state.shareName, 18, 65) : t.fillText(e.state.shareName, 25, 65),
                                                t.setFillStyle("#000000"),
                                                t.fillRect(18, 315, 8, 2),
                                                t.setFillStyle("#000000"),
                                                t.setFontSize(18),
                                                t.fillText(e.state.currYear, 16, 335),
                                                t.setFontSize(12),
                                                t.fillText("/" + e.state.currMonth + "/" + e.state.currDay, 58, 335),
                                                t.setFontSize(10),
                                                t.fillText("今年是我与京东相伴的第" + e.state.age + "年", 16, 365),
                                                t.fillText("我领养了一只狗狗见证与京东的友情", 16, 380),
                                                t.fillText("快去开启你与京东的“那些年”", 16, 395),
                                                t.drawImage(o.path, 190, 343, 56, 56),
                                                t.restore(),
                                                t.setFontSize(10),
                                                t.fillText("扫码领养狗狗", 187, 416),
                                                t.draw(!0, function () {
                                                    e.saveImg()
                                                })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            }, {
                "key": "saveShareImg",
                "value": function saveShareImg() {
                    var e = this;
                    console.log(this.state.shareImgIcon),
                        wx.getSetting({
                            "success": function success(t) {
                                t.authSetting["scope.writePhotosAlbum"] ? wx.saveImageToPhotosAlbum({
                                    "filePath": e.state.shareImgIcon,
                                    "success": function success() {
                                        Object(s.d)({
                                            "title": "保存成功",
                                            "icon": "none",
                                            "duration": 2e3
                                        })
                                    },
                                    "fail": function fail() {
                                        Object(s.d)({
                                            "title": "保存失败",
                                            "icon": "none",
                                            "duration": 2e3
                                        })
                                    }
                                }) : wx.authorize({
                                    "scope": "scope.writePhotosAlbum",
                                    "success": function success() {
                                        wx.saveImageToPhotosAlbum({
                                            "filePath": e.state.shareImgIcon,
                                            "success": function success() {
                                                Object(s.d)({
                                                    "title": "保存成功",
                                                    "icon": "none",
                                                    "duration": 2e3
                                                })
                                            },
                                            "fail": function fail() {
                                                Object(s.d)({
                                                    "title": "未授权",
                                                    "icon": "none",
                                                    "duration": 2e3
                                                })
                                            }
                                        })
                                    },
                                    "fail": function fail() {
                                        e.setState({
                                            "isOpenSet": !0
                                        })
                                    }
                                })
                            }
                        })
                }
            }, {
                "key": "closeShareLayer",
                "value": function closeShareLayer() {
                    this.props.onCloseShareLayer()
                }
            }, {
                "key": "closeBackAppLayer",
                "value": function closeBackAppLayer() {
                    this.setState({
                        "isOpenSet": !1
                    })
                }
            }, {
                "key": "preventEvent",
                "value": function preventEvent(e) {
                    e.preventDefault(),
                        e.stopPropagation()
                }
            }, {
                "key": "render",
                "value": function render() {
                    var e = this.state
                        , t = e.shareh5Img
                        , a = (e.shareAppImg,
                        e.shareName)
                        , o = e.shareBackgroundColor
                        , i = e.age
                        , r = e.currDay
                        , s = e.currMonth
                        , c = e.currYear
                        , l = e.showImg
                        , p = e.shareImgBase64
                        , u = e.myLogoUrl;
                    e.wxQr,
                        e.isOpenSet;
                    return n.j.createElement(h.a, {
                        "className": "share-img-wrap",
                        "onTouchMove": this.preventEvent.bind(this)
                    }, n.j.createElement(h.a, {
                        "className": "h5-wrap"
                    }, n.j.createElement(_.a, {
                        "className": "close-btn",
                        "onClick": this.closeShareLayer.bind(this),
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/close-btn-1.png&auth=5F8tZlxUv9fVM0zvK3WEUevdv1lhPTQ2JmU9MTk3MTY2MDQ0MyZ0PTE1NzE2NjA0NDQmZj02OV8xOTEwXzE4OTBfMzY1JnI9MnZpN3UzQ3RySA=="
                    }), n.j.createElement(h.a, {
                        "id": "shareImg",
                        "className": "share-img",
                        "style": {
                            "backgroundColor": o
                        }
                    }, n.j.createElement(_.a, {
                        "src": u,
                        "style": "height:40px;width:80px;position:absolute;top:8px;right:16px;z-index:1;"
                    }), n.j.createElement(h.a, {
                        "className": "share-img-icon"
                    }, n.j.createElement(_.a, {
                        "src": t,
                        "className": "share-img-1 share_img_h5"
                    }), n.j.createElement(h.a, {
                        "className": 4 === a.length ? "share-dog-name left_36" : "share-dog-name left_50"
                    }, a)), n.j.createElement(h.a, {
                        "className": "year"
                    }, n.j.createElement(h.a, {
                        "className": "year_heng_contain"
                    }, n.j.createElement(h.a, {
                        "className": "year-heng"
                    })), n.j.createElement(h.a, {
                        "className": "curr-year"
                    }, c), n.j.createElement(h.a, {
                        "className": "curr_month_day"
                    }, "/", s, "/", r)), n.j.createElement(h.a, {
                        "className": "text-wrap"
                    }, n.j.createElement(h.a, {
                        "className": "text-wrap-p"
                    }, "今年是我与京东相伴的第", i || "x", "年"), n.j.createElement(h.a, {
                        "className": "text-wrap-p text_wrap_second"
                    }, "我领养了一只狗狗见证与京东的友情"), n.j.createElement(h.a, {
                        "className": "text-wrap-p text_wrap_third"
                    }, "快去开启你与京东的“那些年”")), n.j.createElement(h.a, {
                        "className": "qr"
                    }, n.j.createElement(h.a, {
                        "className": "qr_img_wrap_container"
                    }, n.j.createElement(h.a, {
                        "className": "qr-img-wrap"
                    }, n.j.createElement(_.a, {
                        "src": R,
                        "className": "qr-img"
                    }))), n.j.createElement(h.a, {
                        "className": "qr-dowload"
                    }, "扫码领养狗狗")))), null, n.j.createElement(h.a, {
                        "className": l ? "h5-wrap" : "h5-wrap ds-none"
                    }, n.j.createElement(_.a, {
                        "className": "close-btn",
                        "onClick": this.closeShareLayer.bind(this),
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/close-btn-1.png&auth=5F8tZlxUv9fVM0zvK3WEUevdv1lhPTQ2JmU9MTk3MTY2MDQ0MyZ0PTE1NzE2NjA0NDQmZj02OV8xOTEwXzE4OTBfMzY1JnI9MnZpN3UzQ3RySA=="
                    }), n.j.createElement(h.a, {
                        "className": "share-img"
                    }, n.j.createElement(_.a, {
                        "src": p,
                        "className": "dog-img-2"
                    })), n.j.createElement(h.a, {
                        "className": "h5-canvas-tip",
                        "style": {
                            "backgroundColor": o
                        }
                    }, "长按下载图片")), !1)
                }
            }]),
            ShareImg
    }()
        , Q = a(57)
        , L = (a(122),
        function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }());
    var H = function (e) {
        function CountDown(e) {
            !function countDown_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, CountDown);
            var t = function countDown_possibleConstructorReturn(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (CountDown.__proto__ || Object.getPrototypeOf(CountDown)).call(this, e));
            return t.state = {
                "countDownStr": "",
                "taskCountDown": "",
                "hour": "00",
                "minute": "00",
                "second": "00"
            },
                t
        }

        return function countDown_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(CountDown, o["a"].Component),
            L(CountDown, [{
                "key": "componentWillMount",
                "value": function componentWillMount() {
                }
            }, {
                "key": "componentDidMount",
                "value": function componentDidMount() {
                    this.countDownFuc(this.props.time, this.props.type)
                }
            }, {
                "key": "componentWillReceiveProps",
                "value": function componentWillReceiveProps(e) {
                    v.a.isEqual(e, this.props) || this.countDownFuc(e.time, e.type)
                }
            }, {
                "key": "componentWillUnmount",
                "value": function componentWillUnmount() {
                    clearInterval(this.countTimer)
                }
            }, {
                "key": "componentDidShow",
                "value": function componentDidShow() {
                }
            }, {
                "key": "componentDidHide",
                "value": function componentDidHide() {
                }
            }, {
                "key": "countDownFuc",
                "value": function countDownFuc(e, t) {
                    var a = this;
                    clearInterval(this.countTimer);
                    var n = Math.floor(e / 1e3 / 3600 / 24)
                        , o = Math.floor(e / 1e3 / 3600 % 24)
                        , i = Math.floor(e / 1e3 / 60 % 60)
                        , r = Math.floor(e / 1e3 % 60);
                    i < 10 && (i = "0" + i),
                    r < 10 && (r = "0" + r),
                        1 == t || 4 == t ? (o < 10 && (o = "0" + o),
                            this.setState({
                                "taskCountDown": o + ":" + i + ":" + r
                            })) : 2 == t || 3 == t ? (o < 10 && (o = "0" + o),
                        n < 10 && (n = "0" + n),
                            this.setState({
                                "day": n,
                                "hour": o,
                                "minute": i,
                                "second": r
                            })) : this.setState({
                            "countDownStr": o + "小时" + i + "分" + r + "秒"
                        }),
                        e > 0 ? this.countTimer = setInterval(function () {
                            if ((e -= 1e3) < 0)
                                return a.props.onUpdateTime && a.props.onUpdateTime(t),
                                    void clearInterval(a.countTimer);
                            n = Math.floor(e / 1e3 / 3600 / 24),
                                o = Math.floor(e / 1e3 / 3600 % 24),
                                i = Math.floor(e / 1e3 / 60 % 60),
                                r = Math.floor(e / 1e3 % 60),
                            i < 10 && (i = "0" + i),
                            r < 10 && (r = "0" + r),
                                1 == t || 4 == t ? (o < 10 && (o = "0" + o),
                                    a.setState({
                                        "taskCountDown": o + ":" + i + ":" + r
                                    })) : 2 == t || 3 == t ? (o < 10 && (o = "0" + o),
                                n < 10 && (n = "0" + n),
                                    a.setState({
                                        "day": n,
                                        "hour": o,
                                        "minute": i,
                                        "second": r
                                    })) : a.setState({
                                    "countDownStr": o + "小时" + i + "分" + r + "秒"
                                })
                        }, 1e3) : (0 == t ? this.setState({
                            "countDownStr": ""
                        }) : this.setState({
                            "taskCountDown": ""
                        }),
                            clearInterval(this.countTimer))
                }
            }, {
                "key": "render",
                "value": function render() {
                    var e = this.state
                        , t = e.countDownStr
                        , a = e.taskCountDown
                        , o = e.hour
                        , i = e.minute
                        , r = e.second
                        , s = e.day
                        , c = this.props.type;
                    return n.j.createElement(h.a, null, 1 == c ? n.j.createElement(h.a, {
                        "className": "task-btn task-btn-count"
                    }, a) : 2 == c || 3 == c ? n.j.createElement(h.a, {
                        "className": "title_countdown"
                    }, n.j.createElement(h.a, {
                        "className": "countdown_txt"
                    }, 2 == c ? "距开始" : "距结束"), "00" != s ? n.j.createElement(h.a, {
                        "className": "countdown_day"
                    }, n.j.createElement(f.a, {
                        "className": "countdown_day_num"
                    }, s), "天") : "", n.j.createElement(h.a, {
                        "className": "countdown_time countdown_time_2"
                    }, o), n.j.createElement(h.a, {
                        "className": "countdown_colon"
                    }, ":"), n.j.createElement(h.a, {
                        "className": "countdown_time"
                    }, i), n.j.createElement(h.a, {
                        "className": "countdown_colon"
                    }, ":"), n.j.createElement(h.a, {
                        "className": "countdown_time"
                    }, r)) : 4 == c ? n.j.createElement(h.a, null, a) : n.j.createElement(h.a, {
                        "className": "" != t ? "dog-food-btn" : "ds-none"
                    }, n.j.createElement(_.a, {
                        "className": "count-down-icon",
                        "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAjCAMAAAAg7OMRAAAARVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////9SnXPCAAAAFnRSTlMA9ewHMN2cI02mkYQ+vlZ808mzZhoTQqQQswAAASdJREFUOMuVlOmCgyAMhLnkKFR75v0fdYOgYxu2u/3+KDCQZDhUwyrBaOSk09bt4n25R7cNJ32CzBNpW0VzMtQwaV57NJE/yKjOmic6Ms01Eu1C337DtY3efPa3NuMatlHMKKZGW5xquGVtlx5tzyDyR2ergM21K/bse0WO+4xTrzjDCre7wdrnxIk9hHeP2v2EhzVHE5QkmJobmhw1qhGRI2OBRHR+XymX9XsmalvVTXeiBGPXn1osFr/ISqf2e0FKnii/yeBSxgZzDmUsYwpyZ5daTWjD89AzYDTRy4YZlqFFpIWuUXJQQoe4EsRFHRLUIX2RwBf4LIHP2DcJ9k2eA4Bz8O9z9d05/evcg8/3CHy8l0d+v+eC8bshGb9DkuG7Jhm+k+AHlnoZYT+lAkEAAAAASUVORK5CYII="
                    }), t))
                }
            }]),
            CountDown
    }()
        , B = a(60)
        , J = (a(124),
        Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                    Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        }
    )
        , Z = function () {
        function defineProperties(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
            }
        }

        return function (e, t, a) {
            return t && defineProperties(e.prototype, t),
            a && defineProperties(e, a),
                e
        }
    }();
    var V = function (e) {
        function HelpFriendPop(e) {
            !function helpFriend_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, HelpFriendPop);
            var t = function helpFriend_possibleConstructorReturn(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (HelpFriendPop.__proto__ || Object.getPrototypeOf(HelpFriendPop)).call(this, e));
            return t.state = {
                "selfHelpStatus": "",
                "selfHelpType": "",
                "friendData": {},
                "showHelpPop": !1
            },
                t
        }

        return function helpFriend_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(HelpFriendPop, o["a"].Component),
            Z(HelpFriendPop, [{
                "key": "componentWillMount",
                "value": function componentWillMount() {
                }
            }, {
                "key": "componentDidMount",
                "value": function componentDidMount() {
                    var e = this.props
                        , t = e.helpStatus
                        , a = e.helpType
                        , n = e.invitefriendListData
                        ,
                        o = "create_ok" == n.invitedUserTag || "exist_pet" == n.invitedUserTag || t && "cannot_help" !== t;
                    if (this.setState({
                        "showHelpPop": o,
                        "selfHelpStatus": t,
                        "selfHelpType": a,
                        "friendData": J({}, n)
                    }),
                        o) {
                        var i = "friend_list" == a && "exist_pet" == n.invitedUserTag || "friend_list" != a && ("card_expire" === t || "help_full" === t || "invite_full" === t);
                        "friend_list" === a || "can_help" !== t && "help_fail" !== t ? (i || "friend_list" == a && "create_ok" == n.invitedUserTag || "friend_list" != a && ("help_ok" === t || "help_repeat" === t)) && v.a.clickReport({}, {
                            "babelEventId": "expo_other_task_p_go"
                        }) : v.a.clickReport({}, {
                            "babelEventId": "expo_other_task_p_zhuli"
                        })
                    }
                }
            }, {
                "key": "componentWillReceiveProps",
                "value": function componentWillReceiveProps(e) {
                    if (!v.a.isEqual(e, this.props)) {
                        var t = J({}, e.invitefriendListData)
                            , a = e.helpStatus
                            , n = e.helpType
                            ,
                            o = "create_ok" == t.invitedUserTag || "exist_pet" == t.invitedUserTag || a && "cannot_help" !== a;
                        if (this.setState({
                            "showHelpPop": o,
                            "friendData": t,
                            "selfHelpStatus": a,
                            "selfHelpType": n
                        }),
                            o) {
                            var i = "friend_list" == n && "exist_pet" == t.invitedUserTag || "friend_list" != n && ("card_expire" === a || "help_full" === a || "invite_full" === a);
                            "friend_list" === n || "can_help" !== a && "help_fail" !== a ? (i || "friend_list" == n && "create_ok" == t.invitedUserTag || "friend_list" != n && ("help_ok" === a || "help_repeat" === a)) && v.a.clickReport({}, {
                                "babelEventId": "expo_other_task_p_go"
                            }) : v.a.clickReport({}, {
                                "babelEventId": "expo_other_task_p_zhuli"
                            })
                        }
                    }
                }
            }, {
                "key": "componentWillUnmount",
                "value": function componentWillUnmount() {
                    console.log(this.props, "componentWillUnmount")
                }
            }, {
                "key": "componentDidShow",
                "value": function componentDidShow() {
                    console.log(this.props, "componentDidShow")
                }
            }, {
                "key": "onCloseHelpFriend",
                "value": function onCloseHelpFriend() {
                    v.a.clickReport({
                        "moduleId": "pop_goToGame"
                    }, {
                        "babelEventId": "other_task_p_go"
                    }),
                        this.setState({
                            "showHelpPop": !1
                        }),
                        this.props.onCloseHelpFriend()
                }
            }, {
                "key": "render",
                "value": function render() {
                    var e = this
                        , t = this.state
                        , a = t.friendData
                        , o = t.showHelpPop
                        , i = t.selfHelpType
                        , r = t.selfHelpStatus
                        , s = this.props
                        , c = s.petHelpCoin
                        , l = s.needHelpUserImage
                        , p = s.needHelpUserNickName
                        ,
                        u = "friend_list" == i && "exist_pet" == a.invitedUserTag || "friend_list" != i && ("card_expire" === r || "help_full" === r || "invite_full" === r);
                    return o ? n.j.createElement(h.a, {
                        "className": "help_friend pop_layer",
                        "onClick": this.onCloseHelpFriend.bind(this)
                    }, n.j.createElement(h.a, {
                        "className": "pop_out_bg",
                        "onClick": function onClick(e) {
                            e.stopPropagation()
                        }
                    }, n.j.createElement(_.a, {
                        "className": "pop_close_icon",
                        "onClick": this.onCloseHelpFriend.bind(this),
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/close-btn-1.png&auth=5F8tZlxUv9fVM0zvK3WEUevdv1lhPTQ2JmU9MTk3MTY2MDQ0MyZ0PTE1NzE2NjA0NDQmZj02OV8xOTEwXzE4OTBfMzY1JnI9MnZpN3UzQ3RySA=="
                    }), n.j.createElement(_.a, {
                        "className": "invited_friend_icon",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/invite_friend_icon.png&auth=Cz18cVE7kYV8xE6GydDBrpSlBkRhPTQ2JmU9MTk3OTA4MDA4NCZ0PTE1NzkwODAwODUmZj0zMl8yMDAxXzI0NTFfNDI1JnI9YjRiVEY4enJ1ZA=="
                    }), "friend_list" !== i && ("can_help" === r || "help_fail" === r) && n.j.createElement(h.a, {
                        "className": "pop_inner"
                    }, n.j.createElement(h.a, {
                        "className": "invited_friend_top_line"
                    }, "快帮我助力得积分"), n.j.createElement(h.a, {
                        "className": "invited_friend_sub_line"
                    }, "你能获得", n.j.createElement(f.a, {
                        "className": "sub_line_num"
                    }, c), "积分"), n.j.createElement(h.a, {
                        "className": "invited_friend_sub_line mg_t4"
                    }, "积分可兑换京豆和好礼"), n.j.createElement(h.a, {
                        "className": "friend_info"
                    }, n.j.createElement(h.a, {
                        "className": "friend_head_icon_contain"
                    }, n.j.createElement(_.a, {
                        "className": "friend_head_icon",
                        "src": l
                    })), n.j.createElement(h.a, {
                        "className": "friend_name"
                    }, n.j.createElement(h.a, {
                        "className": "friend_name_limit text_limit"
                    }, "为", p), "助力")), n.j.createElement(h.a, {
                        "className": "pop_btns"
                    }, n.j.createElement(h.a, {
                        "className": "pop_btn single_btn",
                        "onClick": function onClick() {
                            e.props.onHelpFriend()
                        }
                    }, "为Ta助力"))), ("friend_list" == i && "create_ok" == a.invitedUserTag || "friend_list" != i && ("help_ok" === r || "help_repeat" === r)) && n.j.createElement(h.a, {
                        "className": "pop_inner"
                    }, n.j.createElement(h.a, {
                        "className": "invited_friend_top_line"
                    }, " ", "friend_list" == i ? "领养成功" : "助力成功"), n.j.createElement(h.a, {
                        "className": "invited_friend_sub_line"
                    }, "恭喜你获得"), n.j.createElement(h.a, {
                        "className": "friend_info help_succ_coin"
                    }, "friend_list" == i ? n.j.createElement(_.a, {
                        "className": "food_icon",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/friend_food_icon.png&auth=aH4KireMJRQbe8jQhnxbUaqkaehhPTQ2JmU9MTk4Mzc2MzgzMSZ0PTE1ODM3NjM4MzImZj00OF8yMDAzXzgyM180MjImcj1RQ1FMZkRqUFZF"
                    }) : n.j.createElement(_.a, {
                        "className": "coin_icon",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/help_friend_coin.png&auth=v72C98+0iK4TecR1Q0V+3EAzyjxhPTQ2JmU9MTk3OTA4ODU4MSZ0PTE1NzkwODg1ODImZj0zMl8yMDAxXzI0NzJfMjQmcj1vZkxrSkszMFVa"
                    }), n.j.createElement(h.a, {
                        "className": "coin_multip"
                    }, "x"), n.j.createElement(h.a, {
                        "className": "coin_num"
                    }, "friend_list" == i ? a.inviteRewardCount : c)), n.j.createElement(h.a, {
                        "className": "pop_btns"
                    }, n.j.createElement(h.a, {
                        "className": "pop_btn single_btn",
                        "onClick": this.onCloseHelpFriend.bind(this)
                    }, "去养汪汪"))), u && n.j.createElement(h.a, {
                        "className": "pop_inner"
                    }, n.j.createElement(h.a, {
                        "className": "help_pop_title"
                    }, "friend_list" == i ? "您已领养宠物，快去和它玩耍吧～" : "card_expire" === r ? "哎呀，好友分享的卡片失效了，快去要份新的分享" : "help_full" === r ? "今日好友助力次数已用完，明天再来～" : "来晚了，好友人气太旺了"), n.j.createElement(h.a, {
                        "className": "cant_help_img_cont"
                    }, n.j.createElement(_.a, {
                        "className": "cant_help_img",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/help_friend_img.png&auth=Asxlk2XT31CH/573mHLpIVMAx2ZhPTQ2JmU9MTk3OTUwMjE0OCZ0PTE1Nzk1MDIxNDkmZj0yNV8yMDAxXzE5ODdfMzkzJnI9eXJ1c3E5aGIwbQ=="
                    })), n.j.createElement(h.a, {
                        "className": "pop_btns"
                    }, n.j.createElement(h.a, {
                        "className": "pop_btn single_btn",
                        "onClick": this.onCloseHelpFriend.bind(this)
                    }, "去养汪汪"))))) : ""
                }
            }]),
            HelpFriendPop
    }()
        , G = (a(126),
        function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }());
    var X = function (e) {
        function NewFishGiftBox() {
            return function newFishGiftBox_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, NewFishGiftBox),
                function newFishGiftBox_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (NewFishGiftBox.__proto__ || Object.getPrototypeOf(NewFishGiftBox)).apply(this, arguments))
        }

        return function newFishGiftBox_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(NewFishGiftBox, o["a"].Component),
            G(NewFishGiftBox, [{
                "key": "render",
                "value": function render() {
                    var e = this.props
                        , t = e.closeNewFishBox
                        , a = e.onCloseNewFishBox;
                    return o.a.useEffect(function () {
                        var e = null;
                        return console.log("NewFishGiftBox useEffect"),
                        t || (clearTimeout(e),
                            e = setTimeout(function () {
                                a()
                            }, 6300),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_newuser_chai"
                            })),
                            function () {
                                clearTimeout(e)
                            }
                    }, [t, a]),
                        n.j.createElement(h.a, null, !t && n.j.createElement(h.a, {
                            "className": "new_fish_box"
                        }, n.j.createElement(h.a, {
                            "className": "new_fish_mask",
                            "onClick": function onClick() {
                                a()
                            }
                        }), n.j.createElement(h.a, {
                            "className": "new_fish_gift"
                        }, n.j.createElement(_.a, {
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/gift_light2_bg.png&auth=zpLI/8zgvj2HCwH39pLPD+O0xIdhPTQ2JmU9MTk5ODUzMDI5NiZ0PTE1OTg1MzAyOTcmZj04Ml8yMDA4XzY0MjVfNjAyJnI9TEpZT2Z6dVd0Mg==",
                            "className": "new_fish_light2"
                        }), n.j.createElement(_.a, {
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/gift_light_bg.png&auth=b+0BtwsLUIefTLd5spWz9Nn1ZcxhPTQ2JmU9MTk5ODUzMDMzNiZ0PTE1OTg1MzAzMzcmZj04Nl8yMDA4XzM1NzJfNzI2JnI9NjdUSVU2dmR1ZA==",
                            "className": "new_fish_light1"
                        }), n.j.createElement(_.a, {
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/gift_bean_bg1.png&auth=yMkJTnisGTBxUhnc/b81OvgOHXNhPTQ2JmU9MTk5ODUzMTIwNCZ0PTE1OTg1MzEyMDUmZj05OV8yMDA4XzM0NjRfOTE4JnI9SzQ4d0MyUW1taQ==",
                            "className": "new_fish_bean1"
                        }), n.j.createElement(h.a, {
                            "className": "gift_box_animation"
                        }, n.j.createElement(_.a, {
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/gift_box_2.png&auth=IAJyJRRPn7AgU2+MWOUmWvMa4XBhPTQ2JmU9MTk5ODU4MzIzNiZ0PTE1OTg1ODMyMzcmZj00MV8yMDA4XzQ0NzRfMjYzJnI9RzlRV3hPQWhYZg==",
                            "className": "new_fish_box"
                        }), n.j.createElement(_.a, {
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/gift_bean_bg2.png&auth=sI+WXfadhNjdiCUPeWR3aerwx0JhPTQ2JmU9MTk5ODUzMTI1NiZ0PTE1OTg1MzEyNTcmZj00OF8yMDA4XzE1ODhfNzk1JnI9WFR3aFFCbGZSNg==",
                            "className": "new_fish_bean2"
                        })), n.j.createElement(_.a, {
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/gift_txt_2.png&auth=w36H6nSm4GkKqRmJmfFyY5gMpz1hPTQ2JmU9MTk5ODU4MzI3OCZ0PTE1OTg1ODMyNzkmZj04OF8yMDA4XzM4NTVfMjgmcj1ld2k4WFJ0Y1NG",
                            "className": "new_fish_txt"
                        }), n.j.createElement(_.a, {
                            "onClick": function onClick() {
                                a(),
                                    v.a.clickReport({
                                        "moduleId": "newuser_chai"
                                    }, {
                                        "babelEventId": "other_newuser_chai"
                                    })
                            },
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/gift_chai_btn.png&auth=Vbte5c7SzZWL57t0QeDbMJkzzxJhPTQ2JmU9MTk5ODUzMTM3OCZ0PTE1OTg1MzEzNzkmZj03Ml8yMDA4XzQ0NTRfMjQ1JnI9ajRwWXlqOVFZTQ==",
                            "className": "new_fish_chai"
                        }))))
                }
            }]),
            NewFishGiftBox
    }()
        , W = a(34)
        , Y = (a(128),
        function () {
            return function (e, t) {
                if (Array.isArray(e))
                    return e;
                if (Symbol.iterator in Object(e))
                    return function sliceIterator(e, t) {
                        var a = []
                            , n = !0
                            , o = !1
                            , i = void 0;
                        try {
                            for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (a.push(r.value),
                            !t || a.length !== t); n = !0)
                                ;
                        } catch (e) {
                            o = !0,
                                i = e
                        } finally {
                            try {
                                !n && s.return && s.return()
                            } finally {
                                if (o)
                                    throw i
                            }
                        }
                        return a
                    }(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }())
        , q = function () {
        function defineProperties(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
            }
        }

        return function (e, t, a) {
            return t && defineProperties(e.prototype, t),
            a && defineProperties(e, a),
                e
        }
    }();
    var K = v.a.constImgs
        , $ = {
        "content-type": "application/json"
    }
        , ee = [{
        "top": 160,
        "left": 108
    }, {
        "top": 160,
        "left": 204
    }, {
        "top": 160,
        "left": 300
    }, {
        "top": 160,
        "left": 396
    }, {
        "top": 160,
        "left": 492
    }, {
        "top": 160,
        "left": 588
    }]
        , te = function (e) {
        function NewFishSignPanel() {
            return function newFishSignPanel_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, NewFishSignPanel),
                function newFishSignPanel_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (NewFishSignPanel.__proto__ || Object.getPrototypeOf(NewFishSignPanel)).apply(this, arguments))
        }

        return function newFishSignPanel_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(NewFishSignPanel, o["a"].Component),
            q(NewFishSignPanel, [{
                "key": "render",
                "value": function render() {
                    var e = this.props
                        , t = e.hasAnnouncement
                        , a = e.userSign
                        , i = e.onOpenDogFoodLayer
                        , c = e.onUpdateEnterHome
                        , l = o.a.useState([])
                        , p = Y(l, 2)
                        , u = p[0]
                        , d = p[1]
                        , m = o.a.useState(!1)
                        , g = Y(m, 2)
                        , b = g[0]
                        , y = g[1]
                        , j = o.a.useState({})
                        , E = Y(j, 2)
                        , k = E[0]
                        , w = E[1]
                        , D = o.a.useState({})
                        , T = Y(D, 2)
                        , N = T[0]
                        , A = T[1]
                        , x = o.a.useState(!1)
                        , M = Y(x, 2)
                        , S = M[0]
                        , C = M[1]
                        , P = o.a.useState(0)
                        , I = Y(P, 2)
                        , O = I[0]
                        , F = I[1]
                        , R = o.a.useState([])
                        , z = Y(R, 2)
                        , U = z[0]
                        , Q = z[1]
                        , L = o.a.useState(!1)
                        , H = Y(L, 2)
                        , B = H[0]
                        , J = H[1];
                    o.a.useEffect(function () {
                        var e = null;
                        console.log("newFishSignPanel useEffect");
                        try {
                            if (a && a.records && (d(a.records),
                            a.index >= 0)) {
                                var t = 0
                                    , n = 0
                                    , i = "";
                                a.records.map(function (e, a) {
                                    2 == e.status ? (t = 1,
                                    "" === i && (i = a),
                                        n += 1) : 4 == e.status && (t = 2)
                                });
                                var s = a.records[a.index];
                                if (s.flag = t,
                                    s.reissueNum = n,
                                    A(s),
                                1 != s.status || k.type) {
                                    0 == s.status && v.a.clickReport({}, {
                                        "babelEventId": "expo_other_newuser_qd"
                                    });
                                    for (var c = 0; c < u.length; c++) {
                                        if (2 == u[c].status) {
                                            v.a.clickReport({}, {
                                                "babelEventId": "expo_other_newuser_bq"
                                            });
                                            break
                                        }
                                    }
                                } else
                                    J(!0);
                                if (0 == s.status && (!Object(r.a)("sign_status_1") || Object(r.a)("sign_status_1") < a.index + 1))
                                    F(1),
                                        e = setTimeout(function () {
                                            F(0)
                                        }, 6e3),
                                        Object(r.d)("sign_status_1", a.index + 1);
                                else if (1 == s.flag && (!Object(r.a)("sign_status_2") || Object(r.a)("sign_status_2") < a.index + 1)) {
                                    if (ee[i]) {
                                        F(2);
                                        var l = [{
                                            "top": o.a.pxTransform(ee[i].top - 10),
                                            "left": o.a.pxTransform(ee[i].left - 30)
                                        }, {
                                            "top": o.a.pxTransform(ee[i].top + 40),
                                            "left": o.a.pxTransform(ee[i].left - 55)
                                        }];
                                        Q(l),
                                            e = setTimeout(function () {
                                                F(0)
                                            }, 6e3)
                                    }
                                    Object(r.d)("sign_status_2", a.index + 1)
                                } else
                                    0 == s.flag ? F(3) : F(0);
                                1 == N.flag && N.index < 6 ? v.a.clickReport({}, {
                                    "babelEventId": "expo_other_newuser_qd_bqpop"
                                }) : v.a.clickReport({}, {
                                    "babelEventId": "expo_other_newuser_qd_glpop"
                                }),
                                k && ("sign_reissue_confirm" == k.type ? v.a.clickReport({}, {
                                    "babelEventId": "expo_other_newuser_qd_7bqpop"
                                }) : "sign_reissue" == k.type && v.a.clickReport({}, {
                                    "babelEventId": "expo_other_newuser_bq_pop"
                                })),
                                    0 == N.status ? v.a.clickReport({
                                        "moduleId": "newuser_bar_qd"
                                    }, {
                                        "babelEventId": "expo_other_newuser_bar_qd"
                                    }) : N.flag > 0 && N.index < 6 && v.a.clickReport({
                                        "moduleId": "newuser_bar_bq"
                                    }, {
                                        "babelEventId": "expo_other_newuser_bar_bq"
                                    })
                            }
                        } catch (e) {
                            console.log("useEffect js error:", e)
                        }
                        return function () {
                            clearTimeout(e)
                        }
                    }, [a, k]);
                    var Z = function closeSignPanel() {
                        y(!0),
                            0 == N.status ? v.a.clickReport({
                                "moduleId": "newuser_bar_qd"
                            }, {
                                "babelEventId": "other_newuser_bar_qd"
                            }) : N.flag > 0 && N.index < 6 && v.a.clickReport({
                                "moduleId": "newuser_bar_bq"
                            }, {
                                "babelEventId": "other_newuser_bar_bq"
                            })
                    }
                        , V = function openSignPanel() {
                        y(!1),
                            J(!1)
                    }
                        , G = function goNewFishSign(e) {
                        var t = 0;
                        e < 0 ? (t = a.index,
                            v.a.clickReport({
                                "moduleId": "newuser_qd"
                            }, {
                                "babelEventId": "other_newuser_qd"
                            })) : t = e,
                            6 == t && -1 == e && 1 == N.flag ? (w({
                                "type": "sign_reissue_confirm",
                                "reissueNum": N.reissueNum
                            }),
                                v.a.clickReport({
                                    "moduleId": "newuser_qd_7bqpop"
                                }, {
                                    "babelEventId": "other_newuser_qd_7bqpop"
                                })) : 6 == N.index && 1 == N.status ? Object(s.d)({
                                "title": "第7日已签到，不能补签了～",
                                "icon": "none",
                                "duration": 2e3
                            }) : function fishSignFuc(e, t) {
                                S || (C(!0),
                                    Object(W.a)({
                                        "url": "" + v.a.interFaces.newUserSign,
                                        "data": {
                                            "index": e
                                        },
                                        "credentials": "include",
                                        "method": "GET",
                                        "header": $
                                    }).then(function (n) {
                                        var o = n.data;
                                        if (o.success && o.data.todaySign && t < 0)
                                            w({
                                                "type": "sign_success",
                                                "jdBeanQuantity": o.data.jdBeanQuantity
                                            }),
                                                1 == N.flag && N.index < 6 ? v.a.clickReport({
                                                    "moduleId": "newuser_qd_bqpop"
                                                }, {
                                                    "babelEventId": "other_newuser_qd_bqpop"
                                                }) : v.a.clickReport({
                                                    "moduleId": "newuser_qd_glpop"
                                                }, {
                                                    "babelEventId": "other_newuser_qd_glpop"
                                                }),
                                                c();
                                        else if (o.success && !o.data.canMend && t >= 0) {
                                            var i = "今日狗粮任务已做完，暂不能补签，明日再来~";
                                            6 == a.index && (i = "很遗憾，已无可做的狗粮任务，不能补签"),
                                                w({
                                                    "type": "sign_reissue_dis",
                                                    "txtArr": [i, "(每日签到、三餐任务不包括在内)"]
                                                }),
                                                c()
                                        } else
                                            o.success && o.data.canMend && t >= 0 ? (w({
                                                "type": "sign_reissue",
                                                "reissueDay": e + 1
                                            }),
                                                v.a.clickReport({
                                                    "moduleId": "newuser_bq_pop"
                                                }, {
                                                    "babelEventId": "other_newuser_bq_pop"
                                                }),
                                                c()) : o.success || w({
                                                "type": "sign_reissue_dis",
                                                "txtArr": ["奖励被外星人抓走啦", "请稍后再试～"]
                                            });
                                        C(!1)
                                    }).catch(function (e) {
                                        C(!1),
                                            w({
                                                "type": "sign_reissue_dis",
                                                "txtArr": ["阿偶～网络天线断了", "请检查网络再试～"]
                                            })
                                    }))
                            }(t, e)
                    }
                        , X = function closeLayer() {
                        w({
                            "type": "sign_close"
                        })
                    };
                    return n.j.createElement(h.a, {
                        "className": "sign_panel"
                    }, n.j.createElement(h.a, {
                        "className": t ? "sign_panel_items height_64" : "sign_panel_items"
                    }, n.j.createElement(h.a, {
                        "className": "sign_panel_item sign_panel_left"
                    }), n.j.createElement(h.a, {
                        "className": "sign_panel_item sign_panel_right"
                    })), n.j.createElement(h.a, {
                        "className": B ? "sign_panel_content sign_panel_content_close2" : b ? "sign_panel_content sign_panel_content_close" : "sign_panel_content"
                    }, n.j.createElement(h.a, {
                        "className": B ? "sign_panel_inner sign_panel_inner_close2" : b ? "sign_panel_inner sign_panel_inner_close" : "sign_panel_inner"
                    }, b || B ? n.j.createElement(h.a, {
                        "className": "sign_panel_short"
                    }, n.j.createElement(_.a, {
                        "className": "sign_panel_strawberry",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/sign_panel_ strawberry.png&auth=MsnBWGzADjsAj0+PC9vO6M1TyJ9hPTQ2JmU9MTk5ODk1MjQ5OSZ0PTE1OTg5NTI1MDAmZj05MV8yMDA5XzE5Ml8xNzUmcj1ETVhQY1o0eFRs"
                    }), 0 == N.status ? n.j.createElement(h.a, {
                        "className": "sign_panel_tip"
                    }, "今日未签到，签到得", 0 == N.flag && 6 == N.index ? "翻倍奖励" : "", n.j.createElement(f.a, {
                        "className": "sign_panel_red"
                    }, 0 == N.flag && 6 == N.index ? v.a.accMul(N.beanQuantity, 2) : N.beanQuantity), "京豆") : N.flag > 0 && N.index < 6 ? n.j.createElement(h.a, {
                        "className": "sign_panel_tip"
                    }, "有断签，连签7天才能奖励翻倍哦～") : 1 == N.status && N.index < 6 ? n.j.createElement(h.a, {
                        "className": "sign_panel_tip"
                    }, "已连续签", n.j.createElement(f.a, {
                        "className": "sign_panel_red"
                    }, N.index + 1), "天，继续坚持赢翻倍奖励～") : 1 == N.status && 6 == N.index && 0 == N.flag ? n.j.createElement(h.a, {
                        "className": "sign_panel_tip"
                    }, "已连签", n.j.createElement(f.a, {
                        "className": "sign_panel_red"
                    }, "7"), "天，恭喜主人完成新人签到挑战~") : 1 == N.status && 6 == N.index && N.flag > 0 ? n.j.createElement(h.a, {
                        "className": "sign_panel_tip"
                    }, "已结束～") : null, 0 == N.status ? n.j.createElement(h.a, {
                        "className": "sign_panel_short_btn",
                        "onClick": function onClick() {
                            y(!1)
                        }
                    }, "立即签到") : N.flag > 0 && N.index < 6 ? n.j.createElement(h.a, {
                        "className": 1 == N.flag ? "sign_panel_short_btn" : "sign_panel_short_btn sign_panel_short_btn_dis",
                        "onClick": V
                    }, "立即补签") : 1 == N.status && N.index < 6 ? n.j.createElement(h.a, {
                        "className": "sign_panel_short_btn sign_panel_short_dis"
                    }, "今日已签到") : 1 == N.status && 6 == N.index && N.flag > 0 ? n.j.createElement(h.a, {
                        "className": "sign_panel_short_btn sign_panel_short_dis"
                    }, "已结束") : 1 == N.status && 6 == N.index && 0 == N.flag ? n.j.createElement(h.a, {
                        "className": "sign_panel_short_btn sign_panel_short_dis"
                    }, "已完成") : null, n.j.createElement(h.a, {
                        "className": "sign_panel_arrow_wrap",
                        "onClick": V
                    }, n.j.createElement(_.a, {
                        "className": "sign_panel_arrow",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/arrrow_down.png&auth=MccU0g+XFjLbCWfL7AEr8XNaE4BhPTQ2JmU9MTk5OTA5OTUzOCZ0PTE1OTkwOTk1MzkmZj03MF8yMDA5XzIxNV80MDUmcj1CYUFTNnBucVhp"
                    }))) : n.j.createElement(h.a, {
                        "className": "sign_panel_title"
                    }, n.j.createElement(f.a, {
                        "className": "sign_panel_txt"
                    }, "每日签到得京豆 连签7天奖励翻倍"), n.j.createElement(h.a, {
                        "className": "sign_panel_close",
                        "onClick": Z
                    }, n.j.createElement(f.a, null, "收起"), n.j.createElement(_.a, {
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/sign_panel_arrow.png&auth=nrYblRLR87BzcRvf14dlYmx3ROZhPTQ2JmU9MTk5ODg2NjEzMyZ0PTE1OTg4NjYxMzQmZj0yN18yMDA4Xzc5Ml8yMjUmcj1aQk1zbGhHbE5o",
                        "className": "sign_panel_close_img"
                    }))), b || B ? "" : n.j.createElement(h.a, null, n.j.createElement(h.a, {
                        "className": "sign_panel_table"
                    }, u.map(function (e, t) {
                        return n.j.createElement(h.a, {
                            "className": "day_sign_item",
                            "taroKey": String(t),
                            "key": String(t)
                        }, n.j.createElement(h.a, {
                            "className": "day_sign_index"
                        }, "第", t + 1, "天"), 2 == e.status ? n.j.createElement(h.a, {
                            "className": "day_sign_bean",
                            "onClick": function onClick() {
                                !function openReissue(e) {
                                    G(e),
                                        v.a.clickReport({
                                            "moduleId": "newuser_bq"
                                        }, {
                                            "babelEventId": "other_newuser_bq"
                                        })
                                }(t)
                            }
                        }, n.j.createElement(h.a, {
                            "className": "need_sign"
                        }, "补签")) : 1 == e.status || 3 == e.status ? n.j.createElement(h.a, {
                            "className": "day_sign_bean"
                        }, n.j.createElement(_.a, {
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/sign_panel_done.png&auth=suXOh6U73u0hClu3ZXGU8yLGn8phPTQ2JmU9MTk5ODkyOTUyNCZ0PTE1OTg5Mjk1MjUmZj04Nl8yMDA5XzMwXzI1MCZyPW56VnFqWU5wQ00=",
                            "className": "day_sign_bean_done"
                        }), 1 == e.status ? n.j.createElement(f.a, {
                            "className": "day_sign_bean_txt"
                        }, e.beanQuantity, "京豆") : n.j.createElement(f.a, {
                            "className": "day_sign_bean_txt"
                        }, "已补签")) : 4 == e.status ? n.j.createElement(h.a, {
                            "className": "day_sign_bean"
                        }, n.j.createElement(h.a, {
                            "className": "need_sign need_sign_dis"
                        }, "补签")) : n.j.createElement(h.a, {
                            "className": "day_sign_bean"
                        }, n.j.createElement(_.a, {
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/sign_panel_bean.png&auth=sMM3g+kk0l0uy63Wm0Yk75X9oLFhPTQ2JmU9MTk5ODkyODYyMyZ0PTE1OTg5Mjg2MjQmZj05MF8yMDA5Xzg0XzY4JnI9dFZ3enFCWGFOdQ==",
                            "className": "day_sign_bean_img"
                        }), n.j.createElement(f.a, {
                            "className": "day_sign_bean_txt"
                        }, e.beanQuantity, "京豆")))
                    })), 0 == N.status ? n.j.createElement(h.a, {
                        "className": "sign_panel_btn",
                        "onClick": function onClick() {
                            G(-1)
                        }
                    }, "签到") : 1 == N.status ? n.j.createElement(h.a, {
                        "className": "sign_panel_btn sign_panel_btn_dis"
                    }, "今日已签到") : null), 0 != N.status || b || B || 1 != O ? b || B || 2 != O ? b || B || 3 != O || !(N.index < 6 || 6 == N.index && 0 == N.status) ? null : n.j.createElement(h.a, null, n.j.createElement(h.a, {
                        "className": "sign_double_tip"
                    }, n.j.createElement(h.a, {
                        "className": "sign_double_sanjiao"
                    }), n.j.createElement(f.a, {
                        "className": "sign_double_txt"
                    }, "连签翻倍"))) : n.j.createElement(h.a, null, n.j.createElement(h.a, {
                        "className": "sign_dog_tip sign_dog_tip2",
                        "style": U[1]
                    }, n.j.createElement(h.a, {
                        "className": "sign_panel_sanjiao"
                    }), n.j.createElement(_.a, {
                        "className": "sign_panel_dog sign_panel_dog2",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/sign_panel_tip.png&auth=PdEehfx8M2jl5pO/nTqmmLfGOo1hPTQ2JmU9MTk5OTU1NjYzMSZ0PTE1OTk1NTY2MzImZj04MV8yMDA5XzEyOTNfMzM3JnI9eUZENnhBczM2Tg=="
                    }), n.j.createElement(f.a, {
                        "className": "sign_panel_txt"
                    }, "点击补签按钮进行补签")), n.j.createElement(_.a, {
                        "className": "guide_click",
                        "style": U[0],
                        "src": K.dian2
                    })) : n.j.createElement(h.a, null, n.j.createElement(h.a, {
                        "className": "sign_dog_tip"
                    }, n.j.createElement(h.a, {
                        "className": "sign_panel_sanjiao"
                    }), n.j.createElement(_.a, {
                        "className": "sign_panel_dog",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/sign_panel_tip.png&auth=PdEehfx8M2jl5pO/nTqmmLfGOo1hPTQ2JmU9MTk5OTU1NjYzMSZ0PTE1OTk1NTY2MzImZj04MV8yMDA5XzEyOTNfMzM3JnI9eUZENnhBczM2Tg=="
                    }), n.j.createElement(f.a, {
                        "className": "sign_panel_txt"
                    }, "今天是领养我的第", a.index + 1, "天，", 0 == a.index ? "每日签到领取福利哦～" : "主人继续签到领福利吧～")), n.j.createElement(_.a, {
                        "class": "guide_click",
                        "src": K.dian2
                    })))), k && "sign_success" == k.type ? n.j.createElement(h.a, {
                        "className": "sign_success_dialog"
                    }, n.j.createElement(h.a, {
                        "className": "sign_success_mask"
                    }), n.j.createElement(h.a, {
                        "className": "sign_success_content"
                    }, n.j.createElement(_.a, {
                        "className": "check_close_btn",
                        "onClick": function onClick() {
                            X(),
                                Z()
                        },
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                    }), n.j.createElement(_.a, {
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/sign_success_top.png&auth=vnzwZ0Yfrn84CpL0WMS2CyIO+XFhPTQ2JmU9MTk5OTE5MTU4OCZ0PTE1OTkxOTE1ODkmZj05MF8yMDA5XzY4OV8zNjcmcj0xbGlxUTNWWFcy",
                        "className": "sign_success_bg"
                    }), n.j.createElement(h.a, {
                        "className": "sign_success_txt"
                    }, n.j.createElement(h.a, {
                        "className": "sign_success_title"
                    }, "签到成功"), n.j.createElement(h.a, {
                        "className": "sign_success_subtitle"
                    }, n.j.createElement(f.a, {
                        "className": "sign_success_bold"
                    }, k.jdBeanQuantity || "", "京豆"), n.j.createElement(f.a, {
                        "className": "sign_success_tip"
                    }, "将在24小时内入账"))), 1 == N.flag && N.index < 6 ? n.j.createElement(h.a, {
                        "className": "sign_success_txt_wrap"
                    }, n.j.createElement(_.a, {
                        "className": "sign_success_peng",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/jddog_sign_double.png&auth=5O83+HWwhBq2Nrw268t/6gYr+jphPTQ2JmU9MjAwMDc2NDM5MSZ0PTE2MDA3NjQzOTImZj05MF8yMDA5XzMwNDVfMTU4JnI9QWRCYm5Fa014VA=="
                    }), n.j.createElement(h.a, {
                        "className": "sign_success_txt1"
                    }, "主人，您有断签"), n.j.createElement(h.a, {
                        "className": "sign_success_txt2"
                    }, "补签后第7天奖励可翻倍"), n.j.createElement(h.a, {
                        "className": "sign_success_txt_btn",
                        "onClick": function onClick() {
                            Object(r.b)("sign_status_2"),
                                X()
                        }
                    }, "立即补签")) : n.j.createElement(h.a, {
                        "className": "sign_success_txt_wrap"
                    }, n.j.createElement(_.a, {
                        "className": "sign_success_peng",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/sing_dog_icon.png&auth=tZOU/Yv+N0JQB/5ntdHVnB04jrlhPTQ2JmU9MTk5OTE5MTc3NiZ0PTE1OTkxOTE3NzcmZj02N18yMDA5XzMyMl8xMDcmcj14ZHAyQXVYMkkz"
                    }), n.j.createElement(h.a, {
                        "className": "sign_success_txt1"
                    }, "今日有", n.j.createElement(f.a, {
                        "className": "sign_success_red"
                    }, "狗粮"), "待领取"), n.j.createElement(h.a, {
                        "className": "sign_success_txt2"
                    }, "领狗粮 兑积分 换好礼"), n.j.createElement(h.a, {
                        "className": "sign_success_txt_btn",
                        "onClick": function onClick() {
                            X(),
                                Z(),
                                i()
                        }
                    }, "立即领取")))) : k && "sign_reissue" == k.type ? n.j.createElement(h.a, {
                        "className": "sign_dialog"
                    }, n.j.createElement(h.a, {
                        "className": "sign_mask"
                    }), n.j.createElement(h.a, {
                        "className": "sign_content"
                    }, n.j.createElement(_.a, {
                        "className": "check_close_btn",
                        "onClick": function onClick() {
                            X(),
                                Z()
                        },
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                    }), n.j.createElement(_.a, {
                        "className": "sign_notice_bg",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/sign_notice_bg.png&auth=+RG3amH0HLP5/aIFQ9SXGl3Y00FhPTQ2JmU9MTk5OTQ2MTExNyZ0PTE1OTk0NjExMTgmZj02OV8yMDA5XzUzOV8yNjImcj1wQkxzaXJJbVA4"
                    }), n.j.createElement(_.a, {
                        "className": "sign_notice_bg sign_notice_bg2",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/sign_notice_bg.png&auth=+RG3amH0HLP5/aIFQ9SXGl3Y00FhPTQ2JmU9MTk5OTQ2MTExNyZ0PTE1OTk0NjExMTgmZj02OV8yMDA5XzUzOV8yNjImcj1wQkxzaXJJbVA4"
                    }), n.j.createElement(h.a, {
                        "className": "sign_title"
                    }, n.j.createElement(_.a, {
                        "className": "sign_notice_img",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/sign_notice.png&auth=HbEhspluxKFnG1uGALtZ0I0IdENhPTQ2JmU9MTk5OTQ0ODQ3MSZ0PTE1OTk0NDg0NzImZj02OF8yMDA5XzUxNl85MyZyPVF3V01hbW1sTkk="
                    }), "即将补签第", n.j.createElement(f.a, {
                        "className": "sign_txt_red"
                    }, k.reissueDay || ""), "天"), n.j.createElement(h.a, {
                        "className": "sign_content_txt"
                    }, n.j.createElement(h.a, {
                        "className": "sign_txt_red"
                    }, "完成任意一组狗粮任务"), n.j.createElement(h.a, null, "即可补签成功")), n.j.createElement(h.a, {
                        "className": "sign_content_tip"
                    }, "（每日签到、三餐任务不包括在内）"), n.j.createElement(h.a, {
                        "className": "sign_btn",
                        "onClick": function onClick() {
                            X(),
                                Z(),
                                i()
                        }
                    }, "立即去做"))) : k && "sign_reissue_dis" == k.type ? n.j.createElement(h.a, {
                        "className": "sign_dialog"
                    }, n.j.createElement(h.a, {
                        "className": "sign_mask"
                    }), n.j.createElement(h.a, {
                        "className": "sign_content sign_content2"
                    }, n.j.createElement(_.a, {
                        "className": "check_close_btn",
                        "onClick": function onClick() {
                            X(),
                                Z()
                        },
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                    }), n.j.createElement(h.a, {
                        "className": "sign_content_txt sign_content2_txt"
                    }, k.txtArr[0] || ""), n.j.createElement(h.a, {
                        "className": "sign_content_tip"
                    }, k.txtArr[1] || ""), n.j.createElement(h.a, {
                        "className": "sign_btn",
                        "onClick": function onClick() {
                            X(),
                                Z()
                        }
                    }, "知道了"))) : k && "sign_reissue_confirm" == k.type ? n.j.createElement(h.a, {
                        "className": "sign_dialog"
                    }, n.j.createElement(h.a, {
                        "className": "sign_mask"
                    }), n.j.createElement(h.a, {
                        "className": "sign_content sign_content3"
                    }, n.j.createElement(_.a, {
                        "className": "check_close_btn",
                        "onClick": function onClick() {
                            X(),
                                Z()
                        },
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                    }), n.j.createElement(h.a, {
                        "className": "sign_content_tit2 sign_content2_txt"
                    }, "您有", k.reissueNum || "", "天可补签"), n.j.createElement(h.a, {
                        "className": "sign_content_tip"
                    }, "补签完毕后今日签到奖励", n.j.createElement(f.a, {
                        "className": "sign_txt_red"
                    }, "可翻倍")), n.j.createElement(h.a, {
                        "className": "sign_btn sign_btn2",
                        "onClick": function onClick() {
                            Object(r.b)("sign_status_2"),
                                X()
                        }
                    }, "立即补签"), n.j.createElement(h.a, {
                        "className": "sign_bottom_tip",
                        "onClick": function onClick() {
                            G(-2)
                        }
                    }, "不要翻倍奖励，坚持签到"))) : null)
                }
            }]),
            NewFishSignPanel
    }()
        , ae = (a(130),
        function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }());
    var ne = function (e) {
        function ExactGift(e) {
            !function exactGift_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, ExactGift);
            var t = function exactGift_possibleConstructorReturn(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (ExactGift.__proto__ || Object.getPrototypeOf(ExactGift)).call(this, e));
            return t.state = {
                "isShowPop": !1,
                "popBtnKnow": !0,
                "isError": !1
            },
                t
        }

        return function exactGift_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(ExactGift, o["a"].Component),
            ae(ExactGift, [{
                "key": "componentWillMount",
                "value": function componentWillMount() {
                }
            }, {
                "key": "componentDidMount",
                "value": function componentDidMount() {
                    this.expoReport(this.props)
                }
            }, {
                "key": "componentWillReceiveProps",
                "value": function componentWillReceiveProps(e) {
                    this.expoReport(e)
                }
            }, {
                "key": "componentWillUnmount",
                "value": function componentWillUnmount() {
                }
            }, {
                "key": "componentDidShow",
                "value": function componentDidShow() {
                }
            }, {
                "key": "componentDidHide",
                "value": function componentDidHide() {
                }
            }, {
                "key": "expoReport",
                "value": function expoReport(e) {
                    var t = e.exactCouponData;
                    2 !== t.couponGetResult ? t.catId ? v.a.clickReport({}, {
                        "babelEventId": "expo_other_gift_lingqu<" + t.catId + ">"
                    }) : v.a.clickReport({}, {
                        "babelEventId": "expo_other_gift_lingqu_pt"
                    }) : v.a.clickReport({}, {
                        "babelEventId": "expo_other_gift_use"
                    })
                }
            }, {
                "key": "report",
                "value": function report(e, t) {
                    v.a.clickReport({
                        "moduleId": e,
                        "H5PageManual": "homepage",
                        "WXPageManual": "mini-homepage"
                    }, {
                        "babelEventId": t
                    })
                }
            }, {
                "key": "receiveCoupons",
                "value": function receiveCoupons() {
                    var e = this
                        , t = this.props.exactCouponData;
                    if (t.catId ? this.report("gift_lingqu<" + t.catId + ">", "other_gift_lingqu<" + t.catId + ">") : this.report("gift_lingqu_pt", "other_gift_lingqu_pt"),
                        this.isReqReceive)
                        return !1;
                    this.isReqReceive = !0,
                        Object(W.a)({
                            "url": v.a.interFaces.receiveCoupon,
                            "data": {},
                            "credentials": "include",
                            "method": "GET",
                            "header": this.props.reqHeader
                        }).then(function (t) {
                            if (console.log(t, "isReqReceive"),
                                e.isReqReceive = !1,
                            t.data.success && t.data.data) {
                                var a = ""
                                    , n = ""
                                    , o = t.data.data
                                    , i = !0;
                                switch (o.result) {
                                    case 1:
                                        e.reportFlag = "gift_p_yhqff",
                                            a = "优惠券已发放至您的账户",
                                            n = "打开【京东APP-我的-优惠券】查看并使用";
                                        break;
                                    case 2:
                                        a = "成功领取" + o.successCount + "张优惠券，" + o.failCount + "张券飞走了",
                                            n = "请尝试重新领取";
                                        break;
                                    case 3:
                                        a = o.failCount + "张券飞走了，请尝试重新领取";
                                        break;
                                    case 4:
                                        a = "操作太频繁了~",
                                            n = "请稍后再试~"
                                }
                                if (2 == o.result || 3 == o.result)
                                    switch (o.failCode) {
                                        case 1:
                                            a = "来晚啦~部分券已抢光，成功领取" + o.successCount + "张优惠券",
                                                n = "打开【京东APP-我的-优惠券】查看";
                                            break;
                                        case 2:
                                            e.reportFlag = "gift_p_yhqfw",
                                                a = "来晚啦~券已抢光",
                                                n = "参与养汪汪，兑京豆好礼~",
                                                i = !1;
                                            break;
                                        case 3:
                                            a = "成功领取" + o.successCount + "张优惠券，" + o.failCount + "张券飞走了，",
                                                n = "请尝试重新领取";
                                            break;
                                        case 4:
                                            a = o.failCount + "张券飞走了，请尝试重新领取";
                                            break;
                                        case 5:
                                            a = "来晚啦~部分券已抢光，成功领取" + o.successCount + "张优惠券",
                                                n = "打开【京东APP-我的-优惠券】查看";
                                            break;
                                        case 6:
                                            e.reportFlag = "gift_p_yhqfw",
                                                a = "来晚啦~券已抢光",
                                                n = "参与养汪汪，兑京豆好礼~",
                                                i = !1
                                    }
                                e.setState({
                                    "mainText": a,
                                    "subText": n,
                                    "isShowPop": !0,
                                    "popBtnKnow": i
                                }, function () {
                                    e.reportFlag && v.a.clickReport({}, {
                                        "babelEventId": "expo_other_" + e.reportFlag
                                    })
                                })
                            } else
                                "B0001" == t.data.errorCode ? e.props.onGoLogin() : (e.setState({
                                    "isShowPop": !0,
                                    "mainText": "阿偶，网络天线好像断了～",
                                    "subText": "请稍后再试",
                                    "isError": !0
                                }),
                                    e.report("gift_p_yc", "expo_other_gift_p_yc"))
                        }).catch(function (t) {
                            console.log(t),
                                e.isReqReceive = !1
                        })
                }
            }, {
                "key": "goMyCoupon",
                "value": function goMyCoupon() {
                    this.report("gift_use", "other_gift_use"),
                        this.props.onCloseExactGift(),
                        window.location.href = "https://wqs.jd.com/my/coupon/index.vue.shtml?ptag=7155.3.9&sceneval=2"
                }
            }, {
                "key": "partRight",
                "value": function partRight() {
                    this.setState({
                        "isShowPop": !1
                    }),
                    this.reportFlag && (this.report(this.reportFlag, "other_" + this.reportFlag),
                        this.reportFlag = ""),
                        this.props.onCloseExactGift()
                }
            }, {
                "key": "closePop",
                "value": function closePop() {
                    this.state.isError ? (this.report("gift_p_yc", "other_gift_p_yc"),
                        this.setState({
                            "isShowPop": !1
                        })) : this.partRight(this)
                }
            }, {
                "key": "render",
                "value": function render() {
                    var e = this.props.exactCouponData
                        , t = this.state
                        , a = t.isShowPop
                        , o = t.popBtnKnow
                        , i = t.isError
                        , r = t.mainText
                        , s = t.subText;
                    return n.j.createElement(h.a, {
                        "className": "exact_gift"
                    }, n.j.createElement(h.a, {
                        "className": "exact_pop_contain"
                    }, n.j.createElement(h.a, {
                        "className": "light_bg_contain"
                    }, n.j.createElement(_.a, {
                        "className": "light_circle",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/gift_light_bg.png&auth=b+0BtwsLUIefTLd5spWz9Nn1ZcxhPTQ2JmU9MTk5ODUzMDMzNiZ0PTE1OTg1MzAzMzcmZj04Nl8yMDA4XzM1NzJfNzI2JnI9NjdUSVU2dmR1ZA=="
                    })), n.j.createElement(_.a, {
                        "className": "pop_close_icon",
                        "onClick": this.props.onCloseExactGift,
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/close-btn-1.png&auth=5F8tZlxUv9fVM0zvK3WEUevdv1lhPTQ2JmU9MTk3MTY2MDQ0MyZ0PTE1NzE2NjA0NDQmZj02OV8xOTEwXzE4OTBfMzY1JnI9MnZpN3UzQ3RySA=="
                    }), n.j.createElement(h.a, {
                        "className": "exact_pop_top_mode"
                    }, n.j.createElement(h.a, {
                        "className": "top_line"
                    }, "已有", n.j.createElement(f.a, {
                        "className": "user_number"
                    }, e.couponGetCount), "用户享受优惠")), n.j.createElement(h.a, {
                        "className": "exact_pop_coupons"
                    }, e && e.coupons && e.coupons.map(function (e, t) {
                        var a = /^([0-9]+.?[0-9]+)$/.test(e.couponValue);
                        return n.j.createElement(h.a, {
                            "className": "coupon_item",
                            "key": t
                        }, n.j.createElement(h.a, {
                            "className": "left_mode"
                        }, n.j.createElement(h.a, {
                            "className": "top_half_circle"
                        }), n.j.createElement(h.a, {
                            "className": "right_dash_line"
                        }), n.j.createElement(h.a, {
                            "className": "bottom_half_circle"
                        }), n.j.createElement(h.a, {
                            "className": "left_main"
                        }, n.j.createElement(h.a, {
                            "className": "text_limit"
                        }, a && n.j.createElement(f.a, {
                            "className": "yen_char"
                        }, "¥"), n.j.createElement(f.a, {
                            "className": "deduct_price"
                        }, e.couponValue)), n.j.createElement(h.a, {
                            "className": "text_limit use_limit"
                        }, e.useCondition))), n.j.createElement(h.a, {
                            "className": "right_mode"
                        }, n.j.createElement(h.a, {
                            "className": "text_limit coupon_name"
                        }, e.couponName), n.j.createElement(h.a, {
                            "className": "text_limit coupon_limit"
                        }, e.userLimit), n.j.createElement(h.a, {
                            "className": "text_limit coupon_usefull"
                        }, "有效期：", e.effectTime), e.tag && n.j.createElement(h.a, {
                            "className": "hot_label_contain"
                        }, n.j.createElement(h.a, {
                            "className": "text_limit hot_label"
                        }, e.tag))))
                    }), n.j.createElement(h.a, {
                        "className": "receive_btn huxi"
                    }, 2 !== e.couponGetResult ? n.j.createElement(h.a, {
                        "className": "receive_btn_inner",
                        "onClick": this.receiveCoupons.bind(this)
                    }, "立即领取") : n.j.createElement(h.a, {
                        "className": "receive_btn_inner",
                        "onClick": this.goMyCoupon.bind(this)
                    }, "已领取，去使用")))), a && n.j.createElement(h.a, {
                        "className": "open-help-layer"
                    }, n.j.createElement(h.a, {
                        "className": "masker"
                    }), n.j.createElement(h.a, {
                        "className": "exact_coupon_pop"
                    }, n.j.createElement(_.a, {
                        "className": "pop_close_icon",
                        "onClick": this.closePop.bind(this),
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/close-btn-1.png&auth=5F8tZlxUv9fVM0zvK3WEUevdv1lhPTQ2JmU9MTk3MTY2MDQ0MyZ0PTE1NzE2NjA0NDQmZj02OV8xOTEwXzE4OTBfMzY1JnI9MnZpN3UzQ3RySA=="
                    }), n.j.createElement(h.a, null, n.j.createElement(h.a, {
                        "className": "exact_main_text"
                    }, r), s && n.j.createElement(h.a, {
                        "className": "exact_sub_text"
                    }, s), i ? n.j.createElement(h.a, {
                        "className": "exact_btn",
                        "onClick": this.closePop.bind(this)
                    }, n.j.createElement(h.a, {
                        "className": "exact_btn_text"
                    }, "再试试")) : n.j.createElement(h.a, {
                        "className": "exact_btn",
                        "onClick": this.partRight.bind(this)
                    }, n.j.createElement(h.a, {
                        "className": "exact_btn_text"
                    }, o ? "我知道了" : "立即参与"))))))
                }
            }]),
            ExactGift
    }();

    function isValueObject(e) {
        return Boolean(e && "function" == typeof e.equals && "function" == typeof e.hashCode)
    }

    function is(e, t) {
        if (e === t || e != e && t != t)
            return !0;
        if (!e || !t)
            return !1;
        if ("function" == typeof e.valueOf && "function" == typeof t.valueOf) {
            if ((e = e.valueOf()) === (t = t.valueOf()) || e != e && t != t)
                return !0;
            if (!e || !t)
                return !1
        }
        return !!(isValueObject(e) && isValueObject(t) && e.equals(t))
    }

    var oe = function depEqual(e, t) {
        if (e = e || {},
            t = t || {},
        Object.keys(e).length !== Object.keys(t).length)
            return !1;
        for (var a in t) {
            var n = e[a]
                , o = t[a];
            if ("function" != typeof n && "function" != typeof t && !is(n, o))
                return !1
        }
        return !0
    }
        , ie = function MemoBaseComponent(e) {
        return o.a.memo(e, oe)
    }
        , re = (a(132),
        function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }());
    var se = ie(function (e) {
        function ThreeMealsComp() {
            return function threeMeals_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, ThreeMealsComp),
                function threeMeals_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (ThreeMealsComp.__proto__ || Object.getPrototypeOf(ThreeMealsComp)).apply(this, arguments))
        }

        return function threeMeals_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(ThreeMealsComp, o["a"].Component),
            re(ThreeMealsComp, [{
                "key": "render",
                "value": function render() {
                    var e = this.props
                        , t = e.tasks
                        , a = e.onUpdateTask
                        , o = e.onReceiveReward
                        , i = ((t || []).filter(function (e) {
                        return "ThreeMeals" === e.taskType
                    }) || [])[0];
                    if (!i || !Object.keys(i).length)
                        return n.j.createElement(n.j.Fragment, null);
                    var r = function dealThreeMealsData() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                            , t = e.threeMeals || {}
                            , a = t.breakfastStart
                            , n = t.breakfastEnd
                            , o = t.dinnerEnd
                            , i = t.dinnerStart
                            , r = t.lunchEnd
                            , s = t.lunchStart
                            , c = e.threeMealsVO || {}
                            , l = +new Date
                            , p = [{
                            "name": "早餐",
                            "timeRange": a + "-" + n,
                            "timeCount": c.breakfastStart - l
                        }, {
                            "name": "午餐",
                            "timeRange": s + "-" + r,
                            "timeCount": c.lunchStart - l
                        }, {
                            "name": "晚餐",
                            "timeRange": i + "-" + o,
                            "timeCount": c.dinnerStart - l
                        }];
                        return e.datas = p,
                        e.lastGetMealTime < c.breakfastStart && (e.lastGetMealTime = ""),
                            l <= c.breakfastEnd && !e.lastGetMealTime ? e.chooseIndex = 0 : l <= c.lunchEnd && !e.lastGetMealTime ? e.chooseIndex = 1 : e.lastGetMealTime ? e.lastGetMealTime <= c.breakfastEnd && l <= c.lunchEnd ? e.chooseIndex = 1 : (e.lastGetMealTime <= c.lunchEnd || e.lastGetMealTime <= c.dinnerEnd) && (e.chooseIndex = 2) : e.chooseIndex = 2,
                            e
                    }(i)
                        , s = r.datas[r.chooseIndex];
                    return n.j.createElement(h.a, {
                        "className": j()("three_meal_container", ("chance_full" === r.receiveStatus || "chance_left" === r.receiveStatus) && "grey"),
                        "onClick": function onClick() {
                            return function handleClick(e, t) {
                                "unreceive" === e.receiveStatus && t && t(e)
                            }(r, o)
                        }
                    }, n.j.createElement(h.a, {
                        "className": "three_meal_img"
                    }, n.j.createElement(f.a, {
                        "className": "meal_reward"
                    }, r.taskReward + "g")), n.j.createElement(h.a, {
                        "className": "three_meal_text"
                    }, "unreceive" === r.receiveStatus ? s.name + "狗粮" : "chance_full" === r.receiveStatus ? "明日再来" : "chance_left" === r.receiveStatus ? n.j.createElement(H, {
                        "time": s.timeCount,
                        "type": 4,
                        "onUpdateTime": a
                    }) : null))
                }
            }]),
            ThreeMealsComp
    }())
        , ce = (a(134),
        function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }());
    var le = ie(function (e) {
        function SearchHomeGuide() {
            return function searchHomeGuide_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, SearchHomeGuide),
                function searchHomeGuide_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (SearchHomeGuide.__proto__ || Object.getPrototypeOf(SearchHomeGuide)).apply(this, arguments))
        }

        return function searchHomeGuide_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(SearchHomeGuide, o["a"].Component),
            ce(SearchHomeGuide, [{
                "key": "render",
                "value": function render() {
                    var e = this.props
                        , t = e.startGuide
                        , a = e.onCloseHomeGuide;
                    return t ? n.j.createElement(h.a, {
                        "className": j()("guide_search_container", t && "active")
                    }, n.j.createElement(h.a, {
                        "className": "guide_search_wrap"
                    }, n.j.createElement(_.a, {
                        "className": "guide_icon_close",
                        "src": v.a.closeIcon,
                        "onClick": a
                    }), n.j.createElement(h.a, {
                        "className": "guide_title"
                    }, "可以从", n.j.createElement(f.a, {
                        "className": "red"
                    }, "京东首页→搜索框→搜索“宠汪汪“"), "找到我"), n.j.createElement(h.a, {
                        "className": "guide_search_content"
                    }, n.j.createElement(h.a, {
                        "className": "back1"
                    }), n.j.createElement(h.a, {
                        "className": "back2"
                    }), n.j.createElement(h.a, {
                        "className": "pos1"
                    }), n.j.createElement(h.a, {
                        "className": "pos2"
                    }), n.j.createElement(h.a, {
                        "className": "pos3"
                    }, "搜索"))), n.j.createElement(h.a, {
                        "className": "guide_search_mask"
                    })) : n.j.createElement(n.j.Fragment, null)
                }
            }]),
            SearchHomeGuide
    }())
        , pe = (a(136),
        function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }());
    var ue = function (e) {
        function DressPop(e) {
            !function dressPop_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, DressPop);
            var t = function dressPop_possibleConstructorReturn(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (DressPop.__proto__ || Object.getPrototypeOf(DressPop)).call(this, e));
            return t.state = {},
                t
        }

        return function dressPop_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(DressPop, o["a"].Component),
            pe(DressPop, [{
                "key": "componentWillMount",
                "value": function componentWillMount() {
                }
            }, {
                "key": "componentDidMount",
                "value": function componentDidMount() {
                }
            }, {
                "key": "componentWillUnmount",
                "value": function componentWillUnmount() {
                }
            }, {
                "key": "stopDefault",
                "value": function stopDefault(e) {
                    e.stopPropagation(),
                        e.preventDefault()
                }
            }, {
                "key": "render",
                "value": function render() {
                    var e = this
                        , t = this.props
                        , a = t.preShowDress
                        , o = t.allDresses
                        , i = t.isLongScreen
                        , r = t.petDressNames
                        , s = t.staticAppearance
                        , c = t.newDressTag
                        , l = t.isDressing;
                    return a ? n.j.createElement(h.a, {
                        "className": "dress_pop_contain"
                    }, l && n.j.createElement(h.a, {
                        "className": "dressup_layer",
                        "onClick": this.props.clickDressLayer
                    }), a && n.j.createElement(h.a, {
                        "className": this.props.className,
                        "onClick": this.stopDefault.bind(this)
                    }, n.j.createElement(_.a, {
                        "className": "dressup_title_icon",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/dressup_title_icon_new.png&auth=2cBfFZv7Uwc7UrQp3ghfvzOlZchhPTQ2JmU9MTk4MjI3MjA3NyZ0PTE1ODIyNzIwNzgmZj0zMl8yMDAyXzIyMDlfMTM4JnI9YkJrbWZjOW41TQ=="
                    }), n.j.createElement(h.a, {
                        "className": "dressup_close_icon",
                        "onClick": this.props.clickDressLayer
                    }, n.j.createElement(_.a, {
                        "className": "close-icon-img",
                        "src": v.a.closeIcon
                    })), n.j.createElement(h.a, {
                        "className": "pattern_bg"
                    }, n.j.createElement(b.a, {
                        "className": "dress_scroll",
                        "scrollY": !0
                    }, n.j.createElement(h.a, {
                        "className": i ? "content higher_content" : "content"
                    }, o.map(function (t, a) {
                        return n.j.createElement(h.a, {
                            "taroKey": a,
                            "key": a,
                            "className": t.choosed ? "dress_item choosed_dress" : "dress_item",
                            "onClick": e.props.onChooseDress.bind(e, t)
                        }, t.unableChoose && n.j.createElement(h.a, {
                            "className": "cant_choose_dress"
                        }, "1"), t.choosed && n.j.createElement(_.a, {
                            "className": "choosed_icon",
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAe1BMVEUAAAD9//7///////////////////////////////////////////////////////////////////8BvnH////R8+Uix4QKwXY9zpMQwnrr+vRw2q/h9+6Z5cbJ8eCE37p33LNe1aVa1KOg5sqT48On6M5o2au/7ttM0ZuJbphQAAAAE3RSTlMA+/TmXgns28u3r3xmTjcbEY+QhxTFZAAAAaJJREFUSMeMkttygjAARAnhjqA2JwkFKpdW//8T21EGEQR63pg5S9gszgI/O8dhIEQQxufMd3Y4eYnLBDfxThu6n7oscNPVYw4SAN30hbHWFH2jAZCHt/oxutuVURNMpQGi49LPJVB3akFXAzKf+54A0Vr1BtsKEN7MB8pCrVCUwEsiF6CNWsVoEPmkrwRt1QZWg3w2j6A0ahNTQjTeP4hC7VAIGPbwJbRqlxbkY/MUarsfsDWk9//NhU79gw7c02MCvfnm8XT9GCOBal3/vApxHSIVJH+VXTDrvgb4Ga4WXN/JQO/4lM9vypwPaHZ86uG5gbMTQz9xbpfLbeY/O/YQOyFMVq4Avmf+17g2hE7w0rlmTCx9ZSBwBExmLhkS73xlQfxWWgYpAAIxDHyDIIgKngT9/wv3UhhIe5k9J7Bt06RBePdiBB5CfOl4Cnc1fH2JoqvSYgSeomkrjAlPWzcGB6PjGRzSgNHxSAPxBSPwiG+S9/mVRHnIe16g/w5XYIHkiloT0DZjjcxapTZja/c2UHxk+VD0seuD3Z8O/jjR588CfFyKKAkecOEAAAAASUVORK5CYII="
                        }), n.j.createElement(_.a, {
                            "className": "dress_item_img",
                            "src": s[t.name]
                        }), n.j.createElement(h.a, {
                            "className": "dress_item_name"
                        }, r[t.name]), t.isNew && n.j.createElement(h.a, {
                            "className": "new_tag"
                        }, n.j.createElement(f.a, {
                            "className": "new_tag_text"
                        }, c)))
                    }))), n.j.createElement(h.a, {
                        "className": "dressup_tips"
                    }, "点击衣服给宠汪汪试穿一下吧"), n.j.createElement(h.a, {
                        "className": "dressup_btn",
                        "onClick": this.props.dressUp
                    }, "开心穿上")))) : null
                }
            }]),
            DressPop
    }()
        , de = a(45)
        , me = (a(138),
        a(144),
        function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }());
    var he = {
        "content-type": "application/json"
    }
        , fe = [0, 0]
        , ge = function (e) {
        function GoodsWater(e) {
            !function goodsWaterFall_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, GoodsWater);
            var t = function goodsWaterFall_possibleConstructorReturn(e, t) {
                if (!e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (GoodsWater.__proto__ || Object.getPrototypeOf(GoodsWater)).call(this, e));
            return t.reportPoint = function (e) {
                var a = t.choosedTabIndex;
                switch (e.giftType) {
                    case "ad_banner":
                        0 === a && v.a.clickReport({
                            "moduleId": "exch_pbl_hot_banner" + e.id
                        }, {
                            "babelEventId": "exch_pbl_hot_banner" + e.id
                        });
                        break;
                    case "exchange":
                    case "address":
                        0 === a ? v.a.clickReport({
                            "moduleId": "exch_pbl_hot_" + e.skuId
                        }, {
                            "babelEventId": "exch_pbl_hot_" + e.skuId
                        }) : v.a.clickReport({
                            "moduleId": "exch_pbl_tabID_" + e.skuId
                        }, {
                            "babelEventId": "exch_pbl_tabID_" + e.skuId
                        })
                }
            }
                ,
                t.exchangeGoods = v.a.throttle(function (e) {
                    switch (t.reportPoint(e),
                        e.giftType) {
                        case "ad_banner":
                            t.goBanner(e);
                            break;
                        case "exchange":
                            t.goExchange(e);
                            break;
                        case "address":
                            t.addressChange(e),
                                t.currentPageNeedRefreshPageIndex = e.pageIndex;
                            break;
                        case "coupon":
                            var a = e;
                            null != e.leftStock && 0 != e.leftStock || (a = {
                                "exchangeFailContent": ["这个商品暂时无货哦", "小二在飞速补货中...", "看看别的好东西"]
                            }),
                                t.currentPageNeedRefreshPageIndex = e.pageIndex,
                                t.setState({
                                    "isShowConfirmLayer": !0,
                                    "showConfirmProductInfo": a
                                });
                            break;
                        default:
                            Object(s.d)({
                                "title": "商品配置错误",
                                "icon": "none",
                                "duration": 2e3
                            })
                    }
                }),
                t.goExchangeRecord = function () {
                    v.a.clickReport({
                        "moduleId": "exch_detail"
                    }, {
                        "babelEventId": "exch_detail"
                    }),
                        o.a.navigateTo({
                            "url": "/pages/exchange/exchangeRecord"
                        })
                }
                ,
                t.bindScroll = t.handleScroll.bind(t),
                t.state = {
                    "hasNextPage": !0,
                    "mainTitle": "",
                    "viceTitle": "",
                    "tabs": [],
                    "goodsList": [],
                    "showBackToTop": !1,
                    "isShowConfirmLayer": !1,
                    "showConfirmProductInfo": {},
                    "showContentState": !0
                },
                t
        }

        return function goodsWaterFall_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(GoodsWater, o["a"].Component),
            me(GoodsWater, [{
                "key": "componentWillMount",
                "value": function componentWillMount() {
                    this.choosedTabIndex = 0,
                        fe = [0, 0],
                        this.setState({
                            "showContentState": this.props.showContent
                        }),
                        this.getPageData()
                }
            }, {
                "key": "componentDidMount",
                "value": function componentDidMount() {
                    this.props.onCloseLoading()
                }
            }, {
                "key": "componentWillReceiveProps",
                "value": function componentWillReceiveProps(e) {
                    Object(r.a)("waterfall_page_index") && 0 != e.needUpdateIndex && (o.a,
                        Object(r.b)("waterfall_page_index"),
                        this.getGoods(e.needUpdateIndex)),
                        this.setState({
                            "showContentState": e.showContent
                        })
                }
            }, {
                "key": "componentWillUnmount",
                "value": function componentWillUnmount() {
                    fe = [0, 0],
                        window.removeEventListener("scroll", this.bindScroll)
                }
            }, {
                "key": "handleScroll",
                "value": function handleScroll() {
                    var e = this
                        , t = this.state.hasNextPage
                        , a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                    if (!1 !== t && !this.thisScrollHasGetGoods && !1 !== this.querySizeBack) {
                        this.querySizeBack = !1;
                        var n = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                        Object(d.a)().select(".dog_page").fields({
                            "size": !0
                        }, function (t) {
                            a + n + 200 > t.height && (e.thisScrollHasGetGoods = !0,
                                e.getGoods(e.nextPageNum)),
                                e.querySizeBack = !0
                        }).exec()
                    }
                    this.miniPageScroll(a)
                }
            }, {
                "key": "getPageData",
                "value": function getPageData() {
                    var e = this;
                    Object(W.a)({
                        "url": "" + v.a.interFaces.getGoodBase,
                        "credentials": "include",
                        "method": "GET"
                    }).then(function (t) {
                        if (t.data.success && t.data.data) {
                            var a = t.data.data
                                , n = a.tabs.map(function (e, t) {
                                return e.choosed = 0 === t,
                                    e
                            });
                            e.setState({
                                "mainTitle": a.mainTitle,
                                "viceTitle": a.viceTitle,
                                "tabs": n
                            }, function () {
                                e.getGoods(e.nextPageNum)
                            })
                        }
                    }).catch(function () {
                    })
                }
            }, {
                "key": "getGoods",
                "value": function getGoods(e) {
                    var t = this
                        , a = 20
                        , n = this.state
                        , o = n.tabs
                        , i = n.goodsList
                        , r = n.hasNextPage;
                    e || (this.nextPageNum = 1,
                        e = 1);
                    var s = this.nextPageNum != e || !r;
                    if (!1 === this.getGoodsBack)
                        return !1;
                    this.getGoodsBack = !1,
                        Object(W.a)({
                            "url": v.a.interFaces.getGoodConfig + "?tabId=" + o[this.choosedTabIndex].id + "&pageNum=" + e + "&pageSize=" + a,
                            "credentials": "include",
                            "method": "GET"
                        }).then(function (n) {
                            if (n.data.success && n.data.data) {
                                var o = n.data.data
                                    , r = s ? i.slice(a * (e - 1), a * e) : []
                                    , c = o.saleInfos.map(function (t, a) {
                                    var n = r[a] || {};
                                    return t.subsidy = v.a.subAcc(t.giftValue, t.changePrice),
                                        t.pageIndex = e,
                                        Object.assign(n, t)
                                })
                                    , l = {};
                                if (!s && c && c.length > 0)
                                    t.addNextGood(0, c),
                                        l.hasNextPage = o.nextPage || !1;
                                else if (s) {
                                    i.splice.apply(i, [a * (e - 1), a].concat(function _toConsumableArray(e) {
                                        if (Array.isArray(e)) {
                                            for (var t = 0, a = Array(e.length); t < e.length; t++)
                                                a[t] = e[t];
                                            return a
                                        }
                                        return Array.from(e)
                                    }(c)));
                                    l.goodsList = i
                                }
                                t.setState(l),
                                !s && o.nextPage && t.nextPageNum++,
                                    t.getGoodsBack = !0
                            }
                        }).catch(function () {
                        })
                }
            }, {
                "key": "countStyle",
                "value": function countStyle(e, t) {
                    return fe[1] < fe[0] ? (e.style = {
                        "top": o.a.pxTransform(fe[1]),
                        "right": 0
                    },
                        fe[1] = fe[1] + t + 16) : (e.style = {
                        "top": o.a.pxTransform(fe[0]),
                        "left": 0
                    },
                        fe[0] = fe[0] + t + 16),
                        e
                }
            }, {
                "key": "addNextGood",
                "value": function addNextGood(e, t) {
                    var a = this
                        , n = t[e];
                    "ad_banner" !== n.giftType ? (n = this.countStyle(n, 526),
                        e < t.length - 1 ? a.addNextGood(e + 1, t) : a.addToGoodsList(t)) : Object(m.a)({
                        "src": n.giftImage,
                        "success": function success(o) {
                            console.log(o, "Taro.getImageInfo"),
                                n = a.countStyle(n, o.height / o.width * 348),
                                e < t.length - 1 ? a.addNextGood(e + 1, t) : a.addToGoodsList(t)
                        }
                    })
                }
            }, {
                "key": "addToGoodsList",
                "value": function addToGoodsList(e) {
                    var t = this
                        , a = this
                        , n = this.state.goodsList;
                    this.setState({
                        "goodsList": n.concat(e)
                    }, function () {
                        void 0 === t.thisScrollHasGetGoods && window.addEventListener("scroll", a.bindScroll),
                            t.thisScrollHasGetGoods = !1
                    })
                }
            }, {
                "key": "chooseTab",
                "value": function chooseTab(e, t) {
                    var a = this;
                    if (e !== this.choosedTabIndex) {
                        var n = this.state.tabs;
                        n[this.choosedTabIndex].choosed = !1,
                            n[e].choosed = !0,
                            this.choosedTabIndex = e,
                            this.setState({
                                "tabs": n,
                                "hasNextPage": !0,
                                "goodsList": []
                            }, function () {
                                fe = [0, 0],
                                    a.nextPageNum = 1,
                                    a.getGoods(a.nextPageNum)
                            })
                    }
                    0 === e ? v.a.clickReport({
                        "moduleId": "exch_pbl_hot"
                    }, {
                        "babelEventId": "exch_pbl_hot"
                    }) : v.a.clickReport({
                        "moduleId": "exch_pbl_tabID" + t.id
                    }, {
                        "babelEventId": "exch_pbl_tabID" + t.id
                    })
                }
            }, {
                "key": "goTop",
                "value": function goTop() {
                    v.a.clickReport({
                        "moduleId": "top"
                    }, {
                        "babelEventId": "top"
                    }),
                        Object(u.a)({
                            "scrollTop": 0
                        })
                }
            }, {
                "key": "miniPageScroll",
                "value": function miniPageScroll(e) {
                    var t = this.state.showBackToTop;
                    e > 200 && !t ? this.setState({
                        "showBackToTop": !0
                    }) : e <= 200 && t && this.setState({
                        "showBackToTop": !1
                    })
                }
            }, {
                "key": "miniReachBottom",
                "value": function miniReachBottom() {
                    this.state.hasNextPage && this.getGoods(this.nextPageNum)
                }
            }, {
                "key": "goBanner",
                "value": function goBanner(e) {
                    o.a.navigateTo({
                        "url": e.h5Link
                    })
                }
            }, {
                "key": "goExchange",
                "value": function goExchange(e) {
                    var t = this;
                    Object(W.a)({
                        "url": "" + v.a.interFaces.getPayHomeInfo,
                        "data": {
                            "saleInfoId": e.id || ""
                        },
                        "credentials": "include",
                        "method": "GET",
                        "header": he
                    }).then(function (a) {
                        var n = a.data;
                        if (n.errorCode) {
                            var i = null;
                            switch (n.errorCode) {
                                case "stock_empty":
                                    i = {
                                        "exchangeFailContent": ["这个商品暂时无货哦", "小二在飞速补货中...", "看看别的好东西"]
                                    };
                                    break;
                                case "buy_limit":
                                    i = {
                                        "showExchangeFailContent": ["兑换" + ("jd_bean" == e.giftType ? "京豆" : "该商品") + "已达上限", "请把机会留给更多的小伙伴～", "看看别的好东西"]
                                    };
                                    break;
                                case "pay_waiting":
                                    i = {
                                        "exchangeFailContent": ["您有一笔未支付的订单", "可前往我的订单继续支付", "继续支付"],
                                        "orderId": n.data.orderCode || ""
                                    };
                                    break;
                                case "insufficient":
                                    i = e;
                                    break;
                                case "sku_offsale":
                                    i = {
                                        "exchangeFailContent": ["该商品已下架", "去看看别的好物吧", "去看看别的"]
                                    }
                            }
                            t.setState({
                                "isShowConfirmLayer": !0,
                                "showConfirmProductInfo": i
                            })
                        } else
                            Object(r.d)("exchange_order_storage", JSON.stringify(n)),
                                o.a.navigateTo({
                                    "url": "/pages/exchange/checkOrder?saleInfoId=" + e.id
                                }),
                                setTimeout(function () {
                                    Object(r.d)("waterfall_page_index", e.pageIndex)
                                }, 400)
                    })
                }
            }, {
                "key": "addressChange",
                "value": function addressChange(e) {
                    var t = this;
                    Object(W.a)({
                        "url": "" + v.a.interFaces.validateBuyLimit,
                        "data": {
                            "saleInfoId": e.id || ""
                        },
                        "credentials": "include",
                        "method": "GET",
                        "header": he
                    }).then(function (a) {
                        var n = a.data
                            , o = e;
                        if (n.success)
                            switch (n.errorCode) {
                                case "stock_empty":
                                    o = {
                                        "exchangeFailContent": ["这个商品暂时无货哦", "小二在飞速补货中...", "看看别的好东西"]
                                    };
                                    break;
                                case "buy_limit":
                                    o = {
                                        "exchangeFailContent": ["兑换该商品已达上限", "请把机会留给更多的小伙伴～", "看看别的好东西"]
                                    };
                                    break;
                                case "sku_offsale":
                                    o = {
                                        "exchangeFailContent": ["该商品已下架", "去看看别的好物吧", "去看看别的"]
                                    };
                                    break;
                                default:
                                    o = e
                            }
                        t.setState({
                            "isShowConfirmLayer": !0,
                            "showConfirmProductInfo": o
                        })
                    })
                }
            }, {
                "key": "closeConfirmLayer",
                "value": function closeConfirmLayer(e) {
                    this.setState({
                        "isShowConfirmLayer": !1,
                        "showConfirmProductInfo": {}
                    })
                }
            }, {
                "key": "refreshCouponAAddress",
                "value": function refreshCouponAAddress() {
                    this.currentPageNeedRefreshPageIndex && (this.getGoods(this.currentPageNeedRefreshPageIndex),
                        this.currentPageNeedRefreshPageIndex = null)
                }
            }, {
                "key": "render",
                "value": function render() {
                    var e = this
                        , t = this.state
                        , a = t.tabs
                        , i = t.mainTitle
                        , r = t.viceTitle
                        , s = t.goodsList
                        , c = t.hasNextPage
                        , l = t.showContentState
                        , p = t.showBackToTop
                        , u = t.isShowConfirmLayer
                        , d = t.showConfirmProductInfo
                        , m = this.props.coin
                        , g = a.length > 1 || s.length > 0
                        ,
                        y = 0 == fe[0] && 0 == fe[1] ? "auto" : fe[0] > fe[1] ? o.a.pxTransform(fe[0]) : o.a.pxTransform(fe[1]);
                    return i && r && l && g && n.j.createElement(h.a, {
                        "className": "goods_water_contain"
                    }, n.j.createElement(h.a, {
                        "className": "mode_title"
                    }, i), n.j.createElement(h.a, {
                        "className": "mode_sub_title"
                    }, r), n.j.createElement(b.a, {
                        "className": "tabs_contain",
                        "scrollX": !0
                    }, n.j.createElement(h.a, {
                        "className": "tabs_father"
                    }, a.map(function (t, a) {
                        return n.j.createElement(h.a, {
                            "key": a,
                            "onClick": e.chooseTab.bind(e, a, t),
                            "className": t.choosed ? "tab_item choosed" : "tab_item"
                        }, t.tabName)
                    }))), n.j.createElement(h.a, {
                        "className": "goods_contain",
                        "style": {
                            "height": y
                        }
                    }, s.length > 0 ? s.map(function (t, a) {
                        return "ad_banner" !== t.giftType ? n.j.createElement(h.a, {
                            "key": a,
                            "onClick": e.exchangeGoods.bind(e, t),
                            "className": "goods_item",
                            "data-dd": a,
                            "style": t.style
                        }, n.j.createElement(h.a, {
                            "className": "goods_img_contain"
                        }, n.j.createElement(_.a, {
                            "src": t.giftImage,
                            "className": "goods_img"
                        }), t.tags && n.j.createElement(h.a, {
                            "className": "goods_item_tag"
                        }, n.j.createElement(h.a, {
                            "className": "goods_item_tag_text"
                        }, t.tags)), !t.leftStock && n.j.createElement(h.a, {
                            "className": "no_stock_layer"
                        }, n.j.createElement(h.a, {
                            "className": "no_stock"
                        }, n.j.createElement(f.a, {
                            "className": "no_stock_text"
                        }, "补货中")))), n.j.createElement(f.a, {
                            "className": "sku_name"
                        }, t.giftName), n.j.createElement(h.a, {
                            "className": "price_contain"
                        }, n.j.createElement(h.a, {
                            "className": "price_left"
                        }, "address" == t.giftType || "coupon" == t.giftType ? n.j.createElement(h.a, {
                            "className": "price_left_top"
                        }, n.j.createElement(f.a, {
                            "className": "price_label"
                        }, "全额抵扣"), n.j.createElement(f.a, {
                            "className": "coin_text"
                        }, t.salePrice), n.j.createElement(_.a, {
                            "className": "coin_icon",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/points-icon.png&auth=hUmj0GBNif71svU/d80Mx0lMczFhPTQ2JmU9MTk3MDc5MjI4MCZ0PTE1NzA3OTIyODEmZj02Nl8xOTEwXzkzOV80NzQmcj1qVlpiNG1UMUtq"
                        })) : n.j.createElement(h.a, {
                            "className": "price_left_top"
                        }, n.j.createElement(f.a, {
                            "className": "price_label"
                        }, "补贴价"), n.j.createElement(f.a, {
                            "className": "rmb_char"
                        }, "¥"), n.j.createElement(f.a, {
                            "className": "price_text"
                        }, t.changePrice), n.j.createElement(f.a, {
                            "className": "plus_char"
                        }, "+"), n.j.createElement(f.a, {
                            "className": "coin_text"
                        }, t.salePrice), n.j.createElement(_.a, {
                            "className": "coin_icon",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/points-icon.png&auth=hUmj0GBNif71svU/d80Mx0lMczFhPTQ2JmU9MTk3MDc5MjI4MCZ0PTE1NzA3OTIyODEmZj02Nl8xOTEwXzkzOV80NzQmcj1qVlpiNG1UMUtq"
                        })), n.j.createElement(h.a, {
                            "className": "normal_price"
                        }, "日常价 ¥", t.giftValue)), n.j.createElement(h.a, {
                            "className": "price_right"
                        }, n.j.createElement(h.a, {
                            "className": "price_right_top"
                        }, "已补"), n.j.createElement(h.a, {
                            "className": "price_right_bottom"
                        }, n.j.createElement(f.a, {
                            "className": "rmb_char"
                        }, "¥"), t.subsidy)))) : n.j.createElement(_.a, {
                            "mode": "widthFix",
                            "key": a,
                            "className": "adv_item",
                            "data-dd": a,
                            "onClick": e.exchangeGoods.bind(e, t),
                            "style": t.style,
                            "src": t.giftImage
                        })
                    }) : n.j.createElement(h.a, {
                        "className": "no_goods_contain"
                    }, n.j.createElement(_.a, {
                        "className": "no_goods_img",
                        "src": "https://img10.360buyimg.com/imagetools/jfs/t1/151378/24/17473/3699/601009e9E51184f82/e9742f89d4ea2a7b.png"
                    }), n.j.createElement(h.a, {
                        "className": "no_goods_text"
                    }, "敬请期待"))), !c && s.length > 0 && n.j.createElement(h.a, {
                        "className": "bottom_text"
                    }, "已经到底啦～"), p && n.j.createElement(h.a, {
                        "className": "exchange_record_entry",
                        "onClick": this.goExchangeRecord
                    }, n.j.createElement(h.a, {
                        "className": "text"
                    }, "兑换记录")), p && n.j.createElement(h.a, {
                        "className": "back_top",
                        "onClick": this.goTop.bind(this)
                    }, n.j.createElement(h.a, {
                        "className": "back_top_content"
                    }, n.j.createElement(_.a, {
                        "className": "back_top_img",
                        "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/icon_back_top.png&auth=P61rm0ndPXmG9LE/aQgf7ZmcdRxhPTQ2JmU9MTk2NjM4OTA4MCZ0PTE1NjYzODkwODEmZj00Nl8xOTA4XzI3NTRfMzM0JnI9RVdLaHJJU2NPRA=="
                    }), n.j.createElement(h.a, {
                        "className": "back_top_text"
                    }, "顶部"))), n.j.createElement(de.a, {
                        "isShow": u,
                        "onRefreshHome": this.refreshCouponAAddress.bind(this),
                        "productInfo": d,
                        "userCoin": m,
                        "onShowMission": this.props.onShowMission,
                        "onCloseConfirmLayer": this.closeConfirmLayer.bind(this)
                    }))
                }
            }]),
            GoodsWater
    }()
        , _e = 1e3;
    a(148);
    var be = function () {
        return function (e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function sliceIterator(e, t) {
                    var a = []
                        , n = !0
                        , o = !1
                        , i = void 0;
                    try {
                        for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (a.push(r.value),
                        !t || a.length !== t); n = !0)
                            ;
                    } catch (e) {
                        o = !0,
                            i = e
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    return a
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
        , ye = function () {
        function defineProperties(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
            }
        }

        return function (e, t, a) {
            return t && defineProperties(e.prototype, t),
            a && defineProperties(e, a),
                e
        }
    }();
    var je = function (e) {
        function ExchangeCountDown() {
            return function exchangeCountDown_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, ExchangeCountDown),
                function exchangeCountDown_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (ExchangeCountDown.__proto__ || Object.getPrototypeOf(ExchangeCountDown)).apply(this, arguments))
        }

        return function exchangeCountDown_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(ExchangeCountDown, o["a"].Component),
            ye(ExchangeCountDown, [{
                "key": "render",
                "value": function render() {
                    var e = this.props
                        , t = e.updateTimerIndex
                        , a = e.time
                        , i = e.onTimeEnd
                        , r = o.a.useState({
                        "day": "00",
                        "hour": "00",
                        "minute": "00",
                        "second": "00"
                    })
                        , s = be(r, 2)
                        , c = s[0]
                        , l = s[1]
                        , p = o.a.useState(0)
                        , u = be(p, 2)
                        , d = u[0]
                        , m = u[1];
                    return o.a.useEffect(function () {
                        m(a)
                    }, [a, t]),
                        function useInterval(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _e
                                , a = o.a.useRef()
                                , n = null;
                            o.a.useEffect(function () {
                                a.current = e
                            }),
                                o.a.useEffect(function () {
                                    return n = setInterval(function tick() {
                                        return a.current(n)
                                    }, t),
                                        function () {
                                            return clearInterval(n)
                                        }
                                }, [t])
                        }(function (e) {
                            if ((d -= 1e3) < 0)
                                i();
                            else {
                                var t = function getTimeConfig(e) {
                                    var t = Math.floor(e / 1e3 / 3600 / 24);
                                    t < 10 && (t = "0" + t);
                                    var a = Math.floor(e / 1e3 / 3600 % 24);
                                    a < 10 && (a = "0" + a);
                                    var n = Math.floor(e / 1e3 / 60 % 60);
                                    n < 10 && (n = "0" + n);
                                    var o = Math.floor(e / 1e3 % 60);
                                    return o < 10 && (o = "0" + o),
                                        {
                                            "day": t,
                                            "hour": a,
                                            "minute": n,
                                            "second": o
                                        }
                                }(d);
                                l(t),
                                    m(d)
                            }
                        }),
                        n.j.createElement(h.a, {
                            "className": "count_down_container"
                        }, n.j.createElement(f.a, {
                            "className": "count_down_item"
                        }, n.j.createElement(f.a, {
                            "className": "num"
                        }, c.hour)), n.j.createElement(f.a, {
                            "className": "mark"
                        }, ":"), n.j.createElement(f.a, {
                            "className": "count_down_item"
                        }, n.j.createElement(f.a, {
                            "className": "num"
                        }, c.minute)), n.j.createElement(f.a, {
                            "className": "mark"
                        }, ":"), n.j.createElement(f.a, {
                            "className": "count_down_item"
                        }, n.j.createElement(f.a, {
                            "className": "num"
                        }, c.second)))
                }
            }]),
            ExchangeCountDown
    }();

    function useRouterBack(e) {
        o.a.useEffect(function () {
            return o.a.eventCenter.on("__taroRouterChange", function (t) {
                t.fromLocation;
                var a = t.toLocation.state.key;
                !Number(a) && e()
            }),
                function () {
                    o.a.eventCenter.off("__taroRouterChange")
                }
        }, [])
    }

    a(150);
    var ve = function () {
        function defineProperties(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
            }
        }

        return function (e, t, a) {
            return t && defineProperties(e.prototype, t),
            a && defineProperties(e, a),
                e
        }
    }()
        , Ee = function () {
        return function (e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function sliceIterator(e, t) {
                    var a = []
                        , n = !0
                        , o = !1
                        , i = void 0;
                    try {
                        for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (a.push(r.value),
                        !t || a.length !== t); n = !0)
                            ;
                    } catch (e) {
                        o = !0,
                            i = e
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    return a
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    var ke = function getOperateInfo(e, t) {
        var a = e.start
            , n = (t.find(function (e) {
            return e.processing
        }) || {}).time
            , o = ""
            , i = "";
        return Number(a) === Number(n) ? (o = "立即兑换",
            i = "start") : (o = "即将开始",
            i = "not_start"),
        e.leftStock || (i = "no_stock"),
            {
                "btnText": o,
                "operateClass": i
            }
    }
        , we = function getTabsTime() {
        var e, t = [{
            "time": 0,
            "processing": !1,
            "next": 8
        }, {
            "time": 8,
            "processing": !1,
            "next": 16
        }, {
            "time": 16,
            "processing": !1,
            "next": 24
        }], a = (new Date).getHours();
        for (var n in console.log("getTabsTime nowHour:", a),
            t) {
            var o = t[n];
            a >= o.time && a < o.next && (o.processing = !0)
        }
        var i = t.findIndex(function (e) {
            return e.processing
        });
        return e = t.slice(i, t.length).concat(t.slice(0, i)),
            console.log("sortTimes:", e),
            e
    }
        , De = function filterProcessTime(e) {
        return (e.filter(function (e) {
            return e.processing
        })[0] || {}).time
    }
        , Te = ie(function (e) {
        function JdBeanExchangeComp() {
            return function beanExchange_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, JdBeanExchangeComp),
                function beanExchange_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (JdBeanExchangeComp.__proto__ || Object.getPrototypeOf(JdBeanExchangeComp)).apply(this, arguments))
        }

        return function beanExchange_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(JdBeanExchangeComp, o["a"].Component),
            ve(JdBeanExchangeComp, [{
                "key": "render",
                "value": function render() {
                    var e = this.props
                        , t = e.intergral
                        , a = e.onShowMission
                        , i = e.onRefreshHome
                        , r = o.a.useState(!1)
                        , s = Ee(r, 2)
                        , c = s[0]
                        , l = s[1]
                        , p = o.a.useState(!1)
                        , u = Ee(p, 2)
                        , d = u[0]
                        , m = u[1]
                        , g = o.a.useState(0)
                        , b = Ee(g, 2)
                        , y = b[0]
                        , E = b[1]
                        , k = o.a.useState([])
                        , w = Ee(k, 2)
                        , D = w[0]
                        , T = w[1]
                        , N = o.a.useState(we())
                        , A = Ee(N, 2)
                        , x = A[0]
                        , M = A[1]
                        , S = o.a.useState(De(x))
                        , C = Ee(S, 2)
                        , P = C[0]
                        , I = C[1]
                        , O = o.a.useState({
                        "showConfirmProductInfo": {},
                        "isShowConfirmLayer": !1
                    })
                        , F = Ee(O, 2)
                        , R = F[0]
                        , z = F[1]
                        , U = function useRequestList(e) {
                        var t = e.timeTab
                            , a = e.onSuccess
                            , n = o.a.useState(0)
                            , i = Ee(n, 2)
                            , r = i[0]
                            , s = i[1];
                        console.log("useRequestList 京豆"),
                            o.a.useEffect(function () {
                                Object(W.a)({
                                    "url": "" + v.a.interFaces.getBeanConfigs,
                                    "credentials": "include",
                                    "method": "GET"
                                }).then(function (e) {
                                    console.log("useRequestList 京豆 result");
                                    var n = e.data || {};
                                    if (n.success && n.data) {
                                        var o = n.data["beanConfigs" + t].map(function (e) {
                                            return e.start = t,
                                                e
                                        });
                                        a(o)
                                    }
                                })
                            }, [t, r]);
                        return {
                            "runRequest": function runRequest() {
                                return s(function (e) {
                                    return e + 1
                                })
                            }
                        }
                    }({
                        "timeTab": P,
                        "onSuccess": function onSuccess(e) {
                            T(e),
                                setTimeout(function () {
                                    c || (l(!0),
                                        setTimeout(function () {
                                            !d && m(!0)
                                        }, 3e3))
                                }, 500)
                        }
                    }).runRequest;
                    useRouterBack(function () {
                        return U()
                    });
                    var Q = function runUpdateTimer() {
                        return E(function (e) {
                            return e + 1
                        })
                    };
                    return D && D.length ? (console.log("beanExchangeList: ", D),
                        n.j.createElement(h.a, {
                            "className": "bean_exchange_container"
                        }, n.j.createElement(h.a, {
                            "className": "bean_exchange_box"
                        }, n.j.createElement(h.a, {
                            "className": "box_header"
                        }, n.j.createElement(h.a, {
                            "className": "title_container"
                        }, n.j.createElement(h.a, {
                            "className": j()(d && "title")
                        }, "积分超值兑换")), n.j.createElement(h.a, {
                            "className": "left_decoration"
                        }, n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "tree_img")
                        }, n.j.createElement(h.a, {
                            "className": "leaf3"
                        }), n.j.createElement(h.a, {
                            "className": "leaf4"
                        })), n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "leaf1")
                        }), n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "leaf2")
                        })), n.j.createElement(h.a, {
                            "className": "right_decoration"
                        }, n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "tree_img")
                        }, n.j.createElement(h.a, {
                            "className": "leaf3"
                        }), n.j.createElement(h.a, {
                            "className": "leaf4"
                        })), n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "leaf1")
                        }), n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "leaf2")
                        }))), n.j.createElement(h.a, {
                            "className": "box_content"
                        }, n.j.createElement(h.a, {
                            "className": "time_tabs"
                        }, x && x.map(function (e) {
                            return n.j.createElement(h.a, {
                                "key": e.time,
                                "onClick": function onClick() {
                                    return function changeTab(e, t, a) {
                                        t(we()),
                                            a(e.time)
                                    }(e, M, I)
                                },
                                "className": j()(P === e.time && "active", "time_item")
                            }, n.j.createElement(h.a, {
                                "className": "time_num_container"
                            }, n.j.createElement(_.a, {
                                "src": function getTimeImage(e) {
                                    return {
                                        "0": "https://img14.360buyimg.com/imagetools/jfs/t1/169295/25/7642/761/6035ca00E9572daad/56137174e0699ab5.png",
                                        "8": "https://img13.360buyimg.com/imagetools/jfs/t1/150935/1/20194/933/6035ca00Ea753ad8b/34e7496c0a759011.png",
                                        "16": "https://img11.360buyimg.com/imagetools/jfs/t1/168408/19/7653/1134/6035ca00E25850305/e30027afafad1739.png"
                                    }[e.time]
                                }(e),
                                "className": j()("time_hour_img", "time_" + e.time)
                            }), "点场"), e.processing && n.j.createElement(je, {
                                "updateTimerIndex": y,
                                "time": function getCountDownTime(e) {
                                    var t = e.next
                                        , a = new Date
                                        , n = a.getFullYear()
                                        , o = a.getMonth()
                                        , i = a.getDate();
                                    return new Date(n, o, i, t).getTime() - a.getTime() + 2e3
                                }(e),
                                "onTimeEnd": function onTimeEnd() {
                                    return function _onTimeEnd(e, t, a, n) {
                                        console.log("onTimeEnd");
                                        var o = we()
                                            , i = De(o);
                                        e(o),
                                            t(i),
                                            n(),
                                            a()
                                    }(M, I, Q, U)
                                }
                            }))
                        })), n.j.createElement(h.a, {
                            "className": "bean_exchange_list"
                        }, D && D.map(function (e, t) {
                            return n.j.createElement(h.a, {
                                "className": "bean_exchange_item",
                                "key": e.id,
                                "onClick": function onClick() {
                                    return function handleBeanExhange(e, t, a, n, o) {
                                        var i = a.leftStock
                                            , r = a.start
                                            , s = (n.find(function (e) {
                                            return e.processing
                                        }) || {}).time;
                                        v.a.clickReport({
                                            "moduleId": "exch_JD_" + (e + 1) + "_" + t
                                        }, {
                                            "babelEventId": "exch_JD_" + (e + 1) + "_" + t
                                        }),
                                        i && Number(r) === Number(s) && o({
                                            "showConfirmProductInfo": a,
                                            "isShowConfirmLayer": !0
                                        })
                                    }(t, P, e, x, z)
                                }
                            }, !!e.saleRebate && n.j.createElement(h.a, {
                                "className": "discount"
                            }, n.j.createElement(f.a, {
                                "className": "discount_text"
                            }, function formatDiscountRate(e) {
                                var t = Number(e) / 10;
                                return Math.floor(t) !== t && t.toString().split(".")[1].length ? t.toFixed(1) : t.toFixed(0)
                            }(e.saleRebate), "折兑")), !e.leftStock && n.j.createElement(h.a, {
                                "className": "no_stock_container"
                            }, n.j.createElement(h.a, {
                                "className": "no_stock_text"
                            }, "抢光啦")), n.j.createElement(h.a, {
                                "className": "left_wrap"
                            }, n.j.createElement(h.a, {
                                "className": "img_bean"
                            })), n.j.createElement(h.a, {
                                "className": "right_wrap"
                            }, n.j.createElement(h.a, {
                                "className": "info_container"
                            }, n.j.createElement(h.a, {
                                "className": "bean_num_container"
                            }, n.j.createElement(f.a, {
                                "className": "bean_num"
                            }, e.giftValue), "京豆"), n.j.createElement(h.a, {
                                "className": "coin_container"
                            }, n.j.createElement(f.a, {
                                "className": "coin_discount"
                            }, e.salePrice, "积分"), e.originSalePrice !== e.salePrice && n.j.createElement(f.a, {
                                "className": "coin_origin"
                            }, e.originSalePrice))), n.j.createElement(h.a, {
                                "className": "footer_container"
                            }, n.j.createElement(h.a, {
                                "className": j()("operate_btn", ke(e, x).operateClass)
                            }, ke(e, x).btnText), !!e.leftStock && n.j.createElement(h.a, {
                                "className": "stock"
                            }, "库存:", n.j.createElement(f.a, {
                                "className": "stock_num"
                            }, function getStock(e) {
                                return e.toString().length > 5 ? (e / 1e4).toFixed(0) + "万" : e
                            }(e.leftStock))))))
                        }))), n.j.createElement(de.a, {
                            "isShow": R.isShowConfirmLayer,
                            "userCoin": t,
                            "productInfo": R.showConfirmProductInfo,
                            "onCloseConfirmLayer": function onCloseConfirmLayer() {
                                return function _onCloseConfirmLayer(e, t) {
                                    e({
                                        "showConfirmProductInfo": {},
                                        "isShowConfirmLayer": !1
                                    }),
                                        t()
                                }(z, U)
                            },
                            "onShowMission": a,
                            "onRefreshHome": i
                        })))) : n.j.createElement(n.j.Fragment, null)
                }
            }]),
            JdBeanExchangeComp
    }())
        , Ne = (a(152),
        function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }())
        , Ae = function () {
        return function (e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function sliceIterator(e, t) {
                    var a = []
                        , n = !0
                        , o = !1
                        , i = void 0;
                    try {
                        for (var r, s = e[Symbol.iterator](); !(n = (r = s.next()).done) && (a.push(r.value),
                        !t || a.length !== t); n = !0)
                            ;
                    } catch (e) {
                        o = !0,
                            i = e
                    } finally {
                        try {
                            !n && s.return && s.return()
                        } finally {
                            if (o)
                                throw i
                        }
                    }
                    return a
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    var xe = v.a.throttle(function (e, t) {
        v.a.clickReport({
            "moduleId": "exch_cztm_" + e.skuId
        }, {
            "babelEventId": "exch_cztm_" + e.skuId
        }),
        (e.dailyLeft || "pay_waiting" === e.orderStatus) && ("exchange" === e.giftType ? Object(W.a)({
            "url": "" + v.a.interFaces.getPayHomeInfo,
            "data": {
                "saleInfoId": e.id
            },
            "credentials": "include",
            "method": "GET"
        }).then(function (a) {
            var n = a.data;
            "stock_empty" === n.errorCode ? t({
                "isShowConfirmLayer": !0,
                "showConfirmProductInfo": {
                    "exchangeFailContent": ["这个商品暂时无货哦", "小二在飞速补货中...", "看看别的好东西"]
                }
            }) : "buy_limit" === n.errorCode ? t({
                "isShowConfirmLayer": !0,
                "showConfirmProductInfo": {
                    "showExchangeFailContent": ["兑换该商品已达上限", "请把机会留给更多的小伙伴～", "看看别的好东西"]
                }
            }) : "pay_waiting" === n.errorCode ? t({
                "isShowConfirmLayer": !0,
                "showConfirmProductInfo": {
                    "exchangeFailContent": ["您有一笔未支付的订单", "可前往我的订单继续支付", "继续支付"],
                    "orderId": n.data.orderCode
                }
            }) : "insufficient" === n.errorCode ? t({
                "isShowConfirmLayer": !0,
                "showConfirmProductInfo": e
            }) : "sku_offsale" === n.errorCode ? t({
                "isShowConfirmLayer": !0,
                "showConfirmProductInfo": {
                    "exchangeFailContent": ["该商品已下架", "去看看别的好物吧", "去看看别的"]
                }
            }) : o.a.navigateTo({
                "url": "/pages/exchange/checkOrder?saleInfoId=" + e.id
            })
        }) : "address" === e.giftType && Object(W.a)({
            "url": "" + v.a.interFaces.validateBuyLimit,
            "data": {
                "saleInfoId": e.id
            },
            "credentials": "include",
            "method": "GET"
        }).then(function (a) {
            var n = a.data;
            if (n.success)
                switch (n.errorCode) {
                    case "stock_empty":
                        t({
                            "isShowConfirmLayer": !0,
                            "showConfirmProductInfo": {
                                "exchangeFailContent": ["这个商品暂时无货哦", "小二在飞速补货中...", "看看别的好东西"]
                            }
                        });
                        break;
                    case "buy_limit":
                        t({
                            "isShowConfirmLayer": !0,
                            "showConfirmProductInfo": {
                                "exchangeFailContent": ["兑换该商品已达上限", "请把机会留给更多的小伙伴～", "看看别的好东西"]
                            }
                        });
                        break;
                    case "sku_offsale":
                        t({
                            "isShowConfirmLayer": !0,
                            "showConfirmProductInfo": {
                                "exchangeFailContent": ["该商品已下架", "去看看别的好物吧", "去看看别的"]
                            }
                        });
                        break;
                    default:
                        t({
                            "isShowConfirmLayer": !0,
                            "showConfirmProductInfo": e
                        })
                }
            else
                t({
                    "isShowConfirmLayer": !0,
                    "showConfirmProductInfo": e
                })
        }))
    })
        , Me = function getDiscount(e) {
        var t = e.giftValue
            , a = e.changePrice;
        return v.a.accAdd(t, -a)
    }
        , Se = function getSaleRate(e) {
        var t = e.dailyLeft
            , a = e.dailyStock
            , n = 100 * (a - t) / a;
        return function getDecimalLen(e) {
            return Math.floor(e) === Number(e) ? 0 : e.toString().split(".")[1].length
        }(n) && (n = n < 10 ? n.toFixed(1) : Math.floor(n)),
        n + "%"
    }
        , Ce = ie(function (e) {
        function SuperDiscountComp() {
            return function superDiscount_classCallCheck(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }(this, SuperDiscountComp),
                function superDiscount_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (SuperDiscountComp.__proto__ || Object.getPrototypeOf(SuperDiscountComp)).apply(this, arguments))
        }

        return function superDiscount_inherits(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                "constructor": {
                    "value": e,
                    "enumerable": !1,
                    "writable": !0,
                    "configurable": !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(SuperDiscountComp, o["a"].Component),
            Ne(SuperDiscountComp, [{
                "key": "render",
                "value": function render() {
                    var e = this.props
                        , t = e.intergral
                        , a = e.onShowMission
                        , i = e.onCloseLoading
                        , r = o.a.useState(!1)
                        , s = Ae(r, 2)
                        , c = s[0]
                        , l = s[1]
                        , p = o.a.useState(!1)
                        , u = Ae(p, 2)
                        , d = u[0]
                        , m = u[1]
                        , g = o.a.useState([])
                        , b = Ae(g, 2)
                        , y = b[0]
                        , E = b[1]
                        , k = function useRequestList(e) {
                        var t = e.onSuccess
                            , a = e.onError
                            , n = o.a.useState(0)
                            , i = Ae(n, 2)
                            , r = i[0]
                            , s = i[1];
                        o.a.useEffect(function () {
                            Object(W.a)({
                                "url": "" + v.a.interFaces.getSuperSale,
                                "credentials": "include",
                                "method": "GET"
                            }).then(function (e) {
                                var n = e.data || {};
                                n.success && n.data ? t(n.data) : a()
                            }).catch(function (e) {
                                a(),
                                    console.log(e)
                            })
                        }, [r]);
                        return {
                            "runRequest": function runRequest() {
                                return s(function (e) {
                                    return e + 1
                                })
                            }
                        }
                    }({
                        "onSuccess": function onSuccess(e) {
                            E(e),
                                i(),
                                setTimeout(function () {
                                    c || (l(!0),
                                        setTimeout(function () {
                                            !d && m(!0)
                                        }, 3e3))
                                }, 1e3)
                        },
                        "onError": function onError() {
                            i()
                        }
                    }).runRequest
                        , w = o.a.useState({
                        "showConfirmProductInfo": {},
                        "isShowConfirmLayer": !1
                    })
                        , D = Ae(w, 2)
                        , T = D[0]
                        , N = D[1];
                    return useRouterBack(function () {
                        return k()
                    }),
                        y && Object.keys(y).length && y.goodConfigList && y.goodConfigList.length ? n.j.createElement(h.a, {
                            "className": "super_discount_container"
                        }, n.j.createElement(h.a, {
                            "className": "super_discount_box"
                        }, n.j.createElement(h.a, {
                            "className": "box_header"
                        }, n.j.createElement(h.a, {
                            "className": "title_container"
                        }, n.j.createElement(h.a, {
                            "className": j()(d && "title")
                        }, y.mainTitle)), n.j.createElement(h.a, {
                            "className": "left_decoration"
                        }, n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "tree_img")
                        }, n.j.createElement(h.a, {
                            "className": "leaf3"
                        }), n.j.createElement(h.a, {
                            "className": "leaf4"
                        })), n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "leaf1")
                        }), n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "leaf2")
                        })), n.j.createElement(h.a, {
                            "className": "right_decoration"
                        }, n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "tree_img")
                        }, n.j.createElement(h.a, {
                            "className": "leaf3"
                        }), n.j.createElement(h.a, {
                            "className": "leaf4"
                        })), n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "leaf1")
                        }), n.j.createElement(h.a, {
                            "className": j()(c && "start_animate", d && "tree_animate", "leaf2")
                        }))), n.j.createElement(h.a, {
                            "className": "box_sub_header"
                        }, y.viceTitle), n.j.createElement(h.a, {
                            "className": "product_list"
                        }, y.goodConfigList && y.goodConfigList.map(function (e) {
                            return n.j.createElement(h.a, {
                                "className": "product_item",
                                "key": e.id,
                                "onClick": function onClick() {
                                    return xe(e, N)
                                }
                            }, n.j.createElement(h.a, {
                                "className": "left_wrap"
                            }, n.j.createElement(_.a, {
                                "className": "product_img",
                                "src": e.giftImage
                            }), n.j.createElement(h.a, {
                                "className": "product_img_cover"
                            }), n.j.createElement(h.a, {
                                "className": "tab_discount"
                            }, n.j.createElement(h.a, {
                                "className": "text_container"
                            }, n.j.createElement(f.a, {
                                "className": "tab_title"
                            }, "直降"), n.j.createElement(f.a, {
                                "className": j()("discount_num", Me(e).toString().length > 3 && "small_size")
                            }, Me(e))))), n.j.createElement(h.a, {
                                "className": "right_wrap"
                            }, n.j.createElement(h.a, {
                                "className": "info_container"
                            }, n.j.createElement(h.a, {
                                "className": "sku_name"
                            }, e.giftName), !!e.tagList && !!e.tagList.length && n.j.createElement(h.a, {
                                "className": "tab_container"
                            }, e.tagList.map(function (e) {
                                return n.j.createElement(f.a, {
                                    "className": "tab_item",
                                    "key": e
                                }, n.j.createElement(f.a, {
                                    "className": "tab_text"
                                }, e))
                            }))), n.j.createElement(h.a, {
                                "className": "footer_container"
                            }, n.j.createElement(h.a, {
                                "className": j()("discount_container", function getLen(e) {
                                    var t = e.salePrice
                                        , a = e.changePrice
                                        , n = Me(e);
                                    return t.toString().length + a.toString().length + n.toString().length
                                }(e) >= 13 && "small_size")
                            }, function isWholeDiscount(e) {
                                return "coupon" === e.giftType || "address" === e.giftType
                            }(e) ? n.j.createElement(h.a, {
                                "className": "discount_money_container whole_discount"
                            }, n.j.createElement(f.a, {
                                "className": "discount_title"
                            }, "全额抵扣")) : n.j.createElement(h.a, {
                                "className": "discount_money_container"
                            }, n.j.createElement(f.a, {
                                "className": "discount_title"
                            }, "补贴价"), n.j.createElement(h.a, {
                                "className": "discount_money"
                            }, n.j.createElement(f.a, {
                                "className": "num"
                            }, e.changePrice), n.j.createElement(f.a, {
                                "className": "mark"
                            }, "+"))), n.j.createElement(h.a, {
                                "className": "discount_coin_container"
                            }, n.j.createElement(f.a, {
                                "className": "coin"
                            }, e.salePrice), n.j.createElement(f.a, {
                                "className": "coin_discount"
                            }, "抵扣", n.j.createElement(f.a, {
                                "className": "num"
                            }, "¥", Me(e))))), n.j.createElement(h.a, {
                                "className": "origin_price"
                            }, "日常价", n.j.createElement(f.a, {
                                "className": "money"
                            }, "¥", e.giftValue)), n.j.createElement(h.a, {
                                "className": "sale_container"
                            }, n.j.createElement(h.a, {
                                "className": "sale_progress"
                            }, n.j.createElement(h.a, {
                                "className": "progress_whole"
                            }, n.j.createElement(h.a, {
                                "className": "progress_complete",
                                "style": "width: " + Se(e)
                            })), n.j.createElement(h.a, {
                                "className": "buy_num"
                            }, "已购", Se(e))), n.j.createElement(h.a, {
                                "className": j()("buy_btn", !e.dailyLeft && "pay_waiting" !== e.orderStatus && "no_stock")
                            }, function getOperateText(e) {
                                var t = e.dailyLeft
                                    , a = e.orderStatus;
                                return t || "pay_waiting" === a ? "立即抢购" : "已抢光"
                            }(e))))))
                        })), n.j.createElement(de.a, {
                            "isShow": T.isShowConfirmLayer,
                            "userCoin": t,
                            "productInfo": T.showConfirmProductInfo,
                            "onCloseConfirmLayer": function onCloseConfirmLayer() {
                                return function _onCloseConfirmLayer(e, t) {
                                    e({
                                        "showConfirmProductInfo": {},
                                        "isShowConfirmLayer": !1
                                    }),
                                        t()
                                }(N, k)
                            },
                            "onShowMission": a
                        }))) : n.j.createElement(n.j.Fragment, null)
                }
            }]),
            SuperDiscountComp
    }())
        , Pe = a(38);
    a(154);
    a.d(t, "default", function () {
        return tt
    });
    var Ie = function () {
        function defineProperties(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
            }
        }

        return function (e, t, a) {
            return t && defineProperties(e.prototype, t),
            a && defineProperties(e, a),
                e
        }
    }();
    var Oe = o.a.getApp()
        , Fe = Oe.canJumpApp
        , Re = v.a.isInJrAppEnv()
        , ze = !v.a.isInJrAppEnv() && !v.a.isInAppEnv()
        , Ue = v.a.constImgs
        , Qe = {
            "standard": "https://img14.360buyimg.com/imagetools/jfs/t1/161782/18/4494/5641/60101541E252e2268/f84410ac1f16ec5e.png",
            "rabbit": "https://img12.360buyimg.com/imagetools/jfs/t1/171515/1/4373/5581/60101542E1ca54a60/1a3ab0ab32782889.png",
            "leisure": "https://img13.360buyimg.com/imagetools/jfs/t1/164326/30/4450/5354/60101541Ec044863d/862e22d2250690dd.png",
            "minions": "https://img14.360buyimg.com/imagetools/jfs/t1/154200/21/15352/5648/6010153fE5a7633a2/09bc989dc8eb568a.png",
            "winter": "https://img12.360buyimg.com/imagetools/jfs/t1/152448/26/16360/6228/60101542Ea5862fd3/2f07c4edcb037ca8.png",
            "newYear": "https://img10.360buyimg.com/imagetools/jfs/t1/152913/10/16664/5943/6010153fE44f2be1a/c95cac3adf5fecea.png",
            "valentine": "https://img12.360buyimg.com/imagetools/jfs/t1/163099/37/4231/6242/60101541E9224c2f7/4bab5e46b91c271b.png",
            "butterfly": "https://img13.360buyimg.com/imagetools/jfs/t1/151109/29/17047/5436/6010153eE561b7019/4f58cb4d8ad36049.png",
            "cake": "https://img10.360buyimg.com/imagetools/jfs/t1/156053/37/7805/5608/6010153eE4216aa29/244c8ebec2d91e43.png",
            "midAutumn": "https://img11.360buyimg.com/imagetools/jfs/t1/156688/20/7603/5557/6010153dE4e594b6b/61f25e362409887b.png"
        }
        , Le = {
            "standard": "https://img11.360buyimg.com/imagetools/jfs/t1/153445/30/15090/144733/60068c2bE9a95b59b/e004b015f00da288.png",
            "minions": "https://img14.360buyimg.com/imagetools/jfs/t1/163814/40/3430/195700/60068cecEf3f849f1/5dbbcbfe6221c5ad.png",
            "leisure": "https://img11.360buyimg.com/imagetools/jfs/t1/151743/22/14255/147766/5ffd94a4Ee54b174c/54af3326a647940b.png",
            "rabbit": "https://img12.360buyimg.com/imagetools/jfs/t1/155775/23/6636/182527/600690b1E72e02265/b5855ef8c924c5e8.png",
            "winter": "https://img12.360buyimg.com/imagetools/jfs/t1/152981/25/15613/256943/600691f0E8eef5a24/b17cc723ecefe287.png",
            "newYear": "https://img12.360buyimg.com/imagetools/jfs/t1/159986/14/4194/208507/600692daE9dcc6c82/0a75301cae886e81.png",
            "valentine": "https://img11.360buyimg.com/imagetools/jfs/t1/153130/31/15155/152456/6006935dE86d0664b/e172d4c3102b0c31.png",
            "butterfly": "https://img11.360buyimg.com/imagetools/jfs/t1/158766/5/4079/318136/600693fcEdf8423ed/02d2404c7e494227.png",
            "cake": "https://img10.360buyimg.com/imagetools/jfs/t1/161643/11/3485/182641/60069465E46258b55/cfdcd839302c7b7f.png",
            "midAutumn": "https://img11.360buyimg.com/imagetools/jfs/t1/158584/37/4736/176788/600fc7deE142a3e5b/77920430d230ea39.png"
        }
        , He = {
            "standard": "https://img14.360buyimg.com/imagetools/jfs/t1/169940/9/3378/328590/60068c2aEd633b2ef/acb516caaa7f32d8.png",
            "minions": "https://img10.360buyimg.com/imagetools/jfs/t1/165762/10/3178/417906/60068cebE40e91678/612980f03213513a.png",
            "leisure": "https://img13.360buyimg.com/imagetools/jfs/t1/168249/32/2339/328964/5ffd94a4Ef8cc675e/67b5c70e90ff7fcb.png",
            "rabbit": "https://img12.360buyimg.com/imagetools/jfs/t1/153554/9/15203/368943/600690b0E9e358e81/ed84ab22496f25b0.png",
            "winter": "https://img11.360buyimg.com/imagetools/jfs/t1/158128/16/4171/548574/600691efE7ab506e5/fbc730e3a730d11c.png",
            "newYear": "https://img10.360buyimg.com/imagetools/jfs/t1/165674/31/3085/434128/600692d9E35727728/bf9eecee1f12a927.png",
            "valentine": "https://img12.360buyimg.com/imagetools/jfs/t1/163037/10/3314/360196/6006935eEe3d26982/3fd28580a10047d1.png",
            "butterfly": "https://img14.360buyimg.com/imagetools/jfs/t1/166162/24/5069/746102/6017d573E263df6be/993d3b97b9d95ad4.png",
            "cake": "https://img12.360buyimg.com/imagetools/jfs/t1/158828/24/4024/356453/60069465E58cf7fd5/8b8305b3b5fea58d.png",
            "midAutumn": "https://img12.360buyimg.com/imagetools/jfs/t1/162442/10/4443/427517/600fc7dfEd22f19da/274c2b75f8435b7e.png"
        }
        , Be = v.a.headAppearance
        , Je = {
            "standard": "https://img14.360buyimg.com/imagetools/jfs/t1/155756/7/6627/181934/60068c2aE58b0e02d/9c95828ab89ef54d.png",
            "minions": "https://img14.360buyimg.com/imagetools/jfs/t1/153065/4/14487/218599/60068cecE08b24e8d/fcc8ddeb2941ab33.png",
            "leisure": "https://img11.360buyimg.com/imagetools/jfs/t1/163979/38/2159/173020/5ffd94a3Ee403078f/a9d6d2bd16e1d638.png",
            "rabbit": "https://img12.360buyimg.com/imagetools/jfs/t1/158978/18/3894/200227/600690afEd94e7976/7408604546c644f6.png",
            "winter": "https://img11.360buyimg.com/imagetools/jfs/t1/159121/8/4032/249461/600691edE029be79b/bb7c1782c9bd38c7.png",
            "newYear": "https://img10.360buyimg.com/imagetools/jfs/t1/171024/38/5208/858747/6017d572Ebdb7a454/a52e4af72469eaa6.png",
            "valentine": "https://img13.360buyimg.com/imagetools/jfs/t1/159623/30/4064/176109/6006935eE5d32df60/1f37b75322a8fd87.png",
            "butterfly": "https://img11.360buyimg.com/imagetools/jfs/t1/154602/19/15382/1207292/600693fbEfc0b4f31/9b2ab9efc6b72cee.png",
            "cake": "https://img14.360buyimg.com/imagetools/jfs/t1/163631/26/3368/200489/60069464E48851f3c/6348fb8e64c22772.png",
            "midAutumn": "https://img13.360buyimg.com/imagetools/jfs/t1/152227/16/15544/192705/600fc7deEd181c7a7/dd17f273da5c387c.png"
        }
        , Ze = {
            "standard": "https://img13.360buyimg.com/imagetools/jfs/t1/163915/29/3343/167228/60068c2bE2bab227b/0e2b8c56261fa7ea.png",
            "minions": "https://img11.360buyimg.com/imagetools/jfs/t1/160187/23/4005/237651/60068cebE1f1bd06b/f1d4e619232499a5.png",
            "leisure": "https://img10.360buyimg.com/imagetools/jfs/t1/160613/18/2478/195211/5ffd94a2E9d1fa742/a74fe83c1a18d278.png",
            "rabbit": "https://img14.360buyimg.com/imagetools/jfs/t1/155662/4/6734/232605/600690afE5f92e386/00f6502bd171d13b.png",
            "winter": "https://img12.360buyimg.com/imagetools/jfs/t1/169143/3/3282/275137/600691ecE9b47e1b2/685c31d8151702e9.png",
            "newYear": "https://img13.360buyimg.com/imagetools/jfs/t1/155456/17/15095/268335/600692d8E9cc7bbde/2afe051d501a8a15.png",
            "valentine": "https://img12.360buyimg.com/imagetools/jfs/t1/163983/10/2565/227647/6006935eEf88ad41b/6e27da5742c91979.png",
            "butterfly": "https://img11.360buyimg.com/imagetools/jfs/t1/163258/31/3338/557797/600693f9E63988811/01098dae3b6a2286.png",
            "cake": "https://img12.360buyimg.com/imagetools/jfs/t1/160766/3/3474/219186/60069464Ec7542f60/a38f2a2967708ded.png",
            "midAutumn": "https://img13.360buyimg.com/imagetools/jfs/t1/163514/28/4338/229487/600fc7deE0c6776e1/8ba34f47051b616c.png"
        }
        , Ve = {
            "standard": "朋克狗",
            "rabbit": "兔兔狗",
            "leisure": "夹克狗",
            "minions": "工装狗",
            "winter": "过节狗",
            "newYear": "鼠鼠狗",
            "valentine": "爱情狗",
            "butterfly": "蝴蝶狗",
            "cake": "烘焙大师",
            "midAutumn": "奔月"
        }
        ,
        Ge = ["midAutumn", "cake", "butterfly", "valentine", "newYear", "standard", "leisure", "winter", "rabbit", "minions"]
        , Xe = {
            "standard": "朋克装",
            "rabbit": "兔兔装",
            "leisure": "夹克装",
            "minions": "工装",
            "winter": "过节装",
            "newYear": "鼠鼠装",
            "valentine": "爱情装",
            "butterfly": "女神装",
            "cake": "烘焙大师",
            "midAutumn": "奔月"
        }
        , We = [{
            "name": "每日登录",
            "taskType": "LoginEveryDay",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task_1.png&auth=0UtRuRIMGn8Xg8a0lqDpRKM5PcNhPTQ2JmU9MTk3MDc4MTkxOCZ0PTE1NzA3ODE5MTkmZj0yNl8xOTEwXzEwNDRfNDE0JnI9a0xIeE9UNU1HOQ=="
        }, {
            "name": "每日三餐",
            "taskType": "ThreeMeals",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/task_meals.png&auth=ikZT+GDMQ+VZ6V1OsTZKLYB9CqBhPTQ2JmU9MTk3NTU5OTI4OSZ0PTE1NzU1OTkyOTAmZj02OV8xOTEyXzg2N18xMzQmcj12bjdaVHhLTWNV"
        }, {
            "name": "每日喂食次数",
            "taskType": "Feed",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task_3.png&auth=gnI/bREZ9q5UQQSGVmWzR0U1JYhhPTQ2JmU9MTk3MDc4MTk2NiZ0PTE1NzA3ODE5NjcmZj02NF8xOTEwXzkxOV8xNTEmcj0wdk9TQjVheGRV",
            "text": "去喂食"
        }, {
            "name": "签到领京豆",
            "taskType": "SignEveryDay",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/task_sign.png&auth=CXwCVw5X0WOv6m7DOsRuaTWF+95hPTQ2JmU9MTk3NTU5OTMyNyZ0PTE1NzU1OTkzMjgmZj00NV8xOTEyXzg2M180MjEmcj1USDdTTW03UU40"
        }, {
            "name": "邀请好友",
            "taskType": "InviteUser",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/task_invite.png&auth=skrBarcockY4kx5wr92uHBB50gVhPTQ2JmU9MTk3NTU5OTI2MiZ0PTE1NzU1OTkyNjMmZj00NV8xOTEyXzg2M18zNzImcj1iUzBxT1ZXbWhC",
            "text": "去邀请"
        }, {
            "name": "逛逛会场",
            "taskType": "ScanMarket",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/task_scan_market.png&auth=tbj/bkq/ie+ITDt+MHL7Yze3W49hPTQ2JmU9MTk3NTU5OTMwOCZ0PTE1NzU1OTkzMDkmZj00OF8xOTEyXzg2NF80NjYmcj0zeU9Tc2RKNzlP",
            "text": "去逛逛"
        }, {
            "name": "关注商品",
            "taskType": "FollowGood",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/task_follow_goods.png&auth=XO8f2x1cMWv/qpm4WYjKuIpe6zBhPTQ2JmU9MTk3NTU5OTIyMCZ0PTE1NzU1OTkyMjEmZj0zMV8xOTEyXzg1OV81OTEmcj1kZmhQNXI2SzYy",
            "text": "去关注"
        }, {
            "name": "关注频道",
            "taskType": "FollowChannel",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task_8.png&auth=tXBWkDv/DcYzwiLTnB/lPWVNqplhPTQ2JmU9MTk3MDc4MjA1OCZ0PTE1NzA3ODIwNTkmZj0yMl8xOTEwXzEwNDlfMjU5JnI9eUhjZHo5dEJ1WQ==",
            "text": "去关注"
        }, {
            "name": "关注店铺",
            "taskType": "FollowShop",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/task_follow_shop.png&auth=B1ojOMi09z1szzsATtjvVHKSvexhPTQ2JmU9MTk3NTU5OTIzOSZ0PTE1NzU1OTkyNDAmZj02NF8xOTEyXzg2Nl82MjUmcj1xOEVrQ0xrQTR6",
            "text": "去关注"
        }, {
            "name": "看视频",
            "taskType": "ViewVideo",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/video_icon.png&auth=Go58xcyhvD8ANtc071zFg1XnJ0FhPTQ2JmU9MTk4MTk0NjY2NyZ0PTE1ODE5NDY2NjgmZj04NV8yMDAyXzQ2N18zNTImcj0wYzZsMFdhb0Jq",
            "text": "去观看"
        }, {
            "name": "体验小程序",
            "taskType": "PlayWeapp",
            "iconImgUrl": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/task_scan_market.png&auth=tbj/bkq/ie+ITDt+MHL7Yze3W49hPTQ2JmU9MTk3NTU5OTMwOCZ0PTE1NzU1OTkzMDkmZj00OF8xOTEyXzg2NF80NjYmcj0zeU9Tc2RKNzlP",
            "text": "去逛逛"
        }, {
            "name": "每日参与一次宠物赛跑",
            "taskType": "race",
            "iconImgUrl": "https://img13.360buyimg.com/imagetools/jfs/t1/146954/19/18337/3612/5fd754b7Eace6a995/cded1f0e0ef3a3e4.png",
            "text": "去参与"
        }, {
            "name": "每日参与一次兑换",
            "taskType": "exchange",
            "iconImgUrl": "https://img11.360buyimg.com/imagetools/jfs/t1/140466/20/18400/3487/5fd754b6Ec48a9fbc/fd5376770e203bca.png",
            "text": "去参与"
        }, {
            "name": "每日帮好友喂一次狗粮",
            "taskType": "HelpFeed",
            "iconImgUrl": "https://img14.360buyimg.com/imagetools/jfs/t1/154285/2/9817/3376/5fd754b7Efde73fd6/07b80cfc8a461d64.png",
            "text": "去帮喂"
        }, {
            "name": "每日喂狗粮",
            "taskType": "FeedEveryDay",
            "iconImgUrl": "https://img12.360buyimg.com/imagetools/jfs/t1/153298/2/9970/3783/5fd754b6E1bb40634/904665d2c0569922.png",
            "text": "去完成"
        }]
        , Ye = {
            "content-type": "application/json"
        }
        , qe = {
            "content-type": "application/x-www-form-urlencoded"
        }
        , Ke = [{
            "bottom": "460px",
            "left": "145px"
        }, {
            "bottom": "370px",
            "left": "225px"
        }, {
            "bottom": "275px",
            "left": "260px"
        }, {
            "bottom": "325px",
            "left": "55px"
        }, {
            "bottom": "150px",
            "left": "70px"
        }]
        , $e = null
        , et = null
        , tt = function (e) {
            function Index(e) {
                !function jdDog_classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Index);
                var t = function jdDog_possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, e));
                return t.config = {
                    "usingComponents": {
                        "subscribe-message": "../../components/v-subscribeMessage/v_subscribeMessage"
                    },
                    "onReachBottomDistance": 200
                },
                    t.bindWaterRef = function (e) {
                        t.goodsWaterRef = e
                    }
                    ,
                    t.state = {
                        "indexStyle": {
                            "width": "375px",
                            "height": "667px"
                        },
                        "goldCoinStyle": {
                            "top": "-100px",
                            "left": "-200px"
                        },
                        "update": !1,
                        "dogFoodNumber": 0,
                        "intergral": 0,
                        "foodCountDonwTime": 0,
                        "isGive": !1,
                        "layerStyle": null,
                        "scrollStyle": null,
                        "taskArr": [],
                        "isOpenDogFoodLayer": !1,
                        "isOpenDogFoodPopLayer": !1,
                        "isShowShareImg": !1,
                        "helpPin": "",
                        "showHelpFeed": !1,
                        "showHelpFeedLayer": !1,
                        "isShowConfirmLayer": !1,
                        "canStealNumber": 0,
                        "isShowStealLayer": !1,
                        "degreeNumber": 0,
                        "registerYear": "",
                        "degreeStyle": {
                            "width": "0%"
                        },
                        "isOpenFoodPopLayerNoAnimation": !1,
                        "isGoHide": !1,
                        "pin": "",
                        "invitePin": "",
                        "logoUrl": "",
                        "shareImgName": "",
                        "petAppearance": "",
                        "age": 0,
                        "isBackApp": !1,
                        "helpFeedData": {
                            "friends": []
                        },
                        "hasDoubleFood": !1,
                        "isApp": !0,
                        "returnHomeParam": "",
                        "isShowBottomBackApp": !1,
                        "isLongScreen": !1,
                        "isShowLoading": !0,
                        "ishowHelpFeedNoAnimation": !1,
                        "isOpenLevelTip": !1,
                        "needCountNumber": 0,
                        "showLevelUpPop": !1,
                        "levelUpData": {},
                        "friendAge": 0,
                        "isDogPengEmpty": !0,
                        "isLogin": 0,
                        "friendListIsEnd": !1,
                        "showChooseFood": !1,
                        "foodOptions": [{
                            "icon": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/food1.png&auth=Ahs2W0wOfy5b7fsSjcYQ0JTkCfphPTQ2JmU9MTk3NTAxMjEzNSZ0PTE1NzUwMTIxMzYmZj02M18xOTExXzM1MzJfNjkmcj1aVGw0Q3pEcmtK",
                            "foods": 10,
                            "canChoose": !0
                        }, {
                            "icon": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/food2.png&auth=xpEbM1Uhs1SOD13RT33JlBEhZ1FhPTQ2JmU9MTk3NTAxMjIwMyZ0PTE1NzUwMTIyMDQmZj02M18xOTExXzM1MzJfNzYmcj1oM1ZpelRrcFJw",
                            "foods": 20,
                            "canChoose": !0
                        }, {
                            "icon": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/food3.png&auth=Pmtl2Xq3y12DTcXO7mifoi4Q8yxhPTQ2JmU9MTk3NTAxMjIyMSZ0PTE1NzUwMTIyMjImZj0zMV8xOTExXzIwNjNfMjIwJnI9THpxd2lMNnhycw==",
                            "foods": 40,
                            "canChoose": !0
                        }, {
                            "icon": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/food4.png&auth=c9UdmM16UdSaxhwzzqEB7JGroERhPTQ2JmU9MTk3NTAxMjIzOCZ0PTE1NzUwMTIyMzkmZj02Nl8xOTExXzM1MjRfODk2JnI9ZXVEOG15ZkZiVQ==",
                            "foods": 80,
                            "canChoose": !0
                        }],
                        "isHungry": !1,
                        "isShowGoldCoin": !1,
                        "isTeasingDog": !1,
                        "helpFeedStatus": "",
                        "todayFeedInfo": {
                            "feedPetRewards": []
                        },
                        "loadingType": "home",
                        "isDressing": !1,
                        "preShowDress": !1,
                        "tempPetAppearance": "",
                        "allDresses": [],
                        "showIsSaveDress": !1,
                        "helpStatus": "",
                        "needHelpUserNickName": "",
                        "needHelpUserImage": "",
                        "petHelpCoin": "",
                        "isFirstEnterHome": !0,
                        "hasShowNewDress": !0,
                        "isSupportRewardVideo": !1,
                        "hasRewardVideo": !1,
                        "isThreeMealTime": !1,
                        "inviteSource": "",
                        "invitefriendListData": {},
                        "currentVedioTask": {},
                        "userHeadIcon": "",
                        "shareTypeEnu": "",
                        "sceneParams": "",
                        "detailInfo": {},
                        "closeNewFishBox": !0,
                        "userSign": "",
                        "isShowExactGift": !1,
                        "exactResBack": !1,
                        "hasExactCouponAct": !1,
                        "exactCouponData": {},
                        "taskUnreceiveCount": 0,
                        "startGuide": !1,
                        "tmplIds": ["cSRJbnQY2RFKWxg4VBIvIXy7cgzF4D2iHMxfF0FWBPU"],
                        "subscribeFeedMsg": !1,
                        "showFingerGuide": !1,
                        "fingerGuidePosition": null,
                        "hideHelpFriendPop": !1,
                        "announceTextStyle": {},
                        "isCloseGames": !0,
                        "screenHeight": 736,
                        "dogShadowStyle": {
                            "bottom": o.a.pxTransform(94)
                        },
                        "waterFallGoodsNeedUpdateIndex": 0
                    },
                    t
            }

            return function jdDog_inherits(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    "constructor": {
                        "value": e,
                        "enumerable": !1,
                        "writable": !0,
                        "configurable": !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(Index, o["a"].Component),
                Ie(Index, [{
                    "key": "componentWillMount",
                    "value": function componentWillMount() {
                        this.$router.params;
                        this.checkLoadJs(),
                            this.checkLoadWQJs(),
                            this.checkJrDownTimeJs(),
                            this.onloadFunc()
                    }
                }, {
                    "key": "componentDidMount",
                    "value": function componentDidMount() {
                    }
                }, {
                    "key": "componentWillUnmount",
                    "value": function componentWillUnmount() {
                        clearTimeout(this.autumTime),
                            clearInterval(this.exactTimer),
                            clearInterval(this.announceInterval)
                    }
                }, {
                    "key": "computePageHeight",
                    "value": function computePageHeight() {
                        var e = Object(i.a)()
                            , t = e.windowHeight
                            , a = e.windowWidth
                            , n = e.screenHeight
                            , o = Math.floor(.8 * t)
                            , r = o - Math.floor(a / 375 * 75);
                        this.setState({
                            "layerStyle": {
                                "width": a + "px",
                                "height": o + "px"
                            },
                            "scrollStyle": {
                                "height": r + "px"
                            },
                            "isLongScreen": n > 736,
                            "screenHeight": n
                        })
                    }
                }, {
                    "key": "onloadFunc",
                    "value": function onloadFunc() {
                        var e = this
                            , t = this.$router.params
                            , a = Object(i.a)()
                            , n = a.windowHeight
                            , o = a.windowWidth
                            , s = a.screenHeight
                            , c = Math.floor(.8 * n)
                            , l = c - Math.floor(o / 375 * 75)
                            , p = v.a.isInAppEnv() || v.a.isInJrAppEnv() || !1
                            , u = Math.floor(5 * Math.random())
                            , d = Ke[u];
                        console.log(a, "systemInfo"),
                            this.setState({
                                "inviteSource": t.inviteSource || "",
                                "goldCoinStyle": d,
                                "indexStyle": {
                                    "width": o + "px",
                                    "height": n - 42 + "px",
                                    "marginBottom": "42px"
                                },
                                "layerStyle": {
                                    "width": o + "px",
                                    "height": c + "px"
                                },
                                "scrollStyle": {
                                    "height": l + "px"
                                },
                                "isApp": p,
                                "isLongScreen": s > 736,
                                "screenHeight": s
                            }),
                            t && t.helpPin ? this.setState({
                                "helpPin": t.helpPin,
                                "isShowLoading": !1
                            }) : Object(r.b)("needUpdatePage"),
                        t && t.invitePin && this.setState({
                            "invitePin": decodeURIComponent(t.invitePin)
                        });
                        try {
                            var m = Object(r.a)("FollowShopOrChannel")
                                , h = Object(r.a)("FollowItem")
                                , f = Object(r.a)("homeTabJumpOther");
                            m || h || f ? (this.setState({
                                "isFirstEnterHome": !1
                            }),
                            f && Object(r.b)("homeTabJumpOther")) : this.setState({
                                "isFirstEnterHome": !0
                            })
                        } catch (e) {
                        }
                        v.a.loginJd(function (a) {
                            if (1 == a) {
                                e.goEnterHome("enterRoom"),
                                t.showMission && e.openDogFoodLayer(!1),
                                    e.setReturnHomeParam(1);
                                var n = null;
                                t.source && (n = {
                                    "source": t.source
                                }),
                                    v.a.sendPv("MMyDog_Home", n)
                            } else
                                e.setReturnHomeParam(0)
                        }),
                        t.source && v.a.selfStatistic({
                            "reqHeader": Ye,
                            "source": t.source
                        })
                    }
                }, {
                    "key": "checkLoadWQJs",
                    "value": function checkLoadWQJs() {
                        var e = this.$router.params;
                        v.a.isInMicroMessage() && "JDCOM" == e.source && v.a.loadScript({
                            "url": "https://wq.360buyimg.com/js/common/dest/wq.jshop.report.min.js",
                            "id": "wqClick"
                        })
                    }
                }, {
                    "key": "checkJrDownTimeJs",
                    "value": function checkJrDownTimeJs() {
                        v.a.loadScript({
                            "url": "https://static.360buyimg.com/finance/mobile/base/plugin/readMission/js/readMissionPlugin.js",
                            "id": "jdReadMission"
                        })
                    }
                }, {
                    "key": "checkLoadJs",
                    "value": function checkLoadJs() {
                        var e = this.$router.params;
                        e.componentId && (console.log(e.componentId, "params.componentId"),
                            v.a.downloadDownTimeJs(function () {
                                if (console.log(window, "windowwindow"),
                                "ViewkitTask" in window) {
                                    var t = {
                                        "businessId": "cww",
                                        "componentId": e.componentId,
                                        "taskParam": encodeURIComponent(e.taskParam)
                                    };
                                    ("default" in window.ViewkitTask ? window.ViewkitTask.default : window.ViewkitTask).renderViewkitTask(t).then(function () {
                                        console.log("checkLoadJs success")
                                    }).catch(function (e) {
                                        console.log(e, "checkLoadJs")
                                    })
                                }
                            }))
                    }
                }, {
                    "key": "statistic",
                    "value": function statistic(e, t) {
                    }
                }, {
                    "key": "checkRadioAd",
                    "value": function checkRadioAd() {
                        var e = this;
                        e.videoAd = wx.createRewardedVideoAd({
                            "adUnitId": "adunit-29eb529cb20658e7"
                        }),
                            e.videoAd.onLoad(function () {
                                console.log("onLoad拉取到激励视频"),
                                    e.setState({
                                        "hasRewardVideo": !0
                                    })
                            }),
                            e.videoAd.onError(function (t) {
                                console.log(t, "/pages/jdDog/jdDog---onError-----------"),
                                    e.setState({
                                        "hasRewardVideo": !1
                                    })
                            }),
                            e.videoAd.onClose(function (t) {
                                t && t.isEnded || void 0 === t ? (console.log("激励视频播放完成！！！！！！"),
                                    e.goFollow(e.state.currentVedioTask)) : (Object(s.d)({
                                    "title": "您未看完视频，看完奖励狗粮哦",
                                    "icon": "none",
                                    "duration": 2e3
                                }),
                                    console.log("激励视频播放中途退出！！！！！！"))
                            })
                    }
                }, {
                    "key": "showRewardVideo",
                    "value": function showRewardVideo() {
                        var e = this;
                        console.log("开始看激励视频"),
                            e.videoAd.show().catch(function () {
                                e.videoAd.load().then(function () {
                                    console.log("看的时候没有激励视频重新拉取到激励视频"),
                                        e.videoAd.show().catch(function () {
                                            console.log("看的时候没有激励视频重新拉取后也没有播放成功"),
                                                e.setState({
                                                    "hasRewardVideo": !1
                                                }),
                                                Object(s.d)({
                                                    "title": "当前网络不稳定，请稍后再试",
                                                    "icon": "none",
                                                    "duration": 2e3
                                                })
                                        })
                                }).catch(function (t) {
                                    console.log("激励视频 广告显示失败", t),
                                        e.setState({
                                            "hasRewardVideo": !1
                                        }),
                                        Object(s.d)({
                                            "title": "当前网络不稳定，请稍后再试",
                                            "icon": "none",
                                            "duration": 2e3
                                        })
                                })
                            })
                    }
                }, {
                    "key": "initLog",
                    "value": function initLog() {
                        var e = this.$router.params
                            , t = requirePlugin("loginPlugin").getPtPin()
                            , a = {
                            "params": e,
                            "url": "/pages/jdDog/jdDog",
                            "pname": "MMyDog_Home",
                            "pageId": "MMyDog_Home",
                            "openId": Oe.openId,
                            "unionId": Oe.unionId || "",
                            "ptPin": t
                        };
                        v.a.initLog(null, a)
                    }
                }, {
                    "key": "onReachBottom",
                    "value": function onReachBottom() {
                    }
                }, {
                    "key": "onPageScroll",
                    "value": function onPageScroll(e) {
                    }
                }, {
                    "key": "componentDidShow",
                    "value": function componentDidShow() {
                        var e = this;
                        Pe.a.sendPV({
                            "projectId": "cww",
                            "H5Page": "homepage",
                            "WXPage": "mini-homepage"
                        });
                        var t = this.$router.params;
                        Object(c.a)({
                            "title": t.helpPin ? decodeURIComponent(t.friendName) + "的汪汪" : "宠汪汪"
                        });
                        var a = this;
                        if (v.a.isInAppEnv() && (window.webviewVisible = function (e) {
                                0 == e ? console.log("webview 消失") : (console.log("webview 出现"),
                                1 == a.state.isLogin && a.jumpBack())
                            }
                        ),
                        ze && this.computePageHeight(),
                            console.log(this.state.isLogin, "isLogin"),
                            this.state.isGoHide) {
                            Object(r.a)("needUpdatePage") && !t.helpPin && this.getFriends(),
                                this.jumpBack();
                            var n = Object(r.a)("waterfall_page_index");
                            this.setState({
                                "waterFallGoodsNeedUpdateIndex": n || 0
                            }),
                                Object(r.a)("needUpdatePage")
                        }
                        this.state.hasDoubleFood && this.miniProSteal();
                        var o = setTimeout(function () {
                            t.helpPin ? e.reportExposeFriendHome() : e.reportExposeHome(),
                                clearTimeout(o)
                        }, 0);
                        this._offReachBottom = Object(l.a)({
                            "callback": this.onReachBottom,
                            "ctx": this,
                            "onReachBottomDistance": 200
                        }),
                            this._offPageScroll = Object(p.a)({
                                "callback": this.onPageScroll,
                                "ctx": this
                            })
                    }
                }, {
                    "key": "reportExposeFriendHome",
                    "value": function reportExposeFriendHome() {
                        v.a.clickReport({}, {
                            "babelEventId": "expo_other_FH_BW"
                        }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_FH_getfood"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_FH_getCoin"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_FH_goBack"
                            })
                    }
                }, {
                    "key": "reportExposeHome",
                    "value": function reportExposeHome() {
                        v.a.clickReport({}, {
                            "babelEventId": "expo_other_helpFeed"
                        }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_run"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_task"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_dress"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_feed"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_tips"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_share"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_action"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_exchange"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_feedback"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_cDetail"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_HG"
                            }),
                        !this.$router.params.helpPin && v.a.clickReport({}, {
                            "babelEventId": "expo_other_xiala"
                        }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_JBP"
                            })
                    }
                }, {
                    "key": "componentDidHide",
                    "value": function componentDidHide() {
                        this.onCloseHomeGuide(),
                            this.setState({
                                "isGoHide": !0
                            }),
                        this._offReachBottom && this._offReachBottom(),
                        this._offPageScroll && this._offPageScroll()
                    }
                }, {
                    "key": "goLogin",
                    "value": function goLogin() {
                        var e = window.location.href
                            , t = e.indexOf("jdfcloud.com") > -1 ? 938 : 936;
                        window.location.href = "https://plogin.m.jd.com/user/login.action?appid=" + t + "&returnurl=" + encodeURIComponent(e)
                    }
                }, {
                    "key": "goHelpFeed",
                    "value": function goHelpFeed(e) {
                        if ("not_feed" == e.status) {
                            var t = {
                                "friendpin": e.friendPin
                            };
                            v.a.clickReport({
                                "moduleId": "helpFeed_icon_canHelp"
                            }, {
                                "babelEventId": "other_helpFeed_BW"
                            }),
                                this.statistic("MMyDog_Home_CanHelp", JSON.stringify(t))
                        }
                        Object(r.d)("needUpdatePage", e.pageIndex),
                            o.a.navigateTo({
                                "url": "/pages/jdDog/jdDog?helpPin=" + e.friendPin + "&feedStatus=" + e.status + "&friendName=" + e.friendName
                            }),
                            Object(r.d)("HelpFeed", "true")
                    }
                }, {
                    "key": "friendsScroll",
                    "value": function friendsScroll(e) {
                        var t = e.detail;
                        t.scrollTop / t.scrollHeight > .1 && !this.isReqFriends && this.getFriends()
                    }
                }, {
                    "key": "getFriends",
                    "value": function getFriends(e) {
                        var t = this;
                        if (e)
                            return !1;
                        var a = Object(r.a)("needUpdatePage");
                        if (this.isReqFriends || !a && this.state.friendListIsEnd)
                            return !1;
                        this.currentFriendPage || (this.currentFriendPage = 1),
                            this.isReqFriends = !0,
                            Object(W.a)({
                                "url": v.a.interFaces.getFriends + "?itemsPerPage=20&currentPage=" + (a || this.currentFriendPage++),
                                "data": {},
                                "credentials": "include",
                                "method": "GET",
                                "header": Ye
                            }).then(function (e) {
                                a && Object(r.b)("needUpdatePage"),
                                    t.isReqFriends = !1;
                                try {
                                    var n = !1
                                        , o = !1
                                        , i = e.data.datas || []
                                        , s = [];
                                    i.map(function (e) {
                                        "no_pet" != e.status && (e.pageIndex = a || t.currentFriendPage - 1,
                                        "chance_full" === e.status && (n = !0),
                                        "chance_full" === e.stealStatus && (o = !0),
                                            s.push(e))
                                    });
                                    var c = t.state.helpFeedData;
                                    if (1 === a || t.currentFriendPage <= 2 && s.length > 0) {
                                        var l = s[0];
                                        c.myIndex = l.index,
                                            c.myHeadIcon = l.icon || "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/race_default_head.png&auth=YOgM1A5RTbqPNiy1Fug1+lCSYeBhPTQ2JmU9MTk3MTE5Mzg0MiZ0PTE1NzExOTM4NDMmZj00OF8xOTEwXzE0NDJfNDc2JnI9M25sNjFoQ0I1Sw==",
                                            c.myPoints = l.points,
                                            c.myNickName = l.friendName,
                                            s.splice(0, 1)
                                    }
                                    if (a) {
                                        for (var p, u = null, d = 0, m = 0; m < c.friends.length; m++) {
                                            var h = c.friends[m];
                                            if (n || o || !(h.pageIndex < a)) {
                                                if (!n && !o && h.pageIndex > a)
                                                    break;
                                                h.pageIndex === a ? (null === u && (u = m),
                                                    d++) : (n && "help_ok" != h.status && (h.status = "chance_full"),
                                                o && (h.stealStatus = "chance_full"))
                                            }
                                        }
                                        (p = c.friends).splice.apply(p, [u, d].concat(s))
                                    } else
                                        c.friends = c.friends.concat(s);
                                    t.setState({
                                        "helpFeedData": c,
                                        "friendListIsEnd": t.currentFriendPage > e.data.page.pages
                                    })
                                } catch (e) {
                                    console.log(e, "getfriends interface")
                                }
                            })
                    }
                }, {
                    "key": "removeAllGoStorage",
                    "value": function removeAllGoStorage() {
                        Object(r.b)("FollowShopList"),
                            Object(r.b)("FollowChannelList"),
                            Object(r.b)("FollowItem")
                    }
                }, {
                    "key": "reportReceiveRewardPoint",
                    "value": function reportReceiveRewardPoint(e) {
                        if ("InviteUser" == e.taskType)
                            v.a.clickReport({
                                "moduleId": "getFood_icon_invite_award"
                            }, {
                                "babelEventId": "other_task_YQ_LJ"
                            });
                        else if ("SignEveryDay" == e.taskType)
                            v.a.clickReport({
                                "moduleId": "getFood_icon_sign_award"
                            }, {
                                "babelEventId": "other_task_QD_LJ"
                            });
                        else if ("ThreeMeals" == e.taskType) {
                            var t = e.chooseIndex
                                , a = e.datas
                                , n = a[t] && a[t].name;
                            "早餐" === n ? v.a.clickReport({
                                "moduleId": "getFood_icon_breakfast"
                            }, {
                                "babelEventId": "other_task_breakfast"
                            }) : "午餐" === n ? v.a.clickReport({
                                "moduleId": "getFood_icon_lunch"
                            }, {
                                "babelEventId": "other_task_lunch"
                            }) : "晚餐" === n && v.a.clickReport({
                                "moduleId": "getFood_icon_dinner"
                            }, {
                                "babelEventId": "other_task_dinner"
                            })
                        } else
                            "race" == e.taskType ? v.a.clickReport({
                                "moduleId": "getFood_icon_SP_award"
                            }, {
                                "babelEventId": "other_task_SP_LJ"
                            }) : "exchange" == e.taskType ? v.a.clickReport({
                                "moduleId": "getFood_icon_DH_award"
                            }, {
                                "babelEventId": "other_task_DH_LJ"
                            }) : "HelpFeed" == e.taskType ? v.a.clickReport({
                                "moduleId": "getFood_icon_BW_award"
                            }, {
                                "babelEventId": "other_task_BW_LJ"
                            }) : "FeedEveryDay" == e.taskType && v.a.clickReport({
                                "moduleId": "getFood_icon_WGL_award"
                            }, {
                                "babelEventId": "other_task_WGL_LJ"
                            })
                    }
                }, {
                    "key": "goReceive",
                    "value": function goReceive(e) {
                        var t, a = this, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            i = (new Date).getTime();
                        if (this.removeAllGoStorage(),
                            this.isReqTask)
                            return !1;
                        if ("InviteUser" != e.taskType || "unreceive" == e.receiveStatus)
                            if ("FollowShop" != e.taskType && "FollowChannel" != e.taskType) {
                                if ("Feed" == e.taskType && "unreceive" != e.receiveStatus)
                                    return this.statistic("MMyDog_Home_PopupsOther", JSON.stringify({
                                        "sourceid": e.id
                                    })),
                                        void this.closeDogFodLayer();
                                if ("SignEveryDay" == e.taskType && "unreceive" != e.receiveStatus)
                                    return v.a.clickReport({
                                        "moduleId": "getFood_icon_sign"
                                    }, {
                                        "babelEventId": "other_task_QD"
                                    }),
                                        this.statistic("MMyDog_Home_PopupsOther", JSON.stringify({
                                            "sourceid": e.id
                                        })),
                                        void Object(W.a)({
                                            "url": v.a.interFaces.petSign,
                                            "data": {
                                                "taskType": e.taskType
                                            },
                                            "credentials": "include",
                                            "method": "GET",
                                            "header": Ye
                                        }).then(function (e) {
                                            var t = e.data
                                                ,
                                                n = "/pages/signActive/turntableNew?turnTableId=" + (window.location.href.indexOf("pre") > -1 ? 14 : 131) + "&source=JDDOG&petJdPin=" + encodeURIComponent(a.state.pin) + "&petAppearance=" + a.state.petAppearance;
                                            window.globalData && window.globalData.isAndroid ? n += "&showAndroidIcon=" + (window.globalData.appVersion >= 840) : window.globalData && !window.globalData.isAndroid && (n += "&showAndroidIcon=true"),
                                                t.success ? (Re ? v.a.jrGoMPPage(n) : a.goMiniProgramPage(n),
                                                    a.closeDogFodLayer()) : Object(s.d)({
                                                    "title": "" + (t.errorMessage || "网络开小差啦，请稍后重试～"),
                                                    "icon": "none",
                                                    "duration": 2e3
                                                })
                                        });
                                if ("FollowGood" != e.taskType)
                                    if ("ScanMarket" != e.taskType) {
                                        if ("race" === e.taskType && "unreceive" !== e.receiveStatus)
                                            return v.a.clickReport({
                                                "moduleId": "getFood_icon_SP"
                                            }, {
                                                "babelEventId": "other_task_SP"
                                            }),
                                                void (Object(r.a)("showFingerGuide_race") ? o.a.navigateTo({
                                                    "url": "/pages/petRace/petRace?from=jdDog"
                                                }) : (this.closeDogFodLayer(),
                                                    Object(u.a)({
                                                        "scrollTop": 0
                                                    }),
                                                    setTimeout(function () {
                                                        a.startFingerGuide("race"),
                                                            Object(r.d)("showFingerGuide_race", !0)
                                                    }, 100)));
                                        if ("exchange" === e.taskType && "unreceive" !== e.receiveStatus)
                                            return v.a.clickReport({
                                                "moduleId": "getFood_icon_DH"
                                            }, {
                                                "babelEventId": "other_task_DH"
                                            }),
                                                this.closeDogFodLayer(),
                                                void setTimeout(function () {
                                                    a.goExchange()
                                                }, 400);
                                        if ("HelpFeed" === e.taskType && "unreceive" !== e.receiveStatus)
                                            return v.a.clickReport({
                                                "moduleId": "getFood_icon_BW"
                                            }, {
                                                "babelEventId": "other_task_BW"
                                            }),
                                                this.closeDogFodLayer(),
                                                void (Object(r.a)("showFingerGuide_helpFeed") ? this.openHelpFeedLayer() : (Object(u.a)({
                                                    "scrollTop": 0
                                                }),
                                                    setTimeout(function () {
                                                        a.startFingerGuide("helpFeed"),
                                                            Object(r.d)("showFingerGuide_helpFeed", !0)
                                                    }, 100)));
                                        if ("FeedEveryDay" === e.taskType && "unreceive" !== e.receiveStatus)
                                            return v.a.clickReport({
                                                "moduleId": "getFood_icon_WGL"
                                            }, {
                                                "babelEventId": "other_task_task_WGL"
                                            }),
                                                this.closeDogFodLayer(),
                                                void (Object(r.a)("showFingerGuide_feed") ? this.giveDogFood(this.state.dogFoodNumber) : (Object(u.a)({
                                                    "scrollTop": 0
                                                }),
                                                    setTimeout(function () {
                                                        a.startFingerGuide("feed"),
                                                            Object(r.d)("showFingerGuide_feed", !0)
                                                    }, 100)));
                                        this.isGettingFood || (n && this.reportReceiveRewardPoint(e),
                                            this.isGettingFood = !0,
                                            t = v.a.interFaces.getFood,
                                            Object(W.a)({
                                                "url": t,
                                                "data": {
                                                    "taskType": e.taskType
                                                },
                                                "credentials": "include",
                                                "method": "GET",
                                                "header": Ye
                                            }).then(function (e) {
                                                var t = e.data;
                                                t.success ? ("fail" == t.errorCode ? Object(s.d)({
                                                    "title": "领取失败，请稍后重试～",
                                                    "icon": "none",
                                                    "duration": 2e3
                                                }) : Object(s.d)({
                                                    "title": "领取" + t.data + "g狗粮",
                                                    "icon": "none",
                                                    "duration": 2e3
                                                }),
                                                    a.goEnterHome(),
                                                    a.getTaskList()) : (Object(s.d)({
                                                    "title": "领取失败，请稍后重试～",
                                                    "icon": "none",
                                                    "duration": 2e3
                                                }),
                                                    a.isGettingFood = !1)
                                            }))
                                    } else {
                                        if (this.isReqScan || this.isReqTask)
                                            return;
                                        var c = e.nextScan
                                            , l = c.marketLinkH5
                                            , p = {
                                            "time": i,
                                            "key": l,
                                            "num": e.taskReward,
                                            "type": "ScanMarket",
                                            "allScanDone": e.allScanDone || !1
                                        };
                                        v.a.clickReport({
                                            "moduleId": "getFood_icon_lookHC"
                                        }, {
                                            "babelEventId": "other_task_HC<" + c.marketId + ">"
                                        }),
                                            this.statistic("MMyDog_Home_PopupsToVenue", JSON.stringify({
                                                "url": l
                                            })),
                                            v.a.selfStatistic({
                                                "reqHeader": Ye,
                                                "iconCode": "scan_market",
                                                "linkAddr": l
                                            }),
                                            Object(r.d)("FollowItem", JSON.stringify(p));
                                        var d = setTimeout(function () {
                                            if (clearTimeout(d),
                                            l.toLowerCase().indexOf("openapp") > -1 || !v.a.isInAppEnv())
                                                window.location.href = l;
                                            else {
                                                var e = {
                                                        "des": "m",
                                                        "url": l,
                                                        "category": "jump"
                                                    }
                                                    ,
                                                    t = "openApp.jdMobile://virtual?params=" + encodeURIComponent(JSON.stringify(e));
                                                window.location.href = t
                                            }
                                        }, 180)
                                    }
                                else {
                                    if (this.isReqFollow || this.isReqTask)
                                        return;
                                    var m = e.nextScan.sku
                                        , h = {
                                        "time": i,
                                        "key": m,
                                        "num": e.taskReward,
                                        "type": "FollowGood",
                                        "allScanDone": e.allScanDone || !1
                                    }
                                        , f = "https://item.m.jd.com/product/" + m + ".html";
                                    v.a.isInJrAppEnv() && (f += "?with_kpl=0"),
                                        v.a.clickReport({
                                            "moduleId": "getFood_icon_followGood"
                                        }, {
                                            "babelEventId": "sku_task_sku",
                                            "babelEventParam": {
                                                "sku": m
                                            }
                                        }),
                                        this.statistic("MMyDog_Home_PopupsFocusProduct", JSON.stringify({
                                            "sku": m
                                        })),
                                        v.a.selfStatistic({
                                            "reqHeader": Ye,
                                            "iconCode": "follow_good",
                                            "linkAddr": m
                                        }),
                                        m ? Object(r.d)("FollowItem", JSON.stringify(h)) : Object(s.d)({
                                            "title": "已经完成该任务，请明天再来～",
                                            "icon": "none",
                                            "duration": 2e3
                                        });
                                    var g = setTimeout(function () {
                                        clearTimeout(g),
                                            m ? v.a.openNewWebview(f) : window.location.href = "javascript:;"
                                    }, 180)
                                }
                            } else
                                "FollowShop" == e.taskType ? (v.a.clickReport({
                                    "moduleId": "getFood_icon_followShop"
                                }, {
                                    "babelEventId": "other_task_shop"
                                }),
                                    this.statistic("MMyDog_Home_PopupsFocusShop"),
                                    v.a.selfStatistic({
                                        "reqHeader": Ye,
                                        "iconCode": "follow_shop"
                                    }),
                                    Object(r.d)("FollowShopOrChannel", "true"),
                                    o.a.navigateTo({
                                        "url": "/pages/followShop/followShop?taskReward=" + e.taskReward
                                    })) : (v.a.clickReport({
                                    "moduleId": "getFood_icon_followChannel"
                                }, {
                                    "babelEventId": "other_task_channel"
                                }),
                                    this.statistic("MMyDog_Home_PopupsToChannel"),
                                    v.a.selfStatistic({
                                        "reqHeader": Ye,
                                        "iconCode": "follow_channel"
                                    }),
                                    Object(r.d)("FollowShopOrChannel", "true"),
                                    o.a.navigateTo({
                                        "url": "/pages/followChannel/followChannel?taskReward=" + e.taskReward
                                    }));
                        else if (v.a.clickReport({
                            "moduleId": "getFood_icon_invite"
                        }, {
                            "babelEventId": "other_task_YQ"
                        }),
                            this.lkStatistic("task_invite"),
                            this.statistic("MMyDog_Home_PopupsOther", JSON.stringify({
                                "sourceid": e.id
                            })),
                        Re || ze) {
                            var _ = this.state.detailInfo;
                            this.setState({
                                "isShowShareImg": !0,
                                "shareTypeEnu": "task_invite",
                                "sceneParams": "ut=" + _.userTag + "&ss=1&is=1"
                            })
                        } else
                            v.a.h5Invite({
                                "path": "/pages/jdDog/jdDog?invitePin=" + encodeURIComponent(this.state.pin) + "&inviteSource=task_invite&shareSource=h5&inviteTimeStamp=" + Date.now(),
                                "title": "今日份的慰问来咯，你有没有来看看我？",
                                "shareImage": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/home_share_img2.jpg&auth=t08vzwduTy6KO0FlQF6DwCJAKQ9hPTQ2JmU9MTk4MTY1Mjk5OCZ0PTE1ODE2NTI5OTkmZj04MV8yMDAyXzcwOF82MCZyPWFvaW14RG05ZDk="
                            })
                    }
                }, {
                    "key": "startFingerGuide",
                    "value": function startFingerGuide(e) {
                        var t = this
                            , a = {
                            "race": {
                                "bottom": o.a.pxTransform(0),
                                "left": o.a.pxTransform(200)
                            },
                            "helpFeed": {
                                "bottom": o.a.pxTransform(0),
                                "left": o.a.pxTransform(70)
                            },
                            "feed": {
                                "bottom": o.a.pxTransform(16),
                                "right": o.a.pxTransform(8)
                            }
                        }[e];
                        this.setState({
                            "showFingerGuide": !0,
                            "fingerGuidePosition": a
                        }),
                            setTimeout(function () {
                                t.setState({
                                    "showFingerGuide": !1
                                })
                            }, 4e3)
                    }
                }, {
                    "key": "backHome",
                    "value": function backHome() {
                        v.a.clickReport({
                            "moduleId": "friendHome_goBack"
                        }, {
                            "babelEventId": "other_FH_goBack"
                        }),
                            this.statistic("MMyDog_Home_GoHome"),
                            o.a.navigateBack()
                    }
                }, {
                    "key": "lkStatistic",
                    "value": function lkStatistic(e) {
                        Object(W.a)({
                            "url": v.a.interFaces.shareCard,
                            "data": {
                                "inviteSource": e
                            },
                            "credentials": "include",
                            "method": "GET",
                            "header": Ye
                        }).then(function (e) {
                            console.log(e, v.a.interFaces.shareCard)
                        })
                    }
                }, {
                    "key": "onShareAppMessage",
                    "value": function onShareAppMessage(e) {
                        var t = e && e.target && e.target.dataset
                            ,
                            a = "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/home_share_img2.jpg&auth=t08vzwduTy6KO0FlQF6DwCJAKQ9hPTQ2JmU9MTk4MTY1Mjk5OCZ0PTE1ODE2NTI5OTkmZj04MV8yMDAyXzcwOF82MCZyPWFvaW14RG05ZDk=";
                        return t && "double_food" == t.type && (this.doubleRandomFood(),
                            this.setState({
                                "isShowStealLayer": !1
                            })),
                            "button" === e.from ? (this.lkStatistic(t.type),
                                Pe.a.click({
                                    "moduleId": "getFood_icon_invite"
                                }),
                                {
                                    "title": "今日份的慰问来咯，你有没有来看看我？",
                                    "path": "/pages/jdDog/jdDog?invitePin=" + encodeURIComponent(this.state.pin) + "&inviteSource=" + t.type + "&shareSource=weapp&inviteTimeStamp=" + Date.now(),
                                    "imageUrl": a
                                }) : (this.statistic("MMyDog_Home_InviteFriend"),
                                {
                                    "title": "我在京东领养了一只汪！领狗粮养你的汪！",
                                    "path": "/pages/jdDog/jdDog",
                                    "imageUrl": a
                                })
                    }
                }, {
                    "key": "updateTime",
                    "value": function updateTime(e) {
                        1 == e ? this.getTaskList() : (this.setState({
                            "foodCountDonwTime": 0,
                            "isDogPengEmpty": !0
                        }),
                            this.getFeedTimes())
                    }
                }, {
                    "key": "goMiniProgramSign",
                    "value": function goMiniProgramSign() {
                        var e = null.api.indexOf("pre") > -1 ? 14 : null.api.indexOf("draw") > -1 ? 131 : 3;
                        o.a.navigateTo({
                            "url": "/pages/signActive/turntableNew?turnTableId=" + e + "&source=JDDOG&petAppearance=" + this.state.petAppearance
                        })
                    }
                }, {
                    "key": "helpFeed",
                    "value": function helpFeed(e) {
                        var t = this;
                        Object(W.a)({
                            "url": v.a.interFaces.helpFeed,
                            "data": {
                                "friendPin": decodeURIComponent(this.state.helpPin)
                            },
                            "credentials": "include",
                            "method": "GET",
                            "header": Ye
                        }).then(function (a) {
                            a.data.success ? ("help_ok" == a.data.errorCode || "level_upgrade" == a.data.errorCode ? e && e() : "other_help" == a.data.errorCode ? Object(s.d)({
                                "title": "你已经帮忙喂养过一次啦",
                                "icon": "none",
                                "duration": 2e3
                            }) : Object(s.d)({
                                "title": "帮忙喂养失败，主人已喂养，正在进食中",
                                "icon": "none",
                                "duration": 2e3
                            }),
                            t.state.isShowConfirmLayer && t.setState({
                                "isShowConfirmLayer": !1
                            })) : (Object(s.d)({
                                "title": "网络异常，请稍后重试",
                                "icon": "none",
                                "duration": 2e3
                            }),
                                t.setState({
                                    "isShowConfirmLayer": !1
                                }))
                        })
                    }
                }, {
                    "key": "doubleRandomFood",
                    "value": function doubleRandomFood() {
                        var e = this;
                        Object(W.a)({
                            "url": v.a.interFaces.doubleRandomFood,
                            "data": {
                                "friendPin": decodeURIComponent(this.state.helpPin)
                            },
                            "credentials": "include",
                            "method": "GET",
                            "header": Ye
                        }).then(function (t) {
                            t.data.success ? e.setState({
                                "hasDoubleFood": !0
                            }) : Object(s.d)({
                                "title": "网络异常，请稍后重试",
                                "icon": "none",
                                "duration": 2e3
                            })
                        })
                    }
                }, {
                    "key": "miniProSteal",
                    "value": function miniProSteal() {
                        var e = this;
                        this.getStealDogFood(function (t) {
                            e.setState({
                                "isShowStealLayer": !1
                            }),
                                Object(s.d)({
                                    "title": "获取" + (t || 0) + "g狗粮",
                                    "icon": "none",
                                    "duration": 2e3
                                })
                        })
                    }
                }, {
                    "key": "getStealDogFood",
                    "value": function getStealDogFood(e) {
                        var t = this;
                        if (this.isReqIng)
                            return !1;
                        this.isReqIng = !0,
                            Object(W.a)({
                                "url": v.a.interFaces.stealFood,
                                "data": {
                                    "friendPin": decodeURIComponent(this.state.helpPin)
                                },
                                "credentials": "include",
                                "method": "GET",
                                "header": Ye
                            }).then(function (a) {
                                console.log(a, "stealFood"),
                                    t.isReqIng = !1,
                                    a.data.success ? "steal_ok" == a.data.errorCode ? (t.goEnterHome(),
                                    e && e(a.data.data)) : "chance_full" == a.data.errorCode ? Object(s.d)({
                                        "title": "休息休息一下，明天再来偷吧~",
                                        "icon": "none",
                                        "duration": 2e3
                                    }) : "steal_exist" == a.data.errorCode ? Object(s.d)({
                                        "title": "已经偷过一次啦，明天再来吧",
                                        "icon": "none",
                                        "duration": 2e3
                                    }) : "food_insufficient" == a.data.errorCode && (Object(s.d)({
                                        "title": "别太贪心啦，给主人留点吧",
                                        "icon": "none",
                                        "duration": 2e3
                                    }),
                                        t.setState({
                                            "isShowStealLayer": !1
                                        })) : (Object(s.d)({
                                        "title": "网络异常，请稍后重试",
                                        "icon": "none",
                                        "duration": 2e3
                                    }),
                                        t.setState({
                                            "isShowStealLayer": !1
                                        }))
                            })
                    }
                }, {
                    "key": "stealDogFoodNumber",
                    "value": function stealDogFoodNumber(e) {
                        var t = this;
                        v.a.clickReport({
                            "moduleId": "friendHome_getFood"
                        }, {
                            "babelEventId": "other_FH_getfood"
                        });
                        var a = this.state.randomStealFood;
                        return !this.state.isStealUnable && (this.statistic("MMyDog_Home_FloatFood"),
                            e <= 5 ? (Object(s.d)({
                                "title": "别太贪心啦，给主人留点吧",
                                "icon": "none",
                                "duration": 2e3
                            }),
                                !1) : 0 !== a && a ? void this.getStealDogFood(function (n) {
                                Object(s.d)({
                                    "title": "获取" + (n || 0) + "g狗粮",
                                    "icon": "none",
                                    "duration": 2e3
                                }),
                                    t.setState({
                                        "canStealNumber": e - a
                                    })
                            }) : (Object(s.d)({
                                "title": "休息休息一下，明天再来偷吧~",
                                "icon": "none",
                                "duration": 2e3
                            }),
                                !1))
                    }
                }, {
                    "key": "openShareImg",
                    "value": function openShareImg(e, t) {
                        v.a.clickReport({
                            "moduleId": "share_icon"
                        }, {
                            "babelEventId": "other_share"
                        }),
                        1 === t && this.statistic("MMyDog_Home_Share"),
                        this.state.isShowShareImg || this.setState({
                            "isShowShareImg": !0,
                            "shareImgName": e,
                            "shareTypeEnu": "share_home"
                        })
                    }
                }, {
                    "key": "goDogRun",
                    "value": function goDogRun() {
                        var e = this.$router.params;
                        v.a.clickReport({
                            "moduleId": "run_icon"
                        }, {
                            "babelEventId": "other_run"
                        }),
                            this.statistic("MMyDog_Home_PetRunning"),
                            v.a.selfStatistic({
                                "reqHeader": Ye,
                                "iconCode": "race"
                            }),
                            o.a.navigateTo({
                                "url": "/pages/petRace/petRace?from=jdDog" + (e.backRedirect ? "&backRedirect=true" : "")
                            })
                    }
                }, {
                    "key": "goToIntegral",
                    "value": function goToIntegral() {
                        v.a.clickReport({
                            "moduleId": "exchange_icon"
                        }, {
                            "babelEventId": "exchange_icon"
                        }),
                            this.goExchange()
                    }
                }, {
                    "key": "goExchange",
                    "value": function goExchange() {
                        var e = Object(d.a)()
                            , t = {};
                        e.select(".bean_exchange_wrap").fields({
                            "rect": !0
                        }, function (e) {
                            t.scrollTop ? Object(u.a)({
                                "scrollTop": e.top + t.scrollTop
                            }) : t.top = e.top
                        }),
                            e.selectViewport().scrollOffset(function (e) {
                                t.top ? Object(u.a)({
                                    "scrollTop": t.top + e.scrollTop
                                }) : t.scrollTop = e.scrollTop
                            }).exec()
                    }
                }, {
                    "key": "goCoinDetail",
                    "value": function goCoinDetail() {
                        v.a.clickReport({
                            "moduleId": "coinDetail"
                        }, {
                            "babelEventId": "other_cDetail"
                        }),
                            this.statistic("MMyDog_Home_ScoreDetail"),
                            v.a.selfStatistic({
                                "reqHeader": Ye,
                                "iconCode": "coin_detail"
                            }),
                            o.a.navigateTo({
                                "url": "/pages/otherPage/coinsDetail"
                            })
                    }
                }, {
                    "key": "openDogFoodLayer",
                    "value": function openDogFoodLayer(e, t, a) {
                        v.a.isInAppEnv() ? this.getTaskList(a || "") : this.getTaskList(),
                            this.setState({
                                "isOpenDogFoodLayer": !0,
                                "isOpenDogFoodPopLayer": !0,
                                "isOpenFoodPopLayerNoAnimation": e
                            }),
                        t && (v.a.clickReport({
                            "moduleId": "getFood_icon",
                            "H5PageManual": "homepage",
                            "WXPageManual": "mini-homepage"
                        }, {
                            "babelEventId": "other_task"
                        }),
                            this.statistic("MMyDog_Home_GetFood")),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_task_YQ"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_task_shop"
                            })
                    }
                }, {
                    "key": "openHelpFeedLayer",
                    "value": function openHelpFeedLayer(e, t) {
                        var a = this.state.helpFeedData;
                        (!a.friends || a.friends.length < 1) && this.getFriends(),
                        t && (this.goEnterHome(),
                            v.a.clickReport({
                                "moduleId": "helpFeed_icon"
                            }, {
                                "babelEventId": "other_helpFeed"
                            }),
                            this.statistic("MMyDog_Home_HelpFeed"),
                            v.a.selfStatistic({
                                "reqHeader": Ye,
                                "iconCode": "help_feed"
                            })),
                            this.setState({
                                "showHelpFeed": !0,
                                "showHelpFeedLayer": !0,
                                "ishowHelpFeedNoAnimation": e
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_helpFeed_YQ"
                            }),
                            v.a.clickReport({}, {
                                "babelEventId": "expo_other_helpFeed_BW"
                            })
                    }
                }, {
                    "key": "closeDogFodLayer",
                    "value": function closeDogFodLayer() {
                        var e = this;
                        if (this.state.isOpenDogFoodLayer) {
                            this.setState({
                                "isOpenDogFoodPopLayer": !1
                            });
                            var t = setTimeout(function () {
                                e.setState({
                                    "isOpenDogFoodLayer": !1
                                }),
                                    clearTimeout(t)
                            }, 300)
                        }
                    }
                }, {
                    "key": "closeHelpFeedLayer",
                    "value": function closeHelpFeedLayer() {
                        var e = this;
                        if (this.state.showHelpFeedLayer) {
                            this.setState({
                                "showHelpFeedLayer": !1
                            });
                            var t = setTimeout(function () {
                                e.setState({
                                    "showHelpFeed": !1
                                }),
                                    clearTimeout(t)
                            }, 300)
                        }
                    }
                }, {
                    "key": "getTaskItem",
                    "value": function getTaskItem(e) {
                        this.state.invitefriendListData;
                        switch (e.taskType) {
                            case "LoginEveryDay":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, e.name), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "每日奖励", e.taskReward, "g狗粮"));
                            case "ThreeMeals":
                                var t = e.datas[e.chooseIndex];
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, t.name, " (", t.timeRange, ")"), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "每次奖励", e.taskReward, "g狗粮"));
                            case "SignEveryDay":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, e.name), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "每日可领", e.taskReward, "g狗粮，还有随机京豆"));
                            case "Feed":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, e.name, "（", n.j.createElement(f.a, {
                                    "className": "task-title-red"
                                }, e.joinedCount || 0), "/", e.feedCount, "）"), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "每日可领取", e.taskReward, "g狗粮"));
                            case "ScanMarket":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, e.name, "（", n.j.createElement(f.a, {
                                    "className": "task-title-red"
                                }, e.joinedCount || 0), "/", e.taskChance, "）"), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "浏览", e.nextScan.marketName, "5秒，奖励", e.taskReward, "g狗粮"));
                            case "FollowChannel":
                            case "PlayWeapp":
                            case "FollowGood":
                            case "FollowShop":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, e.name, "（", n.j.createElement(f.a, {
                                    "className": "task-title-red"
                                }, e.joinedCount || 0), "/", e.taskChance, "）"), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "浏览5秒以上，每次奖励", e.taskReward, "g狗粮"));
                            case "InviteUser":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, "邀好友助力（", n.j.createElement(f.a, {
                                    "className": "task-title-red"
                                }, e.joinedCount || 0), "/", e.taskChance, "）"), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "每日邀请1位好友助力，得25g狗粮"));
                            case "ViewVideo":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, e.name), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "看完视频，每次奖励", e.taskReward, "g狗粮"));
                            case "race":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, e.name), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "发起一场PK赛，奖励", e.taskReward, "g狗粮"));
                            case "exchange":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, e.name), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "兑换任意奖励，奖励", e.taskReward, "g狗粮"));
                            case "HelpFeed":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, e.name), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "帮好友喂一次狗粮，奖励", e.taskReward, "g狗粮"));
                            case "FeedEveryDay":
                                return n.j.createElement(h.a, {
                                    "className": "task-text"
                                }, n.j.createElement(h.a, {
                                    "className": "task-title"
                                }, e.name, "（", n.j.createElement(f.a, {
                                    "className": "task-title-red"
                                }, e.feedTotal || 0, "g"), "/", e.feedAmount, "g）"), n.j.createElement(h.a, {
                                    "className": "task-sub-title"
                                }, "喂狗粮累积≥", e.feedAmount, "g，奖励", e.taskReward, "g狗粮"))
                        }
                    }
                }, {
                    "key": "exposeLJStat",
                    "value": function exposeLJStat(e) {
                        switch (e.taskType) {
                            case "InviteUser":
                                v.a.clickReport({}, {
                                    "babelEventId": "expo_other_task_YQ_LJ"
                                });
                                break;
                            case "SignEveryDay":
                                v.a.clickReport({}, {
                                    "babelEventId": "expo_other_task_QD_LJ"
                                });
                                break;
                            case "ThreeMeals":
                                var t = e.chooseIndex
                                    , a = e.datas
                                    , n = a[t] && a[t].name;
                                "早餐" === n ? v.a.clickReport({
                                    "moduleId": "getFood_icon_breakfast"
                                }, {
                                    "babelEventId": "expo_other_task_breakfast"
                                }) : "午餐" === n ? v.a.clickReport({
                                    "moduleId": "getFood_icon_breakfast"
                                }, {
                                    "babelEventId": "expo_other_task_lunch"
                                }) : "晚餐" === n && v.a.clickReport({
                                    "moduleId": "getFood_icon_breakfast"
                                }, {
                                    "babelEventId": "expo_other_task_dinner"
                                })
                        }
                    }
                }, {
                    "key": "getTaskBtnText",
                    "value": function getTaskBtnText(e, t) {
                        if ("unreceive" == e.receiveStatus)
                            return this.exposeLJStat(e),
                                n.j.createElement(h.a, {
                                    "className": "task-btn task-btn-green",
                                    "onClick": this.goReceive.bind(this, e)
                                }, "领取");
                        if ("chance_full" == e.receiveStatus)
                            return "ScanMarket" == e.taskType || "FollowGood" == e.taskType || "PlayWeapp" == e.taskType || "FollowShop" == e.taskType || "FollowChannel" == e.taskType ? n.j.createElement(h.a, {
                                "onClick": this.goReceive.bind(this, e),
                                "className": "task-btn task-btn-gray"
                            }, "已完成") : n.j.createElement(h.a, {
                                "className": "task-btn task-btn-gray"
                            }, "明天再来");
                        if ("chance_left" == e.receiveStatus)
                            switch (e.taskType) {
                                case "InviteUser":
                                    return n.j.createElement(h.a, {
                                        "className": "task-btn",
                                        "onClick": this.goReceive.bind(this, e)
                                    }, "去邀请");
                                case "ThreeMeals":
                                    var a = 0;
                                    if (e.datas[e.chooseIndex].timeCount > 0)
                                        return a = e.datas[e.chooseIndex].timeCount,
                                            n.j.createElement(H, {
                                                "time": a,
                                                "type": 1,
                                                "onUpdateTime": this.updateTime.bind(this, 1)
                                            });
                                    break;
                                case "ViewVideo":
                                    return v.a.clickReport({}, {
                                        "babelEventId": "expo_other_task_video"
                                    }),
                                        n.j.createElement(h.a, {
                                            "className": "task-btn",
                                            "onClick": this.goReceive.bind(this, e)
                                        }, "去观看");
                                case "PlayWeapp":
                                    return v.a.clickReport({}, {
                                        "babelEventId": "expo_other_task_mini"
                                    }),
                                        n.j.createElement(h.a, {
                                            "className": "task-btn",
                                            "onClick": this.goReceive.bind(this, e)
                                        }, "去逛逛");
                                case "ScanMarket":
                                    return v.a.clickReport({}, {
                                        "babelEventId": "expo_other_task_HC<" + e.marketId + ">"
                                    }),
                                        n.j.createElement(h.a, {
                                            "className": "task-btn",
                                            "onClick": this.goReceive.bind(this, e)
                                        }, "去逛逛");
                                case "FollowGood":
                                    return v.a.clickReport({}, {
                                        "babelEventId": "expo_sku_task_sku",
                                        "babelEventParam": {
                                            "sku": e.nextScan.sku
                                        }
                                    }),
                                        n.j.createElement(h.a, {
                                            "className": "task-btn",
                                            "onClick": this.goReceive.bind(this, e)
                                        }, "去关注");
                                case "FollowShop":
                                    return n.j.createElement(h.a, {
                                        "className": "task-btn",
                                        "onClick": this.goReceive.bind(this, e)
                                    }, "去关注");
                                case "FollowChannel":
                                    return v.a.clickReport({}, {
                                        "babelEventId": "expo_other_task_channel"
                                    }),
                                        n.j.createElement(h.a, {
                                            "className": "task-btn",
                                            "onClick": this.goReceive.bind(this, e)
                                        }, "去关注");
                                case "race":
                                case "exchange":
                                    return n.j.createElement(h.a, {
                                        "className": "task-btn",
                                        "onClick": this.goReceive.bind(this, e)
                                    }, "去参与");
                                case "HelpFeed":
                                    return n.j.createElement(h.a, {
                                        "className": "task-btn",
                                        "onClick": this.goReceive.bind(this, e)
                                    }, "去帮喂");
                                case "FeedEveryDay":
                                    return n.j.createElement(h.a, {
                                        "className": "task-btn",
                                        "onClick": this.goReceive.bind(this, e)
                                    }, "去喂食");
                                case "SignEveryDay":
                                    return v.a.clickReport({}, {
                                        "babelEventId": "expo_other_task_QD"
                                    }),
                                        n.j.createElement(h.a, {
                                            "className": "task-btn",
                                            "onClick": this.goReceive.bind(this, e)
                                        }, "去签到");
                                case "Feed":
                                    if (0 === t)
                                        return n.j.createElement(h.a, {
                                            "className": "task-btn",
                                            "onClick": this.goReceive.bind(this, e)
                                        }, "去喂食");
                                    if (t > 0)
                                        return n.j.createElement(h.a, {
                                            "className": "task-btn task-btn-gray"
                                        }, "进食中")
                            }
                    }
                }, {
                    "key": "startAnInter",
                    "value": function startAnInter(e, t) {
                        var a = this
                            , n = null
                            , o = null
                            , i = null;
                        n = setTimeout(function () {
                            a.setState({
                                "isGive": !1,
                                "isDogPengEmpty": !1,
                                "isStealUnable": !1,
                                "update": t
                            }),
                                a.back = !0,
                                a.state.helpPin ? o = setTimeout(function () {
                                    a.goEnterHome("feedsuccess"),
                                        clearTimeout(o)
                                }, 3e3) : t ? i = setTimeout(function () {
                                    a.setState({
                                        "update": !1,
                                        "showLevelUpPop": !0
                                    }),
                                        clearTimeout(i)
                                }, 1850) : a.goEnterHome("feedsuccess"),
                                clearTimeout(n)
                        }, e)
                    }
                }, {
                    "key": "isWKWebView",
                    "value": function isWKWebView() {
                        return -1 != (navigator.userAgent || "").indexOf("supportJDSHWK/1") || 1 == window._is_jdsh_wkwebview
                    }
                }, {
                    "key": "goMiniProgramPage",
                    "value": function goMiniProgramPage(e) {
                        var t = this.isWKWebView()
                            , a = JSON.stringify({
                            "businessType": "jumpToMiniProgram",
                            "callBackName": "sendBeansShareCb",
                            "params": {
                                "username": "gh_84ada2489c1e",
                                "path": e,
                                "miniProgramType": window.location.href.indexOf("pre") > -1 ? "1" : "0"
                            }
                        });
                        if (t) {
                            var n = {
                                "method": "notifyMessageToNative",
                                "params": a
                            };
                            window.webkit.messageHandlers.JDAppUnite.postMessage(n)
                        } else
                            window.JDAppUnite && window.JDAppUnite.notifyMessageToNative(a)
                    }
                }, {
                    "key": "goFollow",
                    "value": function goFollow(e) {
                        var t = this;
                        if ("FollowChannel" == e.type || "ScanMarket" == e.type || "ViewVideo" == e.type || "PlayWeapp" == e.type) {
                            var a = void 0;
                            if ("FollowChannel" == e.type ? a = {
                                "channelId": e.key,
                                "taskType": e.type
                            } : "ViewVideo" == e.type ? a = {
                                "taskType": e.type
                            } : "ScanMarket" == e.type ? a = {
                                "marketLink": e.key,
                                "taskType": e.type
                            } : "PlayWeapp" == e.type && (a = {
                                "appId": e.key,
                                "taskType": e.type
                            }),
                                this.isReqScan)
                                return;
                            this.isReqScan = !0,
                                Object(W.a)({
                                    "url": v.a.interFaces.scan,
                                    "data": a,
                                    "credentials": "include",
                                    "method": "POST",
                                    "header": Ye
                                }).then(function (a) {
                                    var n = a.data;
                                    n.success ? ("ViewVideo" == e.type ? (console.log("领取结果返回"),
                                        "follow_success" == n.errorCode ? Object(s.d)({
                                            "title": "奖励" + e.num + "g狗粮",
                                            "icon": "none",
                                            "duration": 2e3
                                        }) : "follow_full" == n.errorCode && Object(s.d)({
                                            "title": "今天机会用尽啦，明天再来吧",
                                            "icon": "none",
                                            "duration": 2e3
                                        })) : "follow_fail" == n.errorCode ? Object(s.d)({
                                        "title": "关注失败啦，试试别的吧",
                                        "icon": "none",
                                        "duration": 2e3
                                    }) : "follow_repeat" != n.errorCode && Object(s.d)({
                                        "title": "奖励" + e.num + "g狗粮",
                                        "icon": "none",
                                        "duration": 2e3
                                    }),
                                        t.openDogFoodLayer(!0, !1),
                                        t.goEnterHome()) : Object(s.d)({
                                        "title": "网络开小差啦，请稍后重试～",
                                        "icon": "none",
                                        "duration": 2e3
                                    }),
                                        t.isReqScan = !1
                                })
                        } else if ("FollowGood" == e.type) {
                            if (this.isReqFollow)
                                return;
                            this.isReqFollow = !0,
                                Object(W.a)({
                                    "url": v.a.interFaces.followGood,
                                    "data": {
                                        "sku": e.key
                                    },
                                    "credentials": "include",
                                    "method": "POST",
                                    "header": qe
                                }).then(function (a) {
                                    var n = a.data;
                                    n.success ? ("follow_fail" == n.errorCode ? Object(s.d)({
                                        "title": "关注失败啦，试试别的吧",
                                        "icon": "none",
                                        "duration": 2e3
                                    }) : "follow_repeat" == n.errorCode || ("follow_full" == n.errorCode ? Object(s.d)({
                                        "title": "关注已达上限~",
                                        "icon": "none",
                                        "duration": 2e3
                                    }) : Object(s.d)({
                                        "title": "关注成功，奖励" + e.num + "g狗粮",
                                        "icon": "none",
                                        "duration": 2e3
                                    })),
                                        t.openDogFoodLayer(!0, !1),
                                        t.goEnterHome()) : Object(s.d)({
                                        "title": "网络开小差啦，请稍后重试～",
                                        "icon": "none",
                                        "duration": 2e3
                                    }),
                                        t.isReqFollow = !1
                                })
                        }
                    }
                }, {
                    "key": "jumpBack",
                    "value": function jumpBack(e) {
                        var t = Object(r.a)("FollowItem")
                            , a = t && JSON.parse(t);
                        if (a.allScanDone)
                            return this.openDogFoodLayer(!0),
                                Object(r.b)("FollowItem"),
                                !1;
                        var n = !0;
                        t && (n = !1,
                            (new Date).getTime() - a.time < 5e3 ? (Object(s.d)({
                                "title": "您浏览时长不足5秒，差一点就完成了",
                                "icon": "none",
                                "duration": 2e3
                            }),
                                this.openDogFoodLayer(!0),
                                Object(r.b)("FollowItem")) : (console.log(a.type, "keyobjtype"),
                                this.goFollow(a),
                                Object(r.b)("FollowItem")));
                        Object(r.a)("FollowShopOrChannel") && (!1,
                            this.openDogFoodLayer(!0),
                            Object(r.b)("FollowShopOrChannel")),
                        Object(r.a)("HelpFeed") && (this.state.helpPin || (Object(r.b)("HelpFeed"),
                            this.openHelpFeedLayer(!0))),
                        n && "enterRoom" != e && this.goEnterHome()
                    }
                }, {
                    "key": "getTaskList",
                    "value": function getTaskList(e) {
                        var t = this
                            , a = 0
                            , n = ["#FFEBED", "#FFF3DC", "#DFF8FF"]
                            , o = this.state
                            , i = (o.isSupportRewardVideo,
                            o.taskArr);
                        if (this.isReqTask)
                            return !1;
                        this.isReqTask = !0;
                        var r = {};
                        e && (r.taskType = e),
                            console.log(r, "reqData"),
                            Object(W.a)({
                                "url": v.a.interFaces.getPetTaskConfig,
                                "data": r,
                                "credentials": "include",
                                "method": "GET",
                                "header": Ye
                            }).then(function (o) {
                                var r = o.data;
                                if (console.log(r, " res.data"),
                                    r.success) {
                                    var s = []
                                        , c = []
                                        , l = r.currentTime || (new Date).getTime();
                                    if (t.currTime = l,
                                        r.datas.map(function (a, o) {
                                            if (e || (a.bgColor = n[o % 3]),
                                            "ScanMarket" === a.taskType && a.scanMarketList) {
                                                for (var i = 0; i < a.scanMarketList.length; i++)
                                                    if (!a.scanMarketList[i].status) {
                                                        a.nextScan = a.scanMarketList[i];
                                                        break
                                                    }
                                                if (!a.nextScan) {
                                                    var r = Math.floor(Math.random() * a.scanMarketList.length);
                                                    a.nextScan = a.scanMarketList[r],
                                                        a.allScanDone = !0
                                                }
                                            }
                                            if ("FollowGood" === a.taskType && a.followGoodList) {
                                                for (var c = 0; c < a.followGoodList.length; c++)
                                                    if (!a.followGoodList[c].status && "chance_full" != a.receiveStatus) {
                                                        a.nextScan = a.followGoodList[c];
                                                        break
                                                    }
                                                if (!a.nextScan) {
                                                    var l = Math.floor(Math.random() * a.followGoodList.length);
                                                    a.nextScan = a.followGoodList[l],
                                                        a.allScanDone = !0
                                                }
                                            }
                                            if ("PlayWeapp" === a.taskType && a.weAppList) {
                                                for (var p = 0; p < a.weAppList.length; p++)
                                                    if (!a.weAppList[p].status) {
                                                        a.nextScan = a.weAppList[p];
                                                        break
                                                    }
                                                if (!a.nextScan) {
                                                    var u = Math.floor(Math.random() * a.weAppList.length);
                                                    a.nextScan = a.weAppList[u],
                                                        a.allScanDone = !0
                                                }
                                            }
                                            for (var d = 0; d < We.length; d++)
                                                if (We[d].taskType == a.taskType) {
                                                    if ("ThreeMeals" == a.taskType && (a = t.dealThreeMealsData(a)),
                                                    "ViewVideo" == a.taskType)
                                                        break;
                                                    var m = Object.assign({}, We[d], a);
                                                    ("SignEveryDay" != a.taskType || t.state.isApp) && s.push(m);
                                                    break
                                                }
                                        }),
                                        e) {
                                        if (i && i.length) {
                                            var p = !0
                                                , u = !1
                                                , d = void 0;
                                            try {
                                                for (var m, h = i[Symbol.iterator](); !(p = (m = h.next()).done); p = !0) {
                                                    var f = m.value;
                                                    if (f.taskType == e) {
                                                        Object.assign(f, s[0]);
                                                        break
                                                    }
                                                }
                                            } catch (e) {
                                                u = !0,
                                                    d = e
                                            } finally {
                                                try {
                                                    !p && h.return && h.return()
                                                } finally {
                                                    if (u)
                                                        throw d
                                                }
                                            }
                                        } else
                                            i = s;
                                        c = i
                                    } else
                                        c = s;
                                    a = (c.filter(function (e) {
                                        return "unreceive" === e.receiveStatus
                                    }) || []).length,
                                        t.isReqTask = !1,
                                        t.setState({
                                            "taskArr": c,
                                            "taskUnreceiveCount": a
                                        }, function () {
                                            t.isGettingFood = !1
                                        })
                                }
                            })
                    }
                }, {
                    "key": "dealThreeMealsData",
                    "value": function dealThreeMealsData(e) {
                        var t = e.threeMeals
                            , a = t.breakfastStart
                            , n = t.breakfastEnd
                            , o = t.dinnerEnd
                            , i = t.dinnerStart
                            , r = t.lunchEnd
                            , s = t.lunchStart
                            , c = this.currTime
                            , l = [{
                            "name": "早餐",
                            "timeRange": a + "-" + n,
                            "timeCount": e.threeMealsVO.breakfastStart - c
                        }, {
                            "name": "午餐",
                            "timeRange": s + "-" + r,
                            "timeCount": e.threeMealsVO.lunchStart - c
                        }, {
                            "name": "晚餐",
                            "timeRange": i + "-" + o,
                            "timeCount": e.threeMealsVO.dinnerStart - c
                        }];
                        return e.datas = l,
                        e.lastGetMealTime < e.threeMealsVO.breakfastStart && (e.lastGetMealTime = ""),
                            c <= e.threeMealsVO.breakfastEnd && !e.lastGetMealTime ? e.chooseIndex = 0 : c <= e.threeMealsVO.lunchEnd && !e.lastGetMealTime ? e.chooseIndex = 1 : e.lastGetMealTime ? e.lastGetMealTime <= e.threeMealsVO.breakfastEnd && c <= e.threeMealsVO.lunchEnd ? e.chooseIndex = 1 : (e.lastGetMealTime <= e.threeMealsVO.lunchEnd || e.lastGetMealTime <= e.threeMealsVO.dinnerEnd) && (e.chooseIndex = 2) : e.chooseIndex = 2,
                            e
                    }
                }, {
                    "key": "preDealFoods",
                    "value": function preDealFoods(e) {
                        var t = Number(Object(r.a)("lastFeedNumNew")) || 20;
                        t = e > t ? t : 10;
                        for (var a = this.state, n = a.foodOptions, o = a.foodCountDonwTime, i = 0; i < n.length; i++) {
                            var s = n[i];
                            s.canChoose = e >= s.foods && !o,
                                s.choosed = s.foods === Number(t) && !o
                        }
                        this.setState({
                            "foodOptions": n
                        }),
                            this.choosedFoodNum = Number(t)
                    }
                }, {
                    "key": "chooseFeedNum",
                    "value": function chooseFeedNum(e) {
                        var t = this.state.foodOptions;
                        if (!t[e].canChoose)
                            return !1;
                        for (var a = 0; a < t.length; a++) {
                            t[a].choosed = a === e
                        }
                        switch (this.setState({
                            "foodOptions": t
                        }),
                            this.choosedFoodNum = t[e].foods,
                            e) {
                            case 0:
                                v.a.clickReport({
                                    "moduleId": "feed_icon_10"
                                }, {
                                    "babelEventId": "other_feed_10"
                                });
                                break;
                            case 1:
                                v.a.clickReport({
                                    "moduleId": "feed_icon_20"
                                }, {
                                    "babelEventId": "other_feed_20"
                                });
                                break;
                            case 2:
                                v.a.clickReport({
                                    "moduleId": "feed_icon_40"
                                }, {
                                    "babelEventId": "other_feed_40"
                                });
                                break;
                            case 3:
                                v.a.clickReport({
                                    "moduleId": "feed_icon_80"
                                }, {
                                    "babelEventId": "other_feed_80"
                                })
                        }
                    }
                }, {
                    "key": "goFeed",
                    "value": function goFeed() {
                        var e = this;
                        if (this.state.foodCountDonwTime > 0)
                            Object(s.d)({
                                "title": "您的宠物正在进食中,请稍后再喂食",
                                "icon": "none",
                                "duration": 3e3
                            });
                        else if (!1 !== this.back) {
                            this.back = !1,
                                this.giveFoodClickAble = !1;
                            var t = this.state.todayFeedInfo;
                            Object(r.d)("lastFeedNumNew", this.choosedFoodNum),
                                this.setState({
                                    "showChooseFood": !1
                                }),
                                Object(W.a)({
                                    "url": v.a.interFaces.feed + "?feedCount=" + this.choosedFoodNum,
                                    "data": {},
                                    "credentials": "include",
                                    "method": "GET",
                                    "header": Ye
                                }).then(function (a) {
                                    var n = a.data;
                                    if (n.success) {
                                        e.setState({
                                            "isGive": !0
                                        }),
                                        t.gifts > 0 && Object(s.d)({
                                            "title": "获得" + t.gifts + "积分的喂食奖励",
                                            "icon": "none",
                                            "duration": 2e3
                                        });
                                        var o = !1;
                                        "level_upgrade" == n.errorCode && (o = !0,
                                            e.setState({
                                                "levelUpData": n.data
                                            })),
                                            e.startAnInter(3e3, o)
                                    } else
                                        Object(s.d)({
                                            "title": "网络开小差啦，请稍后重试～",
                                            "icon": "none",
                                            "duration": 2e3
                                        })
                                })
                        }
                    }
                }, {
                    "key": "subscribeMessageOn",
                    "value": function subscribeMessageOn(e, t) {
                        var a = this.$scope.selectComponent("#feedSubscribeMessage");
                        a.preDealSubscribe && a.preDealSubscribe(function () {
                            a.checkSubscribe().then(function () {
                                console.log("subscribeMessageOn success feed --------"),
                                e && e()
                            }).catch(function (e) {
                                console.log(e, "subscribeMessageOn error feed --------"),
                                t && t()
                            })
                        })
                    }
                }, {
                    "key": "addSubscribe",
                    "value": function addSubscribe(e) {
                        var t = e.msgTypes
                            , a = e.callBack;
                        Object(W.a)({
                            "url": "" + v.a.interFaces.pushSubscribe,
                            "data": {
                                "openId": Oe.openId,
                                "msgTypes": t
                            },
                            "credentials": "include",
                            "method": "POST",
                            "header": Ye
                        }).then(function (e) {
                            a && a(e)
                        })
                    }
                }, {
                    "key": "afterCloseFeedSubPop",
                    "value": function afterCloseFeedSubPop() {
                        this.goFeed()
                    }
                }, {
                    "key": "submitFeed",
                    "value": function submitFeed() {
                        this.state.subscribeFeedMsg;
                        console.log("submitFeed"),
                            v.a.clickReport({
                                "moduleId": "feed_icon_feed"
                            }, {
                                "babelEventId": "other_feed_button"
                            }),
                            this.goFeed()
                    }
                }, {
                    "key": "dealEnterRoom",
                    "value": function dealEnterRoom(e, t, a) {
                        var n = this;
                        console.log(t, "dealEnterRoom data"),
                            this.currTime = a;
                        var o = t.petLevel
                            , i = Math.round((Math.pow(o + 1, 2) - o) / 2)
                            , c = t.lastFeedTime + 108e5 - a
                            , l = t.lastFeedTime + 216e5 - a < 0;
                        c <= 0 ? c = 0 : c > 108e5 && (c = 108e5);
                        var p = new Date(a)
                            , u = new Date(t.registerYear)
                            , d = Number(p.getFullYear()) + 1 - Number(u.getFullYear())
                            , m = {
                            "isHungry": l,
                            "age": d,
                            "pin": t.pin,
                            "isGoHide": !1,
                            "intergral": t.petCoin,
                            "degreeNumber": t.petLevel,
                            "dogFoodNumber": t.petFood,
                            "registerYear": t.registerYear,
                            "petAppearance": t.petAppearance,
                            "isShowGoldCoin": t.friendHomeCoin > 0,
                            "isDogPengEmpty": c <= 0,
                            "foodCountDonwTime": c,
                            "degreeStyle": {
                                "width": Math.floor(t.feedCount / i * 100) + "%"
                            },
                            "randomStealFood": t.stealFood,
                            "canStealNumber": t.randomLeftFood,
                            "needCountNumber": i - t.feedCount,
                            "logoUrl": t.sponsorLogo,
                            "userSign": t.userSign || "",
                            "closeNewFishBox": !t.showGift,
                            "mendSign": t.mendSign,
                            "subscribeFeedMsg": t.subscribeFeedMsg
                        };
                        if (this.state.tempPetAppearance || (m.tempPetAppearance = t.petAppearance),
                        "enterRoom" == e && (m.helpStatus = t.helpStatus || "cannot_help",
                            m.petHelpCoin = t.petHelpCoin,
                        v.a.isInAppEnv() || this.jumpBack("enterRoom")),
                        "can_help" === m.helpStatus && (m.needHelpUserNickName = t.needHelpUserNickName,
                            m.needHelpUserImage = t.needHelpUserImage),
                            this.state.helpPin ? (m.friendAge = d,
                                m.helpFeedStatus = t.helpFeedStatus) : (m.isThreeMealTime = t.inFeedTime,
                                m.userHeadIcon = t.userImage,
                                m.invitefriendListData = {
                                    "inviteRewardCount": t.inviteRewardCount,
                                    "invitedUserTag": t.invitedUserTag,
                                    "newUserGetFoodCount": t.newUserGetFoodCount,
                                    "inviteState": t.inviteState
                                },
                            !this.state.isGoHide && t.petFood > 9 && (m.isDogPengEmpty || "feedsuccess" == e) && this.getFeedTimes(),
                            this.ownDressList || this.getAllDress(t.petAppearance)),
                        this.state.isGoHide || this.preLoadImgs(t.petAppearance),
                            m.hasShowNewDress = "midAutumn" === Object(r.a)("openedNewDress"),
                            m.detailInfo = t,
                            this.setState(m, function () {
                                void 0 === n.announceInterval && n.countAnnounceAnim(),
                                    console.log(n.$router.params, "this.$router.paramsthis.$router.params"),
                                n.$router.params.isGoExchange && n.goExchange()
                            }),
                        "feedsuccess" == e)
                            if (this.state.helpPin)
                                Object(s.d)({
                                    "title": "积分+10，狗粮-10",
                                    "icon": "none",
                                    "duration": 2e3
                                });
                            else if (this.giveFoodClickAble = !0,
                            this.state.todayFeedInfo.gifts > 0)
                                var h = setTimeout(function () {
                                    Object(s.d)({
                                        "title": "积分+" + n.choosedFoodNum + "，狗粮-" + n.choosedFoodNum,
                                        "icon": "none",
                                        "duration": 2e3
                                    }),
                                        clearTimeout(h)
                                }, 1200);
                            else
                                Object(s.d)({
                                    "title": "积分+" + this.choosedFoodNum + "，狗粮-" + this.choosedFoodNum,
                                    "icon": "none",
                                    "duration": 2e3
                                });
                        if (t.mendSign)
                            var f = setTimeout(function () {
                                Object(s.d)({
                                    "title": "补签成功",
                                    "icon": "none",
                                    "duration": 2e3
                                }),
                                    clearTimeout(f)
                            }, 1e3)
                    }
                }, {
                    "key": "countAnnounceAnim",
                    "value": function countAnnounceAnim() {
                        var e = this;
                        Object(d.a)().select(".announcement_text").boundingClientRect(function (t) {
                            if (t && t.width)
                                if (t.width > 334) {
                                    var a = t.width / 334
                                        , n = {
                                        "transform": "translateX(-" + t.width + "px)",
                                        "transition": 12e3 * a / 1e3 + "s linear"
                                    };
                                    e.setState({
                                        "announceTextStyle": n
                                    }),
                                        e.announceInterval = setInterval(function () {
                                            e.setState({
                                                "announceTextStyle": {}
                                            }, function () {
                                                setTimeout(function () {
                                                    e.setState({
                                                        "announceTextStyle": n
                                                    })
                                                }, 20)
                                            })
                                        }, 12e3 * a)
                                } else
                                    e.setState({
                                        "announceTextStyle": {
                                            "transform": "translateX(0)"
                                        }
                                    })
                        }).exec()
                    }
                }, {
                    "key": "goEnterHome",
                    "value": function goEnterHome(e) {
                        var t = this.$router.params
                            , a = t.helpPin
                            , n = void 0 === a ? "" : a
                            , o = (t.source,
                            t.invitePin)
                            , i = void 0 === o ? "" : o
                            , r = n ? v.a.interFaces.enterFriendRoom : v.a.interFaces.enterRoom
                            , s = {};
                        if (n ? s.friendPin = decodeURIComponent(n) : (s.invitePin = decodeURIComponent(decodeURIComponent(i)),
                        t.inviteSource && !this.hasReportInviteEnter && (s.inviteSource = t.inviteSource,
                            s.shareSource = t.shareSource,
                        t.inviteTimeStamp && (s.inviteTimeStamp = t.inviteTimeStamp),
                            this.hasReportInviteEnter = !0)),
                            console.log(s, "enterRoom"),
                            n)
                            this.getHomeData(r, s, n, e);
                        else {
                            for (var c in s)
                                r.indexOf("?") > -1 ? r += "&" + c + "=" + s[c] : r += "?" + c + "=" + s[c];
                            this.getHomeData(r, {}, n, e)
                        }
                        this.getTaskList()
                    }
                }, {
                    "key": "getHomeData",
                    "value": function getHomeData(e, t, a, n) {
                        var i = this;
                        Object(W.a)({
                            "url": e,
                            "data": t,
                            "credentials": "include",
                            "method": a ? "GET" : "POST",
                            "header": Ye
                        }).then(function (e) {
                            var t = e.data;
                            if (t.success)
                                if ("R0001" == t.errorCode)
                                    o.a.redirectTo({
                                        "url": "/pages/jdDog/riskPage"
                                    });
                                else if ("B0001" == t.errorCode)
                                    v.a.loginJd(function () {
                                        console.log("强制重新登录了～")
                                    }, 1);
                                else {
                                    if (i.dealEnterRoom(n, t.data, t.currentTime || (new Date).getTime()),
                                        t.data.bubbleOpen) {
                                        if (i.state.isFirstEnterHome) {
                                            var a = {
                                                "bubbleOpen": t.data.bubbleOpen,
                                                "bubbleReward": t.data.bubbleReward,
                                                "bubbleFloatTime": t.data.bubbleFloatTime
                                            };
                                            Object(r.d)("paopaoStorage", JSON.stringify(a)),
                                                i.goJumpPaopao()
                                        }
                                    } else
                                        Object(r.b)("paopaoStorage");
                                    i.checkIsHasCouponAct(n)
                                }
                            else
                                "B0001" == t.errorCode ? v.a.loginJd(function () {
                                    console.log("强制重新登录了～")
                                }, 1) : 1 == i.state.isLogin && Object(s.d)({
                                    "title": "网络开小差啦，请稍后重试～",
                                    "icon": "none",
                                    "duration": 2e3
                                })
                        })
                    }
                }, {
                    "key": "checkIsHasCouponAct",
                    "value": function checkIsHasCouponAct(e) {
                        var t = this;
                        "enterRoom" == e && (this.exactTimer && clearInterval(this.exactTimer),
                            Object(W.a)({
                                "url": "" + v.a.interFaces.getExactCouponInfo,
                                "data": {},
                                "credentials": "include",
                                "method": "GET",
                                "header": Ye
                            }).then(function (e) {
                                var a = e.data.data;
                                e.data.success && a.hasCoupon ? 2 == a.handleResult ? t.dealCouponAct(a) : 1 == a.handleResult && (t.exactTimer = setInterval(function () {
                                    t.queryActHasRes()
                                }, 2e3)) : t.setState({
                                    "exactResBack": !0,
                                    "hasExactCouponAct": !1
                                })
                            }))
                    }
                }, {
                    "key": "queryActHasRes",
                    "value": function queryActHasRes() {
                        var e = this;
                        Object(W.a)({
                            "url": "" + v.a.interFaces.getExactCouponInfo,
                            "data": {},
                            "credentials": "include",
                            "method": "GET",
                            "header": Ye
                        }).then(function (t) {
                            var a = t.data.data;
                            t.data.success && a.hasCoupon ? 2 == a.handleResult && (clearInterval(e.exactTimer),
                                e.dealCouponAct(a)) : (clearInterval(e.exactTimer),
                                e.setState({
                                    "exactResBack": !0,
                                    "hasExactCouponAct": !1
                                }))
                        })
                    }
                }, {
                    "key": "closeExactGift",
                    "value": function closeExactGift() {
                        this.setState({
                            "isShowExactGift": !1
                        }),
                            this.checkIsHasCouponAct("enterRoom"),
                            this.expoRepoGiftIcon()
                    }
                }, {
                    "key": "dealCouponAct",
                    "value": function dealCouponAct(e) {
                        var t = {
                            "exactResBack": !0,
                            "hasExactCouponAct": !0
                        };
                        0 === e.couponGetResult && (t.isShowExactGift = !0),
                            t.exactCouponData = e,
                            this.setState(t),
                            this.expoRepoGiftIcon()
                    }
                }, {
                    "key": "expoRepoGiftIcon",
                    "value": function expoRepoGiftIcon() {
                        var e = this.state
                            , t = e.exactResBack
                            , a = e.hasExactCouponAct
                            , n = e.isShowExactGift;
                        t && a && !n && v.a.clickReport({}, {
                            "babelEventId": "expo_other_gift_icon"
                        })
                    }
                }, {
                    "key": "reportDressPoint",
                    "value": function reportDressPoint(e) {
                        var t = {
                            "butterfly": 1,
                            "valentine": 2,
                            "newYear": 3,
                            "standard": 4,
                            "leisure": 5,
                            "winter": 6,
                            "rabbit": 7,
                            "minions": 8,
                            "cake": 9,
                            "midAutumn": 10
                        };
                        v.a.clickReport({
                            "moduleId": "dress_icon_look" + t[e]
                        }, {
                            "babelEventId": "other_dress_look" + t[e]
                        })
                    }
                }, {
                    "key": "chooseDress",
                    "value": function chooseDress(e) {
                        e.unableChoose || (this.reportDressPoint(e.name),
                            this.dealAllDress(e.name))
                    }
                }, {
                    "key": "dressUp",
                    "value": function dressUp() {
                        var e = this;
                        if (this.isReqChangeAppear)
                            return !1;
                        v.a.clickReport({
                            "moduleId": "dress_icon_button"
                        }, {
                            "babelEventId": "other_dress_button"
                        }),
                            this.isReqChangeAppear = !0;
                        var t = this.state.tempPetAppearance;
                        Object(W.a)({
                            "url": v.a.interFaces.changeAppearance + "?appearance=" + t,
                            "data": {},
                            "credentials": "include",
                            "method": "GET",
                            "header": Ye
                        }).then(function (a) {
                            e.isReqChangeAppear = !1,
                                a.data.success ? (e.setState({
                                    "petAppearance": t,
                                    "isDressing": !1,
                                    "preShowDress": !1,
                                    "showIsSaveDress": !1
                                }),
                                    e.preLoadImgs(t),
                                    Object(s.d)({
                                        "title": "穿上新衣的宠汪汪觉得自己美美哒",
                                        "icon": "none",
                                        "duration": 2e3
                                    })) : Object(s.d)({
                                    "title": "换装失败，再试试吧",
                                    "icon": "none",
                                    "duration": 2e3
                                })
                        })
                    }
                }, {
                    "key": "getAllDress",
                    "value": function getAllDress(e) {
                        var t = this;
                        Object(W.a)({
                            "url": v.a.interFaces.getAvaiAppear,
                            "data": {},
                            "credentials": "include",
                            "method": "GET",
                            "header": Ye
                        }).then(function (a) {
                            try {
                                t.ownDressList = a.data.datas || [],
                                    t.dealAllDress(e)
                            } catch (e) {
                                console.log(e)
                            }
                        })
                    }
                }, {
                    "key": "dealAllDress",
                    "value": function dealAllDress(e) {
                        for (var t = [], a = 0; a < Ge.length; a++) {
                            var n = Ge[a]
                                , o = {
                                "name": n,
                                "unableChoose": this.ownDressList.indexOf(n) < 0,
                                "choosed": e === n,
                                "isNew": "midAutumn" == n
                            };
                            t.push(o)
                        }
                        this.setState({
                            "allDresses": t,
                            "tempPetAppearance": e
                        })
                    }
                }, {
                    "key": "getFeedTimes",
                    "value": function getFeedTimes() {
                        var e = this;
                        Object(W.a)({
                            "url": v.a.interFaces.getTodayFeedInfo,
                            "data": {},
                            "credentials": "include",
                            "method": "GET",
                            "header": Ye
                        }).then(function (t) {
                            var a = t.data;
                            if (a.success) {
                                for (var n = a.data || {}, o = n.feedPetRewards || [], i = o.length, r = !1, s = 0, c = 0; c < o.length; c++) {
                                    var l = o[c];
                                    l.lastLevelFeedTime = 0 === c ? 0 : o[c - 1].feedCount,
                                        l.section = l.feedCount - l.lastLevelFeedTime,
                                    l.feedCount === n.feedCount + 1 && (r = !0,
                                        n.gifts = l.petCoin),
                                        l.received = l.feedCount <= n.feedCount,
                                    l.received && s++
                                }
                                var p = 0;
                                p = s < i ? s / i + (o[s].section - o[s].feedCount + n.feedCount) / o[s].section * 1 / i : 1,
                                    n.feedTimesWidth = {
                                        "width": 100 * p + "%"
                                    },
                                r || (n.gifts = 0),
                                    n.feedPetRewards = o,
                                    e.setState({
                                        "todayFeedInfo": n
                                    })
                            }
                        })
                    }
                }, {
                    "key": "preLoadImgs",
                    "value": function preLoadImgs(e) {
                        Object(m.a)({
                            "src": Le[e]
                        }),
                            Object(m.a)({
                                "src": He[e]
                            }),
                            Object(m.a)({
                                "src": Je[e]
                            }),
                            Object(m.a)({
                                "src": Ze[e]
                            })
                    }
                }, {
                    "key": "closeHelpGiveDogFood",
                    "value": function closeHelpGiveDogFood(e, t, a) {
                        var n = this;
                        if (a) {
                            this.statistic("MMyDog_Home_FriendPopups", JSON.stringify({
                                "copywriting": "确定"
                            })),
                                e >= 10 ? (v.a.clickReport({
                                    "moduleId": "friendHome_pop1_confirm"
                                }, {
                                    "babelEventId": "other_FH_p1_confirm"
                                }),
                                    this.helpFeed(function () {
                                        e >= 10 && (n.setState({
                                            "isGive": !0,
                                            "isStealUnable": !0
                                        }),
                                            n.startAnInter(3e3))
                                    })) : (v.a.clickReport({
                                    "moduleId": "friendHome_pop2_confirm"
                                }, {
                                    "babelEventId": "other_FH_p2_confirm"
                                }),
                                    this.setState({
                                        "isShowConfirmLayer": !1
                                    }))
                        } else {
                            e >= 10 ? v.a.clickReport({
                                "moduleId": "friendHome_pop1_cancel"
                            }, {
                                "babelEventId": "other_FH_p1_cancel"
                            }) : v.a.clickReport({
                                "moduleId": "friendHome_pop2_cancel"
                            }, {
                                "babelEventId": "other_FH_p2_cancel"
                            });
                            this.statistic("MMyDog_Home_FriendPopups", JSON.stringify({
                                "copywriting": "取消"
                            })),
                            this.state.isShowConfirmLayer && this.setState({
                                "isShowConfirmLayer": !1
                            })
                        }
                    }
                }, {
                    "key": "helpGiveDogFood",
                    "value": function helpGiveDogFood() {
                        var e = this.$router.params.feedStatus
                            , t = this.state.helpFeedStatus
                            , a = e || t;
                        if (this.statistic("MMyDog_Home_HelpTa"),
                        "not_feed" != a || "chance_full" == a) {
                            var n = "chance_full" == a ? "今日帮喂养次数已达上限～" : "help_ok" == a ? "已经给我喂过一次啦，给自己留点吧，我不贪心哟" : "宠物正在进食中,请稍后再喂食";
                            return Object(s.d)({
                                "title": n,
                                "icon": "none",
                                "duration": 2e3
                            }),
                                !1
                        }
                        this.setState({
                            "isShowConfirmLayer": !0
                        })
                    }
                }, {
                    "key": "giveDogFood",
                    "value": function giveDogFood(e) {
                        if (e >= 10) {
                            if (!1 !== this.giveFoodClickAble) {
                                this.getFeedTimes(),
                                    this.preDealFoods(e),
                                    this.setState({
                                        "showChooseFood": !0
                                    });
                                for (var t = 0; t < this.state.foodOptions.length; t++) {
                                    var a = this.state.foodOptions[t];
                                    a.canChoose && v.a.clickReport({}, {
                                        "babelEventId": "expo_other_feed_" + a.foods
                                    })
                                }
                                v.a.clickReport({}, {
                                    "babelEventId": "expo_other_feed_button"
                                })
                            }
                        } else
                            Object(s.d)({
                                "title": this.state.helpPin ? "喂食需要10g狗粮，请赚取足够狗粮后再来帮助好友" : "喂食需要10g狗粮，请赚取足够狗粮后再来喂养",
                                "icon": "none",
                                "duration": 3e3
                            });
                        v.a.selfStatistic({
                            "reqHeader": Ye,
                            "iconCode": "feed"
                        })
                    }
                }, {
                    "key": "closeShareLayer",
                    "value": function closeShareLayer() {
                        this.setState({
                            "isShowShareImg": !1
                        })
                    }
                }, {
                    "key": "closeBackAppLayer",
                    "value": function closeBackAppLayer() {
                        var e = this.state
                            , t = e.isApp
                            , a = e.isLogin;
                        0 != a || t ? 0 == a && t ? this.setState({
                            "isBackApp": !1
                        }) : this.setState({
                            "isBackApp": !1,
                            "isShowBottomBackApp": !0
                        }) : this.goLogin()
                    }
                }, {
                    "key": "closeBackAppBottomLayer",
                    "value": function closeBackAppBottomLayer() {
                        this.setState({
                            "isShowBottomBackApp": !1
                        })
                    }
                }, {
                    "key": "setReturnHomeParam",
                    "value": function setReturnHomeParam(e) {
                        var t, a = "https://jdjoy.jd.com/pet/index#/pages/jdDog/jdDog", n = {
                            "des": "m",
                            "url": a += "?invitePin=" + decodeURIComponent(this.state.invitePin),
                            "category": "jump"
                        };
                        t = 0 == e,
                            this.setState({
                                "returnHomeParam": "openApp.jdMobile://virtual?params=" + encodeURIComponent(JSON.stringify(n)),
                                "isBackApp": t,
                                "isLogin": e
                            })
                    }
                }, {
                    "key": "openAppJdDog",
                    "value": function openAppJdDog() {
                        v.a.btnOpenApp()
                    }
                }, {
                    "key": "goHomeRule",
                    "value": function goHomeRule() {
                        v.a.clickReport({
                            "moduleId": "tips_icon"
                        }, {
                            "babelEventId": "other_tips"
                        });
                        this.statistic("MMyDog_Home_Strategy"),
                            Object(r.d)("homeTabJumpOther", !0),
                            window.location.href = "https://pro.m.jd.com/mall/active/YDXNktRkr31iwP91ieKWbTgHqgF/index.html?showhead=no"
                    }
                }, {
                    "key": "goActions",
                    "value": function goActions() {
                        v.a.clickReport({
                            "moduleId": "action_icon"
                        }, {
                            "babelEventId": "other_action"
                        }),
                            this.statistic("MMyDog_Home_Post"),
                            o.a.navigateTo({
                                "url": "/pages/otherPage/homeDynamic"
                            })
                    }
                }, {
                    "key": "goWo",
                    "value": function goWo() {
                        v.a.clickReport({
                            "moduleId": "ddxw"
                        }, {
                            "babelEventId": "ddxw"
                        }),
                            this.jumpH5("https://h5.m.jd.com/babelDiy/Zeus/2HFSytEAN99VPmMGZ6V4EYWus1x/index.html?babelChannel=ttt1")
                    }
                }, {
                    "key": "goXXL",
                    "value": function goXXL() {
                        v.a.clickReport({
                            "moduleId": "xxl"
                        }, {
                            "babelEventId": "xxl"
                        }),
                            this.jumpH5("https://prodev.m.jd.com/mall/active/3muxzzr7yLJbAKfbbJKPAP2m49Pq/index.html")
                    }
                }, {
                    "key": "jumpH5",
                    "value": function jumpH5(e) {
                        o.a.navigateTo({
                            "url": e
                        })
                    }
                }, {
                    "key": "closeLoading",
                    "value": function closeLoading() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imgs";
                        void 0 === this.loadCompleteModes ? this.loadCompleteModes = [e] : this.loadCompleteModes.includes(e) || this.loadCompleteModes.push(e),
                            this.setState({
                                "isShowLoading": !(this.loadCompleteModes.includes("imgs") && this.loadCompleteModes.includes("super") && this.loadCompleteModes.includes("water"))
                            })
                    }
                }, {
                    "key": "acceptLevelUp",
                    "value": function acceptLevelUp() {
                        this.goEnterHome("feedsuccess"),
                            this.setState({
                                "showLevelUpPop": !1
                            })
                    }
                }, {
                    "key": "openLevelTip",
                    "value": function openLevelTip() {
                        var e = this
                            , t = null;
                        this.state.isOpenLevelTip ? this.setState({
                            "isOpenLevelTip": !1
                        }) : (this.setState({
                            "isOpenLevelTip": !0
                        }),
                            t = setTimeout(function () {
                                e.setState({
                                    "isOpenLevelTip": !1
                                }),
                                    clearTimeout(t)
                            }, 3e3))
                    }
                }, {
                    "key": "getBackAppLoginView",
                    "value": function getBackAppLoginView(e, t, a) {
                        return 0 == e && t ? n.j.createElement(h.a, {
                            "className": "confirm-btn",
                            "style": "margin-left:0px"
                        }, n.j.createElement(g.a, {
                            "className": "confirm-btn-text",
                            "hoverClass": "none",
                            "onClick": this.goLogin.bind(this)
                        }, "立即登录")) : t ? void 0 : n.j.createElement(h.a, {
                            "className": "confirm-btn",
                            "style": "margin-left:0px"
                        }, n.j.createElement(g.a, {
                            "className": "confirm-btn-text",
                            "hoverClass": "none",
                            "onClick": this.openAppJdDog.bind(this)
                        }, "打开京东app"))
                    }
                }, {
                    "key": "getGoldCoin",
                    "value": function getGoldCoin() {
                        var e = this;
                        v.a.clickReport({
                            "moduleId": "friendHome_getCoin"
                        }, {
                            "babelEventId": "other_FH_getCoin"
                        });
                        var t = this.$router.params;
                        this.setState({
                            "clickedCoin": !0
                        }, function () {
                            Object(W.a)({
                                "url": v.a.interFaces.getFriendCoin + "?friendPin=" + t.helpPin,
                                "data": {},
                                "credentials": "include",
                                "method": "GET",
                                "header": Ye
                            }).then(function (e) {
                                var t = e.data;
                                t.success && ("coin_took_ok" === t.errorCode ? Object(s.d)({
                                    "title": "获得" + t.data + "积分",
                                    "icon": "none",
                                    "duration": 2e3
                                }) : "coin_took_fail" === t.errorCode && Object(s.d)({
                                    "title": "好友积分已被他人领取",
                                    "icon": "none",
                                    "duration": 2e3
                                }))
                            });
                            var a = setTimeout(function () {
                                clearTimeout(a),
                                    e.setState({
                                        "isShowGoldCoin": !1
                                    })
                            }, 710)
                        })
                    }
                }, {
                    "key": "teaseDog",
                    "value": function teaseDog() {
                        var e = this;
                        this.state.isTeasingDog || (this.setState({
                            "isTeasingDog": !0
                        }, function () {
                            var t = setTimeout(function () {
                                e.setState({
                                    "isTeasingDog": !1
                                }),
                                    clearTimeout(t)
                            }, 1650)
                        }),
                            this.statistic("MMyDog_Home_PetBody"))
                    }
                }, {
                    "key": "helpFriend",
                    "value": function helpFriend() {
                        var e = this;
                        if (this.isReqHelp)
                            return !1;
                        this.isReqHelp = !0,
                            v.a.clickReport({
                                "moduleId": "pop_zhuli"
                            }, {
                                "babelEventId": "other_task_p_zhuli"
                            });
                        var t = this.$router.params.invitePin;
                        Object(W.a)({
                            "url": v.a.interFaces.helpFriend + "?friendPin=" + decodeURIComponent(t),
                            "data": {},
                            "credentials": "include",
                            "method": "GET",
                            "header": Ye
                        }).then(function (t) {
                            e.isReqHelp = !1;
                            var a = t.data;
                            a.success ? (e.setState({
                                "helpStatus": a.errorCode,
                                "intergral": a.data
                            }),
                            "help_fail" === a.errorCode && Object(s.d)({
                                "title": "网络开小差啦，请重试～",
                                "icon": "none",
                                "duration": 2e3
                            })) : Object(s.d)({
                                "title": "网络开小差啦，请重试～",
                                "icon": "none",
                                "duration": 2e3
                            })
                        })
                    }
                }, {
                    "key": "clickDressLayer",
                    "value": function clickDressLayer() {
                        var e = this.state;
                        e.tempPetAppearance === e.petAppearance ? this.setState({
                            "isDressing": !1,
                            "preShowDress": !1
                        }) : this.setState({
                            "showIsSaveDress": !0
                        })
                    }
                }, {
                    "key": "closeDressDir",
                    "value": function closeDressDir() {
                        var e = this.state.petAppearance;
                        this.setState({
                            "tempPetAppearance": e,
                            "showIsSaveDress": !1,
                            "isDressing": !1,
                            "preShowDress": !1
                        }),
                            this.dealAllDress(e)
                    }
                }, {
                    "key": "openDressUp",
                    "value": function openDressUp() {
                        var e = this;
                        v.a.clickReport({
                            "moduleId": "dress_icon"
                        }, {
                            "babelEventId": "dress_icon"
                        }),
                            this.statistic("MMyDog_Home_Decorate"),
                            this.setState({
                                "preShowDress": !0,
                                "hasShowNewDress": !0
                            }, function () {
                                e.setState({
                                    "isDressing": !0
                                })
                            }),
                            Object(r.d)("openedNewDress", "midAutumn");
                        for (var t = 0; t < this.state.allDresses.length; t++) {
                            var a = this.state.allDresses[t];
                            if (!a.unableChoose) {
                                v.a.clickReport({}, {
                                    "babelEventId": "expo_other_dress_look" + {
                                        "butterfly": 1,
                                        "valentine": 2,
                                        "newYear": 3,
                                        "standard": 4,
                                        "leisure": 5,
                                        "winter": 6,
                                        "rabbit": 7,
                                        "minions": 8,
                                        "cake": 9,
                                        "midAutumn": 10
                                    }[a.name]
                                })
                            }
                        }
                        v.a.clickReport({}, {
                            "babelEventId": "expo_other_dress_button"
                        })
                    }
                }, {
                    "key": "goJumpPaopao",
                    "value": function goJumpPaopao() {
                        if (Object(r.a)("paoCountDownStorage"))
                            Object(r.b)("paoCountDownStorage");
                        else {
                            var e = window.location.href;
                            if (-1 == e.indexOf("?"))
                                o.a.redirectTo({
                                    "url": "/pages/paopao/paopao"
                                });
                            else {
                                var t = e.substring(e.indexOf("?") + 1);
                                o.a.redirectTo({
                                    "url": "/pages/paopao/paopao?" + t
                                })
                            }
                        }
                    }
                }, {
                    "key": "friendsListView",
                    "value": function friendsListView(e, t) {
                        var a = this;
                        return 0 == e.length ? [1, 2, 3, 4, 5].map(function (e, t) {
                            return n.j.createElement(h.a, {
                                "className": "help-feed-item",
                                "key": String(t),
                                "taroKey": String(t)
                            }, n.j.createElement(h.a, {
                                "className": "order-num skeleton_order_num"
                            }), n.j.createElement(h.a, {
                                "className": "head-icon skeleton_head_icon"
                            }), n.j.createElement(h.a, {
                                "className": "friend-info"
                            }, n.j.createElement(h.a, {
                                "className": "help-feed-item-title text_limit skeleton_item_title"
                            }), n.j.createElement(h.a, {
                                "className": "help-feed-sub-title skeleton_item_sub_title"
                            })))
                        }) : e.length > 0 ? e.map(function (e, o) {
                            var i = "";
                            switch (e.index) {
                                case 1:
                                    i = "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/icon-champion.png&auth=ILO67fSHGlbbr2SyvowwXQFiTXZhPTQ2JmU9MTk3MDk1NjM4NSZ0PTE1NzA5NTYzODYmZj0yMl8xOTEwXzEyMThfMjg3JnI9RWcyOHlxbHZFNA==";
                                    break;
                                case 2:
                                    i = "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/icon-second-place.png&auth=G6TJtPquH7WE/LIJ/UlXaayDUT5hPTQ2JmU9MTk3MDk1NjU3NCZ0PTE1NzA5NTY1NzUmZj03MF8xOTEwXzEzNTFfMjgxJnI9WGpsVlhzU3kwYQ==";
                                    break;
                                case 3:
                                    i = "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/icon-third-place.png&auth=aZ6aJ3grwnMSi1XzqC+vZDc0zPBhPTQ2JmU9MTk3MDk1NjYxNiZ0PTE1NzA5NTY2MTcmZj02NF8xOTEwXzEwODZfMzU1JnI9U2FsRnV1TTAwSQ=="
                            }
                            return n.j.createElement(h.a, {
                                "className": "help-feed-item",
                                "key": String(o),
                                "taroKey": String(o),
                                "onClick": a.goHelpFeed.bind(a, e)
                            }, i && n.j.createElement(_.a, {
                                "className": "order-icon",
                                "src": i
                            }), !i && n.j.createElement(h.a, {
                                "className": "order-num"
                            }, e.index), n.j.createElement(_.a, {
                                "className": "head-icon",
                                "src": e.icon
                            }), n.j.createElement(h.a, {
                                "className": "friend-info"
                            }, n.j.createElement(h.a, {
                                "className": "help-feed-item-title text_limit"
                            }, e.friendName), n.j.createElement(h.a, {
                                "className": "help-feed-sub-title"
                            }, n.j.createElement(_.a, {
                                "className": "points-icon",
                                "src": t
                            }), n.j.createElement(h.a, {
                                "className": "points-num"
                            }, e.points))), n.j.createElement(h.a, {
                                "className": "options"
                            }, "not_feed" == e.status && n.j.createElement(h.a, {
                                "className": "options-btn"
                            }, "可帮喂"), ("help_ok" == e.status || "other_help" == e.status) && n.j.createElement(h.a, {
                                "className": "options-btn has_feed_btn"
                            }, "已帮喂"), "time_error" == e.status && n.j.createElement(h.a, {
                                "className": "options-btn has_feed_btn"
                            }, "主人已喂"), "chance_full" == e.status && n.j.createElement(h.a, {
                                "className": "options-btn has_feed_btn"
                            }, "次数用尽"), "help_ok" == e.status && n.j.createElement(h.a, {
                                "className": "has_feed_text"
                            }, "积分已获得"), "not_feed" == e.status && n.j.createElement(h.a, {
                                "className": "btn-bottom-text"
                            }, n.j.createElement(_.a, {
                                "className": "points-icon",
                                "src": t
                            }), n.j.createElement(f.a, null, "+10"))), n.j.createElement(h.a, {
                                "className": "top_border"
                            }), "can_steal" === e.stealStatus && n.j.createElement(h.a, {
                                "className": "steal_food_icon"
                            }, "抢"))
                        }) : void 0
                    }
                }, {
                    "key": "goInvitePage",
                    "value": function goInvitePage(e) {
                        if ("unreceive" == e)
                            this.receiveInviteFoods();
                        else if ("chance_left" == e) {
                            v.a.clickReport({
                                "moduleId": "helpFeed_icon_invite"
                            }, {
                                "babelEventId": "other_helpFeed_YQ"
                            }),
                                Pe.a.click({
                                    "moduleId": "helpFeed_icon_invite"
                                });
                            var t = this.state
                                , a = t.detailInfo
                                , n = t.userHeadIcon;
                            o.a.navigateTo({
                                "url": "/pages/jdDog/inviteFriend?pin=" + encodeURIComponent(this.state.pin) + "&userTag=" + a.userTag + "&userHeadIcon=" + n
                            })
                        }
                    }
                }, {
                    "key": "receiveInviteFoods",
                    "value": function receiveInviteFoods() {
                        var e = this;
                        if (this.isReceivingInvite)
                            return !1;
                        this.isReceivingInvite = !0,
                            Object(W.a)({
                                "url": v.a.interFaces.getInviteFood,
                                "data": {},
                                "credentials": "include",
                                "method": "GET",
                                "header": Ye
                            }).then(function (t) {
                                e.isReceivingInvite = !1,
                                    t.data.success ? (e.goEnterHome(),
                                        Object(s.d)({
                                            "title": "领取" + t.data.data + "g狗粮",
                                            "icon": "none",
                                            "duration": 2e3
                                        })) : Object(s.d)({
                                        "title": "领取失败，请稍后重试～",
                                        "icon": "none",
                                        "duration": 2e3
                                    })
                            })
                    }
                }, {
                    "key": "getTopContain",
                    "value": function getTopContain(e, t, a, o, i, r, s, c, l, p) {
                        return n.j.createElement(h.a, {
                            "className": p
                        }, n.j.createElement(h.a, {
                            "className": "index_top_contain"
                        }, n.j.createElement(h.a, {
                            "className": "index_top_bg"
                        }, n.j.createElement(h.a, {
                            "className": "head_icon_contain"
                        }, n.j.createElement(_.a, {
                            "className": "dog-info-head",
                            "src": Be[e]
                        }), n.j.createElement(h.a, {
                            "className": "register_mode"
                        }, n.j.createElement(_.a, {
                            "className": "rigister_bg",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/newhome/rigister_bg.png&auth=Gz0dFxARzbZiY4Joo2uhhySBcG1hPTQ2JmU9MTk5MDQ3MjU0NSZ0PTE1OTA0NzI1NDYmZj05M18yMDA1XzQ0ODFfNjk1JnI9bXNvTFRLYnB4MQ=="
                        }), n.j.createElement(h.a, {
                            "className": "number_bg"
                        }, n.j.createElement(f.a, {
                            "className": "num_text"
                        }, t ? a : o)))), n.j.createElement(h.a, {
                            "className": "sub_info"
                        }, n.j.createElement(h.a, {
                            "className": "top_line"
                        }, n.j.createElement(h.a, {
                            "className": "dog_name"
                        }, Ve[e]), n.j.createElement(h.a, {
                            "className": "coin_contain"
                        }, n.j.createElement(_.a, {
                            "className": "pet_level_icon",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/jifen_icon2.png&auth=/Ux7/1PoW6VJUQ5kOyKaaa/WfZthPTQ2JmU9MTk3MDU4ODI5MSZ0PTE1NzA1ODgyOTImZj01Ml8xOTEwXzgxOF80OTcmcj1TR1kwcFJxNlhz"
                        }), n.j.createElement(h.a, {
                            "className": "coin_text"
                        }, s > 0 && s || 0), n.j.createElement(_.a, {
                            "className": "jifen_arrow h5_arrow",
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAALVBMVEUAAAAAYm4AYm4AYm4AYWwAXHAAYm4AYm4AYm4AYW4AYm4AYm4AYW4AYXAAYm7b50wbAAAADnRSTlMA5tA+HAy4sZiQc2paNKeas5AAAAA1SURBVAjXY0ACBy9AGXYiUAb3owAoa14ClMH+Aspg1VsAZTk+RjAQUgjFCO0IA+1EEJYiAwDx+w4J7OPT2wAAAABJRU5ErkJggg=="
                        }))), n.j.createElement(h.a, {
                            "className": "level_info",
                            "onClick": this.openLevelTip.bind(this)
                        }, n.j.createElement(f.a, {
                            "className": "level_text"
                        }, "等级"), n.j.createElement(h.a, {
                            "className": "progress_contain"
                        }, n.j.createElement(h.a, {
                            "className": "progress_inner",
                            "style": i
                        })), n.j.createElement(h.a, {
                            "className": "progress_text"
                        }, "LV.", r, "/30"), c && n.j.createElement(h.a, {
                            "className": "level-tip-need"
                        }, n.j.createElement(_.a, {
                            "className": "level-tip-img",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/newhome/level_bg.png&auth=qvcSGkho5j8BC5roekjKgnfowM5hPTQ2JmU9MTk5MDEzODQxOSZ0PTE1OTAxMzg0MjAmZj04NF8yMDA1XzI3MDJfMjQzJnI9NjJoVjBsSlZpaw=="
                        }), n.j.createElement(h.a, {
                            "className": "level-tip-text"
                        }, "再喂食自己宠物", n.j.createElement(f.a, {
                            "className": "level-need-number"
                        }, l), "次可升级"))), n.j.createElement(h.a, {
                            "className": "coins_click_ele",
                            "onClick": this.goCoinDetail.bind(this, "1")
                        })))))
                    }
                }, {
                    "key": "closeNewFishBoxFuc",
                    "value": function closeNewFishBoxFuc() {
                        this.setState({
                            "closeNewFishBox": !0
                        })
                    }
                }, {
                    "key": "clickGiftIcon",
                    "value": function clickGiftIcon() {
                        this.setState({
                            "isShowExactGift": !0
                        }),
                            v.a.clickReport({
                                "moduleId": "gift_icon"
                            }, {
                                "babelEventId": "other_gift_icon"
                            })
                    }
                }, {
                    "key": "clickDogFoodIcon",
                    "value": function clickDogFoodIcon() {
                        var e = this.state.dogFoodNumber;
                        this.state.helpPin ? (this.helpGiveDogFood(),
                            v.a.clickReport({
                                "moduleId": "friendHome_helpFeed"
                            }, {
                                "babelEventId": "other_FH_BW"
                            }),
                            e >= 10 ? (v.a.clickReport({}, {
                                "babelEventId": "expo_other_FH_p1_confirm"
                            }),
                                v.a.clickReport({}, {
                                    "babelEventId": "expo_other_FH_p1_cancel"
                                })) : (v.a.clickReport({}, {
                                "babelEventId": "expo_other_FH_p2_confirm"
                            }),
                                v.a.clickReport({}, {
                                    "babelEventId": "expo_other_FH_p2_cancel"
                                }))) : (v.a.clickReport({
                            "moduleId": "feed_icon"
                        }, {
                            "babelEventId": "other_feed"
                        }),
                            this.giveDogFood(e))
                    }
                }, {
                    "key": "onReceiveMealReward",
                    "value": function onReceiveMealReward(e) {
                        var t = this;
                        this.goReceive(e, !1);
                        var a = new Date
                            , n = a.getTime()
                            , o = a.getDay()
                            , i = n - 864e5 * (o - 1)
                            , s = n + 864e5 * (7 - o)
                            , c = Object(r.a)("lastShowSearchGuideTime");
                        console.log("lastShowSearchGuideTime: ", c),
                            console.log("mondayTime: ", i),
                            console.log("sundayTime: ", s),
                            console.log("task: ", e);
                        var l = e.chooseIndex
                            , p = e.datas
                            , u = p[l] && p[l].name;
                        "早餐" === u ? v.a.clickReport({
                            "moduleId": "getFood_icon_breakfast_pp"
                        }, {
                            "babelEventId": "other_task_breakfast_pp"
                        }) : "午餐" === u ? v.a.clickReport({
                            "moduleId": "getFood_icon_lunch_pp"
                        }, {
                            "babelEventId": "other_task_lunch_pp"
                        }) : "晚餐" === u && v.a.clickReport({
                            "moduleId": "getFood_icon_dinner_pp"
                        }, {
                            "babelEventId": "other_task_dinner_pp"
                        }),
                        (!c || c && c > s) && (Object(r.d)("lastShowSearchGuideTime", n),
                            $e = setTimeout(function () {
                                t.setState({
                                    "startGuide": !0
                                }, function () {
                                    et = setTimeout(function () {
                                        t.onCloseHomeGuide()
                                    }, 6e3)
                                })
                            }, 2e3))
                    }
                }, {
                    "key": "onUpdateTask",
                    "value": function onUpdateTask() {
                        this.getTaskList()
                    }
                }, {
                    "key": "preDefaultEvent",
                    "value": function preDefaultEvent(e) {
                        e.stopPropagation(),
                            e.preventDefault()
                    }
                }, {
                    "key": "onCloseHomeGuide",
                    "value": function onCloseHomeGuide() {
                        $e && clearTimeout($e),
                        et && clearTimeout(et),
                            this.setState({
                                "startGuide": !1
                            })
                    }
                }, {
                    "key": "render",
                    "value": function render() {
                        var e = this
                            , t = this.state
                            , a = t.indexStyle
                            , o = t.userHeadIcon
                            , i = t.shareTypeEnu
                            , r = t.petAppearance
                            , s = t.tempPetAppearance
                            , c = t.update
                            , l = t.dogFoodNumber
                            , p = t.intergral
                            , u = t.isGive
                            , d = t.foodCountDonwTime
                            , m = t.taskArr
                            , y = t.isOpenDogFoodLayer
                            , E = t.isOpenDogFoodPopLayer
                            , k = t.isShowShareImg
                            , w = t.helpPin
                            , D = t.showHelpFeed
                            , T = t.showHelpFeedLayer
                            , N = t.isShowConfirmLayer
                            , A = t.canStealNumber
                            , x = t.randomStealFood
                            , M = (t.isShowStealLayer,
                            t.degreeNumber)
                            , S = t.registerYear
                            , C = t.degreeStyle
                            , P = t.isOpenFoodPopLayerNoAnimation
                            , I = t.logoUrl
                            , O = t.shareImgName
                            , F = t.age
                            , R = t.isBackApp
                            , z = t.helpFeedData
                            , L = t.returnHomeParam
                            , J = t.isShowBottomBackApp
                            , Z = t.isLongScreen
                            , G = t.isShowLoading
                            , W = t.ishowHelpFeedNoAnimation
                            , Y = t.showLevelUpPop
                            , q = t.levelUpData
                            , K = t.isOpenLevelTip
                            , $ = t.needCountNumber
                            , ee = t.friendAge
                            , ae = t.isDogPengEmpty
                            , oe = t.isLogin
                            , ie = t.isApp
                            , re = t.friendListIsEnd
                            , ce = t.foodOptions
                            , pe = t.showChooseFood
                            , de = t.isHungry
                            , me = t.goldCoinStyle
                            , he = t.isShowGoldCoin
                            , fe = t.clickedCoin
                            , _e = t.isTeasingDog
                            , be = t.helpFeedStatus
                            , ye = t.todayFeedInfo
                            , je = t.loadingType
                            , ve = t.isDressing
                            , Ee = t.preShowDress
                            , ke = t.allDresses
                            , we = t.showIsSaveDress
                            , De = t.helpStatus
                            , Ne = t.needHelpUserNickName
                            , Ae = t.needHelpUserImage
                            , xe = t.petHelpCoin
                            , Me = t.hasShowNewDress
                            , Se = t.isThreeMealTime
                            , Pe = t.inviteSource
                            , Ie = t.invitefriendListData
                            , Oe = (t.hasRewardVideo,
                            t.sceneParams)
                            , Be = t.closeNewFishBox
                            , Ve = t.userSign
                            , Ge = t.isShowExactGift
                            , We = t.exactResBack
                            , qe = t.hasExactCouponAct
                            , Ke = t.exactCouponData
                            , $e = t.taskUnreceiveCount
                            , et = t.hideHelpFriendPop
                            , tt = t.announceTextStyle
                            , at = t.isCloseGames
                            , nt = t.detailInfo
                            , ot = t.screenHeight
                            , it = t.dogShadowStyle
                            , rt = t.waterFallGoodsNeedUpdateIndex
                            , st = null;
                        switch (z.myIndex) {
                            case 1:
                                st = "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/icon-champion.png&auth=ILO67fSHGlbbr2SyvowwXQFiTXZhPTQ2JmU9MTk3MDk1NjM4NSZ0PTE1NzA5NTYzODYmZj0yMl8xOTEwXzEyMThfMjg3JnI9RWcyOHlxbHZFNA==";
                                break;
                            case 2:
                                st = "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/icon-second-place.png&auth=G6TJtPquH7WE/LIJ/UlXaayDUT5hPTQ2JmU9MTk3MDk1NjU3NCZ0PTE1NzA5NTY1NzUmZj03MF8xOTEwXzEzNTFfMjgxJnI9WGpsVlhzU3kwYQ==";
                                break;
                            case 3:
                                st = "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/icon-third-place.png&auth=aZ6aJ3grwnMSi1XzqC+vZDc0zPBhPTQ2JmU9MTk3MDk1NjYxNiZ0PTE1NzA5NTY2MTcmZj02NF8xOTEwXzEwODZfMzU1JnI9U2FsRnV1TTAwSQ=="
                        }
                        var ct = fe ? "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/golden_after.png&auth=+fhqwmbaDo2YdD+01rtDy70Pje5hPTQ2JmU9MTk3NTQzMTAwNCZ0PTE1NzU0MzEwMDUmZj00N18xOTEyXzYxM180NTAmcj00c1ZWbnNVTUxJ" : "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/golden_before.png&auth=D+LjpijqJXhewQSt0WLZpsaLlvhhPTQ2JmU9MTk3NTQzMDkyNiZ0PTE1NzU0MzA5MjcmZj02Ml8xOTEyXzYxM18yNTkmcj1oUVhjem5iWGxD"
                            , lt = null;
                        lt = ve ? Le[s] : _e ? Ze[r] : ae ? !de || w && "not_feed" != be ? Le[r] : Je[r] : He[r];
                        var pt = j()({
                            "pop-layer": !0,
                            "pop-layer-no": E && P,
                            "pop-layer-open": E && !P,
                            "pop-layer-close": !E
                        })
                            , ut = j()({
                            "pop-layer": !0,
                            "pop-layer-no": T && W,
                            "pop-layer-open": T && !W,
                            "pop-layer-close": !T
                        })
                            , dt = j()({
                            "index": !0,
                            "friend_index": w,
                            "dressing_page": ve && Z,
                            "s_dressing_page": ve && !Z
                        })
                            , mt = j()({
                            "dress_pop": !0,
                            "moving": ve,
                            "long_screen_pop": Z,
                            "s_screen_pop": !Z
                        })
                            , ht = j()({
                            "index-right": !0,
                            "ds-none": w || ve || 0 == oe,
                            "index-right-new": !!Ve && Be
                        })
                            , ft = j()({
                            "top_contain": !0,
                            "top_contain_new": !!Ve && Be
                        })
                            , gt = j()({
                            "index_bg_friend": w,
                            "index-bg": !w,
                            "dressing_page": ve && Z,
                            "s_dressing_page": ve && !Z
                        })
                            , _t = ye.feedPetRewards.length;
                        return n.j.createElement(h.a, {
                            "className": "dog_page",
                            "style": {
                                "minHeight": ot + "px"
                            }
                        }, n.j.createElement(h.a, {
                            "className": "index_page"
                        }, n.j.createElement(_.a, {
                            "className": gt,
                            "src": w ? Ue.friendHomeBg : Ue.homeBg
                        }), nt.notice && n.j.createElement(h.a, {
                            "className": ve ? "announcement visiable_hidden" : "announcement"
                        }, n.j.createElement(f.a, {
                            "className": "announcement_title"
                        }, "公告"), n.j.createElement(h.a, {
                            "className": "announcement_text_contain"
                        }, n.j.createElement(h.a, {
                            "style": tt,
                            "className": "announcement_text_container"
                        }, n.j.createElement(h.a, {
                            "className": ve ? "announcement_text font_0" : "announcement_text"
                        }, nt.notice)))), n.j.createElement(h.a, {
                            "className": dt,
                            "style": w ? a : ""
                        }, he && n.j.createElement(_.a, {
                            "onClick": this.getGoldCoin.bind(this),
                            "className": "gold_coin",
                            "style": me,
                            "src": ct
                        }), n.j.createElement(h.a, {
                            "className": "index-middle"
                        }, !ve && n.j.createElement(h.a, {
                            "className": "cloud_mode"
                        }, n.j.createElement(_.a, {
                            "className": "cloud1",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/newhome/cloud1.png&auth=JNAyBKaPeoKoE1gMt95PXO0C+PphPTQ2JmU9MTk5MDE0NzAyMiZ0PTE1OTAxNDcwMjMmZj05MV8yMDA1XzQyMDZfMjE4JnI9TEJmSXVEM1J3VQ=="
                        }), n.j.createElement(_.a, {
                            "className": "cloud2",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/newhome/cloud2.png&auth=bqSUnHxUuH8Qgghz7mTjpjw7hJ9hPTQ2JmU9MTk5MDE0NzA0NyZ0PTE1OTAxNDcwNDgmZj00Nl8yMDA1Xzk4M182MTAmcj1LQ1UxV2NTQWx6"
                        })), n.j.createElement(h.a, {
                            "className": "middle-dog"
                        }, lt ? n.j.createElement(h.a, {
                            "className": "dog_img_contain"
                        }, n.j.createElement(h.a, {
                            "className": "dog_bottom_shadow",
                            "style": it
                        }), n.j.createElement(_.a, {
                            "onClick": this.teaseDog.bind(this),
                            "className": !ve && "butterfly" == r || ve && "butterfly" == s ? "dog-img dog-img-wider" : "dog-img",
                            "src": lt
                        }), n.j.createElement(_.a, {
                            "className": c ? "dog-img dog-img2" : "dog-img dog-img2 ds-none",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/update_bg.png&auth=vsPPQAdI9FTD83WdxwI4JA4K/SlhPTQ2JmU9MTk3MDY5ODk0MSZ0PTE1NzA2OTg5NDImZj0yMV8xOTEwXzk2NV81MzUmcj1NY3VUTkNrRWlK"
                        })) : null), !G && w && null !== A && n.j.createElement(h.a, {
                            "className": "steal_contain"
                        }, n.j.createElement(h.a, {
                            "className": "middle-steal qipao_anim",
                            "onClick": this.stealDogFoodNumber.bind(this, A)
                        }, n.j.createElement(_.a, {
                            "className": "middle-steal-bg",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/bone_ava.png&auth=6+ynpR668C5k8rUR+IBu8LK2DZphPTQ2JmU9MTk3NTQyNzk2NSZ0PTE1NzU0Mjc5NjYmZj00N18xOTEyXzYwN18yNSZyPXJDcHdMMlVQa3I="
                        }), n.j.createElement(f.a, {
                            "className": "middle-steal-text"
                        }, A, "g"), (A <= 5 || 0 === x) && n.j.createElement(_.a, {
                            "className": "unava_bone",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/bone_unava.png&auth=mz97hKZe1b35f6z98PVif6a/gRZhPTQ2JmU9MTk3NTQyODA0OCZ0PTE1NzU0MjgwNDkmZj02NV8xOTEyXzYwNl8zNDEmcj1qdklpb0NkM3By"
                        })), A > 5 && x > 0 && n.j.createElement(_.a, {
                            "class": "steal_dian",
                            "src": Ue.dian2
                        })), !G && !ve && n.j.createElement(h.a, {
                            "className": "middle-peng"
                        }, n.j.createElement(_.a, {
                            "className": "pen_shadow",
                            "src": "https://img14.360buyimg.com/imagetools/jfs/t1/156668/18/5747/517/5ffd9df6E4698e786/0804e2c83b2f2173.png"
                        }), n.j.createElement(_.a, {
                            "className": "dog-food-m",
                            "src": ae ? "https://img13.360buyimg.com/imagetools/jfs/t1/162808/5/2071/2756/5ffd1f8aEd1b9a00f/46dbfb0fa94a60b1.png" : "https://img14.360buyimg.com/imagetools/jfs/t1/152402/23/14583/3925/5ffc4fc5E8231cf1a/aaf00e247641e78a.png"
                        }), !w && n.j.createElement(H, {
                            "time": d,
                            "type": 0,
                            "onUpdateTime": this.updateTime.bind(this, 0)
                        }), n.j.createElement(_.a, {
                            "className": u ? "give-dog-food" : "give-dog-food ds-none",
                            "src": "https://img11.360buyimg.com/imagetools/jfs/t1/166765/19/2298/157485/5ffc4fc5Ecb5b61c8/b99bc45492041b19.png"
                        })), !w && !ve && n.j.createElement(h.a, {
                            "className": "three_meals_float"
                        }, n.j.createElement(se, {
                            "tasks": m,
                            "onUpdateTask": this.onUpdateTask.bind(this),
                            "onReceiveReward": this.onReceiveMealReward.bind(this)
                        }))), We && qe && !Ge && n.j.createElement(h.a, {
                            "className": "coupon_icon_contain",
                            "onClick": this.clickGiftIcon.bind(this)
                        }, n.j.createElement(_.a, {
                            "className": "wing wing_left",
                            "src": "https://img10.360buyimg.com/imagetools/jfs/t1/153884/39/4706/1741/5fa211f6Ebd4341aa/430abbae8588385f.png"
                        }), n.j.createElement(_.a, {
                            "className": "wing wing_right",
                            "src": "https://img10.360buyimg.com/imagetools/jfs/t1/153884/39/4706/1741/5fa211f6Ebd4341aa/430abbae8588385f.png"
                        }), n.j.createElement(_.a, {
                            "className": "coupon_pack",
                            "src": "https://img13.360buyimg.com/imagetools/jfs/t1/125965/18/16754/2671/5f9b8558Ec7293af5/95b846370add361a.png"
                        })), 1 == oe && !G && !ve && this.getTopContain(r, w, ee, F, C, M, p, K, $, ft), n.j.createElement(h.a, {
                            "className": w || 0 == oe || ve ? "index_left ds-none" : "index_left"
                        }, n.j.createElement(h.a, {
                            "className": "index_left_item",
                            "onClick": this.openShareImg.bind(this, r, 1)
                        }, n.j.createElement(_.a, {
                            "className": "share-icon",
                            "src": "https://img13.360buyimg.com/imagetools/jfs/t1/158169/17/2397/2399/5ff819a8E854fc875/d3c849060cc392e7.png"
                        }), n.j.createElement(_.a, {
                            "className": "share-text-icon",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/share_text_icon2.png&auth=vzOPSvmt81IKUwktC5jeIAtEpklhPTQ2JmU9MTk3NzY3NTQ0NiZ0PTE1Nzc2NzU0NDcmZj02N18xOTEyXzM4MjZfMTQ0JnI9TmJZak5CRExHbA=="
                        })), n.j.createElement(h.a, {
                            "className": Me ? "index_left_item" : "index_left_item mg_t56",
                            "onClick": this.openDressUp.bind(this)
                        }, n.j.createElement(_.a, {
                            "className": "dressup_icon",
                            "src": "https://img13.360buyimg.com/imagetools/jfs/t1/159101/18/2312/1835/5ff819a8Ef7b9df53/295303272a2eadfa.png"
                        }), n.j.createElement(_.a, {
                            "className": "text-icon-img",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/dress_up_text2.png&auth=fFOvqNLspKIDUe7cnaa0BxeKz/BhPTQ2JmU9MTk3NzY3NjI2NCZ0PTE1Nzc2NzYyNjUmZj00MV8xOTEyXzM4ODRfMzk4JnI9SXgzdkpibEZWWg=="
                        }), !Me && n.j.createElement(h.a, {
                            "className": "take_coins"
                        }, "new"))), !G && n.j.createElement(h.a, {
                            "className": ht
                        }, n.j.createElement(h.a, {
                            "className": "item",
                            "onClick": this.goHomeRule.bind(this)
                        }, "攻略"), n.j.createElement(h.a, {
                            "className": "item",
                            "onClick": this.goActions.bind(this)
                        }, "动态"), n.j.createElement(h.a, {
                            "className": at ? "games" : "games open"
                        }, at ? n.j.createElement(f.a, {
                            "onClick": function onClick() {
                                e.setState({
                                    "isCloseGames": !1
                                }),
                                    v.a.clickReport({
                                        "moduleId": "game"
                                    }, {
                                        "babelEventId": "game"
                                    })
                            }
                        }, "都在玩") : n.j.createElement(h.a, {
                            "className": "games_contain"
                        }, n.j.createElement(h.a, {
                            "onClick": function onClick() {
                                e.setState({
                                    "isCloseGames": !0
                                })
                            }
                        }, "收起", n.j.createElement(_.a, {
                            "className": "games_arrow",
                            "src": "https://img11.360buyimg.com/imagetools/jfs/t1/165069/35/1820/290/5ffd8887E0bd51004/13dbed5e522ded06.png"
                        })), n.j.createElement(h.a, {
                            "className": "game_item",
                            "onClick": this.goXXL.bind(this)
                        }, n.j.createElement(_.a, {
                            "className": "game_icon",
                            "src": "https://img12.360buyimg.com/imagetools/jfs/t1/168854/18/2340/1889/5ffd8887E51c3367c/907e7b8c37c745d4.png"
                        }), n.j.createElement(h.a, {
                            "className": "game_text"
                        }, "爱消除")), n.j.createElement(h.a, {
                            "className": "game_item",
                            "onClick": this.goWo.bind(this)
                        }, n.j.createElement(_.a, {
                            "className": "game_icon",
                            "src": "https://img14.360buyimg.com/imagetools/jfs/t1/168061/3/1990/2012/5ffd8887E236e5786/5241848914740bfb.png"
                        }), n.j.createElement(h.a, {
                            "className": "game_text"
                        }, "东东小窝"))))), !G && n.j.createElement(h.a, {
                            "className": w || ve || 0 == oe ? "index-bottom ds-none" : "index-bottom"
                        }, n.j.createElement(h.a, {
                            "className": "entrance_item",
                            "onClick": this.openHelpFeedLayer.bind(this, !1, !0)
                        }, n.j.createElement(_.a, {
                            "className": "help_feed_icon",
                            "src": "https://img13.360buyimg.com/imagetools/jfs/t1/171144/7/1622/2759/5ff819a8E5f50a039/bdb92bc88d4e4fb4.png"
                        }), n.j.createElement(_.a, {
                            "className": "text-icon-img",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/help_icon2.png&auth=VXZZBwv2SeZ9Y7MA16gXoCZ6K8VhPTQ2JmU9MTk3NzY3NjM1NCZ0PTE1Nzc2NzYzNTUmZj00Nl8xOTEyXzM4ODZfMjQ4JnI9a1Y2ZDFRdFhOeA=="
                        }), n.j.createElement(h.a, {
                            "className": "take_coins"
                        }, Se ? "抢狗粮" : "进入拿积分")), n.j.createElement(h.a, {
                            "className": "entrance_item",
                            "onClick": this.goDogRun.bind(this)
                        }, n.j.createElement(_.a, {
                            "className": "pet_run_icon",
                            "src": "https://img14.360buyimg.com/imagetools/jfs/t1/157080/9/2337/2956/5ff819a8Ebd7d1cfd/1232f525818d1c32.png"
                        }), n.j.createElement(_.a, {
                            "className": "text-icon-img",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/pet_run2.png&auth=dSC+grgVI4dWzNjNhBxmzTPbljphPTQ2JmU9MTk3NzY3NjMxMCZ0PTE1Nzc2NzYzMTEmZj03MF8xOTEyXzM4MjNfNDIxJnI9U2NZdGFFdjFZSQ=="
                        })), n.j.createElement(h.a, {
                            "className": "entrance_item",
                            "onClick": this.openDogFoodLayer.bind(this, !1, !0, null)
                        }, !!$e && n.j.createElement(f.a, {
                            "className": "unread-count-container"
                        }, n.j.createElement(f.a, {
                            "className": "unread-count"
                        }, $e)), n.j.createElement(_.a, {
                            "className": "earn_food_icon",
                            "src": "https://img13.360buyimg.com/imagetools/jfs/t1/170992/29/1683/2657/5ff819a8E3f7f1a34/b6eeaea95bd9575d.png"
                        }), n.j.createElement(_.a, {
                            "className": "text-icon-img",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/linggouliang_text2.png&auth=GmJWuT4f5bApEyRvVn5kX9xdp0VhPTQ2JmU9MTk3NzY3NzAxMSZ0PTE1Nzc2NzcwMTImZj03Ml8xOTEyXzExNTAzXzM5OCZyPW9RcVZYM3FFb00="
                        })), n.j.createElement(h.a, {
                            "className": "entrance_item",
                            "onClick": this.goToIntegral.bind(this)
                        }, n.j.createElement(_.a, {
                            "className": "exchange_icon",
                            "src": "https://img12.360buyimg.com/imagetools/jfs/t1/171277/15/1652/2764/5ff819a8E90b6295f/6d5b772829f13da3.png"
                        }), n.j.createElement(_.a, {
                            "className": "exchange-text-icon",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/inte_exchange2.png&auth=FStBxBpQkTWx2VGguIhZyVvPTKlhPTQ2JmU9MTk3NzY3NTUzMyZ0PTE1Nzc2NzU1MzQmZj02NF8xOTEyXzI3NTZfMzg1JnI9WnhYWDVCcTFCaw=="
                        }))), w ? n.j.createElement(h.a, {
                            "className": "back-home"
                        }, n.j.createElement(_.a, {
                            "className": "back-home-icon",
                            "onClick": this.backHome.bind(this),
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/backhome_new.png&auth=T5UVeabkye7ckU4ej2LzrwlgA2ZhPTQ2JmU9MTk3MTY0OTUxNCZ0PTE1NzE2NDk1MTUmZj02OV8xOTEwXzE4NzVfMTg1JnI9UGNMRzNlTkt6Vg=="
                        })) : null, !G && n.j.createElement(h.a, {
                            "className": 0 == oe || ve ? "dog-food ds-none" : "dog-food",
                            "onClick": this.clickDogFoodIcon.bind(this)
                        }, n.j.createElement(h.a, {
                            "className": "dog-food-box"
                        }, n.j.createElement(_.a, {
                            "className": "dog-food-icon",
                            "src": "https://img10.360buyimg.com/imagetools/jfs/t1/164435/14/1626/2849/5ff819a8Ef8b85019/66c38e6f624490e6.png"
                        }), w ? n.j.createElement(_.a, {
                            "className": "dog-food-ta",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/help_dog_icon_latest.png&auth=jwpStuhdbxO/cIIC/+hZcTRuIfFhPTQ2JmU9MTk3MTczMDM0OCZ0PTE1NzE3MzAzNDkmZj02OF8xOTEwXzE5NzJfOTAmcj1XZHg3WEptSWtr"
                        }) : n.j.createElement(_.a, {
                            "className": "dog-food-ta2",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/dog_food_txt.png&auth=hiTf111fHYJdeMVy9wqLmc/H1N9hPTQ2JmU9MTk3NjY2MTk0OCZ0PTE1NzY2NjE5NDkmZj00Nl8xOTEyXzI2MDRfNDk3JnI9M3JkOGxsV1FMWA=="
                        }), w ? null : n.j.createElement(h.a, {
                            "className": "dog-food-number2"
                        }, l, "g"))), this.state.showFingerGuide && n.j.createElement(h.a, {
                            "className": "finger_guide_container"
                        }, n.j.createElement(_.a, {
                            "class": "finger_guide",
                            "style": this.state.fingerGuidePosition,
                            "src": Ue.dian2
                        }))), Ve && Ve.records && We && !Ge && Be && n.j.createElement(te, {
                            "hasAnnouncement": !ve && nt.notice,
                            "userSign": Ve,
                            "onOpenDogFoodLayer": function onOpenDogFoodLayer() {
                                e.openDogFoodLayer(!0)
                            },
                            "onUpdateEnterHome": function onUpdateEnterHome() {
                                e.goEnterHome()
                            }
                        }), n.j.createElement(le, {
                            "startGuide": this.state.startGuide,
                            "onCloseHomeGuide": this.onCloseHomeGuide.bind(this)
                        }), !w && !ve && n.j.createElement(h.a, {
                            "className": "bean_exchange_wrap"
                        }, n.j.createElement(Te, {
                            "intergral": p,
                            "router": this.$router,
                            "onShowMission": function onShowMission() {
                                return e.openDogFoodLayer()
                            },
                            "onRefreshHome": function onRefreshHome() {
                                return e.goEnterHome()
                            }
                        })), !w && !ve && n.j.createElement(h.a, {
                            "className": "super_discount_wrap"
                        }, n.j.createElement(Ce, {
                            "intergral": p,
                            "onShowMission": function onShowMission() {
                                return e.openDogFoodLayer()
                            },
                            "onCloseLoading": this.closeLoading.bind(this, "super")
                        })), !w && n.j.createElement(ge, {
                            "ref": this.bindWaterRef,
                            "needUpdateIndex": rt,
                            "showContent": !ve,
                            "onShowMission": function onShowMission() {
                                return e.openDogFoodLayer()
                            },
                            "coin": p,
                            "onCloseLoading": this.closeLoading.bind(this, "water")
                        }), we && n.j.createElement(h.a, {
                            "className": "pop_layer"
                        }, n.j.createElement(h.a, {
                            "className": "pop_out_bg"
                        }, n.j.createElement(h.a, {
                            "className": "pop_inner"
                        }, n.j.createElement(h.a, {
                            "className": "pop_content"
                        }, "是否保存当前装扮"), n.j.createElement(h.a, {
                            "className": "pop_btns"
                        }, n.j.createElement(h.a, {
                            "className": "pop_btn left_btn",
                            "onClick": this.closeDressDir.bind(this)
                        }, "直接关闭"), n.j.createElement(h.a, {
                            "className": "pop_btn right_btn",
                            "onClick": this.dressUp.bind(this)
                        }, "保存并关闭"))))), n.j.createElement(ue, {
                            "preShowDress": Ee,
                            "isDressing": ve,
                            "className": mt,
                            "clickDressLayer": this.clickDressLayer.bind(this),
                            "allDresses": ke,
                            "isLongScreen": Z,
                            "petDressNames": Xe,
                            "staticAppearance": Qe,
                            "newDressTag": "中秋限定",
                            "dressUp": this.dressUp.bind(this),
                            "onChooseDress": function onChooseDress(t) {
                                e.chooseDress(t)
                            }
                        }), !et && n.j.createElement(V, {
                            "helpType": Pe,
                            "invitefriendListData": Ie,
                            "helpStatus": De,
                            "petHelpCoin": xe,
                            "needHelpUserImage": Ae,
                            "needHelpUserNickName": Ne,
                            "onHelpFriend": this.helpFriend.bind(this),
                            "onCloseHelpFriend": function onCloseHelpFriend() {
                                e.setState({
                                    "hideHelpFriendPop": !0
                                })
                            }
                        }), R && !w && n.j.createElement(h.a, {
                            "className": "open-help-layer",
                            "onTouchMove": this.preDefaultEvent.bind(this)
                        }, n.j.createElement(h.a, {
                            "className": "masker"
                        }), n.j.createElement(h.a, {
                            "className": "open-help open-help2"
                        }, 0 == oe && ie ? null : n.j.createElement(_.a, {
                            "className": "close-btn",
                            "onClick": this.closeBackAppLayer.bind(this),
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/close-btn-1.png&auth=5F8tZlxUv9fVM0zvK3WEUevdv1lhPTQ2JmU9MTk3MTY2MDQ0MyZ0PTE1NzE2NjA0NDQmZj02OV8xOTEwXzE4OTBfMzY1JnI9MnZpN3UzQ3RySA=="
                        }), n.j.createElement(h.a, {
                            "className": "open-help-box open-help-box2"
                        }, n.j.createElement(h.a, {
                            "className": "open-help-text open-help-text2"
                        }, 0 == oe && ie ? "养汪汪领狗粮，攒积分兑好礼~" : "帮帮忙吧！汪的粮全靠你了！"), n.j.createElement(h.a, {
                            "className": "layer-btn"
                        }, this.getBackAppLoginView(oe, ie, L))))), J && !w && !Re && n.j.createElement(h.a, {
                            "className": "bottom-app-layer"
                        }, n.j.createElement(h.a, {
                            "className": "bottom-close-btn",
                            "onClick": this.closeBackAppBottomLayer.bind(this)
                        }, n.j.createElement(_.a, {
                            "className": "bottom-close-img",
                            "src": v.a.closeIcon
                        })), n.j.createElement(h.a, {
                            "className": "bottom-text"
                        }, "去App玩耍更开心哦～"), Fe ? n.j.createElement(g.a, {
                            "className": "bottom-btn-text",
                            "openType": "launchApp",
                            "hoverClass": "none",
                            "appParameter": L,
                            "onError": this.closeBackAppLayer.bind(this)
                        }, "打开京东app") : n.j.createElement(g.a, {
                            "className": "bottom-btn-text",
                            "hoverClass": "none",
                            "onClick": this.openAppJdDog.bind(this)
                        }, "打开京东app")), Y && n.j.createElement(h.a, {
                            "className": "level_up_layer",
                            "onClick": this.acceptLevelUp.bind(this)
                        }, n.j.createElement(h.a, {
                            "className": "level_up_bg",
                            "onClick": function onClick(e) {
                                e.stopPropagation()
                            }
                        }, n.j.createElement(_.a, {
                            "className": "level_up_light",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/upgrade-light.png&auth=aLhpqRrsj7gwu5uu+KZgkDWZxIhhPTQ2JmU9MTk3NjE1MzI4OSZ0PTE1NzYxNTMyOTAmZj02OF8xOTEyXzE3MzlfNDg4JnI9TUk3bU5ld0FoSg=="
                        }), n.j.createElement(h.a, {
                            "className": "level_up_contain"
                        }, n.j.createElement(_.a, {
                            "className": "level_up_title",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/upgrade_top_img2.png&auth=OieYwTm7KN6X6cFkTzWoTQQvcgxhPTQ2JmU9MTk3NjQ4Mjc4NiZ0PTE1NzY0ODI3ODcmZj00OF8xOTEyXzIzMzdfMTg4JnI9MmRWRDZ1V1p6OA=="
                        }), n.j.createElement(h.a, {
                            "className": "level_up_text"
                        }, "恭喜升级至Lv", q.petLevel), n.j.createElement(h.a, {
                            "className": "level_up_coins"
                        }, "奖励给您", q.petCoin, "积分"), n.j.createElement(h.a, {
                            "className": "level_up_speed"
                        }, "宠物速度：", q.petSpeed, "km/h"), n.j.createElement(h.a, {
                            "className": "accept-btn",
                            "onClick": this.acceptLevelUp.bind(this)
                        }, "开心收下")))), !G && n.j.createElement(h.a, {
                            "className": y ? "layer-wrap" : "layer-wrap ds-none",
                            "onTouchMove": this.preDefaultEvent.bind(this)
                        }, n.j.createElement(h.a, {
                            "className": "masker",
                            "onClick": this.closeDogFodLayer.bind(this)
                        }), n.j.createElement(h.a, {
                            "className": pt,
                            "style": this.state.layerStyle
                        }, n.j.createElement(h.a, {
                            "className": "title-icon"
                        }, n.j.createElement(_.a, {
                            "className": "title-icon-img",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/dog-food-list-icon.png&auth=5C7tOl3X8bIQ59fj8j7oZZTt+nBhPTQ2JmU9MTk3MDc3Mzk0MyZ0PTE1NzA3NzM5NDQmZj01MF8xOTEwXzEwMzhfMjI3JnI9R2dTTk5kV0xLYw=="
                        })), n.j.createElement(h.a, {
                            "className": "sub-title"
                        }, "做任务得狗粮，喂养宠物可以获得更多积分哦～"), n.j.createElement(h.a, {
                            "className": "close-btn",
                            "onClick": this.closeDogFodLayer.bind(this)
                        }, n.j.createElement(_.a, {
                            "className": "close-icon-img",
                            "src": v.a.closeIcon
                        })), n.j.createElement(b.a, {
                            "className": "scrollview",
                            "scrollY": !0,
                            "style": this.state.scrollStyle
                        }, m.length > 0 ? m.map(function (t, a) {
                            return n.j.createElement(h.a, {
                                "className": "scroll-view-item",
                                "style": {
                                    "backgroundColor": t.bgColor
                                },
                                "taroKey": String(a)
                            }, n.j.createElement(_.a, {
                                "className": "task-icon",
                                "src": t.iconImgUrl
                            }), e.getTaskItem(t, a), e.getTaskBtnText(t, d))
                        }) : [1, 2, 3, 4, 5].map(function (e, t) {
                            return n.j.createElement(h.a, {
                                "className": "scroll-view-item",
                                "style": "background:#fff",
                                "key": String(t),
                                "taroKey": String(t)
                            }, n.j.createElement(h.a, {
                                "className": "task-icon task-icon-skeleton"
                            }), n.j.createElement(h.a, {
                                "className": "task-text"
                            }, n.j.createElement(h.a, {
                                "className": "task-title task-title-skeleton"
                            }), n.j.createElement(h.a, {
                                "className": "task-sub-title task-sub-title-skeleton"
                            })), n.j.createElement(h.a, {
                                "className": "task-btn task-btn-skeleton"
                            }))
                        }), n.j.createElement(h.a, {
                            "className": "bottom-height"
                        })))), !G && n.j.createElement(h.a, {
                            "className": D ? "layer-wrap" : "layer-wrap ds-none",
                            "onTouchMove": this.preDefaultEvent.bind(this)
                        }, n.j.createElement(h.a, {
                            "className": "masker",
                            "onClick": this.closeHelpFeedLayer.bind(this)
                        }), n.j.createElement(h.a, {
                            "className": ut,
                            "style": this.state.layerStyle
                        }, n.j.createElement(h.a, {
                            "className": "title-icon"
                        }, n.j.createElement(_.a, {
                            "className": "title-icon-img",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/feed_pop_icon.png&auth=xALBK8a399A6JbebHQaJR38V+wFhPTQ2JmU9MTk3MDg2NDQxMyZ0PTE1NzA4NjQ0MTQmZj00Ml8xOTEwXzExMzNfMjExJnI9NzVTeGt0ekhZbg=="
                        })), n.j.createElement(h.a, {
                            "className": "sub-title"
                        }, Se ? "三餐时间拜访好友小家，会有额外收获哦～" : "好友藏的私房钱泄漏啦，快去看看哦～"), n.j.createElement(h.a, {
                            "className": "invite_contain"
                        }, n.j.createElement(h.a, null, n.j.createElement(h.a, {
                            "className": "invite_top_line"
                        }, "邀好友 抢狗粮"), n.j.createElement(h.a, {
                            "className": "invite_sub_line"
                        }, "邀请新伙伴加入，可得", n.j.createElement(f.a, {
                            "className": "invite_foods"
                        }, Ie.inviteRewardCount), "g狗粮哦～")), n.j.createElement(h.a, {
                            "className": "unreceive" == Ie.inviteState ? "go_invite_friends col_green" : "go_invite_friends",
                            "onClick": this.goInvitePage.bind(this, Ie.inviteState)
                        }, "unreceive" == Ie.inviteState ? "领取" : "chance_full" == Ie.inviteState ? "已完成" : "去邀请")), n.j.createElement(h.a, {
                            "className": "close-btn",
                            "onClick": this.closeHelpFeedLayer.bind(this)
                        }, n.j.createElement(_.a, {
                            "className": "close-icon-img",
                            "src": v.a.closeIcon
                        })), n.j.createElement(b.a, {
                            "className": "scrollview",
                            "scrollY": !0,
                            "style": this.state.scrollStyle,
                            "onScrollToLower": this.getFriends.bind(this),
                            "onScroll": this.friendsScroll.bind(this),
                            "lowerThreshold": "880"
                        }, n.j.createElement(h.a, {
                            "className": "help-feed-item help-feed-my-info"
                        }, st && n.j.createElement(_.a, {
                            "className": "order-icon",
                            "src": st
                        }), !st && n.j.createElement(h.a, {
                            "className": "order-num"
                        }, z.myIndex), n.j.createElement(_.a, {
                            "className": "head-icon",
                            "src": z.myHeadIcon
                        }), n.j.createElement(h.a, null, n.j.createElement(h.a, {
                            "className": "help-feed-item-title myself"
                        }, z.myNickName, "（我自己）"), n.j.createElement(h.a, {
                            "className": "help-feed-sub-title"
                        }, n.j.createElement(_.a, {
                            "className": "points-icon",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/points-icon.png&auth=hUmj0GBNif71svU/d80Mx0lMczFhPTQ2JmU9MTk3MDc5MjI4MCZ0PTE1NzA3OTIyODEmZj02Nl8xOTEwXzkzOV80NzQmcj1qVlpiNG1UMUtq"
                        }), n.j.createElement(h.a, {
                            "className": "points-num"
                        }, z.myPoints)))), this.friendsListView(z.friends, "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/points-icon.png&auth=hUmj0GBNif71svU/d80Mx0lMczFhPTQ2JmU9MTk3MDc5MjI4MCZ0PTE1NzA3OTIyODEmZj02Nl8xOTEwXzkzOV80NzQmcj1qVlpiNG1UMUtq"), re && n.j.createElement(h.a, {
                            "className": "no_more"
                        }, "没有更多了"), n.j.createElement(h.a, {
                            "className": "seize_ele"
                        })))), w && n.j.createElement(h.a, {
                            "className": N ? "open-help-layer" : "open-help-layer ds-none",
                            "onClick": this.closeHelpGiveDogFood.bind(this, l, p, !1),
                            "onTouchMove": this.preDefaultEvent.bind(this)
                        }, n.j.createElement(h.a, {
                            "className": "masker"
                        }), n.j.createElement(h.a, {
                            "className": "open-help"
                        }, n.j.createElement(h.a, {
                            "className": "open-help-box",
                            "onClick": function onClick(e) {
                                e.stopPropagation()
                            }
                        }, n.j.createElement(_.a, {
                            "className": "dog-food-icon",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/dog-food-layer-icon.png&auth=L84Plb1S4gwpX89+ZnmR45v0xOBhPTQ2JmU9MTk3MTAzNDQ3OSZ0PTE1NzEwMzQ0ODAmZj02NV8xOTEwXzExNTlfODAmcj1DVFQ4TXQ4U2Fm"
                        }), l >= 10 ? n.j.createElement(h.a, {
                            "className": "open-help-text"
                        }, "您现存", l, "g狗粮，帮助好友喂养需要消耗10g狗粮哦～") : n.j.createElement(h.a, {
                            "className": "open-help-text"
                        }, "您现存", l, "g狗粮，不足10g，无法帮助好友喂养～"), n.j.createElement(h.a, {
                            "className": "layer-btn"
                        }, n.j.createElement(h.a, {
                            "className": "cancel-btn",
                            "onClick": this.closeHelpGiveDogFood.bind(this, l, p, !1)
                        }, n.j.createElement(h.a, {
                            "className": "cancal-btn-text"
                        }, "取消")), n.j.createElement(h.a, {
                            "className": "confirm-btn",
                            "onClick": this.closeHelpGiveDogFood.bind(this, l, p, !0)
                        }, n.j.createElement(h.a, {
                            "className": "confirm-btn-text"
                        }, "确定")))))), !1, pe && n.j.createElement(h.a, {
                            "className": "open-help-layer",
                            "onTouchMove": this.preDefaultEvent.bind(this)
                        }, n.j.createElement(h.a, {
                            "className": "masker",
                            "onClick": function onClick() {
                                e.setState({
                                    "showChooseFood": !1
                                })
                            }
                        }), n.j.createElement(h.a, {
                            "className": "give_food_selection_pop"
                        }, n.j.createElement(_.a, {
                            "className": "close-btn",
                            "onClick": function onClick() {
                                e.setState({
                                    "showChooseFood": !1
                                })
                            },
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/close-btn-1.png&auth=5F8tZlxUv9fVM0zvK3WEUevdv1lhPTQ2JmU9MTk3MTY2MDQ0MyZ0PTE1NzE2NjA0NDQmZj02OV8xOTEwXzE4OTBfMzY1JnI9MnZpN3UzQ3RySA=="
                        }), n.j.createElement(h.a, {
                            "className": "food_selection_content"
                        }, ye.feedPetRewards && ye.feedPetRewards.length > 0 && n.j.createElement(h.a, {
                            "className": "present_contain"
                        }, n.j.createElement(h.a, {
                            "className": "left_title"
                        }, n.j.createElement(h.a, {
                            "className": "main_title"
                        }, "喂食送积分"), n.j.createElement(h.a, {
                            "className": "sub_title"
                        }, "今日已喂食", ye.feedCount, "次")), n.j.createElement(h.a, {
                            "className": "right_contain"
                        }, n.j.createElement(h.a, {
                            "className": "progress"
                        }, n.j.createElement(h.a, {
                            "className": "inner_progress",
                            "style": ye.feedTimesWidth
                        }), ye.feedPetRewards.map(function (e, t) {
                            var a = {
                                "left": (t + 1) / _t * 100 + "%"
                            };
                            return n.j.createElement(h.a, {
                                "key": String(t),
                                "className": e.received ? "icon received" : "icon",
                                "style": a
                            }, n.j.createElement(h.a, {
                                "className": "counts"
                            }, e.petCoin, "积分"), n.j.createElement(h.a, {
                                "className": "times"
                            }, e.feedCount, "次"))
                        })))), n.j.createElement(h.a, {
                            "className": "food_selection_title"
                        }, "请选择狗粮克数"), n.j.createElement(h.a, {
                            "className": "food_options"
                        }, ce.map(function (t, a) {
                            var o = "food_option_item";
                            return a > 1 && (o += " mg_t20"),
                            t.canChoose || (o += " unable_option"),
                                n.j.createElement(h.a, {
                                    "key": String(a),
                                    "taroKey": a,
                                    "className": o,
                                    "onClick": e.chooseFeedNum.bind(e, a)
                                }, n.j.createElement(_.a, {
                                    "className": "option_item_icon",
                                    "src": t.icon
                                }), n.j.createElement(f.a, {
                                    "className": "option_item_text"
                                }, "消耗", t.foods, "g"), t.choosed && n.j.createElement(h.a, {
                                    "className": "choosed_food"
                                }, n.j.createElement(_.a, {
                                    "className": "choosed_icon",
                                    "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAe1BMVEUAAAD9//7///////////////////////////////////////////////////////////////////8BvnH////R8+Uix4QKwXY9zpMQwnrr+vRw2q/h9+6Z5cbJ8eCE37p33LNe1aVa1KOg5sqT48On6M5o2au/7ttM0ZuJbphQAAAAE3RSTlMA+/TmXgns28u3r3xmTjcbEY+QhxTFZAAAAaJJREFUSMeMkttygjAARAnhjqA2JwkFKpdW//8T21EGEQR63pg5S9gszgI/O8dhIEQQxufMd3Y4eYnLBDfxThu6n7oscNPVYw4SAN30hbHWFH2jAZCHt/oxutuVURNMpQGi49LPJVB3akFXAzKf+54A0Vr1BtsKEN7MB8pCrVCUwEsiF6CNWsVoEPmkrwRt1QZWg3w2j6A0ahNTQjTeP4hC7VAIGPbwJbRqlxbkY/MUarsfsDWk9//NhU79gw7c02MCvfnm8XT9GCOBal3/vApxHSIVJH+VXTDrvgb4Ga4WXN/JQO/4lM9vypwPaHZ86uG5gbMTQz9xbpfLbeY/O/YQOyFMVq4Avmf+17g2hE7w0rlmTCx9ZSBwBExmLhkS73xlQfxWWgYpAAIxDHyDIIgKngT9/wv3UhhIe5k9J7Bt06RBePdiBB5CfOl4Cnc1fH2JoqvSYgSeomkrjAlPWzcGB6PjGRzSgNHxSAPxBSPwiG+S9/mVRHnIe16g/w5XYIHkiloT0DZjjcxapTZja/c2UHxk+VD0seuD3Z8O/jjR588CfFyKKAkecOEAAAAASUVORK5CYII="
                                })), !t.canChoose && n.j.createElement(h.a, {
                                    "className": "unable_food_mask"
                                }, "ddd"))
                        })), n.j.createElement(h.a, {
                            "className": "submit_btn",
                            "onClick": this.submitFeed.bind(this)
                        }, "喂养")))), k && !Re && !ze && n.j.createElement(U, {
                            "logoUrl": I,
                            "name": O,
                            "registerYear": S,
                            "onCloseShareLayer": this.closeShareLayer.bind(this)
                        }), k && (Re || ze) && n.j.createElement(Q.a, {
                            "name": O,
                            "shareTypeEnu": i,
                            "userAvatar": o,
                            "scene": Oe,
                            "onCloseShareLayer": this.closeShareLayer.bind(this)
                        }), We && !Ge && n.j.createElement(X, {
                            "closeNewFishBox": Be,
                            "onCloseNewFishBox": this.closeNewFishBoxFuc.bind(this)
                        }), !1, We && Ge && n.j.createElement(ne, {
                            "reqHeader": Ye,
                            "exactCouponData": Ke,
                            "onGoLogin": this.goLogin.bind(this),
                            "onCloseExactGift": this.closeExactGift.bind(this)
                        }), !1), G && n.j.createElement(B.a, {
                            "isLongScreen": Z,
                            "type": je,
                            "onCloseLoading": this.closeLoading.bind(this, "imgs")
                        }), v.a.isInMicroMessage() && n.j.createElement(h.a, {
                            "className": "masker_guide",
                            "onTouchMove": this.preDefaultEvent.bind(this)
                        }, "请移步至【京东app】参与活动"))
                    }
                }]),
                Index
        }()
}
    , , , , function (e, t, a) {
        "use strict";
        var n = a(206)
            , o = a(34)
            , i = a(38);
        var r, s = function codeDefense() {
            var e = new Image;
            Object.defineProperty(e, "id", {
                "get": function get() {
                    window.location.href = "https://m.jd.com"
                }
            }),
                console.log(e)
        };

        function _defineProperty(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                "value": a,
                "enumerable": !0,
                "configurable": !0,
                "writable": !0
            }) : e[t] = a,
                e
        }

        var c, l = null;
        l = a(55),
            window.location.href.indexOf("showVconsole") > -1 ? new (a(56)) : s();
        var p = {
            "0": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAtCAMAAADx0TliAAACRlBMVEUAAAD/VAD/HgDyVgDnMAD8cgD0VADtRgD/gADyUgDpOgD7awDnNQDnMgDmMAD5agD/gADxTgDuRQD4agD/gQD3ZADmMAD/fgDnMgD/fAD1XwDwUAD/fAD8dgDoNQDzWAD4aADvSADqPAD7cwD0WQDuRwDzWADyWADyVwD0WgDqOQD0XQD1YQDmMADqQAD/ggD+egDxSwD3YwD9eQD7awDxUAD8cwDsMADzWQDvTwDtRAD4bADqPAD7cwD3ZgDuRwDqPwD6bwDpPAD/gQD1XgDwUQD/fgDnMgD9eADoOADyVgD/fwD5awD4XwDrPwD8cAD5aQDoLwD//vH///////v//vT//vb//vj//vrlMAD5bQH/gAD2ZQDvTQH4aQDyWADxVADsQwD0XgDnMwDuSgD1YgDwUQHsRgHtSADrPwDpOwDqUif6cQDzWwDoNwD5r4D+fQD9egD+9vH//O3/9eH+6Mr/zZT8u4L8dwD/+/f86+b84tf+7dL82cj1oH/4o2/7m0r/mDD9iR/pPgv7eAn8dAD98Ov++Oj96N/+8dv73NL94Mr+4cD7z7D6w6L7x6D1rJf5tpT0p5H7vo/3rY36t4z4rIX+vHj8tHf4qXfylHb8s3H/uWzwhWn4nWb2lWD4mlz/rFT3kFPygFDtcU/xeEf5iz3zdjrxaSjrTx/rShD9gw7/+ur/8Nj60L/92735y7j92LH916/2p4j1nnn3oW70lGv7rWr0gkj6kT/3hTn+lSz4giz9jSP2dyHwXxn2chj6exJpTKm0AAAAUnRSTlMABQN/Uw8I+YB5LBgP2rCddGtF+vj19OPj29rax8XDwr+/tbSqnZmPiXt3dmxpXFtXTktBPDYjIB/y7+rm5N7e2djIura2pp6RkYV6d2ZmZFxMqYq9/QAAAx5JREFUOMuVlGdf00AcgANWUAREHGxUlrK34t57l1DamKRJmu5By94bRZC9ZE+Z7r3HN/MuvaQUygufvrqnT/+5XH4N9v/sSr+1AxCU7bNVsT0o7KHIvkvpXp6aoH3gy6bZiZGJ2SbYhWRsvlCk3d5UXip3Ulr+3W63X91w0WMhjrVy+TpKytccjsjtbtsJc/yslbtT1uyojFq/sdjK5pfyjdQ2V1ZedzUZba1l8s08bW1ryxEb7zOWEbknxi2WKDG6Z/lbKvp3FW9d0ZNWiyUbRReICmRfNBIE0VgiVc8IIhbdPkGIgz4TkHHXKILY6zyG23SjeNcETZ/aTROu0/hK0/eF6BA9IE6n6b25YF0hRRU0vVuI9pPi/f8gSaBSyEXXKZDkWeG0SRLt9DFJklngMZI0FEhpSW8Q5Wh/gVUB4LVWS3rB0drOApE/Wm0eUHe0i0j0cFw4BgjnuqToG8dlAZXMzSAxxHGXYXSQ65GiOY5LASrROoVEkdWaAKM464AUzVityUBtUzcoFM5IrT4KoyPqIpQoChrU6kQhGlU4AdFNFClERtXqbTBiGpAYZhhhUhzTJ0UfGQZGO5kpYVmoGGKYBGHjTLcUTTPMThjppguddOt0V2AUoesqFJnT6WC0h/qCRB1FRcDoBNUpRUsUtQeoYGoZiWKKorzAY6F0VcJaqcQLf1N8Joj8eaoKLJWAZZ4PBqP5JbgQTDHP83kYwNdQAwTU9QZDPIYdNgwrEXidwcCDBwykvg/HcfjLGoPe1y9TT7XjAsAM6vXnMEgSO48jPrHsSV/2Ay7xnGXjhciP1RcjVwUkO6/EAfnw80jPsmmYwHnje2Rx/M3gK2ciUG80+vo7o7vGVTQKhChxDlo1GmPEf/BpU32+J8ZMJlMwhkiztXR4aOqMJtNFTCLGZq7e1LSv2GymXFfkH6Ax12xoOlY0NtsNbB3HQzUtvfi6BO9v0Wg00V6YWxWgUpl7xWtW95s1KpUm2h9zxydQBbR5YXJscsGsErjm4W0uCwWVSiLgAeYJb1ngAVQcCJR5Y1vh4ydLTUqV+blv+B828ZWsWGiwWAAAAABJRU5ErkJggg==",
            "1": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAtCAMAAACK9fuuAAAAvVBMVEUAAAD0VwDqPADvXwDmMQD9dwD/gQD3YwD/fgD2YQD/ewD/gQD1ZAD/gQD/gAD2ZQD+fQDnMgD3ZgD/gQDnMgD/gQDnMQD//fD///////v//vTlMAD//vf/fwD3ZQD5bAD8dgDwTwDyVwDqPgD0YAD0XADtSQDsRADoOQDnNQD6cQDrTBLpQxL3cBH1aBHyYBH+58nwWRLtUxL/+ur7tHn5hCz+jiP/8tz/16f+1Kb/xIT+sGL+nD/6jDb+hQ+Ve46AAAAAF3RSTlMAISIH5OzjoYZDOvbw6syvqmtkX1ZJSfmJ1/YAAAD7SURBVDjLrc1pU8IwEIDh1HKI9x0lJtm26RUvFMHb//+zrEqybYAyGXj3084zs0s2Uri9y2f1zh073edYr0E7B5xPX+l/ldYoOOL8+31MEWvPgPOPF2rjAPZiF+BzRGsBYhembwgOAozpUtSaOmmtDco5lFJalCtx9Py1GCuZSHm3CIWYiN8Qq8XgoRDLkfSF2OufqAqHf0OVUsQ2GIQkUPdDk0FbkCKmaeqDMWIcxy4+XJs8MUKMosgLH69MnpghZlnm4lML5oh5njdxqxWTG4tJkszhpckTC8SiKFy8bcESsSxLH2SIjLEmhgwziB3XrUOczjpoF2StfgA860j2CezqMwAAAABJRU5ErkJggg==",
            "2": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAtCAMAAADx0TliAAAB11BMVEUAAADnMAD6ZwDqOgDzWQDtRAD8dQD/fgDmMAD/fwDpMAD7cAD+fAD/gAD5aAD5bwD2WwD0XQD/fgDlMAD5bADwUgDsQwD1YQD+fAD1XQDwUQD6bgD5aADuSwDvTgDtRQD4aAD5aAD5aQD/fwDxUgDrQQD/ggD/fwDzVAD5ZwD5aADtQgDyVgDyUwD/fgDzSAD/cQD5bQDxUgD/gADzVgD3aAD3ZgDwTwD/gQDzXADrQQD/gAD1XgDtSAD7dAD4YQD/gAD1aAD//vH///////3/fwD//vPlMAD//vfrQQD//vn5agDyk3rtSADxf1PwUQD7cgD5bQD2YQDvTQD+fADzXADyVgDnNADzmn/uUQ/3ZQH9egD/+ef839D0nX/8dwHpPAD/++3/683+27nylHr6ehXqPwDoOQD++fL/79X8q2bvVxTyYBL+gQb/9uL96Nb73Mz70b78y6n+zpz/uGv2lF7/rFb8o1P6mlD/p0v4iz/rYj36jDL+ky75gCT1bhzsSQv+8+n96dz72Mj61cX+4cD/26/906j6xKj7w5z5tpP5r4H7uH3zmX34p3f/vnb6rHX6rnTzjmb/s2L9o1H+oED0fT//mjHzdDDtXyrybSn2eCX/kSDdBxW1AAAAQnRSTlMAfwd//nD+9XcyLfqjgkEqEg76+fT06ejl2tfTzbaqpZWMgnh1c2leXlxSUUQvIR4V5+XPzMa+vrKvnJqSkYtpQjGV1iu2AAACRUlEQVQ4y63Qd1vaQBzAcUTKUEBwV611a+vs3gvZB80OkoggllEE96jb7r33eLG9PCS5IMd/fvPc85Dn9+Fyia4ky2CvzdY7cFevq5Bz4KrJI1e4YBvDEIsVCm31NxxHyJi1OPm39fXj2sbPgkeq1VJiButZD+v5vvrQVWz6xRZErEmr9CaWLawlXdqSeywrtk5okChuyJugpr+JYtyqQXERDZHai8eNdUgZjbMYlYwbydsI1ZILLkybJNmuRcqRSnacI8la9O0bqSQ8w8vcbopMbc6hU5EUhQ51jnq+8C4FKIoCgAI5Ve1T4KyKOkAuBQBo77FP1HU3glUF7QJwRkVdAHbJXrzpAY8UtA00O+m7Oi6rf+kWVLQvCPd02FqEz8qrCgKtx5o7NC29n1f6BDR9EmscLfRfl7fYJ5q+iUXXOG5FNq4DjrPjTJ+B2/bKveY47NNGDIb8Ipz74TV7YDAMYcxoE8+v+CUDe8vzFzFm/DzPf/DLLeZ5YqTcONsIYl0x2V8E0Vlu9FcI4kdWQesE0eYsN6cY5s/joNwbhmgaxZr8E2nuhusVwzBD5aYzHJ6PySS4HA2H+3RlnZaMW24JmltYE12C4yC83LH5cLi5/4TUsAOZ64FA9KlEpGLRAKp5XDHDgcDhMzhWDSrdr6Dq9OGyYrJf7qN+p9PVKkq8h+NJaUmh3zOJhAbNTOKCKINQphLKZKoUVBWZwqOpSOS4kM+nIrNv50EoFIJLTrnb8fnMCqpp8FWqoUanKnMVPjM0x9p/55AIZ0jp1kUAAAAASUVORK5CYII=",
            "3": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAtCAMAAADx0TliAAACJVBMVEUAAADrNgD/WwDnMQDzVgD5aQDmMQD/fwDvSAD3YgD/fAD/ewD7ZgDuQQDuSQD3ZQDtRwDoNAD3XwDnMADxUgD+eADnOQDnMgDpOgD/fADxUgD/gQD4agDuSgDmMwDsQwD5awDoNwD4bAD3ZQD/fwD7awDmMQDuSQDoNAD/fQDtRQD/gADoMwDqOwD2YQD7agDxSwDrQADvUQD/ggDyWAD3ZgDwUAD7cwDlMADyVgD/gAD4bADtRQD4bADpOgDpPgD0XAD/gAD/fwD5agD/gQD9dgD1XwD/gQD/fgDxUwD//e///////vT///z//vj/gAD//vH2ZADmMADtRgDrQwD5bQD+fQDxUwDvTwDrPwDpOgL9eQD4agD1XwDyVwDtSQPzWwDnMwD3aAH8dgDoNwD84ND3hTf7gBj++PT/+en+8N7/6Mr8sGz6kkH1fDjrXjb9iBz5eBD7cwD6cQDuSwD+/Pv++/L71cj93MD5y7n6ybL/2rH5xK38xpz/y5T1po71nnn7s3X6q3T/vHLxi2/2nG3/t2r3nWfyiWT/s1/yhVn6nFX+okfwckT3gTf7iyzybyzvZCrrWCfpSR30axv/ihTxXRTsTxD1Zw3+hAz6dQn+9vH87Of97OX/9uL849j94cj8zKX3uqP/0J31rJX8v4rznIP8u4HylHf0kmjvfl/+r17udVX4llLzg07/qEzsaUb1ejLwaTD5gSf/lCXtVhrpRBDjlSUuAAAASnRSTlMACAR7Whfef3ZZNjIpJPSwfWFPRjUrFfj18tfRxcOyrJiViYB2dXFqaGJhW1dQSD09LB8c+PLx7+/s5+Xg08/Iwbyzo56VlIhra3jL3mAAAAKbSURBVDjLndHle9pAHMDxAGPAWtrVZZXV29XbubvQpiscCSQheKmvq7vLqqvr3N3l71uASzgSthf75kXs8/ye5A5Dk4UVZKtUquzCSuwvHbhx6LbQ6athUiEvhCLQpTgxukz6Xvz8Mjc5Obe4yV2SZNLNYFNJkuTmzGCjTler89Y8s0tyqYK/h9wd4QRH+B5/IEmGKQhCzF2duBcMwyQpUeRCEZw3wjCuawgKExDaost1Qo6gjno4Aa25o6OzJIDiOjkkbbmTyEEQUa9rHGxprd/bW25pElALQWQGkJJoH28nYO3N/A+8IYjDyK6csXCdy9SEK0tTLAs62CuLBUFYeGTKlVL/ZY7lBz9p3OnMggCh0RpN1jFnay2s1anXiE2k3t8wNE1OPasUz4FmgR80oddHYqKi2R2Px/PpWW21vz49y8aK0T7WU430dINlr2MSZL+PmOEd1n5R/m80YbfbrUejpch6B5nU981qtZ6KDYWQeu5ZTaZkmQiVmCCq8R7c2atuiVCFydvGdFMNrGfFZE7GRKmPm71t1fFqiLurwKTJylLNKzyq3jJ3HcECleflKSGL6IKj8JrPXbaDAVNmAyBC7Vs7eYRtAMdxH5u2oSgVeDur1sq16QDU4bAxAAIoFoDvABj9gVWc7x0AagGlG7cf9K9CZOsV0JKRKuaN1kiNcY8G5n9R1Pb8E8E02CgqnkcZlPFRlS+8Aa8K9JyiLvAmPpGarQpRwxpFC8uUT9N1odAsTZ8XNlhBL4Uyo7Q7sRzji3L/fomLSfdbt9sdhexXmsPRNhTM+tccjoQiDK14v8Gw/rq3G4qHo20Gh2N/jHjzczlmoNs+Tk29/7pu4DqpkGHSYjI4B0tIi4JEWnxMvkKhyC3SYv/RHyJcN0GMpICGAAAAAElFTkSuQmCC",
            "4": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAtCAMAAADx0TliAAABg1BMVEUAAADpOgD/ggDnMQDrPwDuSAD6bgDsOwDmMgDyVQDnMwD9eQD2YADnNQD1VwDtMwD4aAD7cwD3ZQD0WgD/fwDwTwDlMADzWgDxTwD+egD/ewD/gADvTwDqNQD7aAD/fADzVwD/fgD8dADqOwDqOgD+egDxUwD/gQDmMQD1YQD3ZADxTwD4agD6bgDmMQDwUQDrOwD9eQDmMADyVAD0YAD///v//e///////vL//vXpOAD//vfmMADxhF3/gADvTQD/79jxVAD/wXzzWgDwUADsQwDyk3r7cgD2YwDqPQD4qYH2o37yVwH1YAL+fAD8dwD4agDtSQD96+T+7dv0XgD+9e7+7N/1n374qXr7sXj5bQD3ZgD/+ur4sIz3p3z5rXrpShzxXQv+8OP+9eL96tn94cj92br9zqX9yJf4r4z8vIf3oHDyjW73m2T4lFX4jkb6jTbtYC78iSP4eSDrTxz/iBT95tD83cv707391a/+xoz/uW/yhF3zfkb2gTbwXhjnOw2AYM2MAAAANXRSTlMAXY56f375M/35+fn5Vj0X+/n5+eXf3sOog3deXSQeEgr38O/v5dTNzLGln5qOjYh1aWVPLYjdzLsAAAHwSURBVDjLtdBXV+JAAIbhWRXCuou4u/ayur1XJUYNxJggQQlFgyiIir333n+6k5mEmYQAeuF7wSHfPGdOTsAT1dVWRdXa7oi+BK1VOZj24PEw6TIYbHBADbFh1oxjh2Kxd8XmX+x4hiVB9KIYfYpfsDSKx4tRW/wAXsSVRd3vw2sFgFA4/MqOWsMHbCXU5c6sFiG3Df3K7LHojRYLKJOxobfuxDkk0GwUvlMiYUM/E3scOtqY5rDSUb31ovrsCqc3czjNGQ1ls68t6Ht2F5+sKQQpigX1KsoyPjm0oJc0+qbu4INVVZ0z0YSq0qhOU0/6UTeaNtdvNKFpNGqWtvG+IkkSQZL0hrpIyi/hfReiKWfUHN3E83IURlA0+rxgesT8wiBqR4RNDRpNiiJBn2VjXxLhLM86oQ45n8LrtizLjTryYwQfW1p+/KmDqFEY9aMWREFv1m80KeBkBnQItyk8no6izkyUyq2v53LXguACruSmv1xjyaSOxh6AQhVQKOQCNZVRDURpy9hn+00jFEn3lSsdiehoPxC4CpC2zOMUetzXERMZIOn/j0w0bq5/AWA+UsoJfegEAPi8z0jVA/MUqoWL1wfsMR6CPJ5a4BjDU4gvgTr5uxGjLZ4gW008VVMJ5PtKod+gRN3/q8284BHdA/2U7Vq0dXyIAAAAAElFTkSuQmCC",
            "5": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAtCAMAAADx0TliAAAB7FBMVEUAAAD/ggD5bQDzWQD9egDuRQD7aAD3RgDqVQDsQwDnMQD8dADuSADwTADnMADtRgDnMAD/gQDwTgD8cgDqOwDqPADzUADpQgD0TwD5agD6bgDtRgDwTwDmMwD8cgDxVADmMADvUQDpPAD1XwD/fgDyVADnMgD5bgDmMQD/gQDwTADzVwDzVgD/gQDrOwDnNQDtRADnMwD5ZQDlMAD6ZADxUADpOwD3ZgD3ZQDqOwD8dgD7eADsQgD1YgD/fwD4ZwDyUwDxUwD7bwDvUADwRwDmMgD3WQDqNAD//vD//////vb//vP///3lMAD//vv/gAD5bgDyVAD//vj/+Oj3ZAHqPwD/wHztRgHwUADsQwD3ZQDnNQD/wXzpOQL9egD4aQDzXADuSwDmMgD7cgD/0p/8dgD84db3chfoQxLyXw/++PX/+u395tr94Mz+z536tIbwgWLvdU7wbDb1YAD++vj+8eb96uP+89/+7tn+583+5Mf+37v81rr70LT5xbL+2K33var6w573r5H2oXrxjnP0kmT2j1Pwe1L/qU3taEL0fDvsYTj1bx/pSBn0ahX6eRT+9fH948/61cj5ybX8y6T9y5n1rpn/zJLzn4f4rX71mW3ziVn0h03xeEb4hTb2eyzsWyrvYijvWhn4bwhaRyecAAAASHRSTlMAjfb+xxwTDwj858aKfXRsYldPRj4nIxYL+vHx7u7n39vV09HBvbu3o6KWi4aDgnx5bWJKLyv18uTk3NPNxLOtrKWKc2hSPDE9H6aGAAACbElEQVQ4y5XSh1ObUBzAcWo0jrp3HXXvVVf3nopPEIVCTEhINMOYmFVn1bq3du/d/qN9JHlA4sv1/F4C77gPPziAOEN5HedwdRRoDZ2oPBW10Hump9FMJvgzhRd7NN2iotv0xwFMkzRdr6J68wwWmc3JKko2T/4f3bC/wCK7Fl3Hoxm7/byKLk48x6KJCTwa0/Q+BpWNLCH0ciSmJhUljSwmQPdVdMGygNBfiyVJqaxJr0XzCFksloKCvlLidOPjY+i+xyNdudMTD1l2eijSPMs6nU5W7mpPjElj2aFo00syH1j0/YDsll6D9CGENL1zhkJ1KSoqlk7gUZIk4RbtSXLhpyTVpSmoTzohMc0eSVKbgh7rjkhcy5JOp1ywn5laJmHedd/nda9G7TBMO4FqYHS+lZ0pJtzBawWtMEyV+gwaBEZtykOSoxEFzyshlFoFGFN1t639XoXwbRR1IAj5hFp+TU1WcXhVJAhjCG0LwgMCW4XVO0pRFDTUptWahUdWq4eSAxT1RYv6MzNzUqPrh/wfCvWV5y8hk1rO83x5az50+kye3wBoUpDncxDKMfz+bpBLT4ebbRkAGbp5g6EQoZvcBnBsBnmO4wzBVaD0luPSS9FXwHGzAEbNORyvgKZdjqtFgzq5AACDAP7lgLJ+Aycr931NXBvE5P4lipfRWykUXW6MeRYQRbETDeoy7mLM3KHRaKxNQ6jbaNxfpeLGfDiGprKIUGq22Wwu/5oHRAVwfDq2wTKeEJq6KoflXIcB/9aWf981HK4xhYgptbt6OK7qXOJ0RdmNGYrIaO4lElVS+Cg3Ozu3N4U4e/8AAb49+naxSkoAAAAASUVORK5CYII=",
            "6": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAtCAMAAADx0TliAAACRlBMVEUAAAD/bADxTwDpNgDnMwD9dwDzTgDwQAD4bAb1YgTrPwD7cAD5agD6bgD/gQD/gADxUgDsQwD/fwDwTwDlMQDuQwD3ZQDmMADoMwDzTwD9dwD6bgDtRwD/gADmMgDqPwDmMgDoNQDmMQD6bgDxUwD1YQDtQwD+fADzVgD5aAD8cAD/fgDvSwD4YQDnNQD5bADyVgDxUAD9bADtPAD3YwD/gQD3YwD1XgD8dAD+fgD8cwDzVgDoNwD3ZwDwVAD2ZQDoOQD/gQDsRADtSADrQADzXADnMQD/gQD/gADrRgD4agDlMQD/gADnMAD/gQD2ZwD//O7///v//vP//vb//////vjmMAD/gAD4ZgDxUwD//vD5bQDuSgD6cADsRADvTwD4agH+ewDyVwDqQAD2YADnNQDtRwDzWwDpPAD9eADoOQD97OT/79T8dgD++vf/+ef+9eX/9N//5sX+4ML9z5/4s5b/xIb2n3X/vnT/s2H4j0rzgEnuZjbtXjD6hiruWx/sSxP1ZAT7cwD+9vD99PD97Of85+H+58z818L81rv6zLf+27T+1Kr4vKb2tqP8x5v6vpn9x5X1pY77tID4qX34pnb6rXL2nG/6pmjwhWj0kmb1k1/4mV31j1z5m1btbkz/pkjzdjj7jTP/lir3eynqUib/kCLxZCHpSh7yYxboQxLxXA/++vH97Nr74tr84Mz5xa3/yIv1pYfxkHb7rm7zkGv3n2j5omL8ql3ziFf6m1P1jFH1gT77kzzvbTz7gRv3dhv4cg7LMA2KAAAAUHRSTlMACH4U8T4gBf799uDXwoF9eHhuaWlbV08wL/f06Ofl4Nu7tKuojIqIfXx5dHFqYF9PRzIoD/b08/Hw7OHg0tHNzMjItLKxp6CcmZN3XlVJOYhQQUcAAALdSURBVDjLldTlW9tAHMDx6wotznAYMBzGcJm7+9ZiTUuatEkdiru7DJchG64D5u7yny1Ncknawot9+7RP7pdPLveqwCHRwxRfHx8fX19/VxGcOQj/KwpBkbfuS51I0gnqztZKY0NDQ+PKOu1uOxjXSIVi/W2pjKuqTqE4Y29StNqtYZldlVqt1s4kac2N5TL7Sh2Qv9lcx95S8chsPiI8j9UKjaB+q1WApJ5dX+AOgqq6uk7z6Lj6d4XwwEM1NUNV5bJqtfosZ3LD1TUy7kQTa2qmtp9qtSe/UXEbR0rXioV5c8hTM8EQlaqiTUMV7h0X5+3lptEUZ0DzCPlbrmL7gCCIxutuQnKGBIiyg7MBLBn5lsdW6YZwXUgTAb5LyBhEY9TNP0szU3NNbhoE8XLl0UldP0SfO5eqmSvZ8Eanzj0YmlxdpwyiOZqwbEbHq0zdRt7+Tel0pyQMSjM2UYN86uv022Q03mDQYeNC/gG9dDcaw2h0jPgkmL8YHB/gVwsEkcCiJ/x0fIcgiB8VcDlIEOdodEjJo2kl3XdusKdUihlUT60K6XYocTEeV74uZFtVKrPog+PPCmF7OB4AQDw+DQeLOJ5qQwF4M4e2UTRM+Jh8FscP2VAWui2HraJoJvUY2gwH9ShKIxGKdsPZIor6AZCKfoWDpywCEYbHcFZrMFwDINEwCwfNBoMfje5g9XBWYsCwMGkE9gYO2jEsiEZBWLuc2x7Doq5i7WXwIQzDcgCdB8m9r7uFJMmOAe71JOkBmBLJX3J5Af2Rl9V+fFfCrVpJ8jqLxB6mETlVARN1xf6OmEymIMDmZ+koKXCut8NkipIC2GVLS4+T6WmxWCzpgEviom/tczCvNvV6fQwQFOqi3x2VC0jZ5C5lzouBnTpaVNQ62suSvsnnRVTREmCfOMY23lyefz+/TAlbsWLgVDq1maDoB/v/1wfGurDC5WYIOLjQkMB7gSE54P/7B6n8h/+uoO+4AAAAAElFTkSuQmCC",
            "7": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAtCAMAAADx0TliAAABd1BMVEUAAAD4bADyUwD8YgD6bwDpNwD8bwDtOQD/LADmMQD/gQDyVQDqOwD/gQD5agDoNADsQQDwTgD0WwD3ZwDuTADqOADoNAD2YAD1aADqOADwUAD/SwD0WwDsQwD1YADtSQDmMADxUwD2ZAD4agDmNgDyWADvTQD2ZQDwTwDrQQD1XgDmMQD2YgDuRwDnMQDoNADzVgDwSwDpNwDzWADqRgD/gQD//e//////gAD//vb//fPlMAD//vv5bgD//vj9xI/7cgD+fQD4awD2ZADvTwHxVQDqPgDmNADuSwL0XgDzWgDrQwDtRwDoOQD/+uv8eQD8dwD+8+78yaf1nHj4ex/3aAD+9eP807X6yK/4vKX7uYT7tnrxhmPzhVL2hEH1ezPtXi/sWCb2bhP++PT+8Ob86OD+7tn95tP739H718v+6Mr60bv4xrn91K33tJ38yZr6u474robzj2f8qmL0i1n6nVX6kDvyaSL1cSDuXBzqUBzxXxP2bQy1jrP3AAAANnRSTlMAmRsQzYJbEgT79vb048GvqJmQfmheUU5ANjII+vn18vLx6eja2dPRzMzJyb6+vYqAd3NuV0kL134qAAAByUlEQVQ4y63S11IbMRSAYWHjQiAQAiSE9N574o3XJVskbS9u9J4eeq8Pz9prycCcHWCG/1Lz6ehcCJ235JVv0V39GiJuYBUiWc5EJsvyZSPPi0ae54XI96OR7/shkqRoJEnSmcg9hr6fymVogqP2wqk2mPkvFQrtIYoFSlGaQFGU6jBD28HxIAqL97XxuhVliZmV4EYbAuqubWUyYiO3Wqs9jgMmqR7+FpuNq6qaBMztR+o4M8PzqvocAfWpVZehiWDQTcCk7hllZtx5w3iDgK4bM2K2kSiuGoYxCJjYHXMkAKHaNc1X4CBzOssqm6YJbRTvJCMcTRPyFAF9IDPc/CGEfAZM+iEpc1QhpDMOoH68ky02Ew8w7kVAL/BakTWKMR4CzBDGPzma0vVnCKhX38yzSljXP0Lovr3A0Zht6zHAfLH3ihxN2fZbBHTNquSDhKD8D92y+qGPdNf6K9Srs1HLsqDXBuhsHeQbap3Sl+BrtCLwSXOUJiDURf8JrF+U0luAueHsC7xlx+lKAyjhTLbQpOP0IKAn2lgLzWnaJ8CkNK3ETUnTNGilgdyswFvM5TrS0N65k71GUD0nUQKBvX/QIh3vUujiHQE+Gs3PRKPeiwAAAABJRU5ErkJggg==",
            "8": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAtCAMAAADx0TliAAACVVBMVEUAAADtRQD/gQD6ZgDoNAD/ewDyRADnMADwUADoNQD/gADnMwDuSQD6bwD/gQDwTQD/gQDnNwDnPQDvSAD/gQD4aQD4aAD0XQDpNgD+fQDmMQD+ewD5aQDnMwD0XADxVADtQwD6bQDpNwDwUgD/gQD1YADwUADlLwD+ewDrOQD/ggDlMADrQQD0WQD4agDnMAD5ZgD/dgDrPgD3ZQDwTgDoOgDlMAD8dgDvTQDqPgD/gAD6cgD+fQD2ZQD6cgDqPgD1XQD/fwD4aQD0XwD9eADmMQDmMwDyWAD6bQDvRwD7bADwQgDoLgDyUQD//vD///////3//vr//vP//vX//vjmMAD5bQDrQQH/gAD///vuTAD3ZgDtRgDnNgH/++38dgDzWQDvTwDxVQD1YgDtSQDqPgDpOgDnMwD/fgD9ewD4aQD1YQD92bb7cgD0XgDzXADwUgD91rT80rL1mnP3dBv6dw3++vL/+Or+8er/9OD85+D+7dP72s772Mj+3bb6tov1ooP/wHz/r130i1f2gjj5hSz9jyjtWB/xWQj3aQf+8Ob96Nv95M3+4sL/4bv4vqv8zKb8yqH7xKH4sI34sIT3qH31nXr8tHH/uWzwh2r+s2T5nmDuelryhVjuck70hErtZkD/mDLwYyD6fhzpSBn/ixfxXxfvVhP1aRLpRRD/hw/oQAz9fgr73tL/6sv60sX83cT71L32tKH8x5j5u5X/zJP0ppD9xI3xkHb3nmrzjmnzj2bziWDxgl78oFD0fD7/oD36jzvrYDrvbDn6ijD0bR73chEx2u0pAAAATnRSTlMAfX8sHw0G9OawqHhqWFBMHxgO+vXw5+fb2sG1rqypn56SkoF6dXNramJfW1lRTUI4FBL39/fv7e3q4eDXz8zLycXDnpuMcmNgXkAyLCZFcTVLAAADEUlEQVQ4y5WUdXfTUByGL2yMCbAN1zF32Bju7tCtWZbQJG1SXWWVuTN3Ye7ugrs7fC5y0+R2HeUPnnPuPfd9+5zb30lzCtwIio9cyxMZHwT+wSb/rfcQW/03+XhQdvEfLU1WD1QNVH+dhd6p2NWOv9G4NNQuk3hcVW80Gi8ecnP2mIxDxbKVqF7Nmkxngtych/dlqymeNJl2rUPORhY5blY9y16RnHXH2SqZJ9pYlvUSpVhrvUrmkWqWDROlc9Y3qC7t/9xfilK71XpalKwEqrPyCYLIRwOq+Oh8DF5EPiqnCcg0+vafBHFLkA4Sdegi3th7YxuRLRXfCGKjUzIjqdNs3g7AJfMLqagzm52SF/0b3UTT24HPNjpLzIVNNJ0MBA7TbTJMQJVH02F76TwVhvEKJuugaVp85iHaYUwku0mr1TbliElWq9WeBU6SLdpsycrKs+ShUGGxWKKAyGXbQivfpUNUHYX8SUidFptth+sXvmBfyBEkzLVjPTab3X4AIDbv4OzDqvSVtNZyHGePAi72c1zt03Q3sK5fHNd4HSBCNFyFMBEuLmEvfKfRaKIlJ0LTmINLFOQUofNL3hKHuutwdKG+Ys7R2FsgpW6HwzfFOZB6HMflOFxYjRoyXoDL5bDBv6jVEdDxOUKVy0V6KIpS+1JUr1Q8oyhfKAVSU3xSCN0cRZ0IBBuoeVxqpigKvuXRuhqxUDTrdLpAvtqia4EZijU63Qa+WcPkioW8mWEYACWmRbopl2HWCFJfmiItDS55A8MkAnCTmZfzCXZIIj8oFHwH6SZJMjSUJCuhIDSjJAmlOPJHGiKXhHzEUdFAknCmYD1Z5LIeVb7vK3fFMr1efxvwnNdXpgpNqgA8o31Urz8JIImG5bJUzzwwGAzhQMDP0FDi0SlbNBiOeouv3E7lzBNP9ywrlcoAIOK9M1P5afVl5WNKHj+ASNmdkakce16EjJLXE5mQfW5/wVczIDMTI4NvB0e+L2YIrL8G3LmzLwMhKuHB4C+8A3avR8Yxv7jNqwUkJiXEBMQkJAWD/+YP82KeqKAiZ98AAAAASUVORK5CYII=",
            "9": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAtCAMAAADx0TliAAACNFBMVEUAAAD9eQDmMQD2SwD/fgD8cgD9agDrQQDvSwD0XQDnMwD/gAD+fQDvTADqOwDvRwD4YAD8cwDtSAD0XADtRgDxVAD+ewD5awDrPwDuSgDoNwD/gQD1YADnMgD+fADrQADyVwD5aQDoNQDzWADlMADnMQDyVwD5agD/gADqPQD4agDsQwD/eADwTAD/gAD/fQD9eADvRAD/ggDlLQDnMgD2YADoOQD4aAD6bQD8dwDlMADsRQDlMADtSQD2YwDxVQD6cQDsQgD3aADlMADyUwDsRQD7cgD6bwDtSQDtQwDwUADoLwD/gQD5agDnMQDyWQD//e///vf//vL///////3mMAD//vruSQD0WwD/gAD5bQDvTQDrQgD2ZQHnNQDyVgDqPAD4aAD1XwD/+vT//OzwUgH4agDoOADsRgH6cQD2YgD+8uP/9d//9+//+Ob8dQLqQAD/7tb73dX95c772cn4xrf4v6z9wYj4qHr/rln8nlDucEr4chD7eg397Ob859/+8Nn94cz/58T718D6z7v80a/7y6v5vJn/zZT8w4/8vYf9uHr0l3X1lGbyiV73k1XygFL+o0n0gUT5j0H9mT3zeDzvaDT2eCztXCr5gynxaCjsVyH7gBr/ixfrTBf1ZxH2agz+hQvzYQr+fQD95db+6c783cX92rb70bb5v6X/0pz3tZr7wpn5uJT4sIv1pITym4Pyknj+vXf2m2v6oVvvelj+mDXrWzT5fyH2dR7tUhLnPg5kMKYJAAAAUHRSTlMA/vUJ70EWD/7s19O0hEM6IBr89/Px5tTTzMvCvrqroJ6YlY2KdXRzcG1pW0xJRTYxLiAcFPn28u/r6eXl2tnYz8jGwb66t6GafWNiW1lUUM/0ZI8AAALBSURBVDjLlZLlX9tAGMevtLgz3GHYsA2Zu/vWdpSkTaN1gRZ3GO7ubnN3/ecWaK498ule8M2Ly+/J9567++TAoSnNSw2WqWXBIXkn/qcUJ6k9BD/wpkSGqNXbLUM9dr29503LulqdVArEHI/d3f5SLYfoh9Z3ZcViRyb5USNHsU9LJIUAxS9WMg3bQPQtEokvKqU65vRyMfo5yVk/j+Pr6IBroTztcIR4pFuWUbk3miyWQvfpLQ67e3Zrx1qTe8E1yxUo5WtaYbl6WcPjtkY1Frj3DM0IrA5r9miHjZ9rNLcFKc74EkqzRmNcrtE4DPMv4xlBOs3WKPfgi+2s8SG4xrYqXci/sazwr1myWinAkmwkyCWXYR4hyXyXZCX1sLhFklLgS7bD3E+SGYLE2WDxt9UqBRHWLZjrOGuySzrJ1cHiLMdFAD+OhNnGcZdcUiA+AIvvcDwnIh3fhLkKxwNdUjLerBCQL+I8O/1CVCpx/IhLOoov8nn/UdgmdzYnu92R74S7pMc0/QJOFUYYbTQtdJLG0DMK79TRdCAQ1jMYBr1Lrwz0ZXh7Ywz0APJJ1wvf3hsMN4DAPYIwNOsqBbrnx/dHXvpKEOkAEkoQxEpzr01R9WxwhiA+QH+eIHIAYmEEhmEB2D71gqMjsIAi4CE8AXOzUiHQx0/zBwj+RXcuRmFYVLTZ/BpK42YsAXVuas+nFYSVhN+NNk9BR/dHaw5FnGNas1ZgQgelt3wqQaR4Z2P9x6mFpYWJvgqIbtXpvIpum9morBAzxjDOAkRKY8aeiKlnGCYePdkppkvsdK6aTEwYum1Tm9jpWjKZTJkAIZFqFDkNGxRlSpSikg/V1lCJKLXfKZ6gcoASpFKp/rZ9aqzt1FXVNnz+SalUFJXiDw7wyEclxicbiCnPDjqoZJYBb5Tdz0q5wHekzl3PCpOCQ/MPaGhyw/ebJJkAAAAASUVORK5CYII="
        }
            , u = (_defineProperty(r = {
            "combatDetail": (c = window.location.href.includes("preEnv") ? "//jdjoypre.jd.com" : "//jdjoy.jd.com") + "/pet/combat/detail/v2",
            "combatMatch": c + "/pet/combat/match",
            "combatCancelMatch": c + "/pet/combat/cancelMatch",
            "combatReceive": c + "/pet/combat/receive",
            "creatPet": c + "/pet/createPet",
            "changeAppearance": c + "/pet/changeAppearance",
            "getExchangeRewards": c + "/pet/getExchangeRewards",
            "petExchange": c + "/pet/exchange",
            "getExchangeRecord": c + "/pet/getExchangeRecords",
            "joinCombat": c + "/pet/combat/join",
            "getFood": c + "/pet/getFood",
            "scan": c + "/pet/scan",
            "followGood": c + "/pet/followGood",
            "enterRoom": c + "/pet/enterRoom/h5",
            "getPetTaskConfig": c + "/pet/getPetTaskConfig",
            "getFollowShops": c + "/pet/getFollowShops",
            "feed": c + "/pet/feed",
            "followShop": c + "/pet/followShop",
            "getFriends": c + "/pet/getFriends",
            "enterFriendRoom": c + "/pet/enterFriendRoom",
            "doubleRandomFood": c + "/pet/doubleRandomFood",
            "stealFood": c + "/pet/getRandomFood",
            "helpFeed": c + "/pet/helpFeed",
            "petSign": c + "/pet/sign",
            "getCombatRecords": c + "/pet/combat/getCombatRecords",
            "getPetTeamInfo": c + "/pet/combat/getPetTeamInfo",
            "combatHelp": c + "/pet/combat/help",
            "changeTeamNickName": c + "/pet/combat/changeName",
            "getRaceRank": c + "/pet/combat/getRankList",
            "getRaceHelper": c + "/pet/combat/getBackupInfo",
            "getFriendCoin": c + "/pet/getFriendCoin",
            "getFriendActions": c + "/pet/getFriendActions",
            "getCoinChanges": c + "/pet/getCoinChanges",
            "orderReward": c + "/pet/orderReward",
            "getTodayFeedInfo": c + "/pet/getTodayFeedInfo",
            "investTreasure": c + "/pet/investTreasure",
            "getDeskGoodDetails": c + "/pet/getDeskGoodDetails",
            "getFollowChannel": c + "/pet/getFollowChannels",
            "getPetTreasureBox": c + "/pet/getPetTreasureBox",
            "receiveTreasureReward": c + "/pet/receivePetTreasureBoxReward",
            "getAvaiAppear": c + "/pet/getAvailableAppearances",
            "openGoldenEgg": c + "/pet/openGoldenEgg",
            "helpFriend": c + "/pet/helpFriend",
            "shareCard": c + "/pet/shareCard",
            "getBubbleReward": c + "/pet/getBubbleReward",
            "getCoinChangeDetails": c + "/pet/getCoinChangeDetails",
            "getInviteRewardInfo": c + "/pet/getInviteRewardInfo",
            "getCheckAttention": c + "/api/wechat/public/account/exist",
            "addSubscribe": c + "/api/subscribe/addSubscribe",
            "cancelSubscribe": c + "/api/subscribe/cancel"
        }, "getCoinChangeDetails", c + "/pet/getCoinChangeDetails"),
            _defineProperty(r, "getInviteFood", c + "/pet/getInviteFood"),
            _defineProperty(r, "clickIcon", c + "/pet/icon/click"),
            _defineProperty(r, "getKeFuWx", c + "/pet/getCSWeChat"),
            _defineProperty(r, "getSupplyInfo", c + "/pet/combat/getSupplyInfo"),
            _defineProperty(r, "combatSupply", c + "/pet/combat/supply"),
            _defineProperty(r, "uploadImg", c + "/api/lottery/upload/img/reward"),
            _defineProperty(r, "qrCode", c + "/weixin/qrcode"),
            _defineProperty(r, "changePin", c + "/pet/getUserId"),
            _defineProperty(r, "giftGetHomeInfo", c + "/gift/getHomeInfo"),
            _defineProperty(r, "getGoodSaleInfo", c + "/gift/getGoodSaleInfo"),
            _defineProperty(r, "getBuyRecords", c + "/gift/getBuyRecords"),
            _defineProperty(r, "getPayHomeInfo", c + "/gift/getPayHomeInfo"),
            _defineProperty(r, "giftExchange", c + "/gift/new/exchange"),
            _defineProperty(r, "getDeliveryFee", c + "/gift/getDeliveryFee"),
            _defineProperty(r, "validateBuyLimit", c + "/gift/validateBuyLimit"),
            _defineProperty(r, "newUserSign", c + "/pet/newUserSign"),
            _defineProperty(r, "likeGetPayInfo", c + "/like/order/getPayInfo"),
            _defineProperty(r, "likeOrderPay", c + "/like/order/pay"),
            _defineProperty(r, "testEid", c + "/test/eid"),
            _defineProperty(r, "testRisk", c + "/test/risk"),
            _defineProperty(r, "getPayProductInfo", c + "/ddf/getPayInfo"),
            _defineProperty(r, "orderPay", c + "/ddf/order"),
            _defineProperty(r, "getProductDeliveryFee", c + "/ddf/getDeliveryFee"),
            _defineProperty(r, "receiveCoupon", c + "/pet/receiveCoupon"),
            _defineProperty(r, "getExactCouponInfo", c + "/pet/getCouponInfo"),
            _defineProperty(r, "pushSubscribe", c + "/api/subscribe/addNew"),
            _defineProperty(r, "getBeanConfigs", c + "/gift/getBeanConfigs"),
            _defineProperty(r, "getSuperSale", c + "/gift/getSuperSale"),
            _defineProperty(r, "getGoodBase", c + "/gift/getGoodBase"),
            _defineProperty(r, "getGoodConfig", c + "/gift/getGoodConfig"),
            r)
            , d = {
            "appId": "wxccb5c536b0ecd1bf",
            "staticAppearance": {
                "standard": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/static_standard_new.png&auth=xR2EoQhoIZcB4Gp0YIN82vweZSRhPTQ2JmU9MTk3MTAzNTc2NSZ0PTE1NzEwMzU3NjYmZj03MV8xOTEwXzExNjJfNzYmcj1zdEsyQzNMRU9O",
                "rabbit": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/static_rabbit_new.png&auth=TTfXqjvJdi6Tk84rJOSVLLS5/s5hPTQ2JmU9MTk3MTAzNTczNCZ0PTE1NzEwMzU3MzUmZj0yMV8xOTEwXzEyODlfNjEmcj1qcExXRXE0TUR3",
                "leisure": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/static_leisure_new.png&auth=JeyBvNWV8pXa6vBfMSsyARgi6H9hPTQ2JmU9MTk3MTAzNTY0OCZ0PTE1NzEwMzU2NDkmZj02OF8xOTEwXzExNjRfNDImcj1QTERmQ01KVG8x",
                "minions": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/static_minions_new.png&auth=sEZvpQxsObPIYNLSWWNb9LP1CoRhPTQ2JmU9MTk3MTAzNTcxMiZ0PTE1NzEwMzU3MTMmZj0yM18xOTEwXzEyODdfNTI0JnI9NlkzQlA5TG1Naw==",
                "winter": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/static_winter_new.png&auth=GPvOoUqlWS7j/DzpK780q8EPUXlhPTQ2JmU9MTk3MTAzNTc4NyZ0PTE1NzEwMzU3ODgmZj02MV8xOTEwXzExNThfMTI3JnI9SGc3cEdxSkppTQ==",
                "newYear": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/static_newyear.png&auth=OpMwZ/JFFTQolLbVB08oF8gEykRhPTQ2JmU9MTk3NzY3NzQxMyZ0PTE1Nzc2Nzc0MTQmZj0zMl8xOTEyXzM4MjBfNTI0JnI9ZDJjQnR6NnhtRg==",
                "valentine": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/static_valentine.png&auth=uj78mGznr77eoh4zwWNWfkc/zY5hPTQ2JmU9MTk4MTU2NDg3MCZ0PTE1ODE1NjQ4NzEmZj0zMl8yMDAyXzEzNjFfMTI1JnI9TExIY1B1eDBGSg==",
                "butterfly": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/suits/butterFly_statistic_nowing.png&auth=rokzekWRm0hQ4uy0nR3R3wI+4XZhPTQ2JmU9MTk4MjgxMjE2OCZ0PTE1ODI4MTIxNjkmZj04OF8yMDAyXzI2MzNfNDEyJnI9eXR3ajlQOEJ1YQ==",
                "cake": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/suits/cake_static.png&auth=5cKwg/khsiAo4qLphOFTR+HeVtVhPTQ2JmU9MTk5MTY3MjE0NyZ0PTE1OTE2NzIxNDgmZj04Ml8yMDA2XzEzODNfMjY3JnI9VU03OGRzdWlGeA==",
                "midAutumn": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/autum_race_static.png&auth=lV2KGN9dE35ZAbHD3bAtec6Wcu5hPTQ2JmU9MjAwMDMzNTY5NCZ0PTE2MDAzMzU2OTUmZj04Nl8yMDA5XzExODVfMTA4JnI9N0pSUGNha282dQ=="
            },
            "headAppearance": {
                "standard": "https://img10.360buyimg.com/imagetools/jfs/t1/161149/3/4534/4209/60101541E9bcce2e4/7a44341dd7e44910.png",
                "leisure": "https://img13.360buyimg.com/imagetools/jfs/t1/160954/13/4375/4290/6010153eE623c1bd8/c38166f4b56b7bea.png",
                "winter": "https://img13.360buyimg.com/imagetools/jfs/t1/155893/6/7718/5095/60101541E169d4b33/07d2bdbcb3ecad81.png",
                "rabbit": "https://img10.360buyimg.com/imagetools/jfs/t1/150864/6/17156/4589/60101541E1ac452d6/efe1e493596ed160.png",
                "minions": "https://img12.360buyimg.com/imagetools/jfs/t1/163844/24/4273/4657/6010153eE6ed8f6ca/5094f9e14865c62e.png",
                "newYear": "https://img13.360buyimg.com/imagetools/jfs/t1/163675/29/4437/4999/6010153fEc75009b6/d1a68e27be09d171.png",
                "valentine": "https://img13.360buyimg.com/imagetools/jfs/t1/154241/40/16059/4891/6010153eE5b42bb8e/dace3abc247faeff.png",
                "butterfly": "https://img11.360buyimg.com/imagetools/jfs/t1/169324/31/4344/4669/6010153eEf3301941/35bb60f65f044c43.png",
                "cake": "https://img10.360buyimg.com/imagetools/jfs/t1/162082/8/4491/4671/6010153eEe57589a4/c96b72e3f8a3f10a.png",
                "midAutumn": "https://img11.360buyimg.com/imagetools/jfs/t1/150711/30/16520/4493/6010153dE0834819e/7a1a1e9247c0ab36.png"
            },
            "interFaces": u,
            "closeIcon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAMAAACfvvDEAAAAM1BMVEUAAADZ2dnc3Nzb29va2trY2NjZ2dnc3NzY2NjZ2dnY2NjZ2dnY2Nja2trc3Nzf39/Y2NhDA2qaAAAAEHRSTlMAtgdiL+zEFc2opZWLbzogx9wH3gAAALNJREFUOMuF1EsOQjEMQ9H0Q8v70v2vlsCAtLJ08ciVzsxVzOqeLsPcWyrmcHhSBlg+4jTbh1CFnmxpBAU4ul0jKMCn96RU4aP6IwdFKBTgQgEKBahUIVKFSgUCXSHRBSKdIVOFSgUyDciUoU44Wv4PdViGQRkyjWVaUIZ1Gpbh8gcYLpSgUIBCAQpVSFShUoBCBQK9Jwj0MNsCIs2WAiLtVgISbd5OP80OgR4OX9/Wyf3EG0V9Ic75ItYoAAAAAElFTkSuQmCC",
            "constImgs": {
                "homeBg": "https://img10.360buyimg.com/imagetools/jfs/t1/169627/1/2455/172591/5ffd9661E063e9d71/e89fc53aac8e1fbb.png",
                "friendHomeBg": "https://img13.360buyimg.com/imagetools/jfs/t1/164251/20/3195/158017/6008e466E90537a14/47ca8df5b0b1e180.png",
                "dian2": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/dian1_2.png&auth=kcdrMDV0P8zwg1RBR7Z4flZ9xclhPTQ2JmU9MTk3MjA2Nzg0MCZ0PTE1NzIwNjc4NDEmZj03MF8xOTEwXzE3OTlfMTEyJnI9RGdLVldYeGsycw==",
                "goodsBox": "https://img12.360buyimg.com/imagetools/jfs/t1/129166/9/19980/18915/5fbcd23fE85d95955/2216db6b167e616f.png",
                "counterHead": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/counter/head1.png&auth=D78XtCeZo8CBvrJkxV5mqVYrdg9hPTQ2JmU9MTk5NTI0ODQ0MyZ0PTE1OTUyNDg0NDQmZj05NV8yMDA3XzI5NjFfMTE4JnI9ODU3ZGZpMlhGdg==",
                "threeMeals1": "https://img13.360buyimg.com/imagetools/jfs/t1/164861/35/3453/9290/6006a21fE66721aab/10167e628ab063b7.png",
                "threeMeals2": "https://img13.360buyimg.com/imagetools/jfs/t1/164318/9/3733/9728/6006a21fEb7fc3bd7/cc7ee942223b8528.png"
            },
            "inviteSources": ["task_invite", "friend_list"],
            "shareSources": ["h5", "weapp"],
            "initLog": function initLog(e, t) {
                e.set({
                    "url": t.url,
                    "urlParam": t.params,
                    "title": "宠汪汪",
                    "siteId": "JA2019_5431824",
                    "pname": t.pname,
                    "account": t.ptPin,
                    "pageId": t.pageId ? t.pageId + "_Mp" : "",
                    "openid": t.openId || "",
                    "unionid": t.unionId || "",
                    "appid": "wxccb5c536b0ecd1bf"
                })
            },
            "sendPv": function sendPv(e, t) {
                try {
                    var a = new MPing.inputs.PV(e)
                        , n = new MPing;
                    if (t)
                        for (var o in t)
                            a[o] = t[o];
                    n.send(a)
                } catch (e) {
                }
            },
            "statistic": function statistic(e, t) {
                try {
                    var a = new MPing.inputs.Click(e);
                    a.event_param = "",
                        a.json_param = t,
                        a.updateEventSeries(),
                        (new MPing).send(a)
                } catch (e) {
                }
            },
            "babelReport": function babelReport(e, t) {
                try {
                    var a = new MPing.inputs.Click(e);
                    a.event_param = JSON.stringify(t),
                        a.updateEventSeries(),
                        (new MPing).send(a)
                } catch (e) {
                }
            },
            "clickReport": function clickReport() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , t = arguments[1]
                    , a = t.babelEventId
                    , n = t.babelEventParam
                    , o = void 0 === n ? {} : n;
                if (Object.keys(e).length > 0 && i.a.click(e),
                    a) {
                    var r = window.location.href.includes("preEnv") ? "00860952" : "00861162"
                        ,
                        s = window.__react_data__ && window.__react_data__.activityData && window.__react_data__.activityData.activityId || r
                        , c = Object.assign(o, {
                            "aid": s,
                            "fno": 1
                        });
                    this.babelReport("Babel_dev_" + a, c)
                }
            },
            "selfStatistic": function selfStatistic(e) {
                var t = e.reqHeader
                    , a = e.iconCode
                    , n = e.linkAddr
                    , i = e.source
                    , r = "" + d.interFaces.clickIcon;
                a && (r += (r.indexOf("?") > -1 ? "&" : "?") + "iconCode=" + a),
                n && (r += (r.indexOf("?") > -1 ? "&" : "?") + "linkAddr=" + encodeURIComponent(n)),
                i && (r += (r.indexOf("?") > -1 ? "&" : "?") + "source=" + i),
                    Object(o.a)({
                        "url": r,
                        "data": {},
                        "credentials": "include",
                        "method": "GET",
                        "header": t
                    }).then(function () {
                        console.log("clickIcon:", a)
                    })
            },
            "loginJd": function loginJd(e, t) {
                var a = this;
                if (t) {
                    var n = window.location.href
                        , i = n.indexOf("jdfcloud.com") > -1 ? 938 : 936;
                    window.location.href = "https://plogin.m.jd.com/user/login.action?appid=" + i + "&returnurl=" + encodeURIComponent(n)
                } else {
                    var r = "https://plogin.m.jd.com/cgi-bin/ml/islogin?time=" + (new Date).getTime();
                    Object(o.a)({
                        "url": r,
                        "data": {},
                        "jsonp": !0
                    }).then(function (t) {
                        t.data && "1" == t.data.islogin ? (console.log("已登录"),
                        e && e(1),
                            a.prepareH5()) : (console.log("未登录"),
                        e && e(0))
                    })
                }
            },
            "loadScript": function loadScript(e) {
                var t = e.url
                    , a = e.id
                    , n = e.cb;
                if (!document.getElementById(a)) {
                    var o = document.createElement("script");
                    o.setAttribute("src", t),
                        o.setAttribute("id", a),
                        o.setAttribute("crossorigin", "anonymous"),
                        o.addEventListener ? o.addEventListener("load", function () {
                            n && n()
                        }, !1) : o.attachEvent && o.attachEvent("onreadystatechange", function () {
                            "loaded" == window.event.srcElement.readyState && n && n()
                        }),
                        document.querySelector("html").appendChild(o)
                }
            },
            "downloadDownTimeJs": function downloadDownTimeJs(e) {
                var t = this;
                this.loadScript({
                    "url": "https://storage.360buyimg.com/jmfe/viewkit-task/lib/react.production.min.js",
                    "id": "reactjs",
                    "cb": function cb() {
                        t.loadScript({
                            "url": "https://storage.360buyimg.com/jmfe/viewkit-task/lib/react-dom.production.min.js",
                            "id": "reactDom",
                            "cb": function cb() {
                                t.loadScript({
                                    "url": "https://storage.360buyimg.com/jmfe/viewkit-task/1.1.10/bundle.min.js",
                                    "id": "viewkit",
                                    "cb": e
                                })
                            }
                        })
                    }
                })
            },
            "isEqual": function isEqual(e, t) {
                if (e && !t || !e && t)
                    return !1;
                if ("function" == typeof e)
                    return !0;
                if (e instanceof Object) {
                    if (Object.keys(e).length !== Object.keys(t).length)
                        return !1;
                    var a = !0;
                    for (var n in e)
                        this.isEqual(e[n], t[n]) || (a = !1);
                    return a
                }
                return e === t
            },
            "jrGoMPPage": function jrGoMPPage(e) {
                JrBridge ? JrBridge.openView({
                    "target": "appcommon/wxminiprogram/openprogram",
                    "container": "native",
                    "islogin": !1,
                    "wallet": "",
                    "productId": "gh_84ada2489c1e",
                    "isclose": !1,
                    "param": {
                        "type": e,
                        "title": "小程序仅支持微信内打开，请先安装微信",
                        "extJson": "小程序调起失败的埋点数据"
                    }
                }) : console.log("JrBridge没有加载好")
            },
            "setJdNavigation": function setJdNavigation() {
                if (this.isInAppEnv()) {
                    window.getAppVersionCb = function (e) {
                        var t = JSON.parse(e).data;
                        window.globalData = {
                            "isAndroid": "android" == t.systemName,
                            "appVersion": +t.appVersion.split(".").join("")
                        }
                    }
                    ;
                    var e = {
                        "canPull": "0",
                        "supportTran": "0"
                    };
                    this.getJdAppVersion() >= 824 && (e.follow = {
                        "type": "follow",
                        "display": "show",
                        "position": "outside",
                        "icon": "",
                        "title": "关注",
                        "jump": "",
                        "params": {
                            "collectionId": "544"
                        }
                    }),
                        function configNav(e) {
                            isWKWebView() ? window.webkit.messageHandlers.MobileNavi.postMessage({
                                "method": "configBtnSince610",
                                "params": e
                            }) : window.MobileNavi && window.MobileNavi.configNavigationBar(e)
                        }(JSON.stringify(e))
                }
            },
            "prepareH5": function prepareH5() {
                var e = navigator.userAgent || "";
                window.isWKWebView = function () {
                    return -1 != e.indexOf("supportJDSHWK/1") || 1 == window._is_jdsh_wkwebview
                }
                    ,
                    window.globalData = {},
                    window.globalData.isAndroid = !(e.indexOf("iPhone") > -1);
                var t = this;
                window.addJDAppUniteLoad = function () {
                    console.log("调用获取手机基本信息");
                    var e = isWKWebView();
                    if (console.log("isWk:", e),
                        e) {
                        window.webkit.messageHandlers.JDAppUnite.postMessage({
                            "method": "getPhoneBasicInfo",
                            "params": "getAppVersionCb"
                        })
                    } else
                        console.log("安卓：", window.JDAppUnite),
                        window.JDAppUnite && JDAppUnite.getPhoneBasicInfo("getAppVersionCb");
                    t.setJdNavigation()
                }
                    ,
                e.toLowerCase().indexOf("jdjr") > -1 && this.loadScript({
                    "url": "https://m.jr.jd.com/common/jssdk/jrbridge/2.0.5/jrbridge.js",
                    "id": "jrbridge",
                    "cb": function cb() {
                    }
                })
            },
            "h5Invite": function h5Invite(e) {
                var t = e.path
                    , a = e.shareImage
                    , o = e.title;
                if (window.globalData.appVersion && window.globalData.appVersion < 702)
                    Object(n.c)({
                        "title": "提示",
                        "content": "APP版本过低，无法邀请好友...快去升级吧~",
                        "showCancel": !1,
                        "confirmText": "升级APP",
                        "success": function success(e) {
                            window.location.href = "https://h5.m.jd.com/active/download/download.html?channel=jd-m"
                        }
                    });
                else {
                    var i = {
                        "title": o,
                        "content": "每日京喜好货，都在京东APP！",
                        "url": "https://m.jd.com",
                        "img": "https://m.360buyimg.com/n1/s120x120_jfs/t2566/341/1119128176/23675/6356333b/568e3d86Naa36a750.jpg",
                        "channel": "Wxfriends",
                        "mpId": "gh_84ada2489c1e",
                        "mpIconUrl": a,
                        "mpPath": t,
                        "mpType": window.location.href.indexOf("pre") > -1 ? "1" : "0"
                    };
                    console.log(i),
                        l.sendDirectShare(i)
                }
            },
            "getRaceCoins": function getRaceCoins(e) {
                for (var t = [], a = e.toString(), n = 0; n < a.length; n++) {
                    var o = a[n];
                    t.push({
                        "id": n,
                        "imgUrl": p[o],
                        "classStyle": 1 == o ? "main_title_coin_item_one" : "main_title_coin_item"
                    })
                }
                return t
            },
            "getPageUrl": function getPageUrl(e, t) {
                for (var a in t)
                    e += e.indexOf("?") > 0 ? "&" + a + "=" + t[a] : "?" + a + "=" + t[a];
                return e += e.indexOf("?") > 0 ? "&loginIn=loginIn" : "?loginIn=loginIn",
                    encodeURIComponent(e)
            },
            "isInAppEnv": function isInAppEnv() {
                return navigator.userAgent.toLowerCase().indexOf("jdapp") > -1
            },
            "isInJrAppEnv": function isInJrAppEnv() {
                return navigator.userAgent.toLowerCase().indexOf("jdjr") > -1
            },
            "isInMicroMessage": function isInMicroMessage() {
                return navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1
            },
            "isIos": function isIos() {
                return navigator.userAgent.toLowerCase().indexOf("iphone") > -1
            },
            "isAndroid": function isAndroid() {
                return navigator.userAgent.toLowerCase().indexOf("android") > -1
            },
            "getJdAppVersion": function getJdAppVersion() {
                var e = navigator.userAgent;
                if (/jdapp/.test(e)) {
                    var t = e.split(";");
                    if (t[2])
                        return t[2].split(".").join("")
                }
            },
            "btnOpenApp": function btnOpenApp() {
                $.immediateOpenApp({
                    "downAppURl": "https://wqs.jd.com/downloadApp/downloadAppIOSMPage.html?channel=jd-m",
                    "downAppIos": "https://itunes.apple.com/us/app/jing-dong-wang-gou-shou-dan/id414245413",
                    "downWeixin": "http://a.app.qq.com/o/simple.jsp?pkgname=com.jingdong.app.mall&g_f=991850",
                    "downIpad": "https://itunes.apple.com/cn/app/jing-dong-hd/id434374726?mt=8",
                    "inteneUrl": "openApp.jdMobile://virtual?",
                    "M_sourceFrom": "lkyl",
                    "inteneUrlParams": {
                        "des": "m",
                        "url": "https://jdjoy.jd.com/pet/index",
                        "category": "jump"
                    },
                    "autoOpenAppEventId": "MDownLoadFloat_AppArouse",
                    "autoOpenAppEventParam": ""
                })
            },
            "checkAttention": function checkAttention(e, t, a) {
                Object(o.a)({
                    "url": u.getCheckAttention + "?appId=" + null.appId + "&openId=" + a,
                    "data": {},
                    "credentials": "include",
                    "method": "POST",
                    "header": e
                }).then(function (e) {
                    t && t(e.data)
                })
            },
            "decodeQueryString": function decodeQueryString(e) {
                for (var t = e.split("&"), a = {}, n = 0; n < t.length; n++) {
                    var o = t[n].split("=");
                    a[o[0]] = o[1]
                }
                return a
            },
            "changePin": function changePin(e, t, a) {
                Object(o.a)({
                    "url": u.changePin + "?userTag=" + t,
                    "credentials": "include",
                    "method": "GET",
                    "header": e
                }).then(function (e) {
                    e && e.data && a && a(e.data.data)
                })
            },
            "accAdd": function accAdd(e, t) {
                var a, n, o;
                try {
                    a = e.toString().split(".")[1].length
                } catch (e) {
                    a = 0
                }
                try {
                    n = t.toString().split(".")[1].length
                } catch (e) {
                    n = 0
                }
                return o = Math.pow(10, Math.max(a, n)),
                (this.accMul(e, o) + this.accMul(t, o)) / o
            },
            "subAcc": function subAcc(e, t) {
                var a, n, o;
                try {
                    a = e.toString().split(".")[1].length
                } catch (e) {
                    a = 0
                }
                try {
                    n = t.toString().split(".")[1].length
                } catch (e) {
                    n = 0
                }
                var i = e * (o = Math.pow(10, Math.max(a, n))) - t * o;
                return i % o == 0 ? i / o : (i / o).toFixed(a >= n ? a : n)
            },
            "accMul": function accMul(e, t) {
                var a = 0
                    , n = (1 * e).toString()
                    , o = (1 * t).toString();
                try {
                    a += n.split(".")[1].length
                } catch (e) {
                }
                try {
                    a += o.split(".")[1].length
                } catch (e) {
                }
                var i = Number(n.replace(".", "")) * Number(o.replace(".", "")) / Math.pow(10, a);
                return Math.round(100 * i) / 100
            },
            "goOutMp": function goOutMp(e) {
                if (e.indexOf(";") > -1) {
                    var t = e.split(";")[0]
                        , a = e.split(";")[1];
                    wx.navigateToMiniProgram({
                        "appId": t,
                        "path": a,
                        "extraData": {},
                        "success": function success(e) {
                        }
                    })
                }
            },
            "checkGlobalFun": function checkGlobalFun(e) {
                if (window.likeGetJdEid && "function" == typeof e)
                    window.likeGetJdEid(function (t) {
                        console.log(t),
                            e(t)
                    });
                else
                    var t = window.setInterval(function () {
                        window.likeGetJdEid && "function" == typeof e && (clearInterval(t),
                            window.likeGetJdEid(function (t) {
                                console.log(t),
                                    e(t)
                            }))
                    }, 200)
            },
            "openNewWebview": function openNewWebview(e) {
                if (this.isInAppEnv()) {
                    var t = {
                        "des": "m",
                        "url": e,
                        "category": "jump"
                    }
                        , a = "openApp.jdMobile://virtual?params=" + encodeURIComponent(JSON.stringify(t));
                    window.location.href = a
                } else
                    window.location.href = e
            },
            "throttle": function throttle(e) {
                var t = this
                    , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3
                    , n = 0;
                return function () {
                    for (var o = arguments.length, i = Array(o), r = 0; r < o; r++)
                        i[r] = arguments[r];
                    var s = +new Date;
                    s - n > a && (n = s,
                        e.apply(t, i))
                }
            },
            "jumpToOrder": function jumpToOrder(e) {
                this.isInAppEnv() ? window.location.href = 'openapp.jdmobile://virtual?params={"des":"orderDetail","jumpPage":"newPage","category":"jump","sourceValue":"","sourceType":"","orderId":"' + e + '"}' : this.isInAppEnv() || (window.location.href = "https://wqs.jd.com/order/n_detail_v2.shtml?deal_id=" + e)
            },
            "getJdpin": function getJdpin() {
                return requirePlugin("loginPlugin").getStorageSync("jdlogin_pt_key")
            }
        };
        t.a = d
    }
    , function (e, t, a) {
        "use strict";
        var n = a(1)
            , o = a(200)
            , i = a(48)
            , r = ["gift", "pet"]
            , s = function isInWhiteAPI(e) {
            for (var t = r, a = !1, n = 0; n < t.length; n++) {
                var o = t[n];
                e.includes(o) && !a && (a = !0)
            }
            return a
        }
            , c = function apiConvert(e) {
            for (var t = r, a = 0; a < t.length; a++) {
                var n = t[a];
                e.includes(n) && !e.includes("common/" + n) && (e = e.replace(n, "common/" + n))
            }
            return e
        }
            , l = function sortByLetter(e, t) {
            if (e instanceof Array) {
                t = t || [];
                for (var a = 0; a < e.length; a++)
                    t[a] = sortByLetter(e[a], t[a])
            } else
                !(e instanceof Array) && e instanceof Object ? (t = t || {},
                    Object.keys(e).sort().map(function (a) {
                        t[a] = sortByLetter(e[a], t[a])
                    })) : t = e;
            return t
        }
            , p = function addQueryToPath(e, t) {
            if (t && Object.keys(t).length > 0) {
                var a = Object.keys(t).map(function (e) {
                    return e + "=" + t[e]
                }).join("&");
                return e.indexOf("?") >= 0 ? e + "&" + a : e + "?" + a
            }
            return e
        };
        a.d(t, "a", function () {
            return taroRequest
        });
        n.a.getApp();

        function taroRequest(e) {
            JSON.parse(JSON.stringify(e));
            var t = e
                , a = (t.header,
                t.url);
            t.credentials;
            a += (a.indexOf("?") > -1 ? "&" : "?") + "reqSource=h5";
            var n = function getTimeSign(e) {
                var t = e.url
                    , a = e.method
                    , n = void 0 === a ? "GET" : a
                    , o = e.data
                    , r = e.header
                    , u = void 0 === r ? {} : r
                    , d = n.toLowerCase()
                    , m = i.keyCode
                    , h = u["content-type"] || u["Content-Type"] || ""
                    , f = ""
                    , g = +new Date;
                return f = "get" !== d && ("post" !== d || "application/x-www-form-urlencoded" !== h.toLowerCase() && o && Object.keys(o).length) ? i.Md5encode(i.Base64Encode(i.AesEncrypt("" + JSON.stringify(l(o)))) + "_" + m + "_" + g) : i.Md5encode("_" + m + "_" + g),
                s(t) && (t = p(t, {
                    "lks": f,
                    "lkt": g
                }),
                    t = c(t)),
                    Object.assign(e, {
                        "url": t
                    })
            }(e = Object.assign(e, {
                "url": a
            }));
            return console.log("request: ", n),
                Object(o.a)(n).then(function (e) {
                    console.log("response: ", e);
                    var t = e && e.data || {};
                    t.errorCode,
                        t.success;
                    return Promise.resolve(e)
                })
        }
    }
    , , , , function (e, t, a) {
        "use strict";
        var n = a(1)
            , o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                    Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        }
            , i = {
            "app": n.a.getApp(),
            "isWeapp": !1,
            "isTestEnv": window.location.host.indexOf("pre") > -1 || !!window.location.port,
            "projectId": "",
            "H5Page": "",
            "WXPage": "",
            "getWXCommonParams": function getWXCommonParams() {
                return {
                    "openId": this.app.openId,
                    "pin": requirePlugin("loginPlugin").getPtPin()
                }
            },
            "sendPV": function sendPV(e) {
                var t = e.projectId
                    , a = e.H5Page
                    , n = e.WXPage;
                if (t && (this.projectId = t),
                a && (this.H5Page = a),
                n && (this.WXPage = n),
                    this.isWeapp) {
                    var i = this.getWXCommonParams();
                    this.app.globalData.qd && this.app.globalData.qd.startPage(o({
                        "ex1": t
                    }, i))
                } else {
                    var r = window.location.href;
                    window.__qd__ && window.__qd__.page && window.__qd__.page(r)
                }
            },
            "show": function show(e) {
                var t = e.moduleId
                    , a = e.WXParams
                    , n = e.H5Params
                    , o = this.projectId
                    , i = this.H5Page
                    , r = this.WXPage;
                this.isWeapp ? this.app.globalData.qd && this.app.globalData.qd.startEvent("0", {
                    "eid": r + "|" + t,
                    "ex1": o,
                    "param": a
                }) : (this.isTestEnv && (i = "pre-" + i),
                window.__qd__ && window.__qd__.imp({
                    "cls": "jr|keycount|" + i + "|" + t,
                    "v": n
                }))
            },
            "click": function click(e) {
                var t = e.moduleId
                    , a = e.WXParams
                    , n = e.H5Params
                    , i = e.H5PageManual
                    , r = e.WXPageManual
                    , s = this.projectId
                    , c = this.H5Page
                    , l = this.WXPage;
                if (i && r && (c = i,
                    l = r),
                    this.isWeapp) {
                    var p = this.getWXCommonParams();
                    this.app.globalData.qd && this.app.globalData.qd.startEvent("1", o({
                        "eid": l + "|" + t,
                        "ex1": s,
                        "param": a
                    }, p))
                } else
                    this.isTestEnv && (c = "pre-" + c),
                    window.__qd__ && window.__qd__.click({
                        "cls": "jr|keycount|" + c + "|" + t,
                        "v": n
                    })
            }
        };
        t.a = i
    }
    , , , function (e, t, a) {
        var n = a(42);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "sourceMap": !1,
            "insertAt": "top",
            "hmr": !0,
            "transform": void 0,
            "insertInto": void 0
        };
        a(40)(n, o);
        n.locals && (e.exports = n.locals)
    }
    , function (e, t, a) {
        (e.exports = a(39)(!1)).push([e.i, ".taro-scroll {\n  -webkit-overflow-scrolling: auto;\n}\n\n.taro-scroll::-webkit-scrollbar {\n  display: none;\n}\n\n.taro-scroll-view {\n  overflow: hidden;\n}\n\n.taro-scroll-view__scroll-x {\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.taro-scroll-view__scroll-y {\n  overflow-x: hidden;\n  overflow-y: scroll;\n}", ""])
    }
    , , , function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return f
        });
        var n = a(0)
            , o = a(1)
            , i = a(206)
            , r = a(201)
            , s = a(202)
            , c = a(53)
            , l = a(63)
            , p = a(66)
            , u = (a(50),
            a(33))
            , d = a(34)
            , m = function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }();
        var h = {
            "content-type": "application/json"
        }
            , f = function (e) {
            function ExchangeLevel(e) {
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, ExchangeLevel);
                var t = function _possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (ExchangeLevel.__proto__ || Object.getPrototypeOf(ExchangeLevel)).call(this, e));
                return t.scroll1px = function () {
                    setTimeout(function () {
                        (document.body || document.documentElement).scrollTop = 1,
                            console.log("scroll1px")
                    }, 0)
                }
                    ,
                    t.onHandleTouchMove = function (e) {
                        e.preventDefault(),
                            e.stopPropagation()
                    }
                    ,
                    t.state = {
                        "showExchangeSuccess": !1,
                        "showWriteAddress": !0,
                        "showCheckWriteAddress": !1,
                        "mailName": "",
                        "mailPhone": "",
                        "mailAddress": "",
                        "showExchangeFailContent": "",
                        "deviceInfo": {},
                        "coinNotEnough": !1
                    },
                    t
            }

            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    "constructor": {
                        "value": e,
                        "enumerable": !1,
                        "writable": !0,
                        "configurable": !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(ExchangeLevel, o["a"].Component),
                m(ExchangeLevel, [{
                    "key": "componentWillMount",
                    "value": function componentWillMount() {
                        var e = this;
                        u.a.loginJd(function (t) {
                            1 == t && e.getDeviceInfo()
                        })
                    }
                }, {
                    "key": "componentDidMount",
                    "value": function componentDidMount() {
                        var e = this
                            , t = this.props
                            , a = t.isShow
                            , n = t.productInfo;
                        n && n.showExchangeFailContent && this.setState({
                            "isShowPop": a,
                            "showExchangeFailContent": n.showExchangeFailContent
                        }),
                            this.countCoin(this.props),
                            window.addEventListener("focusout", function () {
                                e.scroll1px()
                            })
                    }
                }, {
                    "key": "componentWillReceiveProps",
                    "value": function componentWillReceiveProps(e) {
                        if (e.isShow != this.props.isShow) {
                            var t = e.productInfo;
                            t && t.showExchangeFailContent && this.setState({
                                "showExchangeSuccess": !1,
                                "showExchangeFailContent": t.showExchangeFailContent
                            }),
                                this.setState({
                                    "isShowPop": e.isShow
                                }),
                                this.countCoin(e)
                        }
                    }
                }, {
                    "key": "componentWillUnmount",
                    "value": function componentWillUnmount() {
                    }
                }, {
                    "key": "countCoin",
                    "value": function countCoin(e) {
                        var t = e.userCoin
                            , a = e.productInfo;
                        if (a) {
                            console.log(a, "productInfoproductInfo");
                            var n = Number(t) < a.salePrice;
                            if (this.setState({
                                "coinNotEnough": n
                            }),
                            n && (u.a.clickReport({}, {
                                "babelEventId": "expo_other_exch_jfbzP_zjf"
                            }),
                                u.a.clickReport({}, {
                                    "babelEventId": "expo_other_exch_jfbzP_close"
                                })),
                                a.isError)
                                u.a.clickReport({}, {
                                    "babelEventId": "expo_other_exch_ycP_zdl"
                                }),
                                    u.a.clickReport({}, {
                                        "babelEventId": "expo_other_exch_ycP_close"
                                    });
                            else if (a.exchangeFailContent) {
                                var o = a.exchangeFailContent[0];
                                this.expoReport(o)
                            }
                        }
                    }
                }, {
                    "key": "expoReport",
                    "value": function expoReport(e) {
                        "奖励被外星人抓走啦" == e ? (u.a.clickReport({}, {
                            "babelEventId": "expo_other_exch_fkP_zdl"
                        }),
                            u.a.clickReport({}, {
                                "babelEventId": "expo_other_exch_fkP_close"
                            })) : -1 != e.indexOf("已达上限") && (u.a.clickReport({}, {
                            "babelEventId": "expo_other_exch_dhxzP_kk"
                        }),
                            u.a.clickReport({}, {
                                "babelEventId": "expo_other_exch_dhxzP_close"
                            }))
                    }
                }, {
                    "key": "getDeviceInfo",
                    "value": function getDeviceInfo() {
                        var e = this;
                        u.a.checkGlobalFun(function (t) {
                            console.log("jdDog.getDeviceInfo------------", t),
                                e.setState({
                                    "deviceInfo": t || {}
                                })
                        })
                    }
                }, {
                    "key": "goReportPoint",
                    "value": function goReportPoint(e, t, a) {
                        var n = {
                            "babelEventId": t
                        };
                        a && (n.babelEventParam = {
                            "sku": a
                        }),
                            u.a.clickReport({
                                "moduleId": e,
                                "H5PageManual": "CWW_EXCHANE20200807",
                                "WXPageManual": "mini_CWW_EXCHANE20200807"
                            }, n)
                    }
                }, {
                    "key": "goOtherReportPoint",
                    "value": function goOtherReportPoint(e, t) {
                        "奖励被外星人抓走啦" == e ? "CLOSE" == t ? this.goReportPoint("fkpop_close", "other_exch_fkP_close") : this.goReportPoint("fkpop_zdl", "other_exch_fkP_zdl") : -1 != e.indexOf("已达上限") && ("CLOSE" == t ? this.goReportPoint("dhxzpop_close", "other_exch_dhxzP_close") : this.goReportPoint("dhxzpop_kk", "other_exch_dhxzP_kk"))
                    }
                }, {
                    "key": "inputMailName",
                    "value": function inputMailName(e) {
                        this.setState({
                            "mailName": e.detail.value
                        })
                    }
                }, {
                    "key": "inputMailPhone",
                    "value": function inputMailPhone(e) {
                        this.setState({
                            "mailPhone": e.detail.value
                        })
                    }
                }, {
                    "key": "inputMailAddress",
                    "value": function inputMailAddress(e) {
                        this.setState({
                            "mailAddress": e.detail.value
                        })
                    }
                }, {
                    "key": "closeLayer",
                    "value": function closeLayer(e, t, a) {
                        var n = this;
                        this.setState({
                            "showExchangeSuccess": !1,
                            "showWriteAddress": !0,
                            "showCheckWriteAddress": !1,
                            "mailName": "",
                            "mailPhone": "",
                            "mailAddress": "",
                            "showExchangeFailContent": "",
                            "isShowPop": !1
                        }),
                            setTimeout(function () {
                                t ? u.a.jumpToOrder(t) : e && (n.props.params && n.props.params.fromBabel ? window.history.go(-1) : o.a.navigateBack());
                                var i = !a && (n.state.showExchangeSuccess || "这个商品暂时无货哦" == n.state.showExchangeFailContent[0]);
                                n.props.onCloseConfirmLayer(i)
                            }, 20)
                    }
                }, {
                    "key": "getRouterPath",
                    "value": function getRouterPath() {
                        return this.$router.path
                    }
                }, {
                    "key": "jumpPage",
                    "value": function jumpPage(e) {
                        var t = this
                            , a = "";
                        switch (e) {
                            case "myCoin":
                                a = "/pages/otherPage/coinsDetail";
                                break;
                            case "mission":
                                "/pages/jdDog/jdDog" !== this.getRouterPath() ? a = "/pages/jdDog/jdDog?showMission=true" : setTimeout(function () {
                                    t.props.onShowMission()
                                }, 200);
                                break;
                            case "coinRecord":
                                a = "/pages/exchange/exchangeRecord";
                                break;
                            case "goback":
                                o.a.navigateBack()
                        }
                        this.closeLayer(!1, !1, !0),
                        "" != a && o.a.navigateTo({
                            "url": a
                        })
                    }
                }, {
                    "key": "addressFromCheck",
                    "value": function addressFromCheck() {
                        this.state.mailName && this.state.mailPhone && this.state.mailAddress ? /^1[3456789]\d{9}$/.test(this.state.mailPhone) ? this.setState({
                            "showWriteAddress": !1,
                            "showCheckWriteAddress": !0
                        }) : Object(i.d)({
                            "title": "手机号填写有误，请重新填写～",
                            "icon": "none",
                            "duration": 2e3
                        }) : Object(i.d)({
                            "title": "收货地址填写有误，请重新填写～",
                            "icon": "none",
                            "duration": 2e3
                        })
                    }
                }, {
                    "key": "getPopLayer",
                    "value": function getPopLayer(e) {
                        var t = this
                            , a = this.closeLayer.bind(this);
                        if (console.log(e, "productInfo"),
                            e.isError)
                            return n.j.createElement(r.a, {
                                "className": "check-exchange-pop check-exchange-pop-dis",
                                "onClick": function onClick() {
                                    a(!0)
                                }
                            }, n.j.createElement(r.a, {
                                "className": "check-exchange-content",
                                "onClick": function onClick(e) {
                                    e.stopPropagation()
                                }
                            }, n.j.createElement(s.a, {
                                "className": "check_close_btn",
                                "onClick": function onClick() {
                                    a(!0),
                                        t.goReportPoint("ycpop_close", "other_exch_ycP_close")
                                },
                                "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                            }), n.j.createElement(r.a, {
                                "className": "check_content check_content_2"
                            }, n.j.createElement(r.a, null, "活动太火爆了"), n.j.createElement(r.a, null, "请稍后重试～")), n.j.createElement(r.a, {
                                "className": "check_btns check_result"
                            }, n.j.createElement(r.a, {
                                "className": "absolute-center check_submit",
                                "onClick": function onClick() {
                                    a(!0),
                                        t.goReportPoint("ycpop_zdl", "other_exch_ycP_zdl")
                                }
                            }, "知道了"))));
                        if (e.exchangeFailContent) {
                            var o = e.exchangeFailContent;
                            return n.j.createElement(r.a, {
                                "className": e.isGoBack ? "check-exchange-pop check-exchange-pop-dis" : "check-exchange-pop",
                                "onClick": function onClick() {
                                    a(e.isGoBack)
                                }
                            }, n.j.createElement(r.a, {
                                "className": "check-exchange-content",
                                "onClick": function onClick(e) {
                                    e.stopPropagation()
                                }
                            }, n.j.createElement(s.a, {
                                "className": "check_close_btn",
                                "onClick": function onClick() {
                                    a(e.isGoBack),
                                        t.goOtherReportPoint(o[0], "CLOSE")
                                },
                                "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                            }), n.j.createElement(r.a, {
                                "className": "check_content check_content_2"
                            }, n.j.createElement(r.a, null, o[0]), n.j.createElement(r.a, null, o[1])), n.j.createElement(r.a, {
                                "className": "check_btns check_result"
                            }, n.j.createElement(r.a, {
                                "className": "absolute-center check_submit",
                                "onClick": function onClick() {
                                    a(e.isGoBack, e.orderId),
                                        t.goOtherReportPoint(o[0], "BUTTON")
                                }
                            }, o[2]))))
                        }
                        var i = this.state
                            , u = i.showWriteAddress
                            , d = i.showCheckWriteAddress
                            , m = i.showExchangeSuccess
                            , h = i.mailName
                            , f = i.mailPhone
                            , g = i.mailAddress
                            , _ = i.showExchangeFailContent;
                        return i.coinNotEnough ? n.j.createElement(r.a, {
                            "className": "check-exchange-pop",
                            "onClick": function onClick() {
                                a()
                            }
                        }, n.j.createElement(r.a, {
                            "className": "check-exchange-content",
                            "onClick": function onClick(e) {
                                e.stopPropagation()
                            }
                        }, n.j.createElement(s.a, {
                            "className": "check_close_btn",
                            "onClick": function onClick() {
                                a(),
                                    t.goReportPoint("jfbzpop_close", "other_exch_jfbzP_close")
                            },
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                        }), n.j.createElement(r.a, {
                            "className": "check_content check_content_2"
                        }, n.j.createElement(r.a, null, "主人的积分不足"), n.j.createElement(r.a, null, "快去赚积分拿奖励吧～")), n.j.createElement(r.a, {
                            "className": "check_btns check_result"
                        }, n.j.createElement(r.a, {
                            "className": "absolute-center check_submit",
                            "onClick": function onClick() {
                                t.jumpPage("mission"),
                                    t.goReportPoint("jfbzpop_zjf", "other_exch_jfbzP_zjf")
                            }
                        }, "去赚积分")))) : m ? n.j.createElement(r.a, {
                            "className": "check-exchange-pop",
                            "onClick": function onClick() {
                                a(),
                                    t.goReportPoint("dhpop_close", "other_exch_dhP_close")
                            }
                        }, n.j.createElement(r.a, {
                            "className": "check-exchange-content",
                            "onClick": function onClick(e) {
                                e.stopPropagation()
                            }
                        }, n.j.createElement(s.a, {
                            "className": "check_close_btn",
                            "onClick": function onClick() {
                                a(),
                                    t.goReportPoint("dhpop_close", "other_exch_dhP_close")
                            },
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                        }), n.j.createElement(c.a, {
                            "className": "check_title"
                        }, "兑换成功"), n.j.createElement(c.a, {
                            "className": "check_content"
                        }, "address" == e.giftType ? "恭喜您提交成功，工作人员会在30个工作日之内按照提交地址发出，请耐心等候。" : "coupon" == e.giftType ? "您兑换的商品已以京券形式发放至您的账户，请到我的-优惠券查看" : "兑换成功，24小时内" + (e.giftName || "") + "将发放至您的京东个人账户，请您查收"), n.j.createElement(r.a, {
                            "className": "check_btns check_result"
                        }, n.j.createElement(r.a, {
                            "className": "absolute-center check_cancel",
                            "onClick": function onClick() {
                                t.jumpPage("coinRecord"),
                                    t.goReportPoint("dhpop_chakan", "other_exch_dhP_chakan")
                            }
                        }, "查看明细"), n.j.createElement(r.a, {
                            "className": "absolute-center check_submit",
                            "onClick": function onClick() {
                                t.jumpPage("mission"),
                                    t.goReportPoint("dhpop_zjf", "other_exch_dhP_zjf")
                            }
                        }, "继续赚积分")))) : _ ? n.j.createElement(r.a, {
                            "className": "check-exchange-pop",
                            "onClick": function onClick() {
                                a()
                            }
                        }, n.j.createElement(r.a, {
                            "className": "check-exchange-content",
                            "onClick": function onClick(e) {
                                e.stopPropagation()
                            }
                        }, n.j.createElement(s.a, {
                            "className": "check_close_btn",
                            "onClick": function onClick() {
                                a(),
                                    t.goOtherReportPoint(_[0], "CLOSE")
                            },
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                        }), n.j.createElement(r.a, {
                            "className": "check_content check_content_2"
                        }, n.j.createElement(r.a, null, _[0]), n.j.createElement(r.a, null, _[1])), n.j.createElement(r.a, {
                            "className": "check_btns check_result"
                        }, n.j.createElement(r.a, {
                            "className": "absolute-center check_submit",
                            "onClick": function onClick() {
                                a(),
                                    t.goOtherReportPoint(_[0], "BUTTON")
                            }
                        }, _[2])))) : "address" == e.giftType && d ? n.j.createElement(r.a, {
                            "className": "check-exchange-pop",
                            "onClick": function onClick() {
                                a()
                            }
                        }, n.j.createElement(r.a, {
                            "className": "check-exchange-content",
                            "onClick": function onClick(e) {
                                e.stopPropagation()
                            }
                        }, n.j.createElement(s.a, {
                            "className": "check_close_btn",
                            "onClick": function onClick() {
                                a()
                            },
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                        }), n.j.createElement(c.a, {
                            "className": "check_title mg_b20"
                        }, "确认地址"), n.j.createElement(r.a, {
                            "className": "check_exchange_tip"
                        }, "确认奖品发放至如下地址："), n.j.createElement(r.a, {
                            "className": "check_exchange_text"
                        }, "姓名：", h), n.j.createElement(r.a, {
                            "className": "check_exchange_text"
                        }, "手机号：", f), n.j.createElement(r.a, {
                            "className": "check_exchange_text"
                        }, g), n.j.createElement(r.a, {
                            "className": "address-tips2"
                        }, "一经确认不允许修改哦～"), n.j.createElement(r.a, {
                            "className": "check_btns"
                        }, n.j.createElement(r.a, {
                            "className": "absolute-center check_submit",
                            "style": "margin-right: 20px;",
                            "onClick": this.checkConfirm.bind(this, e, "showCheckWriteAddress")
                        }, "确认无误"), n.j.createElement(r.a, {
                            "className": "absolute-center check_cancel",
                            "style": "margin-right: 0",
                            "onClick": function onClick() {
                                t.setState({
                                    "showWriteAddress": !0,
                                    "showCheckWriteAddress": !1
                                })
                            }
                        }, "修改地址")))) : "address" == e.giftType && u ? n.j.createElement(r.a, {
                            "className": "check-exchange-pop",
                            "onClick": function onClick() {
                                a()
                            }
                        }, n.j.createElement(r.a, {
                            "className": "check-exchange-content",
                            "onClick": function onClick(e) {
                                e.stopPropagation()
                            }
                        }, n.j.createElement(s.a, {
                            "className": "check_close_btn",
                            "onClick": function onClick() {
                                a()
                            },
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                        }), n.j.createElement(c.a, {
                            "className": "check_title mg_b20"
                        }, "填写收货地址"), n.j.createElement(l.a, {
                            "className": "address-item-value",
                            "value": h,
                            "maxLength": "100",
                            "onInput": this.inputMailName.bind(this),
                            "placeholder": "请输入姓名",
                            "placeholderStyle": "color: #cfcfcf;"
                        }), n.j.createElement(l.a, {
                            "className": "address-item-value",
                            "value": f,
                            "maxLength": "11",
                            "onInput": this.inputMailPhone.bind(this),
                            "placeholder": "请输入手机号码",
                            "placeholderStyle": "color: #cfcfcf;"
                        }), n.j.createElement(p.a, {
                            "className": "address-item-value textarea",
                            "maxlength": "200",
                            "value": g,
                            "onInput": this.inputMailAddress.bind(this),
                            "placeholder": "请输入详细地址",
                            "placeholderStyle": "color: #cfcfcf;"
                        }), n.j.createElement(r.a, {
                            "className": "address-tips"
                        }, n.j.createElement(r.a, null, "请您仔细核对收货地址和手机号码"), n.j.createElement(r.a, null, "不然商品会走丢哦～")), n.j.createElement(r.a, {
                            "className": "absolute-center address-btn",
                            "onClick": this.addressFromCheck.bind(this)
                        }, "确定"))) : "jd_bean" == e.giftType || "coupon" == e.giftType ? n.j.createElement(r.a, {
                            "className": "check-exchange-pop",
                            "onClick": function onClick() {
                                a()
                            }
                        }, n.j.createElement(r.a, {
                            "className": "check-exchange-content",
                            "onClick": function onClick(e) {
                                e.stopPropagation()
                            }
                        }, n.j.createElement(s.a, {
                            "className": "check_close_btn",
                            "onClick": function onClick() {
                                a()
                            },
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/coin_close_btn.png&auth=NGO1NTLIQigvVHvl1orVrJNN2yVhPTQ2JmU9MTk5NDgwNDQyOCZ0PTE1OTQ4MDQ0MjkmZj01Ml8yMDA3XzEwNDdfNTEmcj1YT0QyRzdmalQz"
                        }), n.j.createElement(c.a, {
                            "className": "check_title"
                        }, "确认兑换"), n.j.createElement(r.a, {
                            "className": "check_content"
                        }, n.j.createElement(r.a, null, "jd_bean" == e.giftType ? "需使用" + e.salePrice + "积分兑换" + e.giftName : "需使用" + e.salePrice + "积分兑换该商品"), n.j.createElement(r.a, null, "coupon" == e.giftType ? "（兑换成功后，将以优惠券形式发放到您的京东账户）" : "")), n.j.createElement(r.a, {
                            "className": "check_btns"
                        }, n.j.createElement(r.a, {
                            "className": "absolute-center check_cancel",
                            "onClick": function onClick() {
                                a()
                            }
                        }, "取消"), n.j.createElement(r.a, {
                            "className": "absolute-center check_submit",
                            "onClick": this.checkConfirm.bind(this, e)
                        }, "address" == e.giftType ? "确认并填写地址" : "确定")))) : void 0
                    }
                }, {
                    "key": "checkConfirm",
                    "value": function checkConfirm(e, t) {
                        var a = this
                            , n = this.state.deviceInfo;
                        if ("address" == e.giftType && "showCheckWriteAddress" != t)
                            this.setState({
                                "showWriteAddress": !0
                            });
                        else if ("jd_bean" == e.giftType || "coupon" == e.giftType || "address" == e.giftType && "showCheckWriteAddress" == t) {
                            var o = {
                                "orderSource": "pet"
                            };
                            "address" == e.giftType && this.state.showCheckWriteAddress && (o = {
                                "addressDetail": this.state.mailAddress,
                                "userName": this.state.mailName,
                                "telPhone": this.state.mailPhone,
                                "orderSource": "pet"
                            }),
                                o.saleInfoId = e.id;
                            var i = {
                                "buyParam": o,
                                "deviceInfo": n
                            };
                            Object(d.a)({
                                "url": "" + u.a.interFaces.giftExchange,
                                "data": i,
                                "credentials": "include",
                                "method": "POST",
                                "header": h
                            }).then(function (t) {
                                console.log(t, "res");
                                var n = t.data;
                                if (n && n.success)
                                    switch (n.errorCode) {
                                        case "buy_success":
                                            a.setState({
                                                "showExchangeSuccess": !0
                                            }),
                                            "/pages/jdDog/jdDog" === a.getRouterPath() && setTimeout(function () {
                                                a.props.onRefreshHome()
                                            }, 200),
                                                u.a.clickReport({}, {
                                                    "babelEventId": "expo_other_exch_dhP_chakan"
                                                }),
                                                u.a.clickReport({}, {
                                                    "babelEventId": "expo_other_exch_dhP_zjf"
                                                }),
                                                u.a.clickReport({}, {
                                                    "babelEventId": "expo_other_exch_dhP_close"
                                                });
                                            break;
                                        case "buy_limit":
                                            a.setState({
                                                "showExchangeSuccess": !1,
                                                "showExchangeFailContent": [{
                                                    "day": "每日",
                                                    "week": "每周",
                                                    "month": "每月",
                                                    "once": ""
                                                }[e.buyLimit] + "只能兑换一次哦~", "请把机会留给更多的小伙伴～", "看看别的好东西"]
                                            }),
                                                a.expoReport("兑换" + ("jd_bean" == e.giftType ? "京豆" : "该商品") + "已达上限");
                                            break;
                                        case "stock_empty":
                                            a.setState({
                                                "showExchangeSuccess": !1,
                                                "showExchangeFailContent": ["这个商品暂时无货哦", "小二在飞速补货中...", "看看别的好东西"]
                                            });
                                            break;
                                        case "sku_offsale":
                                            a.setState({
                                                "showExchangeSuccess": !1,
                                                "showExchangeFailContent": ["该商品已下架", "去看看别的好物吧", "去看看别的"]
                                            });
                                            break;
                                        default:
                                            a.setState({
                                                "showExchangeSuccess": !1,
                                                "showExchangeFailContent": ["奖励被外星人抓走啦", "请稍后再试～", "我知道了"]
                                            })
                                    }
                                else
                                    a.setState({
                                        "showExchangeSuccess": !1,
                                        "showExchangeFailContent": ["奖励被外星人抓走啦", "请稍后再试～", "我知道了"]
                                    })
                            })
                        }
                    }
                }, {
                    "key": "render",
                    "value": function render() {
                        var e = this.props.productInfo
                            , t = this.state.isShowPop;
                        return n.j.createElement(r.a, {
                            "className": "check_exchange_pop_wrap",
                            "onTouchMove": this.onHandleTouchMove
                        }, t ? this.getPopLayer(e) : null)
                    }
                }]),
                ExchangeLevel
        }()
    }
    , function (e, t, a) {
        var n = a(47);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "sourceMap": !1,
            "insertAt": "top",
            "hmr": !0,
            "transform": void 0,
            "insertInto": void 0
        };
        a(40)(n, o);
        n.locals && (e.exports = n.locals)
    }
    , function (e, t, a) {
        (e.exports = a(39)(!1)).push([e.i, "input {\n  display: block;\n  height: 24px;\n  text-align: inherit;\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap;\n}", ""])
    }
    , function (e, t, a) {
        var n = a(49)
            , o = "98c14c997fde50cc18bdefecfd48ceb7"
            , i = n.enc.Utf8.parse(o)
            , r = n.enc.Utf8.parse("ea653f4f3c5eda12");
        e.exports = {
            "AesEncrypt": function AesEncrypt(e) {
                var t = n.enc.Utf8.parse(e);
                return n.AES.encrypt(t, i, {
                    "iv": r,
                    "mode": n.mode.CBC,
                    "padding": n.pad.Pkcs7
                }).ciphertext.toString()
            },
            "AesDecrypt": function AesDecrypt(e) {
                var t = n.enc.Hex.parse(e)
                    , a = n.enc.Base64.stringify(t);
                return n.AES.decrypt(a, i, {
                    "iv": r,
                    "mode": n.mode.CBC,
                    "padding": n.pad.Pkcs7
                }).toString(n.enc.Utf8).toString()
            },
            "Base64Encode": function Base64Encode(e) {
                var t = n.enc.Utf8.parse(e);
                return n.enc.Base64.stringify(t)
            },
            "Base64Decode": function Base64Decode(e) {
                return n.enc.Base64.parse(e).toString(n.enc.Utf8)
            },
            "Md5encode": function Md5encode(e) {
                return n.MD5(e).toString()
            },
            "keyCode": o
        }
    }
    , function (e, t) {
        var a, n, o = o || function (e, t) {
            var a = {}
                , n = a.lib = {}
                , o = function s() {
            }
                , i = n.Base = {
                "extend": function extend(e) {
                    o.prototype = this;
                    var t = new o;
                    return e && t.mixIn(e),
                    t.hasOwnProperty("init") || (t.init = function () {
                            t.$super.init.apply(this, arguments)
                        }
                    ),
                        t.init.prototype = t,
                        t.$super = this,
                        t
                },
                "create": function create() {
                    var e = this.extend();
                    return e.init.apply(e, arguments),
                        e
                },
                "init": function init() {
                },
                "mixIn": function mixIn(e) {
                    for (var t in e)
                        e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                },
                "clone": function clone() {
                    return this.init.prototype.extend(this)
                }
            }
                , r = n.WordArray = i.extend({
                "init": function init(e, t) {
                    e = this.words = e || [],
                        this.sigBytes = void 0 != t ? t : 4 * e.length
                },
                "toString": function toString(e) {
                    return (e || c).stringify(this)
                },
                "concat": function concat(e) {
                    var t = this.words
                        , a = e.words
                        , n = this.sigBytes;
                    if (e = e.sigBytes,
                        this.clamp(),
                    n % 4)
                        for (var o = 0; o < e; o++)
                            t[n + o >>> 2] |= (a[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (n + o) % 4 * 8;
                    else if (65535 < a.length)
                        for (o = 0; o < e; o += 4)
                            t[n + o >>> 2] = a[o >>> 2];
                    else
                        t.push.apply(t, a);
                    return this.sigBytes += e,
                        this
                },
                "clamp": function clamp() {
                    var t = this.words
                        , a = this.sigBytes;
                    t[a >>> 2] &= 4294967295 << 32 - a % 4 * 8,
                        t.length = e.ceil(a / 4)
                },
                "clone": function clone() {
                    var e = i.clone.call(this);
                    return e.words = this.words.slice(0),
                        e
                },
                "random": function random(t) {
                    for (var a = [], n = 0; n < t; n += 4)
                        a.push(4294967296 * e.random() | 0);
                    return new r.init(a, t)
                }
            })
                , s = a.enc = {}
                , c = s.Hex = {
                "stringify": function stringify(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var a = [], n = 0; n < e; n++) {
                        var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                        a.push((o >>> 4).toString(16)),
                            a.push((15 & o).toString(16))
                    }
                    return a.join("")
                },
                "parse": function parse(e) {
                    for (var t = e.length, a = [], n = 0; n < t; n += 2)
                        a[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                    return new r.init(a, t / 2)
                }
            }
                , l = s.Latin1 = {
                "stringify": function stringify(e) {
                    var t = e.words;
                    e = e.sigBytes;
                    for (var a = [], n = 0; n < e; n++)
                        a.push(String.fromCharCode(t[n >>> 2] >>> 24 - n % 4 * 8 & 255));
                    return a.join("")
                },
                "parse": function parse(e) {
                    for (var t = e.length, a = [], n = 0; n < t; n++)
                        a[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                    return new r.init(a, t)
                }
            }
                , p = s.Utf8 = {
                "stringify": function stringify(e) {
                    try {
                        return decodeURIComponent(escape(l.stringify(e)))
                    } catch (e) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                "parse": function parse(e) {
                    return l.parse(unescape(encodeURIComponent(e)))
                }
            }
                , u = n.BufferedBlockAlgorithm = i.extend({
                "reset": function reset() {
                    this._data = new r.init,
                        this._nDataBytes = 0
                },
                "_append": function _append(e) {
                    "string" == typeof e && (e = p.parse(e)),
                        this._data.concat(e),
                        this._nDataBytes += e.sigBytes
                },
                "_process": function _process(t) {
                    var a = this._data
                        , n = a.words
                        , o = a.sigBytes
                        , i = this.blockSize
                        , s = o / (4 * i);
                    if (t = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * i,
                        o = e.min(4 * t, o),
                        t) {
                        for (var c = 0; c < t; c += i)
                            this._doProcessBlock(n, c);
                        c = n.splice(0, t),
                            a.sigBytes -= o
                    }
                    return new r.init(c, o)
                },
                "clone": function clone() {
                    var e = i.clone.call(this);
                    return e._data = this._data.clone(),
                        e
                },
                "_minBufferSize": 0
            });
            n.Hasher = u.extend({
                "cfg": i.extend(),
                "init": function init(e) {
                    this.cfg = this.cfg.extend(e),
                        this.reset()
                },
                "reset": function reset() {
                    u.reset.call(this),
                        this._doReset()
                },
                "update": function update(e) {
                    return this._append(e),
                        this._process(),
                        this
                },
                "finalize": function finalize(e) {
                    return e && this._append(e),
                        this._doFinalize()
                },
                "blockSize": 16,
                "_createHelper": function _createHelper(e) {
                    return function (t, a) {
                        return new e.init(a).finalize(t)
                    }
                },
                "_createHmacHelper": function _createHmacHelper(e) {
                    return function (t, a) {
                        return new d.HMAC.init(e, a).finalize(t)
                    }
                }
            });
            var d = a.algo = {};
            return a
        }(Math);
        n = (a = o).lib.WordArray,
            a.enc.Base64 = {
                "stringify": function stringify(e) {
                    var t = e.words
                        , a = e.sigBytes
                        , n = this._map;
                    e.clamp(),
                        e = [];
                    for (var o = 0; o < a; o += 3)
                        for (var i = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, r = 0; 4 > r && o + .75 * r < a; r++)
                            e.push(n.charAt(i >>> 6 * (3 - r) & 63));
                    if (t = n.charAt(64))
                        for (; e.length % 4;)
                            e.push(t);
                    return e.join("")
                },
                "parse": function parse(e) {
                    var t = e.length
                        , a = this._map;
                    (o = a.charAt(64)) && -1 != (o = e.indexOf(o)) && (t = o);
                    for (var o = [], i = 0, r = 0; r < t; r++)
                        if (r % 4) {
                            var s = a.indexOf(e.charAt(r - 1)) << r % 4 * 2
                                , c = a.indexOf(e.charAt(r)) >>> 6 - r % 4 * 2;
                            o[i >>> 2] |= (s | c) << 24 - i % 4 * 8,
                                i++
                        }
                    return n.create(o, i)
                },
                "_map": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            },
            function (e) {
                function p(e, t, a, n, o, i, r) {
                    return ((e = e + (t & a | ~t & n) + o + r) << i | e >>> 32 - i) + t
                }

                function d(e, t, a, n, o, i, r) {
                    return ((e = e + (t & n | a & ~n) + o + r) << i | e >>> 32 - i) + t
                }

                function l(e, t, a, n, o, i, r) {
                    return ((e = e + (t ^ a ^ n) + o + r) << i | e >>> 32 - i) + t
                }

                function s(e, t, a, n, o, i, r) {
                    return ((e = e + (a ^ (t | ~n)) + o + r) << i | e >>> 32 - i) + t
                }

                for (var t = o, a = (i = t.lib).WordArray, n = i.Hasher, i = t.algo, r = [], c = 0; 64 > c; c++)
                    r[c] = 4294967296 * e.abs(e.sin(c + 1)) | 0;
                i = i.MD5 = n.extend({
                    "_doReset": function _doReset() {
                        this._hash = new a.init([1732584193, 4023233417, 2562383102, 271733878])
                    },
                    "_doProcessBlock": function _doProcessBlock(e, t) {
                        for (var a = 0; 16 > a; a++) {
                            var n = e[c = t + a];
                            e[c] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8)
                        }
                        a = this._hash.words;
                        var o, i, c = e[t + 0], u = (n = e[t + 1],
                                e[t + 2]), m = e[t + 3], h = e[t + 4], f = e[t + 5], g = e[t + 6], _ = e[t + 7],
                            b = e[t + 8], y = e[t + 9], j = e[t + 10], v = e[t + 11], E = e[t + 12], k = e[t + 13],
                            w = e[t + 14], D = e[t + 15], T = a[0],
                            N = s(N = s(N = s(N = s(N = l(N = l(N = l(N = l(N = d(N = d(N = d(N = d(N = p(N = p(N = p(N = p(N = a[1], i = p(i = a[2], o = p(o = a[3], T = p(T, N, i, o, c, 7, r[0]), N, i, n, 12, r[1]), T, N, u, 17, r[2]), o, T, m, 22, r[3]), i = p(i, o = p(o, T = p(T, N, i, o, h, 7, r[4]), N, i, f, 12, r[5]), T, N, g, 17, r[6]), o, T, _, 22, r[7]), i = p(i, o = p(o, T = p(T, N, i, o, b, 7, r[8]), N, i, y, 12, r[9]), T, N, j, 17, r[10]), o, T, v, 22, r[11]), i = p(i, o = p(o, T = p(T, N, i, o, E, 7, r[12]), N, i, k, 12, r[13]), T, N, w, 17, r[14]), o, T, D, 22, r[15]), i = d(i, o = d(o, T = d(T, N, i, o, n, 5, r[16]), N, i, g, 9, r[17]), T, N, v, 14, r[18]), o, T, c, 20, r[19]), i = d(i, o = d(o, T = d(T, N, i, o, f, 5, r[20]), N, i, j, 9, r[21]), T, N, D, 14, r[22]), o, T, h, 20, r[23]), i = d(i, o = d(o, T = d(T, N, i, o, y, 5, r[24]), N, i, w, 9, r[25]), T, N, m, 14, r[26]), o, T, b, 20, r[27]), i = d(i, o = d(o, T = d(T, N, i, o, k, 5, r[28]), N, i, u, 9, r[29]), T, N, _, 14, r[30]), o, T, E, 20, r[31]), i = l(i, o = l(o, T = l(T, N, i, o, f, 4, r[32]), N, i, b, 11, r[33]), T, N, v, 16, r[34]), o, T, w, 23, r[35]), i = l(i, o = l(o, T = l(T, N, i, o, n, 4, r[36]), N, i, h, 11, r[37]), T, N, _, 16, r[38]), o, T, j, 23, r[39]), i = l(i, o = l(o, T = l(T, N, i, o, k, 4, r[40]), N, i, c, 11, r[41]), T, N, m, 16, r[42]), o, T, g, 23, r[43]), i = l(i, o = l(o, T = l(T, N, i, o, y, 4, r[44]), N, i, E, 11, r[45]), T, N, D, 16, r[46]), o, T, u, 23, r[47]), i = s(i, o = s(o, T = s(T, N, i, o, c, 6, r[48]), N, i, _, 10, r[49]), T, N, w, 15, r[50]), o, T, f, 21, r[51]), i = s(i, o = s(o, T = s(T, N, i, o, E, 6, r[52]), N, i, m, 10, r[53]), T, N, j, 15, r[54]), o, T, n, 21, r[55]), i = s(i, o = s(o, T = s(T, N, i, o, b, 6, r[56]), N, i, D, 10, r[57]), T, N, g, 15, r[58]), o, T, k, 21, r[59]), i = s(i, o = s(o, T = s(T, N, i, o, h, 6, r[60]), N, i, v, 10, r[61]), T, N, u, 15, r[62]), o, T, y, 21, r[63]);
                        a[0] = a[0] + T | 0,
                            a[1] = a[1] + N | 0,
                            a[2] = a[2] + i | 0,
                            a[3] = a[3] + o | 0
                    },
                    "_doFinalize": function _doFinalize() {
                        var t = this._data
                            , a = t.words
                            , n = 8 * this._nDataBytes
                            , o = 8 * t.sigBytes;
                        a[o >>> 5] |= 128 << 24 - o % 32;
                        var i = e.floor(n / 4294967296);
                        for (a[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8),
                                 a[14 + (o + 64 >>> 9 << 4)] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8),
                                 t.sigBytes = 4 * (a.length + 1),
                                 this._process(),
                                 a = (t = this._hash).words,
                                 n = 0; 4 > n; n++)
                            o = a[n],
                                a[n] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                        return t
                    },
                    "clone": function clone() {
                        var e = n.clone.call(this);
                        return e._hash = this._hash.clone(),
                            e
                    }
                }),
                    t.MD5 = n._createHelper(i),
                    t.HmacMD5 = n._createHmacHelper(i)
            }(Math),
            function () {
                var e, t = o, a = (e = t.lib).Base, n = e.WordArray, i = (e = t.algo).EvpKDF = a.extend({
                    "cfg": a.extend({
                        "keySize": 4,
                        "hasher": e.MD5,
                        "iterations": 1
                    }),
                    "init": function init(e) {
                        this.cfg = this.cfg.extend(e)
                    },
                    "compute": function compute(e, t) {
                        for (var a = (s = this.cfg).hasher.create(), o = n.create(), i = o.words, r = s.keySize, s = s.iterations; i.length < r;) {
                            c && a.update(c);
                            var c = a.update(e).finalize(t);
                            a.reset();
                            for (var l = 1; l < s; l++)
                                c = a.finalize(c),
                                    a.reset();
                            o.concat(c)
                        }
                        return o.sigBytes = 4 * r,
                            o
                    }
                });
                t.EvpKDF = function (e, t, a) {
                    return i.create(a).compute(e, t)
                }
            }(),
        o.lib.Cipher || function (e) {
            var t = (h = o).lib
                , a = t.Base
                , n = t.WordArray
                , i = t.BufferedBlockAlgorithm
                , r = h.enc.Base64
                , s = h.algo.EvpKDF
                , c = t.Cipher = i.extend({
                "cfg": a.extend(),
                "createEncryptor": function createEncryptor(e, t) {
                    return this.create(this._ENC_XFORM_MODE, e, t)
                },
                "createDecryptor": function createDecryptor(e, t) {
                    return this.create(this._DEC_XFORM_MODE, e, t)
                },
                "init": function init(e, t, a) {
                    this.cfg = this.cfg.extend(a),
                        this._xformMode = e,
                        this._key = t,
                        this.reset()
                },
                "reset": function reset() {
                    i.reset.call(this),
                        this._doReset()
                },
                "process": function process(e) {
                    return this._append(e),
                        this._process()
                },
                "finalize": function finalize(e) {
                    return e && this._append(e),
                        this._doFinalize()
                },
                "keySize": 4,
                "ivSize": 4,
                "_ENC_XFORM_MODE": 1,
                "_DEC_XFORM_MODE": 2,
                "_createHelper": function _createHelper(e) {
                    return {
                        "encrypt": function encrypt(t, a, n) {
                            return ("string" == typeof a ? f : m).encrypt(e, t, a, n)
                        },
                        "decrypt": function decrypt(t, a, n) {
                            return ("string" == typeof a ? f : m).decrypt(e, t, a, n)
                        }
                    }
                }
            });
            t.StreamCipher = c.extend({
                "_doFinalize": function _doFinalize() {
                    return this._process(!0)
                },
                "blockSize": 1
            });
            var l = h.mode = {}
                , p = function x(e, t, a) {
                var n = this._iv;
                n ? this._iv = void 0 : n = this._prevBlock;
                for (var o = 0; o < a; o++)
                    e[t + o] ^= n[o]
            }
                , u = (t.BlockCipherMode = a.extend({
                "createEncryptor": function createEncryptor(e, t) {
                    return this.Encryptor.create(e, t)
                },
                "createDecryptor": function createDecryptor(e, t) {
                    return this.Decryptor.create(e, t)
                },
                "init": function init(e, t) {
                    this._cipher = e,
                        this._iv = t
                }
            })).extend();
            u.Encryptor = u.extend({
                "processBlock": function processBlock(e, t) {
                    var a = this._cipher
                        , n = a.blockSize;
                    p.call(this, e, t, n),
                        a.encryptBlock(e, t),
                        this._prevBlock = e.slice(t, t + n)
                }
            }),
                u.Decryptor = u.extend({
                    "processBlock": function processBlock(e, t) {
                        var a = this._cipher
                            , n = a.blockSize
                            , o = e.slice(t, t + n);
                        a.decryptBlock(e, t),
                            p.call(this, e, t, n),
                            this._prevBlock = o
                    }
                }),
                l = l.CBC = u,
                u = (h.pad = {}).Pkcs7 = {
                    "pad": function pad(e, t) {
                        for (var a, o = (a = (a = 4 * t) - e.sigBytes % a) << 24 | a << 16 | a << 8 | a, i = [], r = 0; r < a; r += 4)
                            i.push(o);
                        a = n.create(i, a),
                            e.concat(a)
                    },
                    "unpad": function unpad(e) {
                        e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
                    }
                },
                t.BlockCipher = c.extend({
                    "cfg": c.cfg.extend({
                        "mode": l,
                        "padding": u
                    }),
                    "reset": function reset() {
                        c.reset.call(this);
                        var e = (t = this.cfg).iv
                            , t = t.mode;
                        if (this._xformMode == this._ENC_XFORM_MODE)
                            var a = t.createEncryptor;
                        else
                            a = t.createDecryptor,
                                this._minBufferSize = 1;
                        this._mode = a.call(t, this, e && e.words)
                    },
                    "_doProcessBlock": function _doProcessBlock(e, t) {
                        this._mode.processBlock(e, t)
                    },
                    "_doFinalize": function _doFinalize() {
                        var e = this.cfg.padding;
                        if (this._xformMode == this._ENC_XFORM_MODE) {
                            e.pad(this._data, this.blockSize);
                            var t = this._process(!0)
                        } else
                            t = this._process(!0),
                                e.unpad(t);
                        return t
                    },
                    "blockSize": 4
                });
            var d = t.CipherParams = a.extend({
                "init": function init(e) {
                    this.mixIn(e)
                },
                "toString": function toString(e) {
                    return (e || this.formatter).stringify(this)
                }
            })
                , m = (l = (h.format = {}).OpenSSL = {
                "stringify": function stringify(e) {
                    var t = e.ciphertext;
                    return ((e = e.salt) ? n.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(r)
                },
                "parse": function parse(e) {
                    var t = (e = r.parse(e)).words;
                    if (1398893684 == t[0] && 1701076831 == t[1]) {
                        var a = n.create(t.slice(2, 4));
                        t.splice(0, 4),
                            e.sigBytes -= 16
                    }
                    return d.create({
                        "ciphertext": e,
                        "salt": a
                    })
                }
            },
                t.SerializableCipher = a.extend({
                    "cfg": a.extend({
                        "format": l
                    }),
                    "encrypt": function encrypt(e, t, a, n) {
                        n = this.cfg.extend(n);
                        var o = e.createEncryptor(a, n);
                        return t = o.finalize(t),
                            o = o.cfg,
                            d.create({
                                "ciphertext": t,
                                "key": a,
                                "iv": o.iv,
                                "algorithm": e,
                                "mode": o.mode,
                                "padding": o.padding,
                                "blockSize": e.blockSize,
                                "formatter": n.format
                            })
                    },
                    "decrypt": function decrypt(e, t, a, n) {
                        return n = this.cfg.extend(n),
                            t = this._parse(t, n.format),
                            e.createDecryptor(a, n).finalize(t.ciphertext)
                    },
                    "_parse": function _parse(e, t) {
                        return "string" == typeof e ? t.parse(e, this) : e
                    }
                }))
                , h = (h.kdf = {}).OpenSSL = {
                "execute": function execute(e, t, a, o) {
                    return o || (o = n.random(8)),
                        e = s.create({
                            "keySize": t + a
                        }).compute(e, o),
                        a = n.create(e.words.slice(t), 4 * a),
                        e.sigBytes = 4 * t,
                        d.create({
                            "key": e,
                            "iv": a,
                            "salt": o
                        })
                }
            }
                , f = t.PasswordBasedCipher = m.extend({
                "cfg": m.cfg.extend({
                    "kdf": h
                }),
                "encrypt": function encrypt(e, t, a, n) {
                    return a = (n = this.cfg.extend(n)).kdf.execute(a, e.keySize, e.ivSize),
                        n.iv = a.iv,
                        (e = m.encrypt.call(this, e, t, a.key, n)).mixIn(a),
                        e
                },
                "decrypt": function decrypt(e, t, a, n) {
                    return n = this.cfg.extend(n),
                        t = this._parse(t, n.format),
                        a = n.kdf.execute(a, e.keySize, e.ivSize, t.salt),
                        n.iv = a.iv,
                        m.decrypt.call(this, e, t, a.key, n)
                }
            })
        }(),
            function () {
                for (var e = o, t = e.lib.BlockCipher, a = e.algo, n = [], i = [], r = [], s = [], c = [], l = [], p = [], u = [], d = [], m = [], h = [], f = 0; 256 > f; f++)
                    h[f] = 128 > f ? f << 1 : f << 1 ^ 283;
                var g = 0
                    , _ = 0;
                for (f = 0; 256 > f; f++) {
                    var b = (b = _ ^ _ << 1 ^ _ << 2 ^ _ << 3 ^ _ << 4) >>> 8 ^ 255 & b ^ 99;
                    n[g] = b,
                        i[b] = g;
                    var y = h[g]
                        , j = h[y]
                        , v = h[j]
                        , E = 257 * h[b] ^ 16843008 * b;
                    r[g] = E << 24 | E >>> 8,
                        s[g] = E << 16 | E >>> 16,
                        c[g] = E << 8 | E >>> 24,
                        l[g] = E,
                        E = 16843009 * v ^ 65537 * j ^ 257 * y ^ 16843008 * g,
                        p[b] = E << 24 | E >>> 8,
                        u[b] = E << 16 | E >>> 16,
                        d[b] = E << 8 | E >>> 24,
                        m[b] = E,
                        g ? (g = y ^ h[h[h[v ^ y]]],
                            _ ^= h[h[_]]) : g = _ = 1
                }
                var k = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
                a = a.AES = t.extend({
                    "_doReset": function _doReset() {
                        for (var e = (a = this._key).words, t = a.sigBytes / 4, a = 4 * ((this._nRounds = t + 6) + 1), o = this._keySchedule = [], i = 0; i < a; i++)
                            if (i < t)
                                o[i] = e[i];
                            else {
                                var r = o[i - 1];
                                i % t ? 6 < t && 4 == i % t && (r = n[r >>> 24] << 24 | n[r >>> 16 & 255] << 16 | n[r >>> 8 & 255] << 8 | n[255 & r]) : (r = n[(r = r << 8 | r >>> 24) >>> 24] << 24 | n[r >>> 16 & 255] << 16 | n[r >>> 8 & 255] << 8 | n[255 & r],
                                    r ^= k[i / t | 0] << 24),
                                    o[i] = o[i - t] ^ r
                            }
                        for (e = this._invKeySchedule = [],
                                 t = 0; t < a; t++)
                            i = a - t,
                                r = t % 4 ? o[i] : o[i - 4],
                                e[t] = 4 > t || 4 >= i ? r : p[n[r >>> 24]] ^ u[n[r >>> 16 & 255]] ^ d[n[r >>> 8 & 255]] ^ m[n[255 & r]]
                    },
                    "encryptBlock": function encryptBlock(e, t) {
                        this._doCryptBlock(e, t, this._keySchedule, r, s, c, l, n)
                    },
                    "decryptBlock": function decryptBlock(e, t) {
                        var a = e[t + 1];
                        e[t + 1] = e[t + 3],
                            e[t + 3] = a,
                            this._doCryptBlock(e, t, this._invKeySchedule, p, u, d, m, i),
                            a = e[t + 1],
                            e[t + 1] = e[t + 3],
                            e[t + 3] = a
                    },
                    "_doCryptBlock": function _doCryptBlock(e, t, a, n, o, i, r, s) {
                        for (var c = this._nRounds, l = e[t] ^ a[0], p = e[t + 1] ^ a[1], u = e[t + 2] ^ a[2], d = e[t + 3] ^ a[3], m = 4, h = 1; h < c; h++) {
                            var f = n[l >>> 24] ^ o[p >>> 16 & 255] ^ i[u >>> 8 & 255] ^ r[255 & d] ^ a[m++]
                                , g = n[p >>> 24] ^ o[u >>> 16 & 255] ^ i[d >>> 8 & 255] ^ r[255 & l] ^ a[m++]
                                , _ = n[u >>> 24] ^ o[d >>> 16 & 255] ^ i[l >>> 8 & 255] ^ r[255 & p] ^ a[m++];
                            d = n[d >>> 24] ^ o[l >>> 16 & 255] ^ i[p >>> 8 & 255] ^ r[255 & u] ^ a[m++],
                                l = f,
                                p = g,
                                u = _
                        }
                        f = (s[l >>> 24] << 24 | s[p >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[255 & d]) ^ a[m++],
                            g = (s[p >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[d >>> 8 & 255] << 8 | s[255 & l]) ^ a[m++],
                            _ = (s[u >>> 24] << 24 | s[d >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & p]) ^ a[m++],
                            d = (s[d >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[p >>> 8 & 255] << 8 | s[255 & u]) ^ a[m++],
                            e[t] = f,
                            e[t + 1] = g,
                            e[t + 2] = _,
                            e[t + 3] = d
                    },
                    "keySize": 8
                });
                e.AES = t._createHelper(a)
            }(),
            o.encrypt = function (e, t, a) {
                return function encrypt(e, t, a) {
                    return t = o.enc.Utf8.parse(t),
                        a = o.enc.Utf8.parse(a),
                        o.AES.encrypt(e, t, {
                            "iv": a,
                            "mode": o.mode.CBC,
                            "padding": o.pad.Pkcs7
                        }).toString()
                }(e, t, a)
            }
            ,
            o.decrypt = function (e, t, a) {
                return function decrypt(e, t, a) {
                    t = o.enc.Utf8.parse(t),
                        a = o.enc.Utf8.parse(a);
                    var n = o.AES.decrypt(e, t, {
                        "iv": a,
                        "mode": o.mode.CBC,
                        "padding": o.pad.Pkcs7
                    });
                    return n = o.enc.Utf8.stringify(n)
                }(e, t, a)
            }
            ,
            e.exports = o
    }
    , function (e, t, a) {
    }
    , , function (e, t, a) {
        "use strict";
        a(36);
        var n = a(0)
            , o = a(37)
            , i = a(35)
            , r = a.n(i)
            , s = (a(41),
            Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
        )
            , c = function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }();

        function _defineProperty(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                "value": a,
                "enumerable": !0,
                "configurable": !0,
                "writable": !0
            }) : e[t] = a,
                e
        }

        function easeOutScroll(e, t, a) {
            if (e !== t && "number" == typeof e) {
                var n = t - e
                    , o = 500
                    , i = +new Date
                    , r = t >= e;
                !function step() {
                    e = function linear(e, t, a, n) {
                        return a * e / n + t
                    }(+new Date - i, e, n, o),
                        r && e >= t || !r && t >= e ? a(t) : (a(e),
                            requestAnimationFrame(step))
                }()
            }
        }

        var l = function (e) {
            function ScrollView() {
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, ScrollView);
                var e = function _possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).apply(this, arguments));
                return e.onTouchMove = function (e) {
                    e.stopPropagation()
                }
                    ,
                    e
            }

            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    "constructor": {
                        "value": e,
                        "enumerable": !1,
                        "writable": !0,
                        "configurable": !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(ScrollView, n["j"].Component),
                c(ScrollView, [{
                    "key": "componentDidMount",
                    "value": function componentDidMount() {
                        var e = this;
                        setTimeout(function () {
                            var t = e.props;
                            t.scrollY && "number" == typeof t.scrollTop && ("scrollWithAnimation" in t ? easeOutScroll(0, t.scrollTop, function (t) {
                                e.container.scrollTop = t
                            }) : e.container.scrollTop = t.scrollTop,
                                e._scrollTop = t.scrollTop),
                            t.scrollX && "number" == typeof t.scrollLeft && ("scrollWithAnimation" in t ? easeOutScroll(0, t.scrollLeft, function (t) {
                                e.container.scrollLeft = t
                            }) : e.container.scrollLeft = t.scrollLeft,
                                e._scrollLeft = t.scrollLeft)
                        }, 10)
                    }
                }, {
                    "key": "componentWillReceiveProps",
                    "value": function componentWillReceiveProps(e) {
                        var t = this
                            , a = this.props;
                        e.scrollY && "number" == typeof e.scrollTop && e.scrollTop !== this._scrollTop && ("scrollWithAnimation" in e ? easeOutScroll(this._scrollTop, e.scrollTop, function (e) {
                            t.container.scrollTop = e
                        }) : this.container.scrollTop = e.scrollTop,
                            this._scrollTop = e.scrollTop),
                        e.scrollX && "number" == typeof a.scrollLeft && e.scrollLeft !== this._scrollLeft && ("scrollWithAnimation" in e ? easeOutScroll(this._scrollLeft, e.scrollLeft, function (e) {
                            t.container.scrollLeft = e
                        }) : this.container.scrollLeft = e.scrollLeft,
                            this._scrollLeft = e.scrollLeft),
                        e.scrollIntoView && "string" == typeof e.scrollIntoView && document && document.querySelector && document.querySelector("#" + e.scrollIntoView) && document.querySelector("#" + e.scrollIntoView).scrollIntoView({
                            "behavior": "smooth",
                            "block": "center",
                            "inline": "start"
                        })
                    }
                }, {
                    "key": "render",
                    "value": function render() {
                        var e, t = this, a = this.props, i = a.className, c = a.onScroll, l = a.onScrollToUpper,
                            p = a.onScrollToLower, u = a.onTouchMove, d = a.scrollX, m = a.scrollY, h = this.props,
                            f = h.upperThreshold, g = void 0 === f ? 50 : f, _ = h.lowerThreshold,
                            b = void 0 === _ ? 50 : _,
                            y = r()("taro-scroll", (_defineProperty(e = {}, "taro-scroll-view__scroll-x", d),
                                _defineProperty(e, "taro-scroll-view__scroll-y", m),
                                e), i);
                        g = parseInt(g),
                            b = parseInt(b);
                        var j = function throttle(e, t) {
                            var a = null;
                            return function () {
                                for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
                                    o[i] = arguments[i];
                                clearTimeout(a),
                                    a = setTimeout(function () {
                                        e.apply(void 0, o)
                                    }, t)
                            }
                        }(function uperAndLower(e) {
                            var a = t.container
                                , n = a.offsetWidth
                                , o = a.offsetHeight
                                , i = a.scrollLeft
                                , r = a.scrollTop
                                , s = a.scrollHeight
                                , c = a.scrollWidth;
                            p && (t.props.scrollY && o + r + b >= s || t.props.scrollX && n + i + b >= c) && p(e),
                            l && (t.props.scrollY && r <= g || t.props.scrollX && i <= g) && l(e)
                        }, 200);
                        return n.j.createElement("div", s({
                            "ref": function ref(e) {
                                t.container = e
                            }
                        }, Object(o.a)(this.props, ["className", "scrollTop", "scrollLeft"]), {
                            "className": y,
                            "onScroll": function _onScroll(e) {
                                var a = t.container
                                    , n = a.scrollLeft
                                    , o = a.scrollTop
                                    , i = a.scrollHeight
                                    , r = a.scrollWidth;
                                t._scrollLeft = n,
                                    t._scrollTop = o,
                                    Object.defineProperty(e, "detail", {
                                        "enumerable": !0,
                                        "writable": !0,
                                        "value": {
                                            "scrollLeft": n,
                                            "scrollTop": o,
                                            "scrollHeight": i,
                                            "scrollWidth": r
                                        }
                                    }),
                                    j(e),
                                c && c(e)
                            },
                            "onTouchMove": function _onTouchMove(e) {
                                u ? u(e) : t.onTouchMove(e)
                            }
                        }), this.props.children)
                    }
                }]),
                ScrollView
        }();
        t.a = l
    }
    , , function (e, t, a) {
        "use strict";
        a.d(t, "c", function () {
            return setStorage
        }),
            a.d(t, "d", function () {
                return setStorageSync
            }),
            a.d(t, "a", function () {
                return getStorageSync
            }),
            a.d(t, "b", function () {
                return removeStorageSync
            });
        var n = a(3)
            , o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        ;

        function setStorage(e) {
            var t = Object(n.m)(e);
            if (!t.res) {
                var a = {
                    "errMsg": "setStorage" + t.msg
                };
                return console.error(a.errMsg),
                    Promise.reject(a)
            }
            var o = e.key
                , i = e.data
                , r = e.success
                , s = e.fail
                , c = e.complete
                , l = {
                "errMsg": "setStorage:ok"
            };
            return "string" != typeof o ? (l.errMsg = Object(n.f)({
                "name": "setStorage",
                "para": "key",
                "correct": "String",
                "wrong": o
            }),
                console.error(l.errMsg),
            "function" == typeof s && s(l),
            "function" == typeof c && c(l),
                Promise.reject(l)) : (setStorageSync(o, i),
            "function" == typeof r && r(l),
            "function" == typeof c && c(l),
                Promise.resolve(l))
        }

        function setStorageSync(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            if ("string" == typeof e) {
                var a = {};
                a = "symbol" === (void 0 === t ? "undefined" : o(t)) ? {
                    "data": ""
                } : {
                    "data": t
                },
                    localStorage.setItem(e, JSON.stringify(a))
            } else
                console.error(Object(n.f)({
                    "name": "setStorage",
                    "correct": "String",
                    "wrong": e
                }))
        }

        function getStorageSync(e) {
            if ("string" == typeof e) {
                var t = getItem(e);
                return t.result ? t.data : ""
            }
            console.error(Object(n.f)({
                "name": "getStorage",
                "correct": "String",
                "wrong": e
            }))
        }

        function getItem(e) {
            var t = void 0;
            try {
                t = JSON.parse(localStorage.getItem(e))
            } catch (e) {
            }
            return t && "object" === (void 0 === t ? "undefined" : o(t)) && t.hasOwnProperty("data") ? {
                "result": !0,
                "data": t.data
            } : {
                "result": !1
            }
        }

        function removeStorageSync(e) {
            "string" == typeof e ? localStorage.removeItem(e) : console.error(Object(n.f)({
                "name": "removeStorage",
                "correct": "String",
                "wrong": e
            }))
        }
    }
    , , , function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return N
        });
        var n = a(0)
            , o = a(206)
            , i = a(203)
            , r = a(85)
            , s = a(204)
            , c = a(1)
            , l = a(201)
            , p = a(202)
            , u = a(33)
            , d = (a(58),
            function () {
                function defineProperties(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                        "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }

                return function (e, t, a) {
                    return t && defineProperties(e.prototype, t),
                    a && defineProperties(e, a),
                        e
                }
            }());
        var m, h, f, g, _, b, y, j, v, E, k = void 0,
            w = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAJFBMVEUAAACzXTixWjazXDe0WzazXDiyXDezXDezXTiyWTe0XDmvXDe2uNlXAAAADHRSTlMATQ0wITtBRjYbKBVAPkHBAAAArElEQVQoz2MYUDBjAojkbIHxpwmCBLgTRaB8ZkGwwEJBmIChoLACWNgIwucSFFUAK0iCKlAUDACSTIJiMCMDxUEkq2ARiAJLiUDUOTDAjBAAUY6CMB2sYCMYGuFGsAsmmwCpRHFjqB5GQUGQhYWCguIKcAEJsIBgAFQLEAC1AEkhsAAHSECBwRAuwAlRsRFICkBdKigoDFFoAHUIxLRGoNFQsMUJ7AUXBQZ6AQCL5hWCbK9VTAAAAABJRU5ErkJggg==";
        k = a(64),
            m = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-1.png?Expires=1765701346&AccessKey=3zEbsL6yqjndEXUe&Signature=cxpbvLD4LLL%2FqEWEc0C0fhVCJdo%3D",
            h = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-2.png?Expires=1765701392&AccessKey=3zEbsL6yqjndEXUe&Signature=phisk0yMzVjKmngCRpru25Mnh1k%3D",
            f = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-3.png?Expires=1765701419&AccessKey=3zEbsL6yqjndEXUe&Signature=vt9H105yz2iXeyz1Zb6Hf8%2F6WV0%3D",
            g = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-4.png?Expires=1765701447&AccessKey=3zEbsL6yqjndEXUe&Signature=a7RlUF4A%2BstUybbxJyr0xS9mt94%3D",
            _ = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-5.png?Expires=1765701480&AccessKey=3zEbsL6yqjndEXUe&Signature=Q1Iz6WQu%2Fby221JiO92I%2FtUkCHY%3D",
            b = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-6.png?Expires=1765701505&AccessKey=3zEbsL6yqjndEXUe&Signature=BD%2FYHgYsf72b8cBHBAyE6WONXXQ%3D",
            y = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-7.png?Expires=1765701528&AccessKey=3zEbsL6yqjndEXUe&Signature=ayg3uXTTw%2B%2FIgbKHUCLThs9EE%2B4%3D",
            j = "https://storage.360buyimg.com/bucket-babel-dog/get-dog-8.png?Expires=1765701564&AccessKey=3zEbsL6yqjndEXUe&Signature=b5P5W8ZtK%2Bx%2F9enIZgdub3Q3LFg%3D",
            v = "https://storage.360buyimg.com/bucket-babel-dog/cake_dog9.png?Expires=1765701288&AccessKey=3zEbsL6yqjndEXUe&Signature=zylbfZOBf7%2FShvDVD6XvL2amS7U%3D",
            E = "https://img11.360buyimg.com/imagetools/jfs/t1/157722/21/9415/22693/603c91a9E16c450ff/7a85a34a49cfa7cf.png";
        var D = {
            "2": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/jr_race_share2.png&auth=I++jQ/u0rbGlOLiMvkF+k/+BX7phPTQ2JmU9MTk4OTM3MjU4MCZ0PTE1ODkzNzI1ODEmZj05M18yMDA1XzIxMjZfNDkxJnI9UER1Q2tacWJncA==",
            "10": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/jr_race_share3.png&auth=cDmUKPsTtMvY68lHAddLjdKU7QxhPTQ2JmU9MTk4OTM3MjYzNCZ0PTE1ODkzNzI2MzUmZj01Ml8yMDA1XzEyMF8zNTImcj1pTUNhMUN4OWJv",
            "50": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/jr_race_share1.png&auth=IToyN2WTRVyFGAsVIEZU6/PmXhthPTQ2JmU9MTk4OTM3MjI5NiZ0PTE1ODkzNzIyOTcmZj04N18yMDA1XzE4MTRfNDg0JnI9U29ld2ZRcFA3eA=="
        }
            , T = !u.a.isInJrAppEnv() && !u.a.isInAppEnv()
            , N = function (e) {
            function JrShareImg(e) {
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, JrShareImg);
                var t = function _possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (JrShareImg.__proto__ || Object.getPrototypeOf(JrShareImg)).call(this, e));
                return t.state = {
                    "headIcon": "",
                    "shareType": "",
                    "codeImg": "",
                    "shareTitle": "",
                    "sceneParams": "",
                    "pageUrl": "",
                    "shareImgUrl": "",
                    "showImg": !1,
                    "shareh5Img": "",
                    "shareName": "",
                    "shareBackgroundColor": ""
                },
                    t
            }

            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    "constructor": {
                        "value": e,
                        "enumerable": !1,
                        "writable": !0,
                        "configurable": !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(JrShareImg, c["a"].Component),
                d(JrShareImg, [{
                    "key": "componentWillMount",
                    "value": function componentWillMount() {
                        var e = this.props
                            , t = (e.name,
                            e.userAvatar);
                        this.setState({
                            "headIcon": t
                        }),
                            this.setChangeData(this.props)
                    }
                }, {
                    "key": "componentDidMount",
                    "value": function componentDidMount() {
                        Object(o.b)({
                            "title": "分享图生成中..."
                        })
                    }
                }, {
                    "key": "componentWillReceiveProps",
                    "value": function componentWillReceiveProps(e) {
                    }
                }, {
                    "key": "componentWillUnmount",
                    "value": function componentWillUnmount() {
                    }
                }, {
                    "key": "componentDidShow",
                    "value": function componentDidShow() {
                    }
                }, {
                    "key": "componentDidHide",
                    "value": function componentDidHide() {
                    }
                }, {
                    "key": "setShareImg",
                    "value": function setShareImg(e) {
                        switch (e) {
                            case "standard":
                                this.setState({
                                    "shareh5Img": m,
                                    "shareName": "朋克狗",
                                    "shareBackgroundColor": "#5D77FF"
                                });
                                break;
                            case "leisure":
                                this.setState({
                                    "shareh5Img": h,
                                    "shareName": "夹克狗",
                                    "shareBackgroundColor": "#B093FF"
                                });
                                break;
                            case "winter":
                                this.setState({
                                    "shareh5Img": f,
                                    "shareName": "过节狗",
                                    "shareBackgroundColor": "#FF586D"
                                });
                                break;
                            case "rabbit":
                                this.setState({
                                    "shareh5Img": g,
                                    "shareName": "兔兔狗",
                                    "shareBackgroundColor": "#FFFF13"
                                });
                                break;
                            case "minions":
                                this.setState({
                                    "shareh5Img": _,
                                    "shareName": "工装狗",
                                    "shareBackgroundColor": "#40F8CF"
                                });
                                break;
                            case "newYear":
                                this.setState({
                                    "shareh5Img": b,
                                    "shareName": "鼠鼠狗",
                                    "shareBackgroundColor": "#FF4F4F"
                                });
                                break;
                            case "valentine":
                                this.setState({
                                    "shareh5Img": y,
                                    "shareName": "爱情狗",
                                    "shareBackgroundColor": "#B093FF"
                                });
                                break;
                            case "butterfly":
                                this.setState({
                                    "shareh5Img": j,
                                    "shareName": "蝴蝶狗",
                                    "shareBackgroundColor": "#FF586D"
                                });
                                break;
                            case "cake":
                                this.setState({
                                    "shareh5Img": v,
                                    "shareName": "烘焙大师",
                                    "shareBackgroundColor": "#5D77FF"
                                });
                                break;
                            case "midAutumn":
                                this.setState({
                                    "shareh5Img": E,
                                    "shareName": "奔月",
                                    "shareBackgroundColor": "#5D77FF"
                                })
                        }
                    }
                }, {
                    "key": "setChangeData",
                    "value": function setChangeData(e) {
                        var t = this
                            , a = e.shareTypeEnu
                            , n = e.scene
                            , o = e.name
                            , i = e.matchType
                            , r = ""
                            , s = "pages/jdDog/jdDog";
                        switch (a) {
                            case "share_home":
                                r = "我的小狗闷坏了，一起来玩耍",
                                    n = "",
                                    this.setShareImg(o);
                                break;
                            case "friend_list":
                                r = "我的小狗闷坏了，快来一起玩耍吧～",
                                    this.setState({
                                        "shareh5Img": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/jrinvite_new.png&auth=sh4OxD4iUyVWIMsGyBi49MvsK/1hPTQ2JmU9MTk4OTAzMjQ2MyZ0PTE1ODkwMzI0NjQmZj05N18yMDA1XzEyNDNfNCZyPWF2YmI4RHNabE0="
                                    });
                                break;
                            case "task_invite":
                                r = "今日份的慰问来咯，你有没有来看看我？",
                                    this.setState({
                                        "shareh5Img": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/task/jr_task_invite.png&auth=HdXCkPVk2sw0q3bPVei2UsrHGUVhPTQ2JmU9MTk4OTE2NzI4MCZ0PTE1ODkxNjcyODEmZj02Nl8yMDA1XzU0MF8xNSZyPXQwUFBPaVRJZGc="
                                    });
                                break;
                            case "invite_race":
                                s = "pages/petRace/petRace",
                                    r = "落后就要挨打，小伙伴快助我一臂之力！",
                                    this.setState({
                                        "shareh5Img": D[i]
                                    })
                        }
                        this.setState({
                            "sceneParams": n,
                            "shareTitle": r,
                            "pageUrl": s,
                            "shareType": a
                        }, function () {
                            t.hasDownloaded || t.downloadImgs()
                        })
                    }
                }, {
                    "key": "uploadFile",
                    "value": function uploadFile(e, t) {
                        var a = u.a.interFaces.uploadImg + "?appId=" + u.a.appId + "&file=" + e;
                        Object(i.a)({
                            "url": a,
                            "filePath": e,
                            "header": {},
                            "name": "file",
                            "success": function success(e) {
                                console.log(e, "uploadFile"),
                                t && t(e)
                            },
                            "fail": function fail(e) {
                                console.log(e, "app.js---appUploadFile接口调用失败---rows:271")
                            }
                        })
                    }
                }, {
                    "key": "downloadImgs",
                    "value": function downloadImgs() {
                        var e = this;
                        console.log("downloadImgs");
                        var t = this.state
                            , a = t.pageUrl
                            , n = t.sceneParams
                            , i = t.shareh5Img
                            , c = t.headIcon
                            ,
                            l = u.a.interFaces.qrCode + "?scene=" + encodeURIComponent(n || "test=1") + "&page=" + a + "&appId=" + u.a.appId;
                        this.hasDownloaded = !0,
                            Object(r.a)({
                                "src": i
                            }).then(function (t) {
                                Object(r.a)({
                                    "src": c
                                }).then(function (t) {
                                    Object(s.a)({
                                        "url": l,
                                        "success": function success(t) {
                                            console.log(t.tempFilePath, "res3.tempFilePath"),
                                                e.setState({
                                                    "codeImg": t.tempFilePath
                                                }),
                                                Object(r.a)({
                                                    "src": t.tempFilePath
                                                }).then(function (a) {
                                                    console.log(t, "res4");
                                                    var n = setTimeout(function () {
                                                        e.drawImageH5(),
                                                            clearTimeout(n)
                                                    }, 200)
                                                })
                                        },
                                        "fail": function fail() {
                                            e.hasDownloaded = !1,
                                                Object(o.a)()
                                        }
                                    })
                                })
                            })
                    }
                }, {
                    "key": "drawImageH5",
                    "value": function drawImageH5() {
                        var e = this
                            , t = this
                            , a = document.getElementById("shareImg");
                        console.log("drawImageH5"),
                            k(a, {
                                "scale": 2,
                                "allowTaint": !0,
                                "useCORS": !0,
                                "width": a.clientWidth - 1,
                                "height": a.clientHeight - 1,
                                "scrollY": 0,
                                "scrollX": 0
                            }).then(function (a) {
                                try {
                                    a.toBlob(function (a) {
                                        var n = URL.createObjectURL(a);
                                        e.uploadFile(n, function (a) {
                                            var n = JSON.parse(a.data);
                                            n.success && (t.setState({
                                                "shareImgUrl": n.data
                                            }),
                                                Object(r.a)({
                                                    "src": n.data,
                                                    "success": function success(t) {
                                                        e.setState({
                                                            "showImg": !0
                                                        }),
                                                            e.hasDownloaded = !1;
                                                        var a = setTimeout(function () {
                                                            Object(o.a)(),
                                                                clearTimeout(a)
                                                        }, 100)
                                                    },
                                                    "fail": function fail(t) {
                                                        e.hasDownloaded = !1,
                                                            Object(o.a)()
                                                    }
                                                }))
                                        })
                                    })
                                } catch (t) {
                                    console.log(t),
                                        e.hasDownloaded = !1,
                                        Object(o.a)()
                                }
                            })
                    }
                }, {
                    "key": "closeShareLayer",
                    "value": function closeShareLayer() {
                        this.props.onCloseShareLayer()
                    }
                }, {
                    "key": "saveImg",
                    "value": function saveImg() {
                        var e = this
                            , t = this.state
                            , a = t.showImg
                            , n = t.shareImgUrl;
                        if (!a)
                            return console.log("分享图还没准备好"),
                                !1;
                        JrBridge ? (console.log("JrBridge加载好"),
                            JrBridge.callNative({
                                "type": "38",
                                "imgUrl": n
                            }, function (t) {
                                3 == t.status ? (Object(o.d)({
                                    "title": "保存图片成功"
                                }),
                                    e.closeShareLayer()) : 5 == t.status && Object(o.d)({
                                    "icon": "none",
                                    "title": "请到手机设置里打开京东金融的照片权限",
                                    "duration": 3e3
                                }),
                                    console.log(t)
                            })) : console.log("JrBridge没有加载好")
                    }
                }, {
                    "key": "shareImg",
                    "value": function shareImg() {
                        var e = this
                            , t = this.state
                            , a = t.showImg
                            , n = t.shareImgUrl;
                        if (!a)
                            return console.log("分享图还没准备好"),
                                !1;
                        JrBridge ? JrBridge.callNative({
                            "type": "44",
                            "data": {
                                "sharePlatform": "0",
                                "shareType": "1",
                                "shareImageUrl": n
                            }
                        }, function (t) {
                            console.log(t),
                                e.closeShareLayer()
                        }) : console.log("JrBridge没有加载好")
                    }
                }, {
                    "key": "render",
                    "value": function render() {
                        var e = this.state
                            , t = e.headIcon
                            , a = e.shareTitle
                            , o = e.codeImg
                            , i = e.shareh5Img
                            , r = e.shareName
                            , s = e.shareType
                            , c = e.shareBackgroundColor
                            , u = e.showImg
                            , d = e.shareImgUrl;
                        return n.j.createElement(l.a, {
                            "className": "share_img_wrap"
                        }, n.j.createElement(l.a, {
                            "className": T ? "h5_wrap h5_wrap2" : "h5_wrap"
                        }, n.j.createElement(p.a, {
                            "className": "close_btn",
                            "onClick": this.closeShareLayer.bind(this),
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/close-btn-1.png&auth=5F8tZlxUv9fVM0zvK3WEUevdv1lhPTQ2JmU9MTk3MTY2MDQ0MyZ0PTE1NzE2NjA0NDQmZj02OV8xOTEwXzE4OTBfMzY1JnI9MnZpN3UzQ3RySA=="
                        }), n.j.createElement(l.a, {
                            "id": "shareImg",
                            "className": "share_img"
                        }, n.j.createElement(p.a, {
                            "src": t,
                            "className": "head_icon"
                        }), n.j.createElement(l.a, {
                            "className": "share_img_content"
                        }, n.j.createElement(l.a, {
                            "className": "share_title"
                        }, n.j.createElement(p.a, {
                            "className": "double_qua",
                            "src": w
                        }), a, n.j.createElement(p.a, {
                            "className": "double_qua right_one",
                            "src": w
                        })), "share_home" == s ? n.j.createElement(l.a, {
                            "className": "center_contain_container"
                        }, n.j.createElement(l.a, {
                            "className": "center_contain",
                            "style": {
                                "backgroundColor": c
                            }
                        }, n.j.createElement(l.a, {
                            "className": "share_img_icon"
                        }, n.j.createElement(p.a, {
                            "src": i,
                            "className": "share_img_1"
                        }), n.j.createElement(l.a, {
                            "className": 4 === r.length ? "share_dog_name left_24" : "share_dog_name left_44"
                        }, r)))) : n.j.createElement(p.a, {
                            "className": "center_contain",
                            "src": i
                        }), n.j.createElement(l.a, {
                            "className": "qr"
                        }, n.j.createElement(p.a, {
                            "src": o,
                            "className": "qr_img"
                        }), n.j.createElement(l.a, {
                            "className": "qr_dowload"
                        }, n.j.createElement(l.a, {
                            "className": "top_line"
                        }, "长按识别二维码"), n.j.createElement(l.a, {
                            "className": "sub_line"
                        }, "发现更多精彩内容")))), T && u ? n.j.createElement(l.a, null, n.j.createElement(p.a, {
                            "src": d,
                            "className": "share_result_img"
                        }), n.j.createElement(l.a, {
                            "className": "share_result_tip"
                        }, "长按图片分享好友")) : null), T ? null : n.j.createElement(l.a, {
                            "className": "img_btns"
                        }, n.j.createElement(l.a, {
                            "className": "left_btn_bg"
                        }, n.j.createElement(l.a, {
                            "className": "left_btn_cont",
                            "onClick": this.saveImg.bind(this)
                        }, n.j.createElement(l.a, {
                            "className": "high_light"
                        }), n.j.createElement(l.a, {
                            "className": "btn_text"
                        }, "仅保存"))), n.j.createElement(l.a, {
                            "className": "right_btn_bg"
                        }, n.j.createElement(l.a, {
                            "className": "right_btn_cont",
                            "onClick": this.shareImg.bind(this)
                        }, n.j.createElement(l.a, {
                            "className": "right_high_light"
                        }), n.j.createElement(l.a, {
                            "className": "btn_text"
                        }, "去分享"))))))
                    }
                }]),
                JrShareImg
        }()
    }
    , function (e, t, a) {
    }
    , , function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return u
        });
        var n = a(0)
            , o = a(85)
            , i = a(1)
            , r = a(201)
            , s = a(202)
            , c = a(33)
            , l = (a(61),
            function () {
                function defineProperties(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var n = t[a];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                        "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }

                return function (e, t, a) {
                    return t && defineProperties(e.prototype, t),
                    a && defineProperties(e, a),
                        e
                }
            }());
        var p = c.a.constImgs
            , u = function (e) {
            function Loading(e) {
                return function _classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Loading),
                    function _possibleConstructorReturn(e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).call(this, e))
            }

            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    "constructor": {
                        "value": e,
                        "enumerable": !1,
                        "writable": !0,
                        "configurable": !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(Loading, i["a"].Component),
                l(Loading, [{
                    "key": "componentWillMount",
                    "value": function componentWillMount() {
                    }
                }, {
                    "key": "componentDidMount",
                    "value": function componentDidMount() {
                        var e = this.props
                            , t = e.type
                            , a = e.isLongScreen;
                        this.loadingImg(t, a)
                    }
                }, {
                    "key": "componentWillReceiveProps",
                    "value": function componentWillReceiveProps() {
                    }
                }, {
                    "key": "componentWillUnmount",
                    "value": function componentWillUnmount() {
                    }
                }, {
                    "key": "componentDidShow",
                    "value": function componentDidShow() {
                    }
                }, {
                    "key": "loadingImg",
                    "value": function loadingImg(e, t) {
                        var a = this
                            , n = {
                            "home": function home() {
                                return [Object(o.a)({
                                    "src": p.homeBg
                                }), Object(o.a)({
                                    "src": p.goodsBox
                                }), Object(o.a)({
                                    "src": p.threeMeals1
                                }), Object(o.a)({
                                    "src": p.threeMeals2
                                })]
                            },
                            "race": function race() {
                                return [Object(o.a)({
                                    "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/newRace/race_bg111.jpg&auth=/knT9ZpX52eUy+hImYbZkD5D+z1hPTQ2JmU9MTk4OTA4NTYyMSZ0PTE1ODkwODU2MjImZj05Ml8yMDA1XzE5ODhfMTc1JnI9bWpzRWl6ek9ZWQ=="
                                })]
                            },
                            "treasure": function treasure() {
                                return [Object(o.a)({
                                    "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/before_anim.png&auth=HIAVk+WflqIES+A8JbQC1ixh//5hPTQ2JmU9MTk3NjYzOTQxNCZ0PTE1NzY2Mzk0MTUmZj00NF8xOTEyXzI1MzdfMTkmcj1vR3kyM0s4dGZF"
                                }), Object(o.a)({
                                    "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/treasure_bg_top2.png&auth=sjuWFE3XGXbrZ+KBvUgp4tv9cMthPTQ2JmU9MTk3ODY0OTQ4NiZ0PTE1Nzg2NDk0ODcmZj03Ml8yMDAxXzUxMDdfNTI0JnI9cVAxZTFwck5aRA=="
                                })]
                            },
                            "goodsCounter": function goodsCounter() {
                                return [Object(o.a)({
                                    "src": p.counterHead
                                })]
                            }
                        };
                        Promise.all(n[e]()).then(function () {
                            a.props.onCloseLoading()
                        }).catch(function (e) {
                            console.log("error:" + e),
                                a.props.onCloseLoading()
                        })
                    }
                }, {
                    "key": "render",
                    "value": function render() {
                        return n.j.createElement(r.a, {
                            "className": "loading-wrap"
                        }, n.j.createElement(s.a, {
                            "className": "loading-img",
                            "src": "https://hsp.jdpay.com/?appid=46&filepath=/lottery_ui/taro_jd_dog/loading.png&auth=vWtZD1sVTAxjGH/5FGa/HvJpITdhPTQ2JmU9MTk3MTk5MjExOCZ0PTE1NzE5OTIxMTkmZj01MF8xOTEwXzI0MTNfMzQ3JnI9Nks2d1U1bjhtTg=="
                        }))
                    }
                }]),
                Loading
        }()
    }
    , function (e, t, a) {
    }
    , , function (e, t, a) {
        "use strict";
        a(36);
        var n = a(0)
            , o = a(37)
            , i = a(35)
            , r = a.n(i)
            , s = (a(46),
            Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
        )
            , c = function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }();

        function getTrueType(e, t, a) {
            if (!e)
                throw new Error("unexpected type");
            return "search" === t && (e = "search"),
            a && (e = "password"),
            "digit" === e && (e = "number"),
                e
        }

        var l = function (e) {
            function Input() {
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Input);
                var e = function _possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
                return e.onInput = e.onInput.bind(e),
                    e.onFocus = e.onFocus.bind(e),
                    e.onBlur = e.onBlur.bind(e),
                    e.onKeyDown = e.onKeyDown.bind(e),
                    e.handleComposition = e.handleComposition.bind(e),
                    e.isOnComposition = !1,
                    e.onInputExcuted = !1,
                    e
            }

            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    "constructor": {
                        "value": e,
                        "enumerable": !1,
                        "writable": !0,
                        "configurable": !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(Input, n["j"].Component),
                c(Input, [{
                    "key": "componentDidMount",
                    "value": function componentDidMount() {
                        "file" === this.props.type && this.inputRef.addEventListener("change", this.onInput)
                    }
                }, {
                    "key": "componentWillUnmount",
                    "value": function componentWillUnmount() {
                        "file" === this.props.type && this.inputRef.removeEventListener("change", this.onInput)
                    }
                }, {
                    "key": "onInput",
                    "value": function onInput(e) {
                        var t = this.props
                            , a = t.type
                            , n = t.maxLength
                            , o = t.confirmType
                            , i = t.password
                            , r = t.onInput
                            , onInput = void 0 === r ? "" : r
                            , s = t.onChange
                            , c = void 0 === s ? "" : s;
                        if (!this.isOnComposition && !this.onInputExcuted) {
                            var l = e.target.value
                                , p = getTrueType(a, o, i);
                            if (this.onInputExcuted = !0,
                            "number" === p && l && n <= l.length && (l = l.substring(0, n),
                                e.target.value = l),
                                Object.defineProperty(e, "detail", {
                                    "enumerable": !0,
                                    "value": {
                                        "value": l
                                    }
                                }),
                                !(["number", "file"].indexOf(p) >= 0)) {
                                var u = e.target.selectionEnd;
                                setTimeout(function () {
                                    e.target.selectionStart = u,
                                        e.target.selectionEnd = u
                                })
                            }
                            if (c)
                                return c(e);
                            if (onInput)
                                return onInput(e)
                        }
                    }
                }, {
                    "key": "onFocus",
                    "value": function onFocus(e) {
                        var onFocus = this.props.onFocus;
                        this.onInputExcuted = !1,
                            Object.defineProperty(e, "detail", {
                                "enumerable": !0,
                                "value": {
                                    "value": e.target.value
                                }
                            }),
                        onFocus && onFocus(e)
                    }
                }, {
                    "key": "onBlur",
                    "value": function onBlur(e) {
                        var onBlur = this.props.onBlur;
                        Object.defineProperty(e, "detail", {
                            "enumerable": !0,
                            "value": {
                                "value": e.target.value
                            }
                        }),
                        onBlur && onBlur(e)
                    }
                }, {
                    "key": "onKeyDown",
                    "value": function onKeyDown(e) {
                        var t = this.props
                            , a = t.onConfirm
                            , onKeyDown = t.onKeyDown;
                        this.onInputExcuted = !1,
                        onKeyDown && onKeyDown(e),
                        13 === e.keyCode && a && (Object.defineProperty(e, "detail", {
                            "enumerable": !0,
                            "value": {
                                "value": e.target.value
                            }
                        }),
                            a(e))
                    }
                }, {
                    "key": "handleComposition",
                    "value": function handleComposition(e) {
                        e.target instanceof HTMLInputElement && ("compositionend" === e.type ? (this.isOnComposition = !1,
                            this.onInputExcuted = !1,
                            this.onInput(e)) : this.isOnComposition = !0)
                    }
                }, {
                    "key": "render",
                    "value": function render() {
                        var e = this
                            , t = this.props
                            , a = t.className
                            , i = void 0 === a ? "" : a
                            , c = t.placeholder
                            , l = t.type
                            , p = void 0 === l ? "text" : l
                            , u = t.password
                            , d = t.disabled
                            , m = t.maxLength
                            , h = t.confirmType
                            , f = void 0 === h ? "" : h
                            , g = t.focus
                            , _ = void 0 !== g && g
                            , b = t.value
                            , y = r()("weui-input", i)
                            ,
                            j = Object(o.a)(this.props, ["className", "placeholder", "disabled", "max", "onChange", "onFocus", "onBlur", "type", "focus"]);
                        return "value" in this.props && (j.value = function fixControlledValue(e) {
                            return void 0 === e || null === e ? "" : e
                        }(b)),
                            n.j.createElement("input", s({
                                "ref": function ref(t) {
                                    e.inputRef = t
                                }
                            }, j, {
                                "className": y,
                                "placeholder": c,
                                "disabled": d,
                                "maxlength": m,
                                "onInput": this.onInput,
                                "onFocus": this.onFocus,
                                "onBlur": this.onBlur,
                                "autofocus": _,
                                "onKeyDown": this.onKeyDown,
                                "type": getTrueType(p, f, u),
                                "onCompositionStart": this.handleComposition,
                                "onCompositionEnd": this.handleComposition
                            }))
                    }
                }]),
                Input
        }();
        l.defaultProps = {
            "type": "text"
        },
            t.a = l
    }
    , , , function (e, t, a) {
        "use strict";
        a(36);
        var n = a(0)
            , o = a(37)
            , i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var n in a)
                    Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
            }
            return e
        }
            , r = function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }();
        var s = function (e) {
            function Textarea() {
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Textarea);
                var e = function _possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
                return e.onChange = e.onChange.bind(e),
                    e.onFocus = e.onFocus.bind(e),
                    e.onBlur = e.onBlur.bind(e),
                    e
            }

            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    "constructor": {
                        "value": e,
                        "enumerable": !1,
                        "writable": !0,
                        "configurable": !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(Textarea, n["j"].Component),
                r(Textarea, [{
                    "key": "onChange",
                    "value": function onChange(e) {
                        var t = this.props
                            , a = t.onChange
                            , onChange = void 0 === a ? "" : a
                            , n = t.onInput
                            , o = void 0 === n ? "" : n;
                        return Object.defineProperty(e, "detail", {
                            "enumerable": !0,
                            "value": {
                                "value": e.target.value
                            }
                        }),
                            onChange ? onChange && onChange(e) : o ? o && o(e) : void 0
                    }
                }, {
                    "key": "onFocus",
                    "value": function onFocus(e) {
                        var onFocus = this.props.onFocus;
                        Object.defineProperty(e, "detail", {
                            "enumerable": !0,
                            "value": {
                                "value": e.target.value
                            }
                        }),
                        onFocus && onFocus(e)
                    }
                }, {
                    "key": "onBlur",
                    "value": function onBlur(e) {
                        var onBlur = this.props.onBlur;
                        Object.defineProperty(e, "detail", {
                            "enumerable": !0,
                            "value": {
                                "value": e.target.value
                            }
                        }),
                        onBlur && onBlur(e)
                    }
                }, {
                    "key": "render",
                    "value": function render() {
                        var e = this.props
                            , t = e.className
                            , a = void 0 === t ? "" : t
                            , r = e.placeholder
                            , s = void 0 === r ? "" : r
                            , c = e.disabled
                            , l = e.maxlength
                            , p = void 0 === l ? 140 : l
                            , u = e.autoFocus
                            , d = void 0 !== u && u;
                        return n.j.createElement("textarea", i({}, Object(o.a)(this.props, ["className", "placeholder", "disabled", "maxlength", "onChange", "onInput", "onFocus", "onBlur", "autofocus"]), {
                            "className": a,
                            "placeholder": s,
                            "disabled": c,
                            "maxlength": p,
                            "autofocus": d,
                            "onChange": this.onChange,
                            "onFocus": this.onFocus,
                            "onBlur": this.onBlur
                        }))
                    }
                }]),
                Textarea
        }();
        t.a = s
    }
    , , , , , function (e, t, a) {
        var n = a(72);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = {
            "sourceMap": !1,
            "insertAt": "top",
            "hmr": !0,
            "transform": void 0,
            "insertInto": void 0
        };
        a(40)(n, o);
        n.locals && (e.exports = n.locals)
    }
    , function (e, t, a) {
        (e.exports = a(39)(!1)).push([e.i, "button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}", ""])
    }
    , , , , , , , , , , , function (e, t, a) {
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, a) {
    }
    , , function (e, t, a) {
    }
    , , function (e, t, a) {
    }
    , , function (e, t, a) {
    }
    , , function (e, t, a) {
    }
    , , function (e, t, a) {
    }
    , , function (e, t, a) {
    }
    , , function (e, t, a) {
    }
    , , function (e, t, a) {
        (function (e) {
                var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    ,
                    n = "undefined" != typeof window && window.Math === Math ? window : "object" === (void 0 === e ? "undefined" : t(e)) ? e : this;
                n.Promise || (n.Promise = a(139)),
                n.regeneratorRuntime || (n.regeneratorRuntime = a(143))
            }
        ).call(this, a(5))
    }
    , function (e, t, a) {
        "use strict";
        (function (t) {
                var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    , n = setTimeout;

                function noop() {
                }

                function Promise(e) {
                    if (!(this instanceof Promise))
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e)
                        throw new TypeError("not a function");
                    this._state = 0,
                        this._handled = !1,
                        this._value = void 0,
                        this._deferreds = [],
                        doResolve(e, this)
                }

                function handle(e, t) {
                    for (; 3 === e._state;)
                        e = e._value;
                    0 !== e._state ? (e._handled = !0,
                        Promise._immediateFn(function () {
                            var a = 1 === e._state ? t.onFulfilled : t.onRejected;
                            if (null !== a) {
                                var n;
                                try {
                                    n = a(e._value)
                                } catch (e) {
                                    return void reject(t.promise, e)
                                }
                                resolve(t.promise, n)
                            } else
                                (1 === e._state ? resolve : reject)(t.promise, e._value)
                        })) : e._deferreds.push(t)
                }

                function resolve(e, t) {
                    try {
                        if (t === e)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" === (void 0 === t ? "undefined" : a(t)) || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof Promise)
                                return e._state = 3,
                                    e._value = t,
                                    void finale(e);
                            if ("function" == typeof n)
                                return void doResolve(function bind(e, t) {
                                    return function () {
                                        e.apply(t, arguments)
                                    }
                                }(n, t), e)
                        }
                        e._state = 1,
                            e._value = t,
                            finale(e)
                    } catch (t) {
                        reject(e, t)
                    }
                }

                function reject(e, t) {
                    e._state = 2,
                        e._value = t,
                        finale(e)
                }

                function finale(e) {
                    2 === e._state && 0 === e._deferreds.length && Promise._immediateFn(function () {
                        e._handled || Promise._unhandledRejectionFn(e._value)
                    });
                    for (var t = 0, a = e._deferreds.length; t < a; t++)
                        handle(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function doResolve(e, t) {
                    var a = !1;
                    try {
                        e(function (e) {
                            a || (a = !0,
                                resolve(t, e))
                        }, function (e) {
                            a || (a = !0,
                                reject(t, e))
                        })
                    } catch (e) {
                        if (a)
                            return;
                        a = !0,
                            reject(t, e)
                    }
                }

                Promise.prototype.catch = function (e) {
                    return this.then(null, e)
                }
                    ,
                    Promise.prototype.then = function (e, t) {
                        var a = new this.constructor(noop);
                        return handle(this, new function Handler(e, t, a) {
                            this.onFulfilled = "function" == typeof e ? e : null,
                                this.onRejected = "function" == typeof t ? t : null,
                                this.promise = a
                        }
                        (e, t, a)),
                            a
                    }
                    ,
                    Promise.prototype.finally = function (e) {
                        var t = this.constructor;
                        return this.then(function (a) {
                            return t.resolve(e()).then(function () {
                                return a
                            })
                        }, function (a) {
                            return t.resolve(e()).then(function () {
                                return t.reject(a)
                            })
                        })
                    }
                    ,
                    Promise.all = function (e) {
                        return new Promise(function (t, n) {
                                if (!e || void 0 === e.length)
                                    throw new TypeError("Promise.all accepts an array");
                                var o = Array.prototype.slice.call(e);
                                if (0 === o.length)
                                    return t([]);
                                var i = o.length;

                                function res(e, r) {
                                    try {
                                        if (r && ("object" === (void 0 === r ? "undefined" : a(r)) || "function" == typeof r)) {
                                            var s = r.then;
                                            if ("function" == typeof s)
                                                return void s.call(r, function (t) {
                                                    res(e, t)
                                                }, n)
                                        }
                                        o[e] = r,
                                        0 == --i && t(o)
                                    } catch (e) {
                                        n(e)
                                    }
                                }

                                for (var r = 0; r < o.length; r++)
                                    res(r, o[r])
                            }
                        )
                    }
                    ,
                    Promise.resolve = function (e) {
                        return e && "object" === (void 0 === e ? "undefined" : a(e)) && e.constructor === Promise ? e : new Promise(function (t) {
                                t(e)
                            }
                        )
                    }
                    ,
                    Promise.reject = function (e) {
                        return new Promise(function (t, a) {
                                a(e)
                            }
                        )
                    }
                    ,
                    Promise.race = function (e) {
                        return new Promise(function (t, a) {
                                for (var n = 0, o = e.length; n < o; n++)
                                    e[n].then(t, a)
                            }
                        )
                    }
                    ,
                    Promise._immediateFn = "function" == typeof t && function (e) {
                            t(e)
                        }
                        || function (e) {
                            n(e, 0)
                        }
                    ,
                    Promise._unhandledRejectionFn = function _unhandledRejectionFn(e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                    }
                    ,
                    e.exports = Promise
            }
        ).call(this, a(140).setImmediate)
    }
    , function (e, t, a) {
        (function (e) {
                var n = void 0 !== e && e || "undefined" != typeof self && self || window
                    , o = Function.prototype.apply;

                function Timeout(e, t) {
                    this._id = e,
                        this._clearFn = t
                }

                t.setTimeout = function () {
                    return new Timeout(o.call(setTimeout, n, arguments), clearTimeout)
                }
                    ,
                    t.setInterval = function () {
                        return new Timeout(o.call(setInterval, n, arguments), clearInterval)
                    }
                    ,
                    t.clearTimeout = t.clearInterval = function (e) {
                        e && e.close()
                    }
                    ,
                    Timeout.prototype.unref = Timeout.prototype.ref = function () {
                    }
                    ,
                    Timeout.prototype.close = function () {
                        this._clearFn.call(n, this._id)
                    }
                    ,
                    t.enroll = function (e, t) {
                        clearTimeout(e._idleTimeoutId),
                            e._idleTimeout = t
                    }
                    ,
                    t.unenroll = function (e) {
                        clearTimeout(e._idleTimeoutId),
                            e._idleTimeout = -1
                    }
                    ,
                    t._unrefActive = t.active = function (e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 && (e._idleTimeoutId = setTimeout(function onTimeout() {
                            e._onTimeout && e._onTimeout()
                        }, t))
                    }
                    ,
                    a(141),
                    t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate,
                    t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
            }
        ).call(this, a(5))
    }
    , function (e, t, a) {
        (function (e, t) {
                !function (e, a) {
                    "use strict";
                    if (!e.setImmediate) {
                        var n, o = 1, i = {}, r = !1, s = e.document,
                            c = Object.getPrototypeOf && Object.getPrototypeOf(e);
                        c = c && c.setTimeout ? c : e,
                            "[object process]" === {}.toString.call(e.process) ? function installNextTickImplementation() {
                                n = function registerImmediate(e) {
                                    t.nextTick(function () {
                                        runIfPresent(e)
                                    })
                                }
                            }() : !function canUsePostMessage() {
                                if (e.postMessage && !e.importScripts) {
                                    var t = !0
                                        , a = e.onmessage;
                                    return e.onmessage = function () {
                                        t = !1
                                    }
                                        ,
                                        e.postMessage("", "*"),
                                        e.onmessage = a,
                                        t
                                }
                            }() ? e.MessageChannel ? function installMessageChannelImplementation() {
                                var e = new MessageChannel;
                                e.port1.onmessage = function (e) {
                                    runIfPresent(e.data)
                                }
                                    ,
                                    n = function registerImmediate(t) {
                                        e.port2.postMessage(t)
                                    }
                            }() : s && "onreadystatechange" in s.createElement("script") ? function installReadyStateChangeImplementation() {
                                var e = s.documentElement;
                                n = function registerImmediate(t) {
                                    var a = s.createElement("script");
                                    a.onreadystatechange = function () {
                                        runIfPresent(t),
                                            a.onreadystatechange = null,
                                            e.removeChild(a),
                                            a = null
                                    }
                                        ,
                                        e.appendChild(a)
                                }
                            }() : function installSetTimeoutImplementation() {
                                n = function registerImmediate(e) {
                                    setTimeout(runIfPresent, 0, e)
                                }
                            }() : function installPostMessageImplementation() {
                                var t = "setImmediate$" + Math.random() + "$"
                                    , a = function onGlobalMessage(a) {
                                    a.source === e && "string" == typeof a.data && 0 === a.data.indexOf(t) && runIfPresent(+a.data.slice(t.length))
                                };
                                e.addEventListener ? e.addEventListener("message", a, !1) : e.attachEvent("onmessage", a),
                                    n = function registerImmediate(a) {
                                        e.postMessage(t + a, "*")
                                    }
                            }(),
                            c.setImmediate = function setImmediate(e) {
                                "function" != typeof e && (e = new Function("" + e));
                                for (var t = new Array(arguments.length - 1), a = 0; a < t.length; a++)
                                    t[a] = arguments[a + 1];
                                var r = {
                                    "callback": e,
                                    "args": t
                                };
                                return i[o] = r,
                                    n(o),
                                    o++
                            }
                            ,
                            c.clearImmediate = clearImmediate
                    }

                    function clearImmediate(e) {
                        delete i[e]
                    }

                    function runIfPresent(e) {
                        if (r)
                            setTimeout(runIfPresent, 0, e);
                        else {
                            var t = i[e];
                            if (t) {
                                r = !0;
                                try {
                                    !function run(e) {
                                        var t = e.callback
                                            , n = e.args;
                                        switch (n.length) {
                                            case 0:
                                                t();
                                                break;
                                            case 1:
                                                t(n[0]);
                                                break;
                                            case 2:
                                                t(n[0], n[1]);
                                                break;
                                            case 3:
                                                t(n[0], n[1], n[2]);
                                                break;
                                            default:
                                                t.apply(a, n)
                                        }
                                    }(t)
                                } finally {
                                    clearImmediate(e),
                                        r = !1
                                }
                            }
                        }
                    }
                }("undefined" == typeof self ? void 0 === e ? this : e : self)
            }
        ).call(this, a(5), a(142))
    }
    , function (e, t) {
        var a, n, o = e.exports = {};

        function defaultSetTimout() {
            throw new Error("setTimeout has not been defined")
        }

        function defaultClearTimeout() {
            throw new Error("clearTimeout has not been defined")
        }

        function runTimeout(e) {
            if (a === setTimeout)
                return setTimeout(e, 0);
            if ((a === defaultSetTimout || !a) && setTimeout)
                return a = setTimeout,
                    setTimeout(e, 0);
            try {
                return a(e, 0)
            } catch (t) {
                try {
                    return a.call(null, e, 0)
                } catch (t) {
                    return a.call(this, e, 0)
                }
            }
        }

        !function () {
            try {
                a = "function" == typeof setTimeout ? setTimeout : defaultSetTimout
            } catch (e) {
                a = defaultSetTimout
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : defaultClearTimeout
            } catch (e) {
                n = defaultClearTimeout
            }
        }();
        var i, r = [], s = !1, c = -1;

        function cleanUpNextTick() {
            s && i && (s = !1,
                i.length ? r = i.concat(r) : c = -1,
            r.length && drainQueue())
        }

        function drainQueue() {
            if (!s) {
                var e = runTimeout(cleanUpNextTick);
                s = !0;
                for (var t = r.length; t;) {
                    for (i = r,
                             r = []; ++c < t;)
                        i && i[c].run();
                    c = -1,
                        t = r.length
                }
                i = null,
                    s = !1,
                    function runClearTimeout(e) {
                        if (n === clearTimeout)
                            return clearTimeout(e);
                        if ((n === defaultClearTimeout || !n) && clearTimeout)
                            return n = clearTimeout,
                                clearTimeout(e);
                        try {
                            return n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function Item(e, t) {
            this.fun = e,
                this.array = t
        }

        function noop() {
        }

        o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var a = 1; a < arguments.length; a++)
                    t[a - 1] = arguments[a];
            r.push(new Item(e, t)),
            1 !== r.length || s || runTimeout(drainQueue)
        }
            ,
            Item.prototype.run = function () {
                this.fun.apply(null, this.array)
            }
            ,
            o.title = "browser",
            o.browser = !0,
            o.env = {},
            o.argv = [],
            o.version = "",
            o.versions = {},
            o.on = noop,
            o.addListener = noop,
            o.once = noop,
            o.off = noop,
            o.removeListener = noop,
            o.removeAllListeners = noop,
            o.emit = noop,
            o.prependListener = noop,
            o.prependOnceListener = noop,
            o.listeners = function (e) {
                return []
            }
            ,
            o.binding = function (e) {
                throw new Error("process.binding is not supported")
            }
            ,
            o.cwd = function () {
                return "/"
            }
            ,
            o.chdir = function (e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            o.umask = function () {
                return 0
            }
    }
    , function (e, t, a) {
        (function (e) {
                var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                        return typeof e
                    }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                ;
                !function (a) {
                    "use strict";
                    var n, o = Object.prototype, i = o.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {},
                        s = r.iterator || "@@iterator", c = r.asyncIterator || "@@asyncIterator",
                        l = r.toStringTag || "@@toStringTag", p = "object" === t(e), u = a.regeneratorRuntime;
                    if (u)
                        p && (e.exports = u);
                    else {
                        (u = a.regeneratorRuntime = p ? e.exports : {}).wrap = wrap;
                        var d = "suspendedStart"
                            , m = "suspendedYield"
                            , h = "executing"
                            , f = "completed"
                            , g = {}
                            , _ = {};
                        _[s] = function () {
                            return this
                        }
                        ;
                        var b = Object.getPrototypeOf
                            , y = b && b(b(values([])));
                        y && y !== o && i.call(y, s) && (_ = y);
                        var j = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(_);
                        GeneratorFunction.prototype = j.constructor = GeneratorFunctionPrototype,
                            GeneratorFunctionPrototype.constructor = GeneratorFunction,
                            GeneratorFunctionPrototype[l] = GeneratorFunction.displayName = "GeneratorFunction",
                            u.isGeneratorFunction = function (e) {
                                var t = "function" == typeof e && e.constructor;
                                return !!t && (t === GeneratorFunction || "GeneratorFunction" === (t.displayName || t.name))
                            }
                            ,
                            u.mark = function (e) {
                                return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype,
                                l in e || (e[l] = "GeneratorFunction")),
                                    e.prototype = Object.create(j),
                                    e
                            }
                            ,
                            u.awrap = function (e) {
                                return {
                                    "__await": e
                                }
                            }
                            ,
                            defineIteratorMethods(AsyncIterator.prototype),
                            AsyncIterator.prototype[c] = function () {
                                return this
                            }
                            ,
                            u.AsyncIterator = AsyncIterator,
                            u.async = function (e, t, a, n) {
                                var o = new AsyncIterator(wrap(e, t, a, n));
                                return u.isGeneratorFunction(t) ? o : o.next().then(function (e) {
                                    return e.done ? e.value : o.next()
                                })
                            }
                            ,
                            defineIteratorMethods(j),
                            j[l] = "Generator",
                            j[s] = function () {
                                return this
                            }
                            ,
                            j.toString = function () {
                                return "[object Generator]"
                            }
                            ,
                            u.keys = function (e) {
                                var t = [];
                                for (var a in e)
                                    t.push(a);
                                return t.reverse(),
                                    function next() {
                                        for (; t.length;) {
                                            var a = t.pop();
                                            if (a in e)
                                                return next.value = a,
                                                    next.done = !1,
                                                    next
                                        }
                                        return next.done = !0,
                                            next
                                    }
                            }
                            ,
                            u.values = values,
                            Context.prototype = {
                                "constructor": Context,
                                "reset": function reset(e) {
                                    if (this.prev = 0,
                                        this.next = 0,
                                        this.sent = this._sent = n,
                                        this.done = !1,
                                        this.delegate = null,
                                        this.method = "next",
                                        this.arg = n,
                                        this.tryEntries.forEach(resetTryEntry),
                                        !e)
                                        for (var t in this)
                                            "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = n)
                                },
                                "stop": function stop() {
                                    this.done = !0;
                                    var e = this.tryEntries[0].completion;
                                    if ("throw" === e.type)
                                        throw e.arg;
                                    return this.rval
                                },
                                "dispatchException": function dispatchException(e) {
                                    if (this.done)
                                        throw e;
                                    var t = this;

                                    function handle(a, o) {
                                        return r.type = "throw",
                                            r.arg = e,
                                            t.next = a,
                                        o && (t.method = "next",
                                            t.arg = n),
                                            !!o
                                    }

                                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                        var o = this.tryEntries[a]
                                            , r = o.completion;
                                        if ("root" === o.tryLoc)
                                            return handle("end");
                                        if (o.tryLoc <= this.prev) {
                                            var s = i.call(o, "catchLoc")
                                                , c = i.call(o, "finallyLoc");
                                            if (s && c) {
                                                if (this.prev < o.catchLoc)
                                                    return handle(o.catchLoc, !0);
                                                if (this.prev < o.finallyLoc)
                                                    return handle(o.finallyLoc)
                                            } else if (s) {
                                                if (this.prev < o.catchLoc)
                                                    return handle(o.catchLoc, !0)
                                            } else {
                                                if (!c)
                                                    throw new Error("try statement without catch or finally");
                                                if (this.prev < o.finallyLoc)
                                                    return handle(o.finallyLoc)
                                            }
                                        }
                                    }
                                },
                                "abrupt": function abrupt(e, t) {
                                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                        var n = this.tryEntries[a];
                                        if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                            var o = n;
                                            break
                                        }
                                    }
                                    o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                                    var r = o ? o.completion : {};
                                    return r.type = e,
                                        r.arg = t,
                                        o ? (this.method = "next",
                                            this.next = o.finallyLoc,
                                            g) : this.complete(r)
                                },
                                "complete": function complete(e, t) {
                                    if ("throw" === e.type)
                                        throw e.arg;
                                    return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
                                        this.method = "return",
                                        this.next = "end") : "normal" === e.type && t && (this.next = t),
                                        g
                                },
                                "finish": function finish(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var a = this.tryEntries[t];
                                        if (a.finallyLoc === e)
                                            return this.complete(a.completion, a.afterLoc),
                                                resetTryEntry(a),
                                                g
                                    }
                                },
                                "catch": function _catch(e) {
                                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                        var a = this.tryEntries[t];
                                        if (a.tryLoc === e) {
                                            var n = a.completion;
                                            if ("throw" === n.type) {
                                                var o = n.arg;
                                                resetTryEntry(a)
                                            }
                                            return o
                                        }
                                    }
                                    throw new Error("illegal catch attempt")
                                },
                                "delegateYield": function delegateYield(e, t, a) {
                                    return this.delegate = {
                                        "iterator": values(e),
                                        "resultName": t,
                                        "nextLoc": a
                                    },
                                    "next" === this.method && (this.arg = n),
                                        g
                                }
                            }
                    }

                    function wrap(e, t, a, n) {
                        var o = t && t.prototype instanceof Generator ? t : Generator
                            , i = Object.create(o.prototype)
                            , r = new Context(n || []);
                        return i._invoke = function makeInvokeMethod(e, t, a) {
                            var n = d;
                            return function invoke(o, i) {
                                if (n === h)
                                    throw new Error("Generator is already running");
                                if (n === f) {
                                    if ("throw" === o)
                                        throw i;
                                    return doneResult()
                                }
                                for (a.method = o,
                                         a.arg = i; ;) {
                                    var r = a.delegate;
                                    if (r) {
                                        var s = maybeInvokeDelegate(r, a);
                                        if (s) {
                                            if (s === g)
                                                continue;
                                            return s
                                        }
                                    }
                                    if ("next" === a.method)
                                        a.sent = a._sent = a.arg;
                                    else if ("throw" === a.method) {
                                        if (n === d)
                                            throw n = f,
                                                a.arg;
                                        a.dispatchException(a.arg)
                                    } else
                                        "return" === a.method && a.abrupt("return", a.arg);
                                    n = h;
                                    var c = tryCatch(e, t, a);
                                    if ("normal" === c.type) {
                                        if (n = a.done ? f : m,
                                        c.arg === g)
                                            continue;
                                        return {
                                            "value": c.arg,
                                            "done": a.done
                                        }
                                    }
                                    "throw" === c.type && (n = f,
                                        a.method = "throw",
                                        a.arg = c.arg)
                                }
                            }
                        }(e, a, r),
                            i
                    }

                    function tryCatch(e, t, a) {
                        try {
                            return {
                                "type": "normal",
                                "arg": e.call(t, a)
                            }
                        } catch (e) {
                            return {
                                "type": "throw",
                                "arg": e
                            }
                        }
                    }

                    function Generator() {
                    }

                    function GeneratorFunction() {
                    }

                    function GeneratorFunctionPrototype() {
                    }

                    function defineIteratorMethods(e) {
                        ["next", "throw", "return"].forEach(function (t) {
                            e[t] = function (e) {
                                return this._invoke(t, e)
                            }
                        })
                    }

                    function AsyncIterator(e) {
                        var a;
                        this._invoke = function enqueue(n, o) {
                            function callInvokeWithMethodAndArg() {
                                return new Promise(function (a, r) {
                                        !function invoke(a, n, o, r) {
                                            var s = tryCatch(e[a], e, n);
                                            if ("throw" !== s.type) {
                                                var c = s.arg
                                                    , l = c.value;
                                                return l && "object" === (void 0 === l ? "undefined" : t(l)) && i.call(l, "__await") ? Promise.resolve(l.__await).then(function (e) {
                                                    invoke("next", e, o, r)
                                                }, function (e) {
                                                    invoke("throw", e, o, r)
                                                }) : Promise.resolve(l).then(function (e) {
                                                    c.value = e,
                                                        o(c)
                                                }, r)
                                            }
                                            r(s.arg)
                                        }(n, o, a, r)
                                    }
                                )
                            }

                            return a = a ? a.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg()
                        }
                    }

                    function maybeInvokeDelegate(e, t) {
                        var a = e.iterator[t.method];
                        if (a === n) {
                            if (t.delegate = null,
                            "throw" === t.method) {
                                if (e.iterator.return && (t.method = "return",
                                    t.arg = n,
                                    maybeInvokeDelegate(e, t),
                                "throw" === t.method))
                                    return g;
                                t.method = "throw",
                                    t.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return g
                        }
                        var o = tryCatch(a, e.iterator, t.arg);
                        if ("throw" === o.type)
                            return t.method = "throw",
                                t.arg = o.arg,
                                t.delegate = null,
                                g;
                        var i = o.arg;
                        return i ? i.done ? (t[e.resultName] = i.value,
                            t.next = e.nextLoc,
                        "return" !== t.method && (t.method = "next",
                            t.arg = n),
                            t.delegate = null,
                            g) : i : (t.method = "throw",
                            t.arg = new TypeError("iterator result is not an object"),
                            t.delegate = null,
                            g)
                    }

                    function pushTryEntry(e) {
                        var t = {
                            "tryLoc": e[0]
                        };
                        1 in e && (t.catchLoc = e[1]),
                        2 in e && (t.finallyLoc = e[2],
                            t.afterLoc = e[3]),
                            this.tryEntries.push(t)
                    }

                    function resetTryEntry(e) {
                        var t = e.completion || {};
                        t.type = "normal",
                            delete t.arg,
                            e.completion = t
                    }

                    function Context(e) {
                        this.tryEntries = [{
                            "tryLoc": "root"
                        }],
                            e.forEach(pushTryEntry, this),
                            this.reset(!0)
                    }

                    function values(e) {
                        if (e) {
                            var t = e[s];
                            if (t)
                                return t.call(e);
                            if ("function" == typeof e.next)
                                return e;
                            if (!isNaN(e.length)) {
                                var a = -1
                                    , o = function next() {
                                    for (; ++a < e.length;)
                                        if (i.call(e, a))
                                            return next.value = e[a],
                                                next.done = !1,
                                                next;
                                    return next.value = n,
                                        next.done = !0,
                                        next
                                };
                                return o.next = o
                            }
                        }
                        return {
                            "next": doneResult
                        }
                    }

                    function doneResult() {
                        return {
                            "value": n,
                            "done": !0
                        }
                    }
                }(function () {
                    return this
                }() || Function("return this")())
            }
        ).call(this, a(74)(e))
    }
    , function (e, t, a) {
    }
    , , function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return createSelectorQuery
        });
        var n = a(0)
            , o = function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }();

        function _classCallCheck(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }

        function filter(e, t, a) {
            if (!t)
                return null;
            var n = e.id
                , o = e.dataset
                , i = e.rect
                , r = e.size
                , s = e.scrollOffset
                , c = e.properties
                , l = void 0 === c ? [] : c
                , p = e.computedStyle
                , u = void 0 === p ? [] : p
                , d = t.getBoundingClientRect()
                , m = d.left
                , h = d.right
                , f = d.top
                , g = d.bottom
                , _ = d.width
                , b = d.height
                , y = "html" === a
                , j = {};
            if (n && (j.id = t.id),
            o && (j.dataset = Object.assign({}, t.dataset)),
            i && (y ? (j.left = 0,
                j.right = 0,
                j.top = 0,
                j.bottom = 0) : (j.left = m,
                j.right = h,
                j.top = f,
                j.bottom = g)),
            r && (y ? (j.width = t.clientWidth,
                j.height = t.clientHeight) : (j.width = _,
                j.height = b)),
            s && (j.scrollLeft = t.scrollLeft,
                j.scrollTop = t.scrollTop,
                j.scrollHeight = t.scrollHeight,
                j.scrollWidth = t.scrollWidth),
            l.length && l.forEach(function (e) {
                var a = t.getAttribute(e);
                a && (j[e] = a)
            }),
                u.length) {
                var v = window.getComputedStyle(t);
                u.forEach(function (e) {
                    var t = v.getPropertyValue(e);
                    t && (j[e] = t)
                })
            }
            return j
        }

        var i = function () {
            function Query() {
                _classCallCheck(this, Query),
                    this._defaultWebviewId = null,
                    this._webviewId = null,
                    this._queue = [],
                    this._queueCb = [],
                    this._component = null
            }

            return o(Query, [{
                "key": "in",
                "value": function _in(e) {
                    return this._component = e,
                        this
                }
            }, {
                "key": "select",
                "value": function select(e) {
                    return "string" == typeof e && (e = e.replace(">>>", ">")),
                        new r(e, this, !0)
                }
            }, {
                "key": "selectAll",
                "value": function selectAll(e) {
                    return "string" == typeof e && (e = e.replace(">>>", ">")),
                        new r(e, this, !1)
                }
            }, {
                "key": "selectViewport",
                "value": function selectViewport() {
                    return new r("html", this, !0)
                }
            }, {
                "key": "exec",
                "value": function exec(e) {
                    var t = this;
                    !function queryBat(e, t) {
                        var a = [];
                        e.forEach(function (e) {
                            var t = e.selector
                                , o = e.single
                                , i = e.fields
                                , r = e.component
                                , s = null !== r && n.j.findDOMNode(r) || document
                                , c = !1;
                            if (s !== document)
                                for (var l = s.parentNode.querySelectorAll(t), p = 0, u = l.length; p < u; ++p)
                                    if (s === l[p]) {
                                        c = !0;
                                        break
                                    }
                            if (o) {
                                var d = !0 === c ? s : s.querySelector(t);
                                a.push(filter(i, d, t))
                            } else {
                                var m = s.querySelectorAll(t)
                                    , h = [];
                                !0 === c && h.push(s);
                                for (var f = 0, g = m.length; f < g; ++f)
                                    h.push(m[f]);
                                a.push(h.map(function (e) {
                                    return filter(i, e)
                                }))
                            }
                        }),
                            t(a)
                    }(this._queue, function (a) {
                        var n = t._queueCb;
                        a.forEach(function (e, a) {
                            "function" == typeof n[a] && n[a].call(t, e)
                        }),
                        "function" == typeof e && e.call(t, a)
                    })
                }
            }, {
                "key": "_push",
                "value": function _push(e, t, a, n) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    this._queue.push({
                        "component": t,
                        "selector": e,
                        "single": a,
                        "fields": n
                    }),
                        this._queueCb.push(o)
                }
            }]),
                Query
        }()
            , r = function () {
            function NodesRef(e, t, a) {
                _classCallCheck(this, NodesRef),
                    this._component = t._component,
                    this._selector = e,
                    this._selectorQuery = t,
                    this._single = a
            }

            return o(NodesRef, [{
                "key": "boundingClientRect",
                "value": function boundingClientRect(e) {
                    var t = this._selector
                        , a = this._component
                        , n = this._single
                        , o = this._selectorQuery;
                    return o._push(t, a, n, {
                        "id": !0,
                        "dataset": !0,
                        "rect": !0,
                        "size": !0
                    }, e),
                        o
                }
            }, {
                "key": "scrollOffset",
                "value": function scrollOffset(e) {
                    var t = this._selector
                        , a = this._component
                        , n = this._single
                        , o = this._selectorQuery;
                    return o._push(t, a, n, {
                        "id": !0,
                        "dataset": !0,
                        "scrollOffset": !0
                    }, e),
                        o
                }
            }, {
                "key": "fields",
                "value": function fields(e, t) {
                    var a = this._selector
                        , n = this._component
                        , o = this._single
                        , i = this._selectorQuery
                        , r = e.id
                        , s = e.dataset
                        , c = e.rect
                        , l = e.size
                        , p = e.scrollOffset
                        , u = e.properties
                        , d = void 0 === u ? [] : u
                        , m = e.computedStyle
                        , h = void 0 === m ? [] : m;
                    return i._push(a, n, o, {
                        "id": r,
                        "dataset": s,
                        "rect": c,
                        "size": l,
                        "scrollOffset": p,
                        "properties": d,
                        "computedStyle": h
                    }, t),
                        i
                }
            }]),
                NodesRef
        }();

        function createSelectorQuery() {
            return new i
        }
    }
    , function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return r
        });
        var n = a(3)
            , o = void 0
            , i = void 0
            , r = function pageScrollTo(e) {
            var t = e.scrollTop
                , a = e.duration
                , r = void 0 === a ? 300 : a
                , s = e.success
                , c = e.fail
                , l = e.complete;
            return new Promise(function (e, a) {
                    try {
                        if (void 0 === t)
                            throw Error('"scrollTop" is required');
                        var p = document.querySelector(".taro-tabbar__panel") || window;
                        o || (o = p === window ? function scrollFunc(e) {
                                    if (void 0 === e)
                                        return window.pageYOffset;
                                    window.scrollTo(0, e)
                                }
                                : function scrollFunc(e) {
                                    if (void 0 === e)
                                        return p.scrollTop;
                                    p.scrollTop = e
                                }
                        );
                        var u = o()
                            , d = t - u
                            , m = r / 17
                            , h = Object(n.g)(n.c, m);
                        !function scroll() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                                , a = u + d * h(t);
                            if (o(a),
                            t < m)
                                i && clearTimeout(i),
                                    i = setTimeout(function () {
                                        scroll(t + 1)
                                    }, 17);
                            else {
                                var n = {
                                    "errMsg": "pageScrollTo:ok"
                                };
                                s && s(n),
                                l && l(),
                                    e(n)
                            }
                        }()
                    } catch (e) {
                        var f = {
                            "errMsg": "pageScrollTo:fail " + e.message
                        };
                        c && c(f),
                        l && l(),
                            a(f)
                    }
                }
            )
        }
    }
    , function (e, t, a) {
    }
    , , function (e, t, a) {
    }
    , , function (e, t, a) {
    }
    , , function (e, t, a) {
    }
    , , , , function (e, t, a) {
        "use strict";
        a.d(t, "a", function () {
            return setNavigationBarTitle
        });
        var n = a(3);

        function setNavigationBarTitle(e) {
            var t = Object(n.m)(e);
            if (!t.res) {
                var a = {
                    "errMsg": "setNavigationBarTitle" + t.msg
                };
                return console.error(a.errMsg),
                    Promise.reject(a)
            }
            var o = e.title
                , i = e.success
                , r = e.fail
                , s = e.complete
                , c = {
                "errMsg": "setNavigationBarTitle:ok"
            };
            return o && "string" == typeof o ? (document.title !== o && (document.title = o),
            "function" == typeof i && i(c),
            "function" == typeof s && s(c),
                Promise.resolve(c)) : (c.errMsg = Object(n.f)({
                "name": "setNavigationBarTitle",
                "para": "title",
                "correct": "String",
                "wrong": o
            }),
                console.error(c.errMsg),
            "function" == typeof r && r(c),
            "function" == typeof s && s(c),
                Promise.reject(c))
        }
    }
    , function (e, t, a) {
        "use strict";
        a(36);
        var n = a(0)
            , o = a(37)
            , i = a(35)
            , r = a.n(i)
            , s = (a(71),
            Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
        )
            , c = function () {
            function defineProperties(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var n = t[a];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                    "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }

            return function (e, t, a) {
                return t && defineProperties(e.prototype, t),
                a && defineProperties(e, a),
                    e
            }
        }();

        function _defineProperty(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                "value": a,
                "enumerable": !0,
                "configurable": !0,
                "writable": !0
            }) : e[t] = a,
                e
        }

        var l = function (e) {
            function Button() {
                !function _classCallCheck(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, Button);
                var e = function _possibleConstructorReturn(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
                return e.state = {
                    "hover": !1,
                    "touch": !1
                },
                    e
            }

            return function _inherits(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    "constructor": {
                        "value": e,
                        "enumerable": !1,
                        "writable": !0,
                        "configurable": !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(Button, n["j"].Component),
                c(Button, [{
                    "key": "render",
                    "value": function render() {
                        var e, t = this, a = this.props, i = a.children, c = a.disabled, l = a.className, p = a.style,
                            u = a.onClick, d = a.onTouchStart, m = a.onTouchEnd, h = a.hoverClass,
                            f = void 0 === h ? "button-hover" : h, g = a.hoverStartTime, _ = void 0 === g ? 20 : g,
                            b = a.hoverStayTime, y = void 0 === b ? 70 : b, j = a.size, v = a.plain, E = a.loading,
                            k = void 0 !== E && E, w = a.type, D = void 0 === w ? "default" : w,
                            T = l || r()("weui-btn", (_defineProperty(e = {}, "" + f, this.state.hover && !c && "none" !== f),
                                _defineProperty(e, "weui-btn_plain-" + D, v),
                                _defineProperty(e, "weui-btn_" + D, !v && D),
                                _defineProperty(e, "weui-btn_mini", "mini" === j),
                                _defineProperty(e, "weui-btn_loading", k),
                                _defineProperty(e, "weui-btn_disabled", c),
                                e));
                        return n.j.createElement("button", s({}, Object(o.a)(this.props, ["hoverClass", "onTouchStart", "onTouchEnd"]), {
                            "className": T,
                            "style": p,
                            "onClick": u,
                            "disabled": c,
                            "onTouchStart": function _onTouchStart(e) {
                                t.setState(function () {
                                    return {
                                        "touch": !0
                                    }
                                }),
                                f && "none" !== f && !c && setTimeout(function () {
                                    t.state.touch && t.setState(function () {
                                        return {
                                            "hover": !0
                                        }
                                    })
                                }, _),
                                d && d(e)
                            },
                            "onTouchEnd": function _onTouchEnd(e) {
                                t.setState(function () {
                                    return {
                                        "touch": !1
                                    }
                                }),
                                f && "none" !== f && !c && setTimeout(function () {
                                    t.state.touch || t.setState(function () {
                                        return {
                                            "hover": !1
                                        }
                                    })
                                }, y),
                                m && m(e)
                            }
                        }), k && n.j.createElement("i", {
                            "class": "weui-loading"
                        }), i)
                    }
                }]),
                Button
        }();
        t.a = l
    }
])]);
