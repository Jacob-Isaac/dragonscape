import { Tiles, StyledUl, Name, Description, Links, Demo, Code, Link, Button} from "./styled";



const Tile = ({project}) => (
    <Tiles image={project.imagePath}>
        <StyledUl>
            <img></img>
        <Name>{project.name}</Name>
        <Description>{project.description}</Description>
        <Links>
        {/* <Demo>Demo: <Link rel="stylesheet" href={project.homepage} target="_blank">{project.homepage}</Link></Demo> */}
        <Button>Sprawdź <Link to={project.routePath}>Sprawdź</Link></Button>
        </Links>
        </StyledUl>
    </Tiles>
);

export default Tile;