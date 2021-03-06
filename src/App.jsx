import React, { Fragment, useRef } from "react";
import "./App.css";
import HowRoofFarmsWorks from "./components/HowRoofFarmsWorks";
import RoofFarmsBenefits from "./components/RoofFarmsBenefits";
import CssBaseline from "@material-ui/core/CssBaseline";
import AddressInput from "./components/AddressInput";
import { Fab } from "@material-ui/core";
import FilterVintageTwoToneIcon from "@material-ui/icons/FilterVintageTwoTone";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Response from "./components/Response";
import Map from "./components/Map";
import ResContextProvider from "./context/resContext";
import OurTeam from "./components/OurTeam";

const App = () => {
  const myRef = useRef();
  const scrollToRef = (ref) => window.scrollTo(0, ref.offsetTop);

  const handleFabClick = (event) => {
    event.preventDefault();
    scrollToRef(myRef);
  };

  return (
    <ResContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Fragment>
              <CssBaseline />
              <AddressInput ref={myRef} />
              <RoofFarmsBenefits />
              <HowRoofFarmsWorks />
              <Map />
              <OurTeam />
              <Fab
                style={{
                  margin: 0,
                  top: "auto",
                  right: 20,
                  bottom: 20,
                  left: "auto",
                  position: "fixed",
                }}
                color="secondary"
                aria-label="get-started"
                onClick={handleFabClick}
              >
                <FilterVintageTwoToneIcon />
              </Fab>
            </Fragment>
          </Route>
          <Route path="/submit/">
            <Response />
          </Route>
        </Switch>
      </Router>
    </ResContextProvider>
  );
};

export default App;
