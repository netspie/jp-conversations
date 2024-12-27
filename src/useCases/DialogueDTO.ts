export type DialogueDTO = {
  id: string;
  name: string;
  description: string;
  speakers: SpeakerDTO[];
  phrases: PhraseDTO[];
};

export type PhraseDTO = {
  speakerIndex: number;
  content: WordDTO[];
  translation: string;
  words: WordDefinitionDTO[];
};

export type SpeakerDTO = {
  words: WordDTO[];
  translation: string
};

export type WordDTO = {
  characters: CharacterDTO[];
};

export type WordDefinitionDTO = {
  characters: CharacterDTO[];
  definition: DefinitionTextDTO;
};

export type CharacterDTO = {
  value: string;
  kanaWriting?: string;
};

export type DefinitionTextDTO = {
  fragments: DefinitionTextFragmentDTO[];
};

export type DefinitionTextFragmentDTO = {
  value: WordDTO[];
};

export type DialogueProps = {
  content: DialogueDTO;
};
