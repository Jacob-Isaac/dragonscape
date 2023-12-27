import StarIcon from "../../images/SunIcon.svg";
import {
   MovieTitle,
   BackgroundColor,
   StyledStarIcon,
   RatingSection,
   Rate,
   Votes,
   RateScale,
   BackgroundImage,
   InfoSection,
   Wrapper,
   StyledRow,
} from "./styled";

// const PosterBig = ({ selectedMovie }) => {
   const PosterBig = () => {
   const picture = `https://image.tmdb.org/t/p/w1280//t5zCBSB5xMDKcDqe91qahCOUYVV.jpg`;

   return (
      <BackgroundColor>
         <Wrapper>
            {<BackgroundImage src={picture} />}
            <InfoSection>
               <StyledRow>
                  <MovieTitle>JAKISTAM TYTUŁ</MovieTitle>
               </StyledRow>
               <RatingSection>
                  <StyledRow>
                     <StyledStarIcon>
                        <StarIcon width={"100%"} height={"100%"} />
                     </StyledStarIcon>
                     <RateScale>/ 10</RateScale>
                  </StyledRow>
               </RatingSection>
            </InfoSection>
         </Wrapper>
      </BackgroundColor>
   );
};

export default PosterBig;
