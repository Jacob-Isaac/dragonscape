import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchGithubData,
  selectLoadingState, selectIsLightMode
} from "../../features/DataSlice/dataSlice";
import OfferTiles from "./OfferTiles/OfferTiles";
import LoadingPage from "../../features/TechnicalTabs/LoadingPage";
import ErrorPage from "../../features/TechnicalTabs/ErrorPage";
import OfferList from "../../features/Config/project.json";

const MainPage = () => {
  const dispatch = useDispatch();
  const ifLoading = useSelector(selectLoadingState);
  const lightMode = useSelector(selectIsLightMode);
  
  useEffect(() => {
    dispatch(fetchGithubData(selectIsLightMode));
  }, []);

  let returned = "";

  switch (ifLoading) {
    case "loading":
      returned = <LoadingPage/>;
      break;
    case "success":
      returned = (
        <>
          <OfferTiles projects={OfferList} isLight={lightMode} />
        </>
      );
      break;
    case "error":
      returned = <ErrorPage />;
      break;
    default:
      returned = <LoadingPage/>;
  }
  return returned;
};

export default MainPage;
