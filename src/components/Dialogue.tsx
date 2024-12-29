import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText,
} from "@ionic/react";
import "./Dialogue.css";
import { DialogueDTO } from "../useCases/DialogueDTO";
import Word from "../views/Word";
import { play } from "ionicons/icons";
import ReactAudioPlayer from "react-audio-player";
import { useDialogueConfigStore } from "../store/DialogueConfigStore";

export type DialogueProps = {
  content: DialogueDTO;
};

function Dialogue(props: DialogueProps) {
  const dialogueConfigStore = useDialogueConfigStore();

  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-col gap-5">
        <IonLabel className="font-bold uppercase text-lg text-left">
          Situation
        </IonLabel>
        <IonText className="w-full text-left">
          {props.content.description}
        </IonText>
      </div>

      <IonList
        lines="none"
        className="flex flex-col w-full rounded-xl bg-transparent gap-2"
      >
        <IonListHeader className="flex flex-col items-start relative p-0 m-0">
          <IonLabel
            className="font-bold uppercase text-lg text-left h-fit"
            style={{ margin: 0, outerHeight: "fit-content" }}
          >
            Dialogue
          </IonLabel>
        </IonListHeader>
        {props.content.phrases.map((phrase, index) => (
          <IonItem key={index} style={{ "--min-height": "0" }}>
            <div className="flex flex-col w-full">
              <div className="flex w-full">
                <IonText className="w-full normal-case flex flex-wrap items-end">
                  {dialogueConfigStore.showSpeakers && (
                    <>
                      {props.content.speakers[phrase.speakerIndex].words.map(
                        (word) => (
                          <Word
                            content={word}
                            config={{
                              showFurigana: dialogueConfigStore.showFurigana,
                            }}
                          />
                        )
                      )}
                      <Word
                        content={{
                          characters: [{ value: ":", kanaWriting: "" }],
                        }}
                        config={{
                          showFurigana: dialogueConfigStore.showFurigana,
                        }}
                      />
                      <span>&nbsp;</span>
                    </>
                  )}
                  {phrase.content.map((word) => (
                    <Word
                      content={word}
                      config={{
                        showFurigana: dialogueConfigStore.showFurigana,
                      }}
                    />
                  ))}
                </IonText>
                <IonButton
                  style={{
                    "--background": "none",
                    "--box-shadow": "none",
                    "--color": "var(--ion-color-primary)",
                    "--height": "fit-content",
                    "--padding": "0",
                    "--margin": "0",
                  }}
                >
                  <IonIcon icon={play} />
                </IonButton>
              </div>
              {dialogueConfigStore.showTranslation && (
                <IonText className="w-full normal-case flex flex-wrap">
                  {phrase.translation}
                </IonText>
              )}
            </div>
          </IonItem>
        ))}
      </IonList>
      <ReactAudioPlayer
        src="/sounds/2020年2月3日 Level 1 今からどこに行くの - 1.mp3" // Path to your audio file
        autoPlay={false}
        controls
      />
    </div>
  );
}

export default Dialogue;
