export class PracticeFormPage {
  visit() {
    cy.visit('https://demoqa.com/')
  }

  navigateToForm() {
    cy.contains('Forms').click()
    cy.contains('Practice Form').click()
  }

  fillFirstName(value) {
    cy.get('#firstName').type(value)
  }

  fillLastName(value) {
    cy.get('#lastName').type(value)
  }

  fillEmail(value) {
    cy.get('#userEmail').type(value)
  }

  selectGender(gender) {
    cy.get('.custom-radio').contains(gender).click()
  }

  fillMobile(value) {
    cy.get('#userNumber').type(value)
  }

  selectDateOfBirth(month, year, day) {
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__month-select').select(month)
    cy.get('.react-datepicker__year-select').select(year)
    cy.get(`.react-datepicker__day--0${day}`).click()
  }

  fillSubjects(value) {
    cy.get('#subjectsInput').type(value)
  }

  selectHobbies(hobbie) {
    cy.get('.custom-checkbox').contains(hobbie).click()
  }

  uploadPicture() {
    cy.get('#uploadPicture').selectFile('cypress/fixtures/profile.png')
  }

  fillCurrentAddress(value) {
    cy.get('#currentAddress').type(value)
  }

  selectState(state) {
    cy.get('#state').click()
    cy.contains(state).click()
  }

  selectFirstCity() {
    cy.get('#city').click()
    cy.get('#react-select-4-option-0').click()
  }

  submitForm() {
    cy.get('#submit').click({ force: true }) // workaround because a bug - Submit button center overlapped by invisible div
  }

  verifyFormSubmittedSuccessfully() {
    cy.contains('Thanks for submitting the form').should('be.visible')
  }

  // TODO: placeholder for checks elements on success modal

  closeSuccessForm() {
    cy.get('#closeLargeModal').click()
  }
}
