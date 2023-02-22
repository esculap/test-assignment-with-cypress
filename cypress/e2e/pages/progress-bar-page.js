export class ProgressBarPage {
  visit() {
    cy.visit('https://demoqa.com/')
    cy.contains('Widgets').click()
    cy.contains('Progress Bar').click()
  }

  startProgressBar() {
    cy.contains('Start').click()
  }

  waitForProgressBarToFinish() {
    cy.waitUntil(
      () =>
        cy.get('.progress-bar').then(($el) => $el.get(0).innerText === '100%'),
      {
        timeout: 15000,
        interval: 500,
      }
    )
  }
  checkProgressBarIsGreen() {
    cy.get('.progress-bar').should(
      'have.css',
      'background-color',
      'rgb(40, 167, 69)'
    )
  }
}
