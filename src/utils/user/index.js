import Vue from 'vue'
import cache from '@/utils/cache'

/**
 * @setUserToCashe 把登录后返回的user对象保存到缓存
 * @param userObj:返回来的数据
 */
Vue.prototype.setUserToCashe = function(userObj) {
	
	//保存用户信息到缓存
	cache.cacheSetForObject('userInfo',userObj);
}


/**
 * @setUserToCashe 把登录后返回的user对象保存到缓存
 * @param userObj:返回来的数据
 */
Vue.prototype.getUserItem = function(key) {
	
	var userInfo = cache.cacheGetForObject('userInfo')

	return userInfo[key]
}

/**
 * @setUserToCashe 把登录后返回的user对象保存到缓存
 * @param userObj:返回来的数据
 */
Vue.prototype.UserIsLogin = function() {
	
	return cache.cacheIsExist('userInfo')
}

/**
 * @prototype 退出
 * @param userObj:返回来的数据
 */
Vue.prototype.UserLogout = function() {
	
	cache.cacheDelete('userInfo')
}