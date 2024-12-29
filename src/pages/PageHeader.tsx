import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export type PageHeaderProps = {
  children: string
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <IonHeader className="shadow-none h-12">
      <IonToolbar className="flex flex-col justify-center shadow-none h-12" style={{ "--background": "var(--ion-color-primary)" }}>
        <IonTitle className="text-3xl font-bold uppercase text-white text-center">
          {props.children}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;
