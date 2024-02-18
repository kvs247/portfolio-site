import ProjectPage from './ProjectPage';

import thesis_img from '../assets/thesis-snipet.png';

function Chess() {
    return (
        <ProjectPage
          title='Chess Is Hard'
          description='Research tool for calculating Laplacian Leader-Follower Dynamics properties of networks'
          links={[
            ['GitHub', 'https://github.com/kvschneider0/laplacian-leader-follower-dynamics']
          ]}
          image={thesis_img}
          notes={[
            'Developed research-focused algorithms using Python, NumPy, and Matplotlib',
            'Optimized program runtime as calculations take hours/days',
          ]}
        />
    );
}

export default Chess;