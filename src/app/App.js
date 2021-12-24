import MiniDrawer from "../Harness/MiniDrawer"
import * as routes from "./routes";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import StubHello from "../Stub/StubHello";
import StubMark from "../Stub/StubMark";
import StubGreat from "../Stub/StubGreat";
import Harness from "../Harness/Harness";
function App() {

  const menuRoutes = routes.getMenuRoutes();
  const allRoutes = routes.getAllRoutes();
  const homePageRoute = routes.getHomePageRoute();


  console.log("App");


  return (
      <div className="App">
        <BrowserRouter>
          <Harness menuItems={menuRoutes}>
            <Switch>
            <Route key="StubMark" exact path="/about">
                <StubMark />
              </Route>
              <Route key="StubHello" path="/a">
                <StubHello/>
              </Route>
              <Route key="StubGreat" exact path="/b">
                <StubGreat />
              </Route>
            </Switch> 
          </Harness>
        </BrowserRouter>
      </div>
  );
}

export default App;
