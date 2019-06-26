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
  <div>
    <div className="OnlineCourses">
      <div className="ComputerScienceGroup">
        <h2> Computer Science </h2>
        <div className="CardsGroupCourses">
        
        </div>
      </div>
    </div>
  </div>
)

export default CoursesPage



