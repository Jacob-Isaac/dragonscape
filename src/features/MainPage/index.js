
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGithubData, selectPortfolioList, selectLoadingState } from "../DataSlice/githubSlice";
import Projects from "./Projects";
import Offer from "./Offer";
import LoadingPage from "../../components/LoadingPage";
import ErrorPage from "../../components/ErrorPage";
import OfferList from "../../../src/project.json"

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
         <Offer projects={OfferList}/>
     {/* <Projects projects={portfolioList}/> */}
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
