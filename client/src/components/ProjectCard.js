import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ProjectCard({ title, description, image, url }) {
    return (
        <Card>
          <StyledLink to={{ pathname: `${url}` }} target='_blank'>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt='' />
          </StyledLink>
        </Card>
    );
}

export default ProjectCard;

const Card = styled.div`
    background-color: var(--light-grey);
    border-radius: 10px;
    border: 1px solid var(--white);
    margin-bottom: 50px;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    transition: 0.5s;
    width: 80%;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 75%;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--white);
`;