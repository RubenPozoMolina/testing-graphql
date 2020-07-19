import request from "supertest";
import express from "express";
import { Application } from "../application"

var app: Application;

describe('Simple graphql test', () => {

  beforeAll(() => {
    app = new Application()
  });

  test("Graphql query", async () => {
    let result = await request(app.expressApplication)
      .post("/graphql")
      .send({ "query": "{\n  hello\n}", "variables": null })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  })

})