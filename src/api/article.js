import request from '@/utils/request'

export function getPosts(data) {
  return request({
    url: '/post/getPosts',
    method: 'get',
    data: data
  })
}
