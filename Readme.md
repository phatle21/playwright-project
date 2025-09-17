https://testingvn.gitbook.io/playwright

SET UP

PLAYWRIGHT: LOCATOR ELEMENTS

IMPLEMENT TEST CASES

PAGE OBJECT MODEL
=> Page Object Model (POM) is a design pattern that creates an object repository for web UI elements. It helps in:
1. Reducing code duplication: Common page interactions are defined once.
2. Improving maintainability: Changes to the UI only require updates in one place.
3. Enhancing readability: Tests focus on business logic rather than element interactions.
4. Separating concerns: Page structure is separated from test logic.

tests/
├── pages/           # Page objects directory
│   ├── base.page.ts  # Base page with common methods
│   ├── login.page.ts # Login page object
│   └── ...          # Other page objects
└── specs/           # Test specifications
    ├── login.spec.ts
    └── ...


API TESTING
( https://restful-booker.herokuapp.com/apidoc/index.html )
get, post, put, delete
=> Creates a new auth token to use for access to the PUT and DELETE /booking


CI/CD AND REPORTING
npm install --save-dev @playwright/test allure-playwright (Allure Report)
1. npm install --save-dev @playwright/test allure-playwright
2. in playwright.config.ts add 
export default defineConfig({
  // ...
  reporter: [["line"], ["allure-playwright"]],
});
3. npx playwright test (run test)
4. allure serve allure-results (generate report)


@ Automatic screenshots on failure:
// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    // Take screenshot on failure
    screenshot: 'only-on-failure',
  },
};

export default config;



PLAYWRIGHT & AI (CODEGEN)

phân trang
dropdown

extension bắt locator




