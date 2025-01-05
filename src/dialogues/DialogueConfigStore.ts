import { create } from "zustand";

type DialogueConfigStore = {
  showSpeakers: boolean;
  showFurigana: boolean;
  showHiragana: boolean;
  showTranslation: boolean;
  showExplanations: boolean;
  setShowSpeakers: (value: boolean) => void;
  setShowFurigana: (value: boolean) => void;
  setShowHiragana: (value: boolean) => void;
  setShowTranslation: (value: boolean) => void;
  setShowExplanations: (value: boolean) => void;
};

export const useDialogueConfigStore = create<DialogueConfigStore>((set) => ({
    showSpeakers: true,
    showFurigana: true,
    showHiragana: true,
    showTranslation: true,
    showExplanations: true,
    setShowSpeakers: (value: boolean) => set(() => ({ showSpeakers: value })),
    setShowFurigana: (value: boolean) => set(() => ({ showFurigana: value })),
    setShowHiragana: (value: boolean) => set(() => ({ showHiragana: value })),
    setShowTranslation: (value: boolean) => set(() => ({ showTranslation: value })),
    setShowExplanations: (value: boolean) => set(() => ({ showExplanations: value })),
}));
