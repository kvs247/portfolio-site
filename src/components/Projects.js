import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import chess_icon from '../assets/chess-board.png';
import games_icon from '../assets/controller.png'
import math_icon from '../assets/matrix-.png'

const BoxWithHover = styled(Box)`
  &:hover img {
    animation: spin 0.5s linear 1;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const projectItem = (image, name, func) => {
  return (
    <Container
      maxWidth='none'
      onClick={func}
      sx={{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        width: '100%',
        mx: 'auto',
        mb: '25vh',
        cursor: 'pointer'
      }}       
    >
      <BoxWithHover>
        <Box 
          component='img'
          src={image}
          alt={`${name} logo`}
          sx={{
            height: '10vw',
            mr: 2,
          }}
        />
      </BoxWithHover>
      <Typography variant='h3'>{name}</Typography>
    </Container>
  );
};

function Projects () {
    const history = useHistory();
    const reroute = (path) => {
        return () => history.push(path);
    };

    return (
        <Container
          maxWidth='none'
          sx={{
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            width: '100%',
            mx: 'auto',
            mb: '25vh'
          }}        
        >
            <Typography 
              id='projects'
              variant='h2' 
              my={4}
            >
              Projects
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              {projectItem(chess_icon, 'Chess Is Hard', reroute('/chess'))}
              {projectItem(games_icon, 'Gaben\'s Game Gallery', reroute('/games'))}
              {projectItem(math_icon, 'Mathematics Thesis', reroute('/math'))}
            </Box>
        </Container>
    );
}

export default Projects;