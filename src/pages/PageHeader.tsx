import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { ReactNode } from "react";

export type PageHeaderProps = {
  children: string
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <IonHeader className="shadow-none">
      <IonToolbar className="shadow-none" style={{ "--background": "#0054e9" }}>
        <IonTitle className="text-3xl font-bold uppercase text-white text-center ">
          {props.children}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;
