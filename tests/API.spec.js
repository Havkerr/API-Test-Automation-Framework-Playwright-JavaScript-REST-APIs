const { test, expect } = require("@playwright/test");
const testData = require('../fixtures/testData.json');
const ApiHelper = require('../utils/apiHelper');

test('Get responce', async ({ request }) => {
    const apiHelper = new ApiHelper(request);
    const responce = await apiHelper.getData();
    expect(responce.status()).toBe(200);

    const body = await responce.json();
    expect(body.length).toBe(10);
});

test('Add Data', async ({ request }) => {
    const apiHelper = new ApiHelper(request);
    const newResponce = await apiHelper.addData(testData.newUser);

    expect(newResponce.status()).toBe(201);
    const body =  await newResponce.json();

    expect(body.name).toBe('Shubham');
    expect(body.email).toBe('shubham@test.com');

});
