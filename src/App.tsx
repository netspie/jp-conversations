import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  chatbox,
  diamond,
  grid,
  settingsOutline,
} from "ionicons/icons";
import DialoguesPage from "./dialogues/DialoguesPage";

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
import DialoguePage from "./dialogues/DialoguePage";
import SettingsPage from "./settings/SettingsPage";
import PremiumPage from "./premium/PremiumPage";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <div className="flex w-14 h-14 items-center justify-center bg-white">
            <IonButton
              href="/"
              className="hidden w-12 h-12 md:block m-0 rounded-none bg-transparent"
            >
              <IonIcon
                slot="icon-only"
                icon={grid}
                className="text-gray-50 w-8 h-8"
              />
            </IonButton>
          </div>
          <IonRouterOutlet className="md:left-14 h-[100vh]">
            {/* <Route exact path="/home" component={DialoguesPage} /> */}
            <Route exact path="/dialogues" component={DialoguesPage} />
            <Route path={`/dialogues/:id`} component={DialoguePage} />
            <Route path="/settings" component={SettingsPage} />
            <Route path="/premium" component={PremiumPage} />
            <Route exact path="/">
              <Redirect to="/dialogues" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar
            slot="bottom"
            className="h-12 md:mt-14 md:pt-2 md:flex-col md:w-14 md:h-full md:gap-4"
          >
            <div className="absolute w-[1px] h-[60%] bg-white"></div>
            {/* <IonTabButton
              tab="home"
              href="/home"
              className="flex-1 md:max-h-10"
            >
              <IonIcon aria-hidden="true" icon={home} />
            </IonTabButton> */}
            <IonTabButton
              tab="dialogues"
              href="/dialogues"
              className="flex-1 md:max-h-10"
            >
              <IonIcon aria-hidden="true" icon={chatbox} />
            </IonTabButton>
            <IonTabButton
              tab="settings"
              href="/settings"
              className="flex-1 md:max-h-10"
            >
              <IonIcon aria-hidden="true" icon={settingsOutline} />
            </IonTabButton>
            <IonTabButton
              tab="premium"
              href="/premium"
              className="flex-1 md:max-h-10"
            >
              <IonIcon aria-hidden="true" icon={diamond} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
