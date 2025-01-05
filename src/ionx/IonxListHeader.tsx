import { IonListHeader, IonLabel } from "@ionic/react";
import React from "react";

export type ListHeaderProps = {
  children: string;
};

export function IonxListHeader(props: ListHeaderProps) {
  return (
    <IonListHeader className="flex flex-col items-start relative p-0 m-0">
      <IonLabel
        className="font-bold uppercase text-lg text-left h-fit"
        style={{ margin: 0, outerHeight: "fit-content" }}
      >
        {props.children}
      </IonLabel>
    </IonListHeader>
  );
}
