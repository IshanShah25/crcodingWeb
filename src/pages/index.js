import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn topics <br />from Python to Algebra</h1>
        <p>Free complete and engaging online courses for everyone</p>
        <Link to="/page-2/">Start Learning</Link>
        <div className="Logos">
          <img src={require('../images/logo-java.png')} width="50" />
          <img src={require('../images/logo-python.png')} width="50" />
          <img src={require('../images/logo-unity.png')} width="50" />
          <img src={require('../images/logo-csharp.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
          

        </div>


        <svg width="100%" height="172"  fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="" fill="white">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

          M0 87.1596C316 87.1597 444 160 884 52.0001C1324 -55.9999 1320.29 34.966 1538 71.251C1814 117.251 2156 189.252 2560 87.1597V233.161L0 233.161V87.1596Z;

          M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
          
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
          "
          />
         </path>
        </svg>
      </div>
    </div>
    <div  className="Cards">
      <h2>Computer Science</h2>
      <div className="CardGroup">
        <Card 
        title="Java"
        text="9 sections"
        image={require('../images/wallpaper.jpg')}/>
        <Card 
        title="Python"
        text="9 sections"
        image={require('../images/wallpaper2.jpg')}/>
        <Card 
        title="HTML & CSS"
        text="9 sections"
        image={require('../images/wallpaper3.jpg')}/>
        <Card 
        title="Swift"
        text="9 sections"
        image={require('../images/wallpaper4.jpg')}/>
      </div>
    </div>
    {/* <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-swift.png')}
      title="What is CR Coding"
      text="CR Coding is an organization in which students with different backgrounds are brought together under the collective goal of learning the basics of Computer Science. We are striving to find students that are unable to learn coding at their schools and/or would like to further their education in Computer Science."
    /> */}
  </div>
)

export default IndexPage



