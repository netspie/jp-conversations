import { IonContent, IonPage } from "@ionic/react";
import PageHeader from "./PageHeader";

const ProfileTab: React.FC = () => {
  return (
    <IonPage>
      <PageHeader>Profile</PageHeader>
      <IonContent fullscreen></IonContent>
    </IonPage>
  );
};

export default ProfileTab;
