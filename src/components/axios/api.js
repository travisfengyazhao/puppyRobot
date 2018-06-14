import { fetch } from "./fetch"; //引用fetch.js
import api from './url'; //引用url.js

export function orderProduct(name, phone, mail) {
    return fetch({
        url: api.orderProduct,
        method: 'get',
        params:{
            phone: phone,
            username: name,
            mail: mail,
            _: Date.parse(new Date())
        }
    })
}

export function validPhone(phone) {
    return fetch({
        url: api.orderProduct,
        method: 'get',
        params:{
            phone: phone,
            q: 's',
            _: Date.parse(new Date())
        }
    })
}

export function getTopNews() {
    return fetch({
        url: api.getNewsInfo,
        method: 'get',
        params:{
            is_promote: 1,
            _: Date.parse(new Date())
        }
    })
}

export function getNormalNews(paraPage) {
    return fetch({
        url: api.getNewsInfo,
        method: 'get',
        params:{
            is_promote: 0,
            page: paraPage,
            _: Date.parse(new Date())
        }
    })
}

export function getNewsDetail(newsId) {
    return fetch({
        url: api.getNewsInfo,
        method: 'get',
        params:{
            nid: newsId,
            _: Date.parse(new Date())
        }
    })
}

