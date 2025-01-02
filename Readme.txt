Standalone e2e testing Skeleton Code

- In this Skeleton Code, I will be using several free websites to showcase features of Playwright, you may find the Urls in the .env file :D

🤖 Starting up - Learn Playwright | Typescript
- Playwright https://playwright.dev/
- TypeScript https://www.typescriptlang.org/

📁 Structure
|- templateProje
|-|- data # With data, you can group/store test generated data (ie. sessions) or your own reused data.
|-|- fixtures # With fixtures, you can inject/group tests based on their meaning, instead of their common setup.
|-|- pages # Where to keep page classes with respective locators and methods. We utilise POM (Page Object Modeling).
|-|- utils # reusable utils to reduce code redundancy.
|-|- tests # Here is where you can do your magic.
.env # Here is where you can configure all the environment variables.
playwright.config.ts # This sits outside playwright-e2e folder, but is the config file for playwright only tests.

🔐 Setup Environment Variables
1. Create a .env file in the root directory of this project if it doesn't already exist.
2. Configure your .env file

🚀 (ie. Scripts for Jenkins 
Set-Location -Path "${The_path_to_the_current_directory}"
PS D:\Patsi_Work\Source_Code\Playwright> 
    for ($i = 1; $i -le 100; $i++) {
        npx playwright test ./solopress_e2e/tests/ --workers=10
    })

📝 Running Tests 
Headed: npx playwright test ./playwrightTemplateProject_e2e/Herokuapp/tests --headed
Headless: npx playwright test ./playwrightTemplateProject_e2e/Herokuapp/tests
@Smoke: npx playwright test -g "@smoke" 

👾 Debugging 
npx playwright test ./playwrightTemplateProject_e2e/Herokuapp/tests --debug
Ps. (Run these command at the root directory!)

