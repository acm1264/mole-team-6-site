import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #222;
  padding: 1rem;
`

const NavLink = styled(Link)`
  color: white;
  margin-right: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const NavBar = () => 
{
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </Nav>
  )
}

export default NavBar
