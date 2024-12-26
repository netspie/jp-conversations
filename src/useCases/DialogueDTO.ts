
export type DialogueDTO = {
    id: string;
    name: string;
    description: string;
    phrases: PhraseDTO[];
  };
  
  export type PhraseDTO = {
    speaker: WordDTO[];
    content: WordDTO[];
    words: WordDefinitionDTO[];
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