import { Tiles, StyledUl, Name, Description, Links, Demo, Code, Link, Button, Badge} from "./styled";



const Tile = ({project}) => (
    <>

    <Tiles >
    <Badge image={project.imagePath}/>
        {/* image={project.imagePath} */}
      
        <StyledUl>
       
        <Name>{project.name}</Name>
       
        <Description>{project.description}</Description>
        <Links>
        {/* <Demo>Demo: <Link rel="stylesheet" href={project.homepage} target="_blank">{project.homepage}</Link></Demo> */}
        {/* <Button to={project.routePath}></Button> */}
        <Link to={project.routePath}>Sprawdź</Link>
        </Links>
        </StyledUl>
    </Tiles>
    </>
);

export default Tile;