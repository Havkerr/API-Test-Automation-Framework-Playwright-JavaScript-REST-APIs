**API Test Automation Framework**

A Playwright + JavaScript API test automation project for REST API validation with hybrid UI testing.

Tech Stack:
- Playwright
- JavaScript
- JSONPlaceholder REST API

Project Structure:
- tests/api.spec.js — API test cases for GET and POST requests
- tests/hybrid.spec.js — Hybrid API and UI validation test
- utils/apiHelper.js — Reusable API helper class
- fixtures/testData.json — Test data for API requests

Prerequisites:
- Node.js
- npm

How to Run: npx playwright test

What's Tested:
- GET all users — validates status 200 and returns 10 users
- POST create user — validates status 201 and response data matches input
- Hybrid test — validates API response data is correctly displayed in UI




