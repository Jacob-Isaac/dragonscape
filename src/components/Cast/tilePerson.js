import PersonIcon from "../../images/PersonIcon";
import { Destription, PersonNameStyle, NoPoster, Poster, StyledTilePerson, StyledPersonIcon, Wrapper, StyledNavLink, PersonRole } from "./personStyled";
import Ala from "../../images/ala.jpg"
const TilePerson = ({personRole, personName, personProfilePath, personId }) => {

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
                        <Poster src={Ala}/>
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
