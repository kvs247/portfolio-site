import ProjectPage from './ProjectPage';

import ggg_img from '../assets/GGG.PNG';

function Chess() {
    return (
        <ProjectPage
          title={'Gaben\'s Game Gallery'}
          description='Browse popular video game titles and save them to your account. Saved games can be edited and removed, and
          new games can be created.'
          links={[
            ['GitHub', 'https://github.com/triciahughes/gabensgames'],
            ['Demo', 'https://youtu.be/-IkQI78ORaQ'],
          ]}
          image={ggg_img}
          notes={[
            'Implemented Git for version control to track changes and collaborate with team members',
            'Utilized CSS to create an attractive user interface and improve user experience',
          ]}
        />
    );
}

export default Chess;