import request from '@/utils/request'

export function getPosts() {
  return request({
    url: '/post/getPosts',
    method: 'get',
  })
}

export function getPostById(data) {
  return request({
    url: '/post/getPostById',
    method: 'post',
    data: data
  })
}