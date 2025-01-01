import { IonBackButton, IonHeader, IonLabel, IonTitle, IonToolbar } from "@ionic/react";

export type PageHeaderProps = {
  children: string;
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <IonHeader
      className="flex flex-col shadow-none md:h-14 justify-center"
      style={{ height: "fit-content" }}
    >
      {/* <div className="relative w-full h-40 bg-black">
        <div className="absolute -translate-x-8 top-3 h-24 w-64 bg-white opacity-10"></div>
        <div className="absolute right-0 bottom-0 -translate-x-8 top-3 h-24 w-64 bg-white opacity-10"></div>
      </div> */}
      <IonToolbar
        className="flex flex-col justify-center shadow-none h-12 md:h-14"
        style={{ "--border-width": "0", "--background": "white" }}
      >
         <IonBackButton></IonBackButton>
        <IonTitle className="text-3xl font-bold uppercase text-center">
          {props.children}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageHeader;
