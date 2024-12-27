import {
  IonButton,
  IonCheckbox,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonText,
} from "@ionic/react";
import "./Dialogue.css";
import { DialogueDTO } from "../useCases/DialogueDTO";
import Word from "./Word";
import { useState } from "react";
import { play } from "ionicons/icons";
import ReactAudioPlayer from "react-audio-player";

export type DialogueProps = {
  content: DialogueDTO;
};

function Dialogue(props: DialogueProps) {
  const [showSpeakers, setShowSpeakers] = useState(true);
  const [showFurigana, setShowFurigana] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);
  
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-col gap-5">
        <IonLabel className="font-bold uppercase text-lg text-left">
          Situation
        </IonLabel>
        <IonText className="w-full pl-5 text-left">
          {props.content.description}
        </IonText>
      </div>

      <IonList
        lines="none"
        className="flex flex-col w-full rounded-xl bg-transparent gap-2"
      >
        <IonListHeader className="flex flex-col items-start relative p-0">
          <IonLabel className="font-bold uppercase text-lg text-left">
            Dialogue
          </IonLabel>
          
        </IonListHeader>
        {props.content.phrases.map((phrase, index) => (
          <IonItem key={index} style={{ '--min-height': '0'}}>
            <div className="flex flex-col w-full">
              <div className="flex w-full">
                <IonText className="w-full normal-case flex flex-wrap items-end">
                  {showSpeakers && (
                    <>
                      {props.content.speakers[phrase.speakerIndex].words.map(
                        (word) => (
                          <Word
                            content={word}
                            config={{ showFurigana: showFurigana }}
                          />
                        )
                      )}
                      <Word
                        content={{
                          characters: [{ value: ":", kanaWriting: "" }],
                        }}
                        config={{ showFurigana: showFurigana }}
                      />
                      <span>&nbsp;</span>
                    </>
                  )}
                  {phrase.content.map((word) => (
                    <Word
                      content={word}
                      config={{ showFurigana: showFurigana }}
                    />
                  ))}
                </IonText>
                <IonButton
                  style={{
                    "--background": "none",
                    "--box-shadow": "none",
                    "--color": "gray",
                  }}
                >
                  <IonIcon icon={play} />
                </IonButton>
              </div>
              {showTranslation && (
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
