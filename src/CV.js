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

export default class CV extends React.Component {

  render() {
    return (
      <div className="container">

        <div className="panel">

          <Portrait image={PortraitImage} />

          <h1 className="text-center">Felix Gladisch</h1>

          <p className="text-center text-info">Full Stack Web-Entwickler</p>

          <p className="info-general">{personalInfo.intro}</p>

          <Title icon="person">Kontakt</Title>

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

          <Title icon="code">Fähigkeiten</Title>

          <Progress percent="90">JavaScript</Progress>
          <Progress percent="90">HTML5/CSS3</Progress>
          <Progress percent="85">AngularJS</Progress>
          <Progress percent="80">Node.js</Progress>
          <Progress percent="75">Angular 2</Progress>
          <Progress percent="70">Java</Progress>

          <div>Sonstige:</div>

          <p className="small">
            TypeScript,
            React,
            Bootstrap,
            Sass,
            jQuery,
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

          <Title icon="language">Sprachkenntnisse</Title>

          <Progress percent="100">Deutsch</Progress>
          <Progress percent="80">Englisch</Progress>

          <Title icon="directions_bike">Freizeit</Title>

          <div>Fitness / Sport</div>
          <div>Skateboarding</div>
          <div>Snowboarding</div>

        </div>

        <div className="content">

          <Title icon="work">Beruflicher Werdegang</Title>

          <Stage
            isPrimary
            year="04/2015 - heute"
            name="Full Stack Web-Entwickler"
            description="IN-telegence GmbH, Köln">

            <Stage
              year="2016"
              name="telegra"
              description="Webplattform bestehend aus Microservices und Webanwendungen"
              tags={['TypeScript', 'Angular 2', 'Bootstrap 4', 'Sass', 'Karma', 'Jasmine', 'Node.js', 'Express', 'Mocha', 'Sequelize', 'PostgreSQL', 'webpack']} />

            <Stage
              year="2016"
              name="ACD Salesforce Adapter"
              description="OpenCTI Softphone für Salesforce"
              tags={['AngularJS', 'Bootstrap 3', 'Karma', 'Jasmine', 'gulp.js']} />

            <Stage
              year="2015/2016"
              name="ACD Wallboard V2"
              description="Webanwendung zur Verwaltung von Telefonaten"
              tags={['AngularJS', 'jQuery', 'Highcharts', 'Karma', 'Jasmine', 'gulp.js']} />

            <Stage
              year="2015"
              name="Concierge"
              description="Webbasierte Statistikanwendung für Callcenter"
              tags={['jQuery', 'jQuery UI', 'jQuery Mobile', 'Bootstrap 3', 'mustache.js', 'browserify', 'gulp.js']} />

          </Stage>

          <Stage
            isPrimary
            year="04/2014 - 12/2014"
            name="Softwareentwickler (Werkstudent)"
            description="IN-telegence GmbH, Köln">

            <Stage
              year="2015"
              name="Concierge"
              description="Webbasierte Statistikanwendung für Callcenter"
              tags={['Java 8', 'PrimeFaces', 'jQuery', 'Google Charts', 'Wildfly']} />

          </Stage>

          <Stage
            isPrimary
            year="01/2011 - 09/2011"
            name="IT-Systemadministrator (Praktikum)"
            description="IN-telegence GmbH, Köln" />

          <Title icon="school">Bildungsweg</Title>

          <Stage
            isPrimary
            year="09/2011 - 03/2015"
            name="Medien- und Kommunikationsinformatik, B.Sc."
            description="Hochschule Rhein-Waal, Kamp-Lintfort" />

          <Stage
            isPrimary
            year="08/2009 - 07/2010"
            name="Fachhochschulreife (Wirtschaft und Verwaltung)"
            description="Mercator Berufskolleg, Moers" />

          <Stage
            isPrimary
            year="08/2006 - 07/2009"
            name="Ausbildung zum Informatikkaufmann"
            description="RAG Deutsche Steinkohle AG, Herne" />

          <Signature image={SignatureImage} city="Duisburg" />

        </div>

      </div>
    )
  }

}
