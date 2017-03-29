import React from 'react'
import { connect } from 'react-redux'

// Styles
import './CV.css'

import Util from './UtilService'

// Components
import Stage from './components/Stage/Stage'
import Progress from './components/Progress/Progress'
import Portrait from './components/Portrait/Portrait'
import Title from './components/Title/Title'
import InfoEntry from './components/InfoEntry/InfoEntry'
import Signature from './components/Signature/Signature'
import { LanguageSwitcher } from './components/LanguageSwitcher/LanguageSwitcher'

// Images
import PortraitImage from './images/portrait.jpg'
import SignatureImage from './images/signature.png'

// Personal info (rename _personal.json)
import personalInfo from './personal.json'

class CVComponent extends React.Component {

  render() {
    return (
      <div className="container">

        <div className="header">

          <a className="link" href="https://github.com/fgladisch/cv">
            View source on GitHub
          </a>

          <LanguageSwitcher></LanguageSwitcher>

        </div>

        <div className="panel">

          <Portrait image={PortraitImage} />

          <h1 className="text-center">Felix A. Gladisch</h1>

          <p className="text-center text-info">{this.props.translations.JOB_TITLE}</p>

          <p className="info-general">
            {`${this.props.translations.INTRO_BEGINNING} ${Util.formatDate(personalInfo.birthday)} ${this.props.translations.INTRO_END}`}
          </p>

          <Title icon="person">{this.props.translations.CONTACT}</Title>

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

          <Title icon="code">{this.props.translations.SKILLS}</Title>

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
            yarn,
            Bootstrap,
            Sass,
            Express,
            Sequelize,
            webpack,
            gulp.js,
            Grunt,
            Jasmine,
            Mocha,
            Chai,
            Karma,
            jQuery,
            Java EE,
            Spring,
            Linux,
            SQL,
            Git
          </p>

          <Title icon="language">{this.props.translations.LANGUAGES}</Title>

          <Progress percent="100">{this.props.translations.GERMAN}</Progress>
          <Progress percent="80">{this.props.translations.ENGLISH}</Progress>

          <Title icon="directions_bike">{this.props.translations.LEISURE}</Title>

          <div>Fitness</div>
          <div>Skateboarding</div>
          <div>Snowboarding</div>

        </div>

        <div className="content">

          <Title icon="work">{this.props.translations.EMPLOYMENT_HISTORY}</Title>

          <Stage
            isPrimary
            year={`04/2015 - ${this.props.translations.TODAY}`}
            name={this.props.translations.JOB_TITLE}
            description={`IN-telegence GmbH, ${this.props.translations.COLOGNE}`}>

            <Stage
              year="2016 - 2017"
              name="telegra"
              description={this.props.translations.PROJECT_TELEGRA_DESC}
              tags={['TypeScript', 'Angular 2', 'Bootstrap 4', 'Sass', 'Karma', 'Jasmine', 'Node.js',
                'Express', 'Mocha', 'Chai', 'Sequelize', 'PostgreSQL', 'webpack', 'yarn']} />

            <Stage
              year="2016"
              name="ACD Salesforce Adapter"
              description={this.props.translations.PROJECT_SALESFORCE_DESC}
              tags={['AngularJS', 'Bootstrap 3', 'Karma', 'Jasmine', 'gulp.js']} />

            <Stage
              year="2015 - 2016"
              name="ACD Wallboard V2"
              description={this.props.translations.PROJECT_WALLBOARD_DESC}
              tags={['AngularJS', 'jQuery', 'Highcharts', 'Karma', 'Jasmine', 'gulp.js']} />

            <Stage
              year="2015"
              name="Concierge"
              description={this.props.translations.PROJECT_CONCIERGE_DESC}
              tags={['jQuery', 'jQuery UI', 'jQuery Mobile', 'Bootstrap 3', 'mustache.js',
                'browserify', 'gulp.js']} />

          </Stage>

          <Stage
            isPrimary
            year="04/2014 - 12/2014"
            name={this.props.translations.DEVELOPER_INTERNSHIP}
            description={`IN-telegence GmbH, ${this.props.translations.COLOGNE}`}>

            <Stage
              year="2015"
              name="ACD Wallboard"
              description={this.props.translations.PROJECT_WALLBOARD_DESC}
              tags={['Java 8', 'PrimeFaces', 'jQuery', 'Google Charts', 'Wildfly']} />

          </Stage>

          <Stage
            isPrimary
            year="01/2011 - 09/2011"
            name={this.props.translations.IT_SYSTEM_ADMINISTRATOR_INTERNSHIP}
            description={`IN-telegence GmbH, ${this.props.translations.COLOGNE}`} />

          <Title icon="school">{this.props.translations.EDUCATION}</Title>

          <Stage
            isPrimary
            year="09/2011 - 03/2015"
            name={this.props.translations.MEDIA_COMMUNICATION_AND_COMPUTER_SCIENCE_BSC}
            description={`${this.props.translations.RHINE_WAAL_UNIVERSITY_OF_APPLIED_SCIENCES}, Kamp-Lintfort`} />

          <Stage
            isPrimary
            year="08/2009 - 07/2010"
            name={this.props.translations.ADVANCED_TECHNICAL_COLLEGE_ENTRANCE_QUALIFICATION}
            description={`${this.props.translations.MERCATOR_VOCATIONAL_COLLEGE}, Moers`} />

          <Stage
            isPrimary
            year="08/2006 - 07/2009"
            name={this.props.translations.APPRENTICESHIP_AS_IT_MANAGEMENT_ASSISTANT}
            description="RAG Deutsche Steinkohle AG, Herne" />

          <Signature image={SignatureImage} city="Duisburg" />

        </div>

      </div>
    )
  }

}

export const CV = connect(store => {
  return {
    translations: store.i18n.translations
  }
})(CVComponent)
