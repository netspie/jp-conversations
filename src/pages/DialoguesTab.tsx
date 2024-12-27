import {
  IonContent,
  IonPage,
} from "@ionic/react";
import PageHeader from "./PageHeader";

const DialoguesTab: React.FC = () => {
  return (
    <IonPage>
      <PageHeader>Dialogues</PageHeader>
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default DialoguesTab;
