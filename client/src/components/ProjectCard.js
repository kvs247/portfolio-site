import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function ProjectCard({ title, description, image, url }) {
    return (
      <Link 
        href={`${url}`}
        target='_blank'
        sx={{
          color: '#e1e1e1',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            bgcolor: '#191919',
            borderRadius: '10px',
            border: '1px solid #e1e1e1',
            width: '80%',
            mb: '50px',
            mx: 'auto',
            p: '20px',
            textAlign: 'center',
            transition: '0.5s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        >
            <Typography variant='h1'>{title}</Typography>
            <Typography>{description}</Typography>
            <Box 
              component='img'
              src={image} 
              alt='' 
              sx={{
                width: '75%',

              }}
            />
        </Box>
      </Link>
    );
}

export default ProjectCard;