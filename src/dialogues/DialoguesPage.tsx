import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
import IonxHeader from "../ionx/IonxHeader";
import React, { useEffect, useRef, useState } from "react";
import { DialogueSignatureDTO } from "./DialogueSignatureDTO";
import { diamond } from "ionicons/icons";
import IonxContent from "../ionx/IonxContent";

type DialogueSignatureProps = {
  content: DialogueSignatureDTO;
};

function DialogueButton(props: DialogueSignatureProps) {
  return (
    <div className="relative flex w-full">
      <IonButton
        className="size-full rounded-md shadow-md"
        routerDirection="forward"
        style={{ "--background": "var(--ion-color-quaternary)" }}
        // onClick={() => navStore.nav?.push(`/dialogues/dialogue`)}
      >
        <div className="flex flex-col gap-2 p-4">
          <IonLabel
            style={{ color: "var(--ion-color-primary)", "font-size": "18px" }}
          >
            {props.content.name}
          </IonLabel>
          <IonLabel
            style={{
              "--color": "var(--ion-color-tertiary)",
              "font-size": "12px",
            }}
          >
            {props.content.wordsCount} Words
          </IonLabel>
        </div>
      </IonButton>
      {!props.content.active && (
        <div className="absolute size-full flex justify-center items-center bg-[rgba(255,255,255,0.7)]">
          <IonButton>
            <IonIcon
              className="p-2"
              slot="icon-only"
              icon={diamond}
              style={{ "min-height": "40px", "min-width": "40px" }}
            />
          </IonButton>
          {/* <IonButton>
            <IonIcon
              icon={diamond}
              className="m-auto"
              size="large"
              color="primary"
             
            />
          </IonButton> */}
        </div>
      )}
    </div>
  );
}

type DialogueListProps = {
  nav?: HTMLIonNavElement
}

function DialogueList(props: DialogueListProps) {
  const [dialogues, setDialogues] = useState<DialogueSignatureDTO[]>();

  useEffect(() => {
    loadDialoguesSignatures().then(setDialogues);
  }, []);

  async function loadDialoguesSignatures(): Promise<DialogueSignatureDTO[]> {
    const response = await fetch("/data/dialogues/_dialogues.json");
    return await response.json();
  }

  return (
    <div>
      <div>
        <IonLabel
          style={{
            "font-size": "16px",
          }}
        >
          5/10 Free
        </IonLabel>
      </div>
      <IonList lines="none" className="flex flex-col w-full rounded-xl gap-2">
        {dialogues?.map((dialogue, i) => (
          <IonItem
            key={i}
            style={{
              "--padding-start": "0",
              "--inner-padding-end": "0",
              "--margin": "0",
              "--min-height": "0",
            }}
            className="p-0 m-0"
            routerLink={`dialogues/${dialogue.id}`}
          >
            <DialogueButton content={dialogue} />
          </IonItem>
        ))}
      </IonList>
    </div>
  );
}

const DialoguesPage: React.FC = () => {
  
  return (
    <IonPage>
      <IonxHeader>CONVERSATIONS</IonxHeader>
      <IonxContent>
        <DialogueList />
        {/* <Dialogue content={dialogue} /> */}
      </IonxContent>
    </IonPage>
  );
};

export default DialoguesPage;

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInt(20, 30);
