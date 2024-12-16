import ProjectPage from './ProjectPage';

import chess_img from '../assets/chess.png';

function Chess() {
    return (
        <ProjectPage
          title='Chess CLI Application'
          description=''
          links={[
            ['GitHub', 'https://github.com/kvschneider0/chess'],
            ['Demo', 'https://youtu.be/43IuuSmvnHs'],
            ['Live Site', 'https://www.chess.kvschneider.com/login']
          ]}
          image={chess_img}
          notes={[
            'Created chess game logic from scratch using Python',
            'Designed a clean and modern website using React with Material UI',
            'Built a server using Flask to support the front-end and handle chess logic'
          ]}
        />
    );
}

export default Chess;