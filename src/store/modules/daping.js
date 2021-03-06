/**
 * 管理page的其他状态
 */

const daping = {

    state: {
        base: {
            "peiZhi": {
                'daPingName': {
                    "type": "textinput",
                    'shuxing': {
                        'name': '大屏名称',
                        'value': '大屏名称',
                    }
                },
                'daPingKuanDu': {
                    "type": "numinput",
                    'shuxing': {
                        'name': '大屏宽度',
                        'value': 1920,
                    }
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
                        'value': '大屏简介',
                    }
                },
                "daPingBeiJingColor": {
                    "type": "colorselect",
                    'class': ['tongyong'],
                    'shuxing': {
                        'name': '背景颜色',
                        'value': '#040C3B',
                    }
                },
                "daPingBeiJingTuPian": {
                    "type": "sendimg",
                    'class': ['tongyong'],
                    'shuxing': {
                        'name': '背景图片',
                        "imgtype":"dapinbkimg", 
                        'value': '',
                        "action": "http:qqqqqqqqqqq/" 
                    }
                },
                "SuoLuePian": {
                    "type": "sendimg",
                    'class': ['tongyong'],
                    'shuxing': {
                        'name': '缩略图',
                        "imgtype":"suoluetu", 
                        'value': '',
                        "action": "http:qqqqqqqqqqq/" 
                    }
                }
            }
        },
        modules: {},
        mapHoverData:{
            name:'www',
            valu1:'234',
            valu2:'34545'
        }

    },
    mutations: {

    },
    actions: {

    }
}



export default daping