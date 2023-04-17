import { LoginPage } from "./pages/login_page"

var loginPage = new LoginPage()

beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('all login test', function () {

    // this.beforeEach(function(){
    //     cy.visit('https://opensource-demo.orangehrmlive.com/')
    // })

    it('Logint test 1', function () {
        //cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

        // cy.get('[name=username]').type('Admin')
        // cy.get('[name=password]').type('admin123')
        // cy.get('[type=submit]').click()
        cy.get('.oxd-userdropdown-tab').click()
    })

    it('Logint test 2', function () {
        //cy.visit('https://opensource-demo.orangehrmlive.com/')

        loginPage.enterUsername('Admin2')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

        // cy.get('[name=username]').type('Admin')
        // cy.get('[name=password]').type('admin123')
        // cy.get('[type=submit]').click()
        cy.get('.oxd-userdropdown-tab').click()
    })
})

it('Logint test 3', function () {
    //cy.visit('https://opensource-demo.orangehrmlive.com/')

    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin2123')
    loginPage.clickLogin()

    // cy.get('[name=username]').type('Admin')
    // cy.get('[name=password]').type('admin123')
    // cy.get('[type=submit]').click()
    cy.get('.oxd-userdropdown-tab').click()
})