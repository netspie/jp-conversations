import {
  IonButton,
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
} from "@ionic/react";
import PageHeader from "./PageHeader";
import "./HomePage.css";
import { useRef } from "react";
import { caretBackSharp, caretForwardSharp } from "ionicons/icons";
import PageContent from "./PageContent";
import { Link } from "react-router-dom";

const HorizontalList: React.FC = () => {
  const items = Array.from({ length: 10 }, (_, i) => `Card ${i + 1}`);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group" style={{ width: "100%" }}>
      <div className="flex items-center justify-between">
        <IonButton
          onClick={scrollLeft}
          className="absolute left-0 opacity-0 translate-x-1/4 group-hover:opacity-100 bg-transparent hover:bg-none rounded-full"
          style={{
            "--background": "transparent",
            "--box-shadow": "none",
            "--border-radius": "999px",
          }}
        >
          <IonIcon
            aria-hidden="true"
            icon={caretBackSharp}
            className="w-16 h-16 -translate-x-1"
            style={{ color: "var(--ion-color-tertiary)" }}
          />
        </IonButton>
        <div
          className="h-list flex overflow-x-auto space-x-4 p-4 w-fit"
          ref={listRef}
        >
          {items.map((item, index) => (
            <IonLabel
              key={index}
              className="flex-none w-72 h-52 shadow-md rounded-md flex items-center justify-center text-center text-white text-2xl"
              style={{ background: "var(--ion-color-primary)" }}
            >
              {item}
            </IonLabel>
          ))}
        </div>
        <IonButton
          onClick={scrollRight}
          className="absolute right-0 opacity-0 -translate-x-1/4 group-hover:opacity-100 bg-transparent hover:bg-none rounded-full"
          style={{
            "--background": "transparent",
            "--box-shadow": "none",
            "--border-radius": "999px",
          }}
        >
          <IonIcon
            aria-hidden="true"
            icon={caretForwardSharp}
            className="w-16 h-16 translate-x-1"
            style={{ color: "var(--ion-color-tertiary)" }}
          />
        </IonButton>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <PageHeader>Home</PageHeader>
      <IonContent fullscreen>
        <PageContent>
          <div
            className="p-8 w-full text-black text-center"
            style={{ background: "var(--ion-color-secondary)" }}
          >
            <p className="uppercase">Welcome to Japanese Conversations!</p>
            <p className="font-bold">
              Get everyday real life japanese dialogue and learn.
            </p>
            <p className="">
              Upgrade for <span className="font-bold uppercase">premium</span>{" "}
              at anytime and get up to <strong>5</strong> dialogues a day!
              <span className="font-bold uppercase"> Everyday!</span>
            </p>
          </div>
          <HorizontalList />
          <Link to="/dialogues/dialogue">GO</Link>
        </PageContent>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
