// playwright.config.js
// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    headless: process.env.CI ? true : false,
  },
};

module.exports = config; 