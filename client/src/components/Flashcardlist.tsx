import Flashcard from './Flashcard'
import { FlashCardData } from '../interfaces/FlashCardData'

interface flashcardListProps {
    flashcards: FlashCardData[];
}

export default function flashcardlist({ flashcards }: flashcardListProps) {
  return (
    <div className= "Card-grid row">
        {flashcards?.map((flashcard,i) => {
            return <Flashcard flashcard={flashcard} key={i} />
        })}
    </div>
  )
}
