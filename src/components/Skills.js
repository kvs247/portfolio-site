import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// technology logos
import aws_img from '../assets/technologies/aws.png'
import bash_img from '../assets/technologies/bash.png'
import c_img from '../assets/technologies/c.png'
import cmake_img from '../assets/technologies/cmake.png'
import cpp_img from '../assets/technologies/cpp.png'
import dynamodb_img from '../assets/technologies/dynamodb.png'
import github_img from '../assets/technologies/github2.png';
import html_img from '../assets/technologies/html.png';
import javascript_img from '../assets/technologies/javascript.png';
import lambda_img from '../assets/technologies/lambda.png'
import matplotlib_img from '../assets/technologies/matplotlib.png'
import numpy_img from '../assets/technologies/numpy.png';
import oop_img from '../assets/technologies/oop.png'
import pandas_img from '../assets/technologies/pandas.png';
import postgresql_img from '../assets/technologies/postgresql.png'
import postman_img from '../assets/technologies/postman.png'
import python_img from '../assets/technologies/python.png';
import rds_img from '../assets/technologies/rds.png'
import react_img from '../assets/technologies/react.png';
import redux_img from '../assets/technologies/redux.png'
import s3_img from '../assets/technologies/s3.png'
import typescript_img from "../assets/technologies/typescript.png"
import vscode_img from '../assets/technologies/vscode.png'

const gridItem = (name, path) => {
  return (
    <Container
      sx={{
        width: '15rem',
        height: '8rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#292929',
        m: 'auto',
        p: 1,
        borderRadius: '10px',
        transition: '0.5s',
        '&:hover': { transform: 'scale(1.05)' }
      }}
    >
      <Box
        component='img'
        src={path}
        alt={`${name} logo`}
        height='5rem'
        mr={2}
      />
      <Typography color='#e1e1e1'>{name}</Typography>
    </Container>
  );
};

function Skills() {
  return (
    <Container
      maxWidth='none'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '75%',
        mx: 'auto',
        mb: '25vh'
      }}
    >
      <Typography
        id='skills'
        variant='h2'
        my={4}
      >
        Skills
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={4}>
          {/* Change all Grid items to use xs={2.4} */}
          <Grid item xs={2.4}>
            {gridItem('JavaScript', javascript_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('TypeScript', typescript_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('React', react_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('Redux', redux_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('HTML & CSS', html_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('Python', python_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('Matplotlib', matplotlib_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('NumPy', numpy_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('Pandas', pandas_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('Python typing', python_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('AWS', aws_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('Lambda', lambda_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('DynamoDB', dynamodb_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('RDS', rds_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('S3', s3_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('GitHub', github_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('PostgreSQL', postgresql_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('Bash', bash_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('VS Code', vscode_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('Postman', postman_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('C++', cpp_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('C', c_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('CMake', cmake_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('OOP', oop_img)}
          </Grid>
          <Grid item xs={2.4}>
            {gridItem('STL', cpp_img)}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Skills;
