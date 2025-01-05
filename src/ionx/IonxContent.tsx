import { IonContent } from "@ionic/react";

type PageContentProps = {
  children?: React.ReactNode;
  className?: string
};

export default function IonxContent(props: PageContentProps) {
  return (
    <IonContent fullscreen>
      <div className={`w-full px-4 pt-4 md:px-9 xl:px-72 2xl:px-96 pb-16 ${props.className}`}>
        {props.children}
      </div>
    </IonContent>
  );
}
