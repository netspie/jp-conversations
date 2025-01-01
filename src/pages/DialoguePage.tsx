import { IonContent, IonPage } from "@ionic/react";
import PageHeader from "./PageHeader";
import PageContent from "./PageContent";
import Dialogue from "../components/Dialogue";
import { DialogueDTO } from "../useCases/DialogueDTO";
import { useEffect, useState } from "react";

export type DialoguePageProps = {
  dialogueId: string;
};

export function DialoguePage(props: DialoguePageProps) {
  const [dialogue, setDialogue] = useState<DialogueDTO>();

  useEffect(() => {
    loadDialogue().then(setDialogue);
  }, []);

  async function loadDialogue(): Promise<DialogueDTO> {
    const response = await fetch(`/data/dialogues/${props.dialogueId}.json`);
    return await response.json();
  }

  return (
    <IonPage>
      <PageHeader>Dialogues</PageHeader>
      <IonContent fullscreen>
        <PageContent>{dialogue && <Dialogue content={dialogue} />}</PageContent>
      </IonContent>
    </IonPage>
  );
}
