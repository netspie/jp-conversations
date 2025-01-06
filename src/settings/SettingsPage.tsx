import {
  IonCheckbox,
  IonLabel,
  IonPage,
} from "@ionic/react";
import { useDialogueConfigStore } from "../dialogues/DialogueConfigStore";
import IonxHeader from "../ionx/IonxHeader";
import IonxContent from "../ionx/IonxContent";

const SettingsPage: React.FC = () => {
  const dialogueConfigStore = useDialogueConfigStore();

  const getTextFlags = () => {
    return [
      dialogueConfigStore.showSpeakers,
      dialogueConfigStore.showFurigana,
      // dialogueConfigStore.showHiragana,
      dialogueConfigStore.showTranslation,
      dialogueConfigStore.showExplanations,
    ];
  };

  const setTextFlags = (value: boolean) => {
    dialogueConfigStore.setShowSpeakers(value);
    dialogueConfigStore.setShowFurigana(value);
    dialogueConfigStore.setShowHiragana(value);
    dialogueConfigStore.setShowTranslation(value);
    dialogueConfigStore.setShowExplanations(value);
  };

  return (
    <IonPage>
      <IonxHeader>Settings</IonxHeader>
      <IonxContent>
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
          {/* <IonCheckbox
              checked={dialogueConfigStore.showHiragana}
              onIonChange={(x) =>
                dialogueConfigStore.setShowHiragana(x.detail.checked)
              }
            >
              Hiragana
            </IonCheckbox> */}
          <IonCheckbox
            checked={dialogueConfigStore.showTranslation}
            onIonChange={(x) =>
              dialogueConfigStore.setShowTranslation(x.detail.checked)
            }
          >
            Translations
          </IonCheckbox>
          <IonCheckbox
            checked={dialogueConfigStore.showExplanations}
            onIonChange={(x) =>
              dialogueConfigStore.setShowExplanations(x.detail.checked)
            }
          >
            Words Explanations
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
      </IonxContent>
    </IonPage>
  );
};

function isAtLeastOneButNotAllTrue(booleans: boolean[]): boolean {
  const hasTrue = booleans.some((value) => value === true);
  const hasFalse = booleans.some((value) => value === false);
  return hasTrue && hasFalse;
}

export default SettingsPage;
