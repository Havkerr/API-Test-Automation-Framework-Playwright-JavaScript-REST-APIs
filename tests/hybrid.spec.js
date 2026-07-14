const {test, expect} = require('@playwright/test');
const ApiHelper = require('../utils/apiHelper');

test('Hybrid Testing', async({request, page}) =>{

    //get response from the link [API testing]
    const apiHelper = new ApiHelper(request);
    const newResponse = await apiHelper.hybridTest();

    expect(newResponse.status()).toBe(200);
    const data =  await newResponse.json();
    
    //setting up fake website and inserting text from the json link []
    await page.setContent(`
    <h1 id = "name"></h1>
    <p id = "email"></p>
    <script>
    
    const data = ${JSON.stringify(data)}; 
        document.getElementById('name').innerText = data.name;
        document.getElementById('email').innerText = data.email;
        </script>
    `);

    
    // verifying the data from the API responce and the from the UI [UI Testing]

    await expect(page.locator('#name')).toHaveText(data.name);
    await expect(page.locator('#email')).toHaveText(data.email);
});