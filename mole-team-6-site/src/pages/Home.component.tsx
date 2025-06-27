import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const Container = styled.div`
  padding: 2rem;
`

const Home = () => 
{
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Home
      </Typography>
      <Typography>
        home page!
      </Typography>
    </Container>
  )
}

export default Home
