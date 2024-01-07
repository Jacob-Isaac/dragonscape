import {
  Tiles,
  StyledUl,
  Name,
  Description,
  Links,
  Link,
  Badge,
} from "./styled";

const Tile = ({ project }) => (
  <>
    <Tiles>
      <Badge image={project.imagePath} />
      <StyledUl>
        <Name>{project.name}</Name>
        <Description>{project.description}</Description>
        <Links>
          <Link to={project.routePath}>Sprawdź</Link>
        </Links>
      </StyledUl>
    </Tiles>
  </>
);

export default Tile;
