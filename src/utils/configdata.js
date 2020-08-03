


let obj = {
    'daPingpeizhi': {
        "peiZhi": {
            'daPingKuanDu': {
                "type": "numinput",
                'shuxing': {
                    'name': '大屏宽度',
                    'value': 1920,
                },
                'class': ['tongyong']
            },
            "daPingGaoDu": {
                "type": "numinput",
                'class': ['tongyong'],
                'shuxing': {
                    'name': '大屏高度',
                    'value': 1080,
                }
            },
            "daPingJianJie": {
                "type": "datatextarea",
                'class': ['tongyong'],
                'shuxing': {
                    'name': '大屏简介',
                    'value': '大屏简介大屏简介大屏简介大屏简介',
                }
            },
            "daPingBeiJingColor": {
                "type": "colorselect",
                'class': ['tongyong'],

                'shuxing': {
                    'name': '背景颜色',
                    'value': '#fff',
                }
            },
            "daPingBeiJingTuPian": {
                "type": "sendimg",
                'class': ['tongyong'],
                'shuxing': {
                    'name': '背景图片',
                    'value': '#fff',
                }
            },
            "SuoLuePian": {
                "type": "sendimg",
                'class': ['tongyong'],
                'shuxing': {
                    'name': '缩略图',
                    'value': '#fff',
                }
            },
            "suoFang": {
                "type": "dapingzoom",
                'class': ['tongyong'],
                'shuxing': {
                    'name': '缩放',
                    'value': 50,
                }
            },
            "daPingJianJie": {
                "type": "datatextarea",
                'class': ['tongyong'],
                'shuxing': {
                    'name': '环境地址',
                    'value': 'https://yapi.avuejs.com',
                }
            },
            "shuiYing": {
                "type": "kaiguanlist",
                'children': {
                    'shuiying': {
                        'type': 'kaiguan',
                        'shuxing': {
                            'name': '水印(预览有效)',
                            'value': 0,
                        },
                        'class': ['tongyong'],
                        'children': {
                            'neirong': {
                                'type': 'textinput',
                                'shuxing': {
                                    'name': '内容',
                                    'value': '',
                                },
                                'class': ['tongyong'],
                            },
                            'daxiao': {
                                'type': 'numinput',
                                'shuxing': {
                                    'name': '大小',
                                    'value': '',
                                },
                                'class': ['tongyong'],
                            },
                            'yanse': {
                                'type': 'colorselect',
                                'shuxing': {
                                    'name': '颜色',
                                    'value': 'transparent',
                                },
                                'class': ['tongyong'],
                            },
                            'jiaodu': {
                                'type': 'numinput',
                                'shuxing': {
                                    'name': '角度',
                                    'value': '',
                                },
                                'class': ['tongyong'],
                            }
                        }
                    }
                },
            }
        },
        "shuJu": {
            'daPingKuanDu': {
                "type": "numinput",
                'shuxing': {
                    'name': '大屏宽度',
                    'value': 1920,
                },
                'class': ['tongyong'],
                'children': []
            },

            "daPingJianJie": {
                "type": "datatextarea",
                'class': ['tongyong'],
                'shuxing': {
                    'name': '大屏简介',
                    'value': '大屏简介大屏简介大屏简介大屏简介',
                }
            },
            "daPingBeiJingColor": {
                "type": "colorselect",
                'class': ['tongyong'],

                'shuxing': {
                    'name': '背景颜色',
                    'value': '#fff',
                }
            },
            "daPingBeiJingTuPian": {
                "type": "sendimg",
                'class': ['tongyong'],

                'shuxing': {
                    'name': '背景图片',
                    'value': '#fff',
                }
            },
            "SuoLuePian": {
                "type": "sendimg",
                'class': ['tongyong'],
                'shuxing': {
                    'name': '缩略图',
                    'value': '#fff',
                }
            },
            "suoFang": {
                "type": "dapingzoom",
                'class': ['tongyong'],

                'shuxing': {
                    'name': '缩放',
                    'value': 50,
                }
            },
            "daPingJianJie": {
                "type": "datatextarea",
                'class': ['tongyong'],

                'shuxing': {
                    'name': '环境地址',
                    'value': 'https://yapi.avuejs.com',
                }
            },
            "shuiYing": {
                "type": "kaiguanlist",
                'children': [
                    {
                        'type': 'kaiguan',
                        'shuxing': {
                            'name': '水印(预览有效)',
                            'value': 0,
                        },
                        'class': ['tongyong'],
                        'children': [{
                            'type': 'textinput',
                            'shuxing': {
                                'name': '内容',
                                'value': '',
                            },
                            'class': ['tongyong'],
                        },
                        {
                            'type': 'numinput',
                            'shuxing': {
                                'name': '大小',
                                'value': '',
                            },
                            'class': ['tongyong'],
                        },
                        {
                            'type': 'colorselect',
                            'shuxing': {
                                'name': '颜色',
                                'value': 'transparent',
                            },
                            'class': ['tongyong'],
                        },
                        {
                            'type': 'numinput',
                            'shuxing': {
                                'name': '角度',
                                'value': '',
                            },
                            'class': ['tongyong'],
                        }]
                    },

                ],
            }
        },
        "geShiHua": {
            'daPingKuanDu': {
                "type": "numinput",
                'shuxing': {
                    'name': '大屏宽度',
                    'value': 1920,
                },
                'class': ['tongyong'],
                'children': []
            },

            "daPingJianJie": {
                "type": "datatextarea",
                'class': ['tongyong'],
                'shuxing': {
                    'name': '大屏简介',
                    'value': '大屏简介大屏简介大屏简介大屏简介',
                }
            },
            "daPingBeiJingColor": {
                "type": "colorselect",
                'class': ['tongyong'],

                'shuxing': {
                    'name': '背景颜色',
                    'value': '#fff',
                }
            },
            "daPingBeiJingTuPian": {
                "type": "sendimg",
                'class': ['tongyong'],

                'shuxing': {
                    'name': '背景图片',
                    'value': '#fff',
                }
            },
            "SuoLuePian": {
                "type": "sendimg",
                'class': ['tongyong'],
                'shuxing': {
                    'name': '缩略图',
                    'value': '#fff',
                }
            },
            "suoFang": {
                "type": "dapingzoom",
                'class': ['tongyong'],

                'shuxing': {
                    'name': '缩放',
                    'value': 50,
                }
            },
            "daPingJianJie": {
                "type": "datatextarea",
                'class': ['tongyong'],

                'shuxing': {
                    'name': '环境地址',
                    'value': 'https://yapi.avuejs.com',
                }
            },
            "shuiYing": {
                "type": "kaiguanlist",
                'children': [
                    {
                        'type': 'kaiguan',
                        'shuxing': {
                            'name': '水印(预览有效)',
                            'value': 0,
                        },
                        'class': ['tongyong'],
                        'children': [{
                            'type': 'textinput',
                            'shuxing': {
                                'name': '内容',
                                'value': '',
                            },
                            'class': ['tongyong'],
                        },
                        {
                            'type': 'numinput',
                            'shuxing': {
                                'name': '大小',
                                'value': '',
                            },
                            'class': ['tongyong'],
                        },
                        {
                            'type': 'colorselect',
                            'shuxing': {
                                'name': '颜色',
                                'value': 'transparent',
                            },
                            'class': ['tongyong'],
                        },
                        {
                            'type': 'numinput',
                            'shuxing': {
                                'name': '角度',
                                'value': '',
                            },
                            'class': ['tongyong'],
                        }]
                    },

                ],
            }
        }
    },
    "modules": {
        "组件A": {
            "peiZhi": {
                "tuCengMingCheng": {
                    "type": "div",//true
                    'shuxing': {
                        'class': ['tuCengMingCheng']
                    },//true
                    "key": "tuCengMingCheng",
                    "title": "图层名称",
                    "vale": "柱状图",
                    "show": true,
                    "children": {
                        'asdf': {
                            "type": "div",//true
                            'shuxing': {
                                'class': ['tuCengMingCheng']
                            },//true
                            "key": "tuCengMingCheng",
                            "title": "图层名称",
                            "vale": "柱状图",
                            "show": true,
                            'children': {}
                        }
                    }
                },
                "zhuTiSheZhi": {
                    "type": "div",//true
                    'shuxing': {
                        'class': ['zhuTiSheZhi']
                    },//true
                    "key": "tuCengMingCheng",
                    "title": "图层名称",
                    "vale": "柱状图",
                    "show": true,
                    "children": {}
                }
            },
            // "shuJu": {},
            // "geShiHua": {},
            // "canShu": {}
        },
        "组件B": {}
    }
}
export default obj;