import Flashcard from './flashcard'

export default function flashcardlist({ flashcards }) {
  return (
    <div className= "Card-grid">
        {flashcards.map(flashcard => {
            return <Flashcard flashcard={flashcard} key={flashcard.id} />
            
        
            
        })}
      
    </div>
  )
}
