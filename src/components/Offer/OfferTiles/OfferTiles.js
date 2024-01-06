import Tile from "../../../styledComponents/Tiles/index"
import {Wrapper} from "../../../styledComponents/Wrapper/styled";
import Content from "../../../styledComponents/Content";
import { StyledMarker, StyledGithubLogo } from "./styled";

const OfferTiles = ({projects}) => {

    return (

        <Content 
        icon = {<StyledGithubLogo/>} 
        title= {"Oferta"}
        subtitle = {"Wszystko jest możliwe, a my to... umożliwimy."} 
        body={
            <>
              <Wrapper>
                    {projects.map((project) => (
                       // <TilePerson key={person.id} person={person} personRole={person.character} />
                       <Tile key={project.id} project={project}/>
                    ))}
            </Wrapper>
            </>

            } />

    );
};

export default OfferTiles;