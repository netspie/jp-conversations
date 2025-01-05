import { IonContent, IonPage } from "@ionic/react";
import IonxHeader from "../ionx/IonxHeader";
import PageContent from "../ionx/IonxContent";
import Dialogue from "./Dialogue";
import { DialogueDTO } from "./DialogueDTO";
import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";

export type DialogueComponentProps = {
  dialogueId: string
}

export const DialogueComponent: React.FC<DialogueComponentProps> = (props) => {
  const [dialogue, setDialogue] = useState<DialogueDTO>();

  useEffect(() => {
    loadDialogue().then(setDialogue);
  }, []);

  async function loadDialogue(): Promise<DialogueDTO> {
    const response = await fetch(`/data/dialogues/${props.dialogueId}.json`);
    return await response.json();
  }

  return (
    dialogue && <Dialogue content={dialogue} />
  )
}

interface DialoguePageProps
  extends RouteComponentProps<{
    id: string;
  }> {}


const DialoguePage: React.FC<DialoguePageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonxHeader>Dialogues</IonxHeader>
      <IonContent fullscreen>
        <PageContent>
          <DialogueComponent dialogueId={match.params.id} />
        </PageContent>
      </IonContent>
    </IonPage>
  );
}

export default DialoguePage;