import { IonPage } from "@ionic/react";
import IonxHeader from "./IonxHeader";
import IonxContent from "./IonxContent";

const ProfilePage: React.FC = () => {
  return (
    <IonPage>
      <IonxHeader>Profile</IonxHeader>
      <IonxContent></IonxContent>
    </IonPage>
  );
};

export default ProfilePage;
