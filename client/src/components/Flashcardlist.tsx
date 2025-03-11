import Flashcard from './Flashcard'
import { FlashCardData } from '../interfaces/FlashCardData'

interface flashcardListProps {
    flashcards: FlashCardData[];
}

export default function flashcardlist({ flashcards }: flashcardListProps) {
  return (
    <div className= "Card-grid">
        {flashcards?.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
        })}
    </div>
  )
}
