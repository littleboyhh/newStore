import {request} from "./request"

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/api/h8/home/data',
    params: {
      page,
      type
    }
  })
}