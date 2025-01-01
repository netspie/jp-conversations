import {
  IonButton,
  IonCheckbox,
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
import { heart, information, person, play, square } from "ionicons/icons";
import ReactAudioPlayer from "react-audio-player";
import { useDialogueConfigStore } from "../store/DialogueConfigStore";
import { forceUpdate } from "ionicons/dist/types/stencil-public-runtime";
import { useState } from "react";

export type DialogueProps = {
  content: DialogueDTO;
};

type IconToggleProps = {
  icon?: string;
  character?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

function IconCheckbox(props: IconToggleProps) {
  return (
    <div className="flex items-center gap-2">
      {props.character ? (
        <IonText
          className="font-bold ml-1 mt-[1px]"
          color={props.checked ? "primary" : "disabled"}
        >
          {props.character}
        </IonText>
      ) : (
        <IonIcon
          icon={props.icon}
          color={props.checked ? "primary" : "disabled"}
        />
      )}
      <IonCheckbox
        checked={props.checked}
        onIonChange={(x) => props.onChange(x.detail.checked)}
      />
    </div>
  );
}

function Dialogue(props: DialogueProps) {
  const dialogueConfigStore = useDialogueConfigStore();
  const [state, setState] = useState(false)

  return (
    <div className="flex flex-col items-start gap-4 bg-white">
      <div className="flex gap-3">
        <IconCheckbox
          icon={person}
          checked={dialogueConfigStore.showSpeakers}
          onChange={dialogueConfigStore.setShowSpeakers}
        />
        <IconCheckbox
          icon={information}
          checked={dialogueConfigStore.showExplanations}
          onChange={value => {
            dialogueConfigStore.setShowExplanations(value)
            setState(!state)
          }}
        />
        <IconCheckbox
          character={"あ"}
          checked={dialogueConfigStore.showFurigana}
          onChange={dialogueConfigStore.setShowFurigana}
        />
        <IconCheckbox
          character={"EN"}
          checked={dialogueConfigStore.showTranslation}
          onChange={dialogueConfigStore.setShowTranslation}
        />
      </div>
      <div className="flex flex-col gap-2">
        <IonLabel className="font-bold uppercase text-lg text-left text-black">
          Situation
        </IonLabel>
        <IonText className="w-full text-left text-black font-[Lora]">
          {props.content.description}
        </IonText>
      </div>

      <IonList lines="none" className="flex flex-col w-full rounded-xl gap-2">
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
                  {/* SPEAKERS */}
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
                  {/* PHRASE */}
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
              {/* TRANSLATION */}
              {dialogueConfigStore.showTranslation && (
                <IonText className="w-full normal-case flex flex-wrap text-sm text-gray-400 font-bold">
                  {phrase.translation}
                </IonText>
              )}
              {/* EXPLANATIONS */}
              <div>
                {dialogueConfigStore.showExplanations &&
                  phrase.content.map((word) => (
                    <>
                      {word.explanation && (
                        <div className="flex-col">
                          {!dialogueConfigStore.showFurigana && (
                            <div className="h-2"></div>
                          )}
                          <div className="relative flex gap-2">
                            <div className="flex">
                              <div className="flex flex-col h-full mr-2">
                                {dialogueConfigStore.showFurigana && (
                                  <div className="h-[14px]"></div>
                                )}
                                <div className="h-[8px]"></div>
                                <IonIcon icon={square} className="size-[4px]" />
                              </div>
                              <div className="flex">
                                <Word
                                  content={word}
                                  config={{
                                    showFurigana:
                                      dialogueConfigStore.showFurigana,
                                  }}
                                />
                              </div>
                              <div className="flex flex-col">
                                {dialogueConfigStore.showFurigana && (
                                  <div className="h-[14px]"></div>
                                )}
                                <span className="mx-1 ml-2">-</span>
                              </div>
                            </div>
                            <div className="flex flex-col">
                              {dialogueConfigStore.showFurigana && (
                                <div className="h-[14px]"></div>
                              )}
                              <IonText className="w-full normal-case flex flex-wrap m-0 p-0">
                                {word.explanation}
                              </IonText>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
              </div>
              {dialogueConfigStore.showExplanations && (
                <div className="w-full h-[1px] bg-gray-300 mt-5 mb-2"></div>
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

function containsValidCharacter(input: string): boolean {
  // Check if the string length is 1 and is a special character
  if (input.length === 1) {
    const specialChars = /[^\w\s\u3040-\u30FF\u4E00-\u9FFF]/; // Any character that is not alphanumeric, space, or Japanese
    return !specialChars.test(input);
  }
  return true; // For strings of length more than 1, consider them valid
}
