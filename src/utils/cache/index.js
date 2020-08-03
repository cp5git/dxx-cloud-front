const cache = {

    //设置某项缓存,注意：此方法用于保存对象
    cacheSetForObject: function(key, value) {
        value = JSON.stringify(value)
        localStorage.setItem(key, value)
    },
    //设置某项缓存,注意：此方法用于字符串
    cacheSetForItem: function(key, value) {
        localStorage.setItem(key, value)
    },
    //获取某项缓存,注意：此方法用于获取对象
    cacheGetForObject: function(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    //获取某项缓存,注意：此方法用于获取对象
    cacheGetForItem: function(key) {
        return localStorage.getItem(key)
    },
    //删除某项缓存
    cacheDelete: function(key) {
        localStorage.removeItem(key)
    },
    //判断某项缓存是否存在
    cacheIsExist: function(key) {
        if (localStorage.getItem(key) != null) {
            return true;
        } else {
            return false;
        }
    },
    //清空所有缓存
    cacheClearAll: function() {
        localStorage.clear()
    }
}

export default cache