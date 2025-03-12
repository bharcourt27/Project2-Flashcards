import Flashcard from './Flashcard'
import { FlashCardData } from '../interfaces/FlashCardData'

interface flashcardListProps {
    flashcards: FlashCardData[];
    removeCard: (id: number) => void;
}
export default function flashcardlist({ flashcards,removeCard }: flashcardListProps) {
  return (
    <div className= "row">
        {flashcards?.map((flashcard,i) => {
            return <Flashcard flashcard={flashcard} removeCard = {removeCard} key={i} />
        })}
    </div>
  )
}
