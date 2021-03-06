const sonarqubeScanner =  require('sonarqube-scanner');
require('dotenv').config()
sonarqubeScanner(
    {
        serverUrl:  process.env.EXTERNAL_URL,
        options : {
            'sonar.login': process.env.USERNAME,
            'sonar.password': process.env.PASSWORD,
            'sonar.sources':  'src',
            'sonar.tests':  'src',
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
        }
    }, () => {});