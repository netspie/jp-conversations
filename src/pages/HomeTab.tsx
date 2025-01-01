import {
  IonButton,
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
} from "@ionic/react";
import Dialogue from "../components/Dialogue";
import { DialogueDTO } from "../useCases/DialogueDTO";
import PageHeader from "./PageHeader";
import "./HomeTab.css";
import { useRef } from "react";
import { caretBackSharp, caretForwardSharp } from "ionicons/icons";
import PageContent from "./PageContent";

const HorizontalList: React.FC = () => {
  const items = Array.from({ length: 10 }, (_, i) => `Card ${i + 1}`);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group" style={{ width: "100%" }}>
      <div className="flex items-center justify-between">
        <IonButton
          onClick={scrollLeft}
          className="absolute left-0 opacity-0 translate-x-1/4 group-hover:opacity-100 bg-transparent hover:bg-none rounded-full"
          style={{
            "--background": "transparent",
            "--box-shadow": "none",
            "--border-radius": "999px",
          }}
        >
          <IonIcon
            aria-hidden="true"
            icon={caretBackSharp}
            className="w-16 h-16 -translate-x-1"
            style={{ color: "var(--ion-color-tertiary)" }}
          />
        </IonButton>
        <div
          className="h-list flex overflow-x-auto space-x-4 p-4 w-fit"
          ref={listRef}
        >
          {items.map((item, index) => (
            <IonLabel
              key={index}
              className="flex-none w-72 h-52 shadow-md rounded-md flex items-center justify-center text-center text-white text-2xl"
              style={{ background: "var(--ion-color-primary)" }}
            >
              {item}
            </IonLabel>
          ))}
        </div>
        <IonButton
          onClick={scrollRight}
          className="absolute right-0 opacity-0 -translate-x-1/4 group-hover:opacity-100 bg-transparent hover:bg-none rounded-full"
          style={{
            "--background": "transparent",
            "--box-shadow": "none",
            "--border-radius": "999px",
          }}
        >
          <IonIcon
            aria-hidden="true"
            icon={caretForwardSharp}
            className="w-16 h-16 translate-x-1"
            style={{ color: "var(--ion-color-tertiary)" }}
          />
        </IonButton>
      </div>
    </div>
  );
};

const HomeTab: React.FC = () => {
  return (
    <IonPage>
      <PageHeader>Home</PageHeader>
      <IonContent fullscreen className="rounded-lg">
        <PageContent>
          <div
            className="p-8 w-full text-black text-center"
            style={{ background: "var(--ion-color-secondary)" }}
          >
            <p className="uppercase">Welcome to Japanese Conversations!</p>
            <p className="font-bold">
              Get everyday real life japanese dialogue and learn.
            </p>
            <p className="">
              Upgrade for <span className="font-bold uppercase">premium</span>{" "}
              at anytime and get up to <strong>5</strong> dialogues a day!
              <span className="font-bold uppercase"> Everyday!</span>
            </p>
          </div>
          <HorizontalList />
          {/* <DeckList></DeckList> */}
          <Dialogue content={dialogue} />
        </PageContent>
      </IonContent>
    </IonPage>
  );
};

// Dialogue:
// アキの母：もう、試合始まるよ！急いで準備して！
// アキ：あっ、わかった！すぐに行くよ！
// アキの母：早くしないと遅れるよ！
// アキ：バッグはどこだっけ？あ、見つけた！
// アキの母：靴はちゃんと履いた？さあ、出発よ！
// アキ：うん、準備できた！行こう！

export default HomeTab;

