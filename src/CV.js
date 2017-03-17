import React from 'react'

// Styles
import './CV.css'

// Components
import Stage from './components/Stage/Stage'
import Progress from './components/Progress/Progress'
import Portrait from './components/Portrait/Portrait'
import Title from './components/Title/Title'
import InfoEntry from './components/InfoEntry/InfoEntry'
import Signature from './components/Signature/Signature'

// Images
import PortraitImage from './images/portrait.jpg'
import SignatureImage from './images/signature.png'

// Personal info (rename _personal.json)
import personalInfo from './personal.json'

import i18n from './i18nService'

export default class CV extends React.Component {

  constructor() {
    super()
    this.i18n = new i18n();
  }

  render() {
    return (
      <div className="container">

        <div className="panel">

          <Portrait image={PortraitImage} />

          <h1 className="text-center">Felix A. Gladisch</h1>

          <p className="text-center text-info">{this.i18n.translation.JOB_TITLE}</p>

          <p className="info-general">
            {`${this.i18n.translation.BORN_ON} ${this.i18n.formatDate(personalInfo.birthday)} ${this.i18n.translation.INTRO}`}
          </p>

          <Title icon="person">{this.i18n.translation.CONTACT}</Title>

          <InfoEntry icon="place">
            <a href={personalInfo.addressUrl}>{personalInfo.address}</a>
          </InfoEntry>

          <InfoEntry icon="public">
            <a href={personalInfo.webUrl}>{personalInfo.web}</a>
          </InfoEntry>

          <InfoEntry icon="email">
            <a href={"mailto:" + personalInfo.email}>{personalInfo.email}</a>
          </InfoEntry>

          <InfoEntry icon="phone">{personalInfo.phone}</InfoEntry>

          <Title icon="code">{this.i18n.translation.SKILLS}</Title>

          <Progress percent="90">JavaScript</Progress>
          <Progress percent="90">HTML5/CSS3</Progress>
          <Progress percent="85">Angular</Progress>
          <Progress percent="80">Node.js</Progress>
          <Progress percent="70">Java</Progress>

          <p className="small">
            ...
            TypeScript,
            React,
            Redux,
            Bootstrap,
            Sass,
            jQuery,
            Express,
            Sequelize,
            webpack,
            gulp.js,
            Grunt,
            Jasmine,
            Mocha,
            Karma,
            Java EE,
            Spring,
            Linux,
            SQL,
            Git,
            Git Workflow
          </p>

          <Title icon="language">{this.i18n.translation.LANGUAGES}</Title>

          <Progress percent="100">{this.i18n.translation.GERMAN}</Progress>
          <Progress percent="80">{this.i18n.translation.ENGLISH}</Progress>

          <Title icon="directions_bike">{this.i18n.translation.LEISURE}</Title>

          <div>Fitness</div>
          <div>Skateboarding</div>
          <div>Snowboarding</div>

        </div>

        <div className="content">

          <Title icon="work">{this.i18n.translation.EMPLOYMENT_HISTORY}</Title>

          <Stage
            isPrimary
            year={`04/2015 - ${this.i18n.translation.TODAY}`}
            name={this.i18n.translation.JOB_TITLE}
            description={`IN-telegence GmbH, ${this.i18n.translation.COLOGNE}`}>

            <Stage
              year="2016"
              name="telegra"
              description={this.i18n.translation.PROJECT_TELEGRA_DESC}
              tags={['TypeScript', 'Angular 2', 'Bootstrap 4', 'Sass', 'Karma', 'Jasmine',
                'Node.js', 'Express', 'Mocha', 'Sequelize', 'PostgreSQL', 'webpack']} />

            <Stage
              year="2016"
              name="ACD Salesforce Adapter"
              description={this.i18n.translation.PROJECT_SALESFORCE_DESC}
              tags={['AngularJS', 'Bootstrap 3', 'Karma', 'Jasmine', 'gulp.js']} />

            <Stage
              year="2015/2016"
              name="ACD Wallboard V2"
              description={this.i18n.translation.PROJECT_WALLBOARD_DESC}
              tags={['AngularJS', 'jQuery', 'Highcharts', 'Karma', 'Jasmine', 'gulp.js']} />

            <Stage
              year="2015"
              name="Concierge"
              description={this.i18n.translation.PROJECT_CONCIERGE_DESC}
              tags={['jQuery', 'jQuery UI', 'jQuery Mobile', 'Bootstrap 3', 'mustache.js',
                'browserify', 'gulp.js']} />

          </Stage>

          <Stage
            isPrimary
            year="04/2014 - 12/2014"
            name={this.i18n.translation.DEVELOPER_INTERNSHIP}
            description={`IN-telegence GmbH, ${this.i18n.translation.COLOGNE}`}>

            <Stage
              year="2015"
              name="ACD Wallboard"
              description={this.i18n.translation.PROJECT_WALLBOARD_DESC}
              tags={['Java 8', 'PrimeFaces', 'jQuery', 'Google Charts', 'Wildfly']} />

          </Stage>

          <Stage
            isPrimary
            year="01/2011 - 09/2011"
            name={this.i18n.translation.IT_SYSTEM_ADMINISTRATOR_INTERNSHIP}
            description={`IN-telegence GmbH, ${this.i18n.translation.COLOGNE}`} />

          <Title icon="school">{this.i18n.translation.EDUCATION}</Title>

          <Stage
            isPrimary
            year="09/2011 - 03/2015"
            name={this.i18n.translation.MEDIA_COMMUNICATION_AND_COMPUTER_SCIENCE_BSC}
            description={`${this.i18n.translation.RHINE_WAAL_UNIVERSITY_OF_APPLIED_SCIENCES}, Kamp-Lintfort`} />

          <Stage
            isPrimary
            year="08/2009 - 07/2010"
            name={this.i18n.translation.ADVANCED_TECHNICAL_COLLEGE_ENTRANCE_QUALIFICATION}
            description={`${this.i18n.translation.MERCATOR_VOCATIONAL_COLLEGE}, Moers`} />

          <Stage
            isPrimary
            year="08/2006 - 07/2009"
            name={this.i18n.translation.APPRENTICESHIP_AS_IT_MANAGEMENT_ASSISTANT}
            description="RAG Deutsche Steinkohle AG, Herne" />

          <Signature i18n={this.i18n} image={SignatureImage} city="Duisburg" />

        </div>

      </div>
    )
  }

}
