/* eslint-disable no-undef */
import supertest from 'supertest'
import { Application } from '../application'

var app: Application

describe('Simple graphql test', () => {
  beforeAll(() => {
    app = new Application()
  })

  test('Graphql query', async() => {
    const result: supertest.Response = await supertest(app.expressApplication)
      .post('/graphql')
      .send({ query: '{\n  hello\n}', variables: null })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
    expect(result.text).toBe('{"data":{"hello":"Hello world!"}}')
  })
})
