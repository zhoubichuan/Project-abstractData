import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/api/opinfo/login',
    method: 'post',
    data
  })
}

export function getInfo (token) {
  return request({
    url: '/api/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function userLogin (data) {
  return request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}

export function logout (data) {
  console.log(data)
  return request({
    url: '/api/user/logout',
    method: 'post',
    data
  })
}

export function modifyPassword (data) {
  console.log(data)
  return request({
    url: '/api/opinfo/update_pwd',
    method: 'post',
    data
  })
}

export function userlist (data) {
  console.log(data)
  return request({
    url: '/api/opgroup/index',
    method: 'get',
    data
  })
}
