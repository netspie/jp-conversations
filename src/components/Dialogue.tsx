import {
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText,
} from "@ionic/react";
import "./Dialogue.css";
import { DialogueDTO } from "../useCases/DialogueDTO";
import Word from "./Word";

export type DialogueProps = {
  content: DialogueDTO;
};

function Dialogue(props: DialogueProps) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-col gap-5">
        <IonLabel className="font-bold uppercase text-lg text-left">
          Situation
        </IonLabel>
        <IonText className="w-full pl-5 text-left">{props.content.description}</IonText>
      </div>
      <IonList
        lines="none"
        className="flex flex-col w-full rounded-xl bg-transparent gap-2"
      >
        <IonListHeader className="relative p-0">
          <IonLabel className="font-bold uppercase text-lg  text-left">Dialogue</IonLabel>
          {/* <div className="absolute left-0 flex w-full h-full">
            <div className="flex w-1/2">
              <DeckListModifersButton />
            </div>
            <div className="flex w-1/2 justify-end">
              <DeckListMenuButton />
            </div>
          </div> */}
        </IonListHeader>
        {props.content.phrases.map((phrase, index) => (
          <IonItem key={index}>
            <IonText className="normal-case flex">
              {phrase.speaker.map((word) => (
                <Word content={word} />
              ))}
              <Word
                content={{ characters: [{ value: ":", kanaWriting: "" }] }}
              />
              <span>&nbsp;</span>
              {phrase.content.map((word) => (
                <Word content={word} />
              ))}
            </IonText>
          </IonItem>
        ))}
      </IonList>
    </div>
  );
}

export default Dialogue;
