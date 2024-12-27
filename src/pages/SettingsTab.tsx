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

const SettingsTab: React.FC = () => {
  const [showSpeakers, setShowSpeakers] = useState(true);
  const [showFurigana, setShowFurigana] = useState(true);
  const [showHiragana, setShowHiragana] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);

  const getTextFlags = () => {
    return [showSpeakers, showFurigana, showHiragana, showTranslation];
  };

  const setTextFlags = (value: boolean) => {
    setShowSpeakers(value)
    setShowFurigana(value)
    setShowHiragana(value)
    setShowTranslation(value)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex flex-col w-full h-full items-center p-4">
          <div className="flex flex-col w-full gap-4">
            <IonLabel className="font-bold">Text</IonLabel>
            <IonCheckbox
              checked={showSpeakers}
              onIonChange={(x) => setShowSpeakers(x.detail.checked)}
            >
              Speakers
            </IonCheckbox>
            <IonCheckbox
              checked={showFurigana}
              onIonChange={(x) => setShowFurigana(x.detail.checked)}
            >
              Furigana
            </IonCheckbox>
            <IonCheckbox
              checked={showHiragana}
              onIonChange={(x) => setShowHiragana(x.detail.checked)}
            >
              Hiragana
            </IonCheckbox>
            <IonCheckbox
              checked={showTranslation}
              onIonChange={(x) => setShowTranslation(x.detail.checked)}
            >
              Translations
            </IonCheckbox>

            <div className="h-[1px] bg-gray-300" />
            <IonCheckbox
              indeterminate={isAtLeastOneButNotAllTrue(getTextFlags())}
              checked={getTextFlags().every((x) => x)}
              onIonChange={x => setTextFlags(x.detail.checked)}
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
