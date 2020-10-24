const assert = require('assert')
const request = require('supertest')
const app = require('../index')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/"', () => {
    it('respond with Hello!', (done) => {
        request(app).get('/').expect('Hello!', done)
    })
})

describe('GET "/item"', () => {
    it('respond with array of item', (done) => {
        let want = [
            { id: 1, name:'iphone 12' }
            { id: 1, name:'Nokia 3310' }
        ]
        request(app).get('/items').expect('want', done)
    })
})