import {
  Tiles,
  StyledUl,
  Name,
  Description,
  Links,
  Link,
  Badge,
} from "./styled";

const Tile = ({ project, isLight }) => (
  <>
    <Tiles>
       {isLight ? (
        <Badge image={project.imagePath} />
      ) : (
        <Badge image={project.imageDarkPath} />
      )}
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
