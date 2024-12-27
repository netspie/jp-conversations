import { CharacterDTO, WordDTO } from "../useCases/DialogueDTO";

export type WordProps = {
  content: WordDTO;
  config?: WordConfig
};

export type WordConfig = {
  showFurigana: boolean;
};

function Word(props: WordProps) {
  return (
    <>
      {props.content.characters.map((character, index) => (
        <div className="flex flex-col">
          {props.config?.showFurigana && character.kanaWriting && (
            <span className="text-[9px] text-center">
              {character.kanaWriting}
            </span>
          )}
          {props.config?.showFurigana && !character.kanaWriting &&
            <span className="text-[9px]">&nbsp;</span>
          }
          <span>{character.value}</span>
        </div>
      ))}
    </>
  );
}

export default Word;
