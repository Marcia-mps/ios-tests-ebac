exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    hostname: 'hub.browserstack.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 14',
        'appium:platformVersion': '16',
        'appium:automationName': 'XCUITest',
        'appium:app': 'bs://123abc456def789',
        'bstack:options': {
            projectName: 'EBAC Mobile CI',
            buildName: 'Módulo 30 - GitHub Actions',
            sessionName: 'Fluxo de compra iOS',
            debug: true,
            networkLogs: true
        }
    }],

    logLevel: 'info',
    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};