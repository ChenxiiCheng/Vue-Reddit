import request from '@/utils/request';

// 获取首页帖子列表数据
export const getItems = data => {
  return request({
    url: '/topics',
    method: 'get',
    params: data
  });
};

//获取帖子详情数据
export const getDetailById = id => {
  return request({
    url: `/topic/${id}`,
    method: 'get'
  });
};

// 获取用户详情数据
export const getUserProfile = loginname => {
  return request({
    url: `/user/${loginname}`,
    method: 'get'
  });
};
