import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;

`
const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px){
    grid-template-columns: repeat(1,1fr);
  }
`

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


        <Wave />
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
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/crcoding-logo.png')}
      title="Career Ready Coding"
      text="CR Coding is an organization in which students with different backgrounds are brought together under the collective goal of learning the basics of Computer Science. We are striving to find students that are unable to learn coding at their schools and/or would like to further their education in Computer Science."
    />

    
    <SectionCaption>Lesson Topics</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image}
        />

      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage



