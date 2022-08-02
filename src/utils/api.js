//引入刚才的http.js文件
import https from './http.js';
	
	//设置个对象，就不用一个个暴露了，直接暴露对象
	let apiFun = {};
	
	/* 获取列表 */
	//查询列表，详情就是get
	/* /api/getlist是请求接口地址，有http.js里面的Ip加上，如：http:192.168.0.1:9090//api/getlist  */
	apiFun.getlist = function(params) {
		return https.get('/api/getlist', params)
	}
	
	/* 新增保存检查计划 */ 
	//保存都是post
	apiFun.saveJcInfo = function(params) {
		return https.post('/api/saveJcInfo', params)
	}
	
	//暴露出这个对象
export default apiFun;