const dialogue: DialogueDTO = {
  id: "{123e4567-e89b-12d3-a456-426614174000}",
  name: "Aki's Preparation for Soccer Match",
  description: "A dialogue where Aki's mother urges him to hurry up and prepare for his soccer match.",
  speakers: [
    {
      words: [
        { characters: [{ value: "ア" }, { value: "キ" }] },
        { characters: [{ value: "の" }] },
        { characters: [{ value: "母", kanaWriting: "はは" }] },
      ],
      translation: "Aki's Mother",
    },
    {
      words: [
        { characters: [{ value: "ア" }, { value: "キ" }] },
      ],
      translation: "Aki",
    },
  ],
  phrases: [
    {
      speakerIndex: 0,
      content: [
        { characters: [{ value: "も" }, { value: "う" }], explanation: "already; soon; again; more; strengthens expression of an emotion; filler word: なんか、もう、帰(かえ)ろうよ: Like, let's go home already?" },
        { characters: [{ value: "試", kanaWriting: "し" }, { value: "合", kanaWriting: "あい" }], explanation: "game; match. Often used in sports contexts like soccer or baseball." },
        { characters: [{ value: "始", kanaWriting: "はじ" }, { value: "ま" }, { value: "る" }], explanation: "to begin; to start. Often used for events or actions." },
        { characters: [{ value: "よ" }], explanation: "introduces new information; emphasizes a sentence; 朝(あさ)だよ！It's morning!" },
        { characters: [{ value: "！" }] },
        {
          characters: [
            { value: "急", kanaWriting: "いそ" },
            { value: "い" },
            { value: "で" },
          ],
          explanation: "to hurry; to rush. Indicates urgency."
        },
        {
          characters: [
            { value: "準", kanaWriting: "じゅん" },
            { value: "備", kanaWriting: "び" },
            { value: "し" },
            { value: "て" }
          ],
          explanation: "て-form of 準備する (to prepare). Indicates a command or request to take action."
        },
        { characters: [{ value: "！" }] },
      ],
      translation: "The match is about to start! Hurry up and get ready!",
    },
    {
      speakerIndex: 1,
      content: [
        { characters: [{ value: "あっ" }], explanation: "exclamation of realization or surprise." },
        { characters: [{ value: "わ" }, { value: "か" }, { value: "っ" }, { value: "た" }], explanation: "understood; got it. Casual expression of agreement or understanding." },
        { characters: [{ value: "！" }] },
        { characters: [{ value: "す" }, { value: "ぐ" }], explanation: "immediately; soon." },
        { characters: [{ value: "に" }] },
        { characters: [{ value: "行", kanaWriting: "い" }, { value: "く" }], explanation: "to go; to head toward. Common verb for movement." },
        { characters: [{ value: "よ" }], explanation: "emphasizes a sentence; 朝(あさ)だよ！It's morning!" },
        { characters: [{ value: "。" }] },
      ],
      translation: "Ah, got it! I'll go right away!",
    },
    {
      speakerIndex: 0,
      content: [
        { characters: [{ value: "早", kanaWriting: "はや" }, { value: "く" }], explanation: "quickly; hurry." },
        { characters: [{ value: "し" }, { value: "な" }, { value: "い" }, { value: "と" }], explanation: "if you don't...; expresses a conditional or consequence." },
        { characters: [{ value: "遅", kanaWriting: "おく" }, { value: "れ" }, { value: "る" }], explanation: "to be late; to lag behind." },
        { characters: [{ value: "よ" }], explanation: "emphasizes a sentence." },
        { characters: [{ value: "。" }] },
      ],
      translation: "If you don't hurry, you'll be late!",
    },
    {
      speakerIndex: 1,
      content: [
        { characters: [{ value: "バ" }, { value: "ッ" }, { value: "グ" }], explanation: "bag. Loanword from English." },
        { characters: [{ value: "は" }] },
        { characters: [{ value: "ど" }, { value: "こ" }], explanation: "where; location." },
        { characters: [{ value: "だ" }] },
        { characters: [{ value: "っ" }, { value: "け" }], explanation: "used to recall or confirm information." },
        { characters: [{ value: "？" }] },
        { characters: [{ value: "あ" }, { value: "、" }] },
        { characters: [{ value: "見", kanaWriting: "み" }, { value: "つ" }, { value: "け" }, { value: "た" }], explanation: "found; discovered." },
        { characters: [{ value: "！" }] },
      ],
      translation: "Where's my bag? Oh, found it!",
    },
    {
      speakerIndex: 0,
      content: [
        { characters: [{ value: "靴", kanaWriting: "くつ" }], explanation: "shoes." },
        { characters: [{ value: "は" }] },
        { characters: [{ value: "ちゃんと" }], explanation: "properly; neatly; thoroughly." },
        { characters: [{ value: "履", kanaWriting: "は" }, { value: "い" }, { value: "た" }], explanation: "worn; put on (shoes)." },
        { characters: [{ value: "？" }] },
        { characters: [{ value: "さ" }, { value: "あ" }], explanation: "come on; let's go." },
        { characters: [{ value: "出", kanaWriting: "しゅつ" }, { value: "発", kanaWriting: "ぱつ" }], explanation: "departure; leaving." },
        { characters: [{ value: "よ" }], explanation: "emphasizes a sentence." },
      ],
      translation: "Did you put on your shoes properly? Let's go!",
    },
    {
      speakerIndex: 1,
      content: [
        { characters: [{ value: "うん" }], explanation: "yeah; affirmative response." },
        { characters: [{ value: "準", kanaWriting: "じゅん" }, { value: "備", kanaWriting: "び" }, { value: "で" }, { value: "き" }, { value: "た" }], explanation: "ready; prepared." },
        { characters: [{ value: "！" }] },
        { characters: [{ value: "行", kanaWriting: "い" }, { value: "こ" }, { value: "う" }], explanation: "let's go!" },
        { characters: [{ value: "！" }] },
      ],
      translation: "Yeah, I'm ready! Let's go!",
    },
  ],
};