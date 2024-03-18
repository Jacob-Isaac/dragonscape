import Tile from "../../../styledComponents/Tiles/index";
import { Wrapper } from "../../../styledComponents/Wrapper/styled";
import Content from "../../../styledComponents/Content";
import { StyledGithubLogo } from "./styled";

const OfferTiles = ({ projects, isLight }) => {
  return (
    <Content
      icon={<StyledGithubLogo />}
      title={"Oferta"}
      subtitle={"Wszystko jest możliwe, a my to... umożliwimy."}
      body={
        <>
          <Wrapper>
            {projects.map((project) => (
              <Tile key={project.id} project={project} isLight={isLight} />
            ))}
          </Wrapper>
        </>
      }
    />
  );
};

export default OfferTiles;
