export type DialogueDTO = {
  id: string;
  name: string;
  description: string;
  speakers: SpeakerDTO[];
  phrases: PhraseDTO[];
};

export type PhraseDTO = {
  speakerIndex: number;
  content: WordDefinitionDTO[];
  translation: string;
};

export type SpeakerDTO = {
  words: WordDTO[];
  translation: string;
};

export type WordDTO = {
  characters: CharacterDTO[];
};

export type WordDefinitionDTO = {
  characters: CharacterDTO[];
  explanation?: string;
};

export type CharacterDTO = {
  value: string;
  kanaWriting?: string;
};