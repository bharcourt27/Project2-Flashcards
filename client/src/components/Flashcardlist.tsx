export default function flashcardlist({ Flashcards }) {
    return (
      <div className= "Card-grid">
          {Flashcards.map(Flashcard => {
              return <Flashcard flashcard={Flashcard} key={Flashcard.id} />
          })}
      </div>
    )
  }