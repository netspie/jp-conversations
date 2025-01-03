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
  albumsOutline,
  albumsSharp,
  book,
  chatbox,
  chatboxOutline,
  diamond,
  ellipse,
  grid,
  home,
  homeOutline,
  homeSharp,
  list,
  listCircle,
  person,
  personOutline,
  personSharp,
  settings,
  settingsOutline,
  settingsSharp,
  square,
  triangle,
} from "ionicons/icons";
import HomePage from "./pages/HomePage";
import DialoguesPage from "./pages/DialoguesPage";
import ProfilePage from "./pages/ProfilePage";

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
import SettingsPage from "./pages/SettingsPage";
import { resetNav, useNavStore } from "./store/NavStore";
import { DialoguePage } from "./pages/DialoguePage";

setupIonicReact();

const App: React.FC = () => {
  const navStore = useNavStore();

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonButton
            href="/tab1"
            className="hidden w-14 h-14 md:block m-0 rounded-none bg-transparent"
            style={{ "--border-radius": "0" }}
          >
            <IonIcon
              slot="icon-only"
              icon={grid}
              className="text-gray-50 w-8 h-8"
            />
          </IonButton>
          <IonRouterOutlet className="md:left-14 h-[100vh]">
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/dialogues">
              <DialoguesPage />
            </Route>
            <Route exact path="/dialogues/dialogue">
               <DialoguePage dialogueId="123e4567-e89b-12d3-a456-426614174000" />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/premium">
              <SettingsPage />
            </Route>
            {/* <Route path="/settings">
          </Route> */}
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar
            slot="bottom"
            className="h-12 md:mt-14 md:pt-2 md:flex-col md:w-14 md:h-full md:gap-4"
          >
            <div className="absolute w-[1px] h-[60%] bg-white"></div>
            <IonTabButton
              tab="home"
              href="/home"
              className="flex-1 md:max-h-10"
              onClick={() => resetNav(navStore)}
            >
              <IonIcon aria-hidden="true" icon={home} />
            </IonTabButton>
            <IonTabButton
              tab="dialogues"
              href="/dialogues"
              className="flex-1 md:max-h-10"
              onClick={() => resetNav(navStore)}
            >
              <IonIcon aria-hidden="true" icon={chatbox} />
            </IonTabButton>
            <IonTabButton
              tab="profile"
              href="/profile"
              className="flex-1 md:max-h-10"
              onClick={() => resetNav(navStore)}
            >
              <IonIcon aria-hidden="true" icon={person} />
            </IonTabButton>
            <IonTabButton
              tab="premium"
              href="/premium"
              className="flex-1 md:max-h-10"
              onClick={() => resetNav(navStore)}
            >
              <IonIcon aria-hidden="true" icon={diamond} />
            </IonTabButton>
            {/* <IonTabButton tab="tab3" href="/tab3" className="flex-1 md:max-h-10">
            <IonIcon aria-hidden="true" icon={personOutline} />
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4" className="flex-1 md:max-h-10">
            <IonIcon aria-hidden="true" icon={settingsOutline} />
          </IonTabButton> */}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
