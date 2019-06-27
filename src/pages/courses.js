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
        <h1> Online Courses </h1>
        <Wave />
      </div>


      <div  className="CoursesCards">
      <h2>Computer Science</h2>
      <div className="CoursesCardGroup">
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
        title="C++"
        text="9 sections"
        image={require('../images/wallpaper4.jpg')}/>
        <Card 
        title="C# with Unity"
        text="9 sections"
        image={require('../images/wallpaper3.jpg')}/>
        <Card 
        title="Swift"
        text="9 sections"
        image={require('../images/wallpaper.jpg')}/>
        
      </div>
    </div>



    <div  className="CoursesCards">
      <h2>Math</h2>
      <div className="CoursesCardGroup">
        <Card 
        title="Pre-Algebra"
        text="9 sections"
        image={require('../images/wallpaper.jpg')}/>
        <Card 
        title="Algebra"
        text="9 sections"
        image={require('../images/wallpaper2.jpg')}/>
        <Card 
        title="Algebra 2"
        text="9 sections"
        image={require('../images/wallpaper3.jpg')}/>
        
        
      </div>
    </div>


    <div  className="CoursesCards">
      <h2>Finance</h2>
      <div className="CoursesCardGroup">
        <Card 
        title="Personal Finance"
        text="9 sections"
        image={require('../images/wallpaper.jpg')}/>
        <Card 
        title="Stock Market"
        text="9 sections"
        image={require('../images/wallpaper.jpg')}/>
        <Card 
        title="Other Finance"
        text="9 sections"
        image={require('../images/wallpaper.jpg')}/>
        
        
        
        
        
      </div>
      
    </div>
   

    </div>
    
  </div>
  
)

export default CoursesPage



