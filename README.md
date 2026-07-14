API Test Automation Framework
Automated API testing framework built with Playwright and JavaScript to validate REST API endpoints.
Tech Stack
Playwright, JavaScript, REST API (JSONPlaceholder)
Project Structure
tests/api.spec.js — API test cases
tests/hybrid.spec.js — Hybrid API and UI test
utils/apiHelper.js — Reusable API helper class
fixtures/testData.json — Test data
Test Cases
GET all users — validates status 200 and returns 10 users
POST create user — validates status 201 and response data matches input
Hybrid test — validates API response data is correctly displayed in UI
How to Run
npm install
npx playwright test
