import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGithubData, selectPortfolioList, selectLoadingState } from "../../features/DataSlice/githubSlice";
import OfferTiles from "./OfferTiles/OfferTiles";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";
import OfferList from "../../project.json"

const MainPage = () => {

  const dispatch = useDispatch();
  const portfolioList = useSelector(selectPortfolioList);
  const ifLoading = useSelector(selectLoadingState);


  useEffect(() => {
    dispatch(fetchGithubData());
  }, []);

  let returned = "";

  switch (ifLoading) {
    case "loading":
      returned = (
<LoadingPage/>
      );
      break;
    case "success":
      returned = (
        <>
         <OfferTiles projects={OfferList}/>
     </>
      );
      break;
      case "error":
        returned = (
          <ErrorPage/>
        );
        break;
    default:
      returned = (
        <LoadingPage/>
      );
  }

  return returned;

};

export default MainPage;
