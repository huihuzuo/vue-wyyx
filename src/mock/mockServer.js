/*
mock服务器
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'  //会自动解析为js的对象数据
import data_nav from './data_nav.json'
import home_data from './home_data.json'
import shiwu_data from './shiwu_data.json'


// 返回data的接口，后台向前台返回的数据结构是对象，对象里有code
/*Mock.mock( rurl, template )
记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，
将根据数据模板 template 生成模拟数据，并作为响应数据返回。*/

//mock数据模块无需向外暴露任何数据，只需加载执行一次就可以访问接口

Mock.mock('/data', {code:0, data: data})
//返回首页轮播图片的接口
Mock.mock('/banner', {code:0, focusList: home_data.focusList})
//返回home页数据的接口
Mock.mock('/home', {code:0, home: home_data})

Mock.mock('/catelist', {code:0, data: home_data.cateList})
//返回detail页数据的接口
Mock.mock('/detail', {code:0, detail: shiwu_data})
//返回分类页nav数据
Mock.mock('/nav', {code:0, nav: data_nav})

