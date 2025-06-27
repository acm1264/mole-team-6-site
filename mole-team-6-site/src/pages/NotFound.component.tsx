import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const Container = styled.div`
  padding: 2rem;
`

const NotFound = () => 
{
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        NotFound Us
      </Typography>
      <Typography>
        We could not find the page ya wanted... :(
      </Typography>
    </Container>
  )
}

export default NotFound
