import { PracticeFormPage } from '../pages/practice-form-page'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Practice Form Test', () => {
  const practiceFormPage = new PracticeFormPage()

  beforeEach(() => {
    practiceFormPage.visit()
  })

  it('should successfully submit the form with provided data', () => {
    practiceFormPage.navigateToForm()
    practiceFormPage.fillFirstName('Cypress')
    practiceFormPage.fillLastName('Assignment')
    practiceFormPage.fillEmail('test@test.com')
    practiceFormPage.selectGender('Male')
    practiceFormPage.fillMobile('0123456789')
    practiceFormPage.selectDateOfBirth('January', '1990', '15')
    practiceFormPage.fillSubjects('Cypress Assignment')
    practiceFormPage.selectHobbies('Reading')
    practiceFormPage.uploadPicture()
    practiceFormPage.fillCurrentAddress('Netherlands')
    practiceFormPage.selectState('NCR')
    practiceFormPage.selectFirstCity() // there is a bug with picking "Delhi" by name
    practiceFormPage.submitForm()

    practiceFormPage.verifyFormSubmittedSuccessfully()
    // TODO: Add check for table view that all elements are saved correctly
    practiceFormPage.closeSuccessForm()
  })
})
