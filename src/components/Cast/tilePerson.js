import PersonIcon from "../../images/PersonIcon";
import { Destription, PersonNameStyle, NoPoster, Poster, StyledTilePerson, StyledPersonIcon, Wrapper, StyledNavLink, PersonRole } from "./personStyled";
import Robert from "../../images/robert.webp"
import Jakub from "../../images/jakub.webp"
import Agnieszka from "../../images/agnieszka.webp"
import Milosz from "../../images/milosz.webp"


const TilePerson = ({personRole, personName, personProfilePath, personId }) => {
    const getPosterSource = () => {
        switch (personProfilePath) {
            case 'Robert':
                return Robert;
            case 'Jakub':
                return Jakub;
            case 'Agnieszka':
                return Agnieszka;
            case 'Milosz':
                return Milosz;
            default:
                return null; // You can return a default image or handle the case as needed
        }
    };

    const selectedPoster = getPosterSource();    
    return (
        <Wrapper>
            <StyledNavLink to={`/personDetails/${personId}`}>
                <StyledTilePerson>
                    {personProfilePath === null
                        ?
                        <NoPoster>
                            <StyledPersonIcon>
                                <PersonIcon width={"100%"} height={"100%"} />
                            </StyledPersonIcon>
                        </NoPoster>
                        :
                        <Poster src={selectedPoster}/>
                    }
                    <Destription>
                        <PersonNameStyle>{personName}</PersonNameStyle>
                        <PersonRole>{personRole}</PersonRole>
                    </Destription>
                </StyledTilePerson>
            </StyledNavLink>
        </Wrapper>
    );
};

export default TilePerson;
