import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Dialogue from "../components/Dialogue";
import { DialogueDTO } from "../useCases/DialogueDTO";

const HomeTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="shadow-none">
        <IonToolbar
          className="shadow-none"
          style={{ "--background": "#0054e9" }}
        >
          <IonTitle className="text-3xl font-bold uppercase text-white text-center ">
            Home
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="rounded-lg">
        <div className="flex flex-col text-center justify-center items-center p-4 gap-4">
          <div className="p-8 bg-blue-100 w-full text-black rounded-lg">
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
          <div className="w-full pt-4 xl:px-72 2xl:px-96">
            {/* <DeckList></DeckList> */}
            <Dialogue content={dialogue} />
          </div>
        </div>
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

const dialogue: DialogueDTO = {
  id: "1",
  name: "Aki's Preparation for Soccer Match",
  description:
    "A dialogue where Aki's mother urges him to hurry up and prepare for his soccer match.",
  speakers: [
    {
      words: [
        { characters: [{ value: "ア" }, { value: "キ" }] },
        { characters: [{ value: "の" }] },
        {
          characters: [{ value: "母", kanaWriting: "はは" }],
        },
      ],
      translation: "Aki's Mother",
    },
    {
      words: [{ characters: [{ value: "ア" }, { value: "キ" }] }],
      translation: "Aki",
    },
  ],
  phrases: [
    {
      speakerIndex: 0,
      content: [
        { characters: [{ value: "も" }, { value: "う" }] },
        {
          characters: [
            { value: "試", kanaWriting: "し" },
            { value: "合", kanaWriting: "あい" },
          ],
        },
        {
          characters: [
            { value: "始", kanaWriting: "はじ" },
            { value: "ま" },
            { value: "る" },
          ],
        },
        { characters: [{ value: "よ" }] },
        { characters: [{ value: "！" }] },
        {
          characters: [
            { value: "急", kanaWriting: "いそ" },
            { value: "い" },
            { value: "で" },
          ],
        },
        {
          characters: [
            { value: "準", kanaWriting: "じゅん" },
            { value: "備", kanaWriting: "び" },
          ],
        },
        {
          characters: [{ value: "し" }, { value: "て" }],
        },
        { characters: [{ value: "！" }] },
      ],
      translation: "The match is about to start! Hurry up and get ready!",
      words: [],
    },
    {
      speakerIndex: 1,
      content: [
        { characters: [{ value: "あっ" }] },
        { characters: [{ value: "、" }] },
        {
          characters: [
            { value: "分", kanaWriting: "わ" },
            { value: "か" },
            { value: "っ" },
            { value: "た" },
          ],
        },
        { characters: [{ value: "す" }, { value: "ぐ" }] },
        { characters: [{ value: "に" }] },
        { characters: [{ value: "行", kanaWriting: "い" }, { value: "く" }] },
        { characters: [{ value: "よ" }] },
        { characters: [{ value: "。" }] },
      ],
      translation: "Ah, got it! I'll be there right away!",
      words: [],
    },
    {
      speakerIndex: 0,
      content: [
        { characters: [{ value: "早", kanaWriting: "はや" }, { value: "く" }] },
        { characters: [{ value: "し" }, { value: "ない" }] },
        { characters: [{ value: "と" }] },
        {
          characters: [
            { value: "遅", kanaWriting: "おく" },
            { value: "れ" },
            { value: "る" },
          ],
        },
        { characters: [{ value: "よ" }] },
        { characters: [{ value: "。" }] },
      ],
      translation: "If you don't hurry, you'll be late!",
      words: [],
    },
    {
      speakerIndex: 1,
      content: [
        {
          characters: [{ value: "バ" }, { value: "ッ" }, { value: "グ" }],
        },
        { characters: [{ value: "は" }] },
        { characters: [{ value: "ど" }, { value: "こ" }] },
        { characters: [{ value: "だ" }, { value: "っ" }, { value: "け" }] },
        { characters: [{ value: "？" }] },
        { characters: [{ value: "あ" }] },
        { characters: [{ value: "、" }] },
        {
          characters: [
            { value: "見", kanaWriting: "み" },
            { value: "つ" },
            { value: "け" },
            { value: "た" },
          ],
        },
        { characters: [{ value: "？" }] },
      ],
      translation: "Where's my bag again? Oh, I found it!",
      words: [],
    },
    {
      speakerIndex: 0,
      content: [
        { characters: [{ value: "靴", kanaWriting: "くつ" }] },
        { characters: [{ value: "は" }] },
        { characters: [{ value: "ちゃ" }, { value: "ん" }, { value: "と" }] },
        {
          characters: [
            { value: "履", kanaWriting: "は" },
            { value: "い" },
            { value: "た" },
          ],
        },
        { characters: [{ value: "？" }] },
        { characters: [{ value: "さ" }, { value: "あ" }] },
        { characters: [{ value: "、" }] },
        {
          characters: [
            { value: "出", kanaWriting: "しゅ" },
            { value: "発", kanaWriting: "っぱつ" },
          ],
        },
        { characters: [{ value: "よ" }] },
        { characters: [{ value: "。" }] },
      ],
      translation: "Have you put your shoes on properly? Come on, let's go!",
      words: [],
    },
    {
      speakerIndex: 1,
      content: [
        { characters: [{ value: "う" }, { value: "ん" }] },
        {
          characters: [
            { value: "準", kanaWriting: "じゅん" },
            { value: "備", kanaWriting: "び" },
          ],
        },
        { characters: [{ value: "で" }, { value: "き" }, { value: "た" }] },
        { characters: [{ value: "。" }] },
        {
          characters: [
            { value: "行", kanaWriting: "い" },
            { value: "こ" },
            { value: "う" },
          ],
        },
        { characters: [{ value: "!" }] },
      ],
      translation: "Yeah, I'm ready! Let's go!",
      words: [],
    },
  ],
};

export default HomeTab;
