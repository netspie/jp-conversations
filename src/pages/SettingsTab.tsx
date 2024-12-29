import {
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItemDivider,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { useDialogueConfigStore } from "../store/DialogueConfigStore";
import PageHeader from "./PageHeader";

const SettingsTab: React.FC = () => {
  const dialogueConfigStore = useDialogueConfigStore();

  const getTextFlags = () => {
    return [
      dialogueConfigStore.showSpeakers,
      dialogueConfigStore.showFurigana,
      dialogueConfigStore.showHiragana,
      dialogueConfigStore.showTranslation,
    ];
  };

  const setTextFlags = (value: boolean) => {
    dialogueConfigStore.setShowSpeakers(value);
    dialogueConfigStore.setShowFurigana(value);
    dialogueConfigStore.setShowHiragana(value);
    dialogueConfigStore.setShowTranslation(value);
  };

  return (
    <IonPage>
      <PageHeader>Settings</PageHeader>
      <IonContent fullscreen>
        <div className="flex flex-col w-full h-full items-center p-4">
          <div className="flex flex-col w-full gap-4">
            <IonLabel className="font-bold text-lg">Text</IonLabel>
            <IonCheckbox
              checked={dialogueConfigStore.showSpeakers}
              onIonChange={(x) =>
                dialogueConfigStore.setShowSpeakers(x.detail.checked)
              }
            >
              Speakers
            </IonCheckbox>
            <IonCheckbox
              checked={dialogueConfigStore.showFurigana}
              onIonChange={(x) =>
                dialogueConfigStore.setShowFurigana(x.detail.checked)
              }
            >
              Furigana
            </IonCheckbox>
            <IonCheckbox
              checked={dialogueConfigStore.showHiragana}
              onIonChange={(x) =>
                dialogueConfigStore.setShowHiragana(x.detail.checked)
              }
            >
              Hiragana
            </IonCheckbox>
            <IonCheckbox
              checked={dialogueConfigStore.showTranslation}
              onIonChange={(x) =>
                dialogueConfigStore.setShowTranslation(x.detail.checked)
              }
            >
              Translations
            </IonCheckbox>

            <div className="h-[1px] bg-gray-300" />
            <IonCheckbox
              indeterminate={isAtLeastOneButNotAllTrue(getTextFlags())}
              checked={getTextFlags().every((x) => x)}
              onIonChange={(x) => setTextFlags(x.detail.checked)}
            >
              All
            </IonCheckbox>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

function isAtLeastOneButNotAllTrue(booleans: boolean[]): boolean {
  const hasTrue = booleans.some((value) => value === true);
  const hasFalse = booleans.some((value) => value === false);
  return hasTrue && hasFalse;
}

export default SettingsTab;
