export class WebTablesPage {
  visit() {
    cy.visit('https://demoqa.com/')
  }

  navigateToWebTables() {
    cy.contains('Elements').click()
    cy.contains('Web Tables').click()
  }

  clickAddButton() {
    cy.get('#addNewRecordButton').click()
  }

  fillFirstName(firstName) {
    cy.get('#firstName').click()
    cy.get('#firstName').clear().type(firstName)
  }

  fillLastName(lastName) {
    cy.get('#lastName').click()
    cy.get('#lastName').clear().type(lastName)
  }

  fillAge(age) {
    cy.get('#age').click()
    cy.get('#age').type(age)
  }

  fillEmail(email) {
    cy.get('#userEmail').click()
    cy.get('#userEmail').type(email)
  }

  fillSalary(salary) {
    cy.get('#salary').click()
    cy.get('#salary').type(salary)
  }

  selectDepartment(department) {
    cy.get('#department').click()
    cy.get('#department').type(department)
  }

  submit() {
    cy.get('#submit').click()
  }

  verifyTableRow(firstName, lastName, age, email, salary, department) {
    cy.get('div[role="row"]').contains(firstName).should('exist')
    cy.get('div[role="row"]').contains(lastName).should('exist')
    cy.get('div[role="row"]').contains(age).should('exist')
    cy.get('div[role="row"]').contains(email).should('exist')
    cy.get('div[role="row"]').contains(salary).should('exist')
    cy.get('div[role="row"]').contains(department).should('exist')
  }

  verifyNewTableRow(firstName, lastName) {
    cy.get('div[role="row"]').contains(firstName).should('exist')
    cy.get('div[role="row"]').contains(lastName).should('exist')
  }

  editTableRow(firstName) {
    cy.get('.rt-tr').contains(firstName).parent().find('[title="Edit"]').click()
  }

  navigateToBrokenImages() {
    cy.contains('Elements').click()
    cy.contains('Broken Links - Images').click()
  }

  verifyBrokenImage() {
    cy.get('img[src="/images/Toolsqa_1.jpg"]')
      .should('have.attr', 'src')
      .then((src) => {
        cy.log(`Image source URL: ${src}`)
        cy.get('img[src="/images/Toolsqa_1.jpg"]')
          .should('have.prop', 'naturalWidth')
          .and('equal', 0)
      })
  }
}
