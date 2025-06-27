import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const Container = styled.div`
  padding: 2rem;
`

const About = () => 
{
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography>
        Making cool stuff!
      </Typography>
    </Container>
  )
}

export default About
