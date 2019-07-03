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

const CoursesPage = () => (
  <div className="CoursesBody">
    <div className="OnlineCourses">
      <div className="OnlineCoursesGroup">
        <h1>Java</h1>
        <Wave />
      </div>


      <div  className="CoursesCards">
      <div className="CoursesCardGroup">
        <Link to="/">
          <Card 
          title="Java"
          text="9 sections"
          image={require('../images/wallpaper.jpg')}/>
        </Link>
        <Link to="/">
          <Card 
          title="Python"
          text="9 sections"
          image={require('../images/wallpaper2.jpg')}/>
        </Link>
        <Link to="/">
        <Card 
          title="HTML & CSS"
          text="9 sections"
          image={require('../images/wallpaper3.jpg')}/>
        </Link>
        <Link to="/">
          <Card 
          title="C++"
          text="9 sections"
          image={require('../images/wallpaper4.jpg')}/>
        </Link>
        <Link to="/">
          <Card 
          title="C# with Unity"
          text="9 sections"
          image={require('../images/wallpaper3.jpg')}/>
        </Link>
        <Link to="/">
          <Card 
          title="Swift"
          text="9 sections"
          image={require('../images/wallpaper.jpg')}/>
        </Link>
        <Link to="/">
          <Card 
          title="C++"
          text="9 sections"
          image={require('../images/wallpaper4.jpg')}/>
        </Link>
        <Link to="/">
          <Card 
          title="C# with Unity"
          text="9 sections"
          image={require('../images/wallpaper3.jpg')}/>
        </Link>
        <Link to="/">
          <Card 
          title="Swift"
          text="9 sections"
          image={require('../images/wallpaper.jpg')}/>
        </Link>
        
      </div>
    </div>



    </div>
   

    </div>
    

  
)

export default CoursesPage



