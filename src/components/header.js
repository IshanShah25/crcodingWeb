import React from 'react'
import Link from 'gatsby-link'
import './Header.css'



class Header extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hasScrolled:false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',this.handleScroll)
  } 

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/crcoding-logo.png')} width="40" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/courses">Resources</Link>
          <Link to="/courses">About Us</Link>
        </div>
      </div>
    )
  }
}

export default Header
