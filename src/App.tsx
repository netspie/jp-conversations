import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonIcon,
  IonItemDivider,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  albums,
  book,
  ellipse,
  grid,
  home,
  list,
  listCircle,
  person,
  settings,
  square,
  triangle,
} from "ionicons/icons";
import HomeTab from "./pages/HomeTab";
import DialoguesTab from "./pages/DialoguesTab";
import ProfileTab from "./pages/ProfileTab";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./theme/variables.css";
import "./theme/tailwind.css";
import "./App.css";
import SettingsTab from "./pages/SettingsTab";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonButton
          href="/tab1"
          className="hidden w-16 h-14 md:block m-0 rounded-none bg-slate-500"
        >
          <IonIcon
            slot="icon-only"
            icon={grid}
            className="text-gray-50 w-8 h-8"
          />
        </IonButton>
        <IonRouterOutlet className="md:left-16 px-24">
          <Route exact path="/tab1">
            <HomeTab />
          </Route>
          <Route exact path="/tab2">
            <DialoguesTab />
          </Route>
          <Route path="/tab3">
            <ProfileTab />
          </Route>
          <Route path="/tab4">
            <SettingsTab />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar
          slot="bottom"
          className="md:mt-14 md:pt-2 md:flex-col md:w-16 md:h-full md:justify-start md:gap-1 shadow-xl"
        >
          <IonTabButton tab="tab1" href="/tab1" className="md:max-h-14">
            <IonIcon aria-hidden="true" icon={home} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2" className="md:max-h-14">
            <IonIcon aria-hidden="true" icon={albums} />
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3" className="md:max-h-14">
            <IonIcon aria-hidden="true" icon={person} />
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4" className="md:max-h-14">
            <IonIcon aria-hidden="true" icon={settings} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
