import { WebTablesPage } from '../pages/web-tables-page'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Web Tables Test', () => {
  const webTablesPage = new WebTablesPage()

  beforeEach(() => {
    webTablesPage.visit()
  })

  it('should add new data into the table', () => {
    const firstName = 'Alden'
    const lastName = 'Cantrell'
    const age = 30
    const email = 'test@test.com'
    const salary = 12345
    const department = 'QA'

    webTablesPage.navigateToWebTables()
    webTablesPage.clickAddButton()
    webTablesPage.fillFirstName(firstName)
    webTablesPage.fillLastName(lastName)
    webTablesPage.fillAge(age)
    webTablesPage.fillEmail(email)
    webTablesPage.fillSalary(salary)
    webTablesPage.selectDepartment(department)
    webTablesPage.submit()

    webTablesPage.verifyTableRow(
      firstName,
      lastName,
      age,
      email,
      salary,
      department
    )
  })

  it('should edit a row in the table', () => {
    const firstName = 'Alden'
    const lastName = 'Cantrell'
    const age = 30
    const email = 'test@test.com'
    const salary = 12345
    const department = 'QA'

    const oldFirstName = 'Alden'
    const newFirstName = 'Cypress'
    const newLastName = 'Assignment'

    webTablesPage.navigateToWebTables()
    webTablesPage.clickAddButton()
    webTablesPage.fillFirstName(firstName)
    webTablesPage.fillLastName(lastName)
    webTablesPage.fillAge(age)
    webTablesPage.fillEmail(email)
    webTablesPage.fillSalary(salary)
    webTablesPage.selectDepartment(department)
    webTablesPage.submit()

    webTablesPage.editTableRow(oldFirstName)
    webTablesPage.fillFirstName(newFirstName)
    webTablesPage.fillLastName(newLastName)
    webTablesPage.submit()

    webTablesPage.verifyNewTableRow(newFirstName, newLastName)
  })
})

describe('Broken Images Test', () => {
  const webTablesPage = new WebTablesPage()

  beforeEach(() => {
    webTablesPage.visit()
  })

  it('should verify broken image', () => {
    webTablesPage.navigateToBrokenImages()
    webTablesPage.verifyBrokenImage()
  })
})
