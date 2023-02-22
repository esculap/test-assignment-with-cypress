import { ProgressBarPage } from '../pages/progress-bar-page'

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Progress Bar Widget', () => {
  const progressBarPage = new ProgressBarPage()

  beforeEach(() => {
    progressBarPage.visit()
  })

  it('should show progress bar at 100% with green color after clicking start button', () => {
    progressBarPage.startProgressBar()
    progressBarPage.waitForProgressBarToFinish()
    progressBarPage.checkProgressBarIsGreen()
  })
})
