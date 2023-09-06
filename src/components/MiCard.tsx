import React from 'react'
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia } from '@mui/material'
const MiCard = () => {
  return (
    <>
      <Typography variant='h4' my={3}>Card Component</Typography>
    <Box width="300px">
      <Card>
        <CardMedia
        component="img"
        height="140"
        image='https://source.unsplash.com/random'
        alt='Card Image'
        />
        <CardContent>
          <Typography variant='h4' component="div">React</Typography>
          <Typography variant='body2' color="text.secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, saepe? Eaque ducimus expedita consequatur vero quo laborum aliquam obcaecati non eos, tempora ratione facere repudiandae eligendi magni, fuga placeat error.</Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
    </>
  )
}

export default MiCard