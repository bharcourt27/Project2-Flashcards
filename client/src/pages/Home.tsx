import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { getFlashcards,deleteFlashcard } from '../api/flashcardAPI';
// import ErrorPage from '../pages/ErrorPage';
// import { FlashCardData } from '../interfaces/FlashCardData';
// import { ApiMessage } from '../interfaces/ApiMessage';
import auth from "../utils/auth";
import { FlashCardData } from "../interfaces/FlashCardData";
import Flashcardlist from "../components/Flashcardlist";

const Home: React.FC = () => {
  const [flashcards, setFlashcards] = useState<FlashCardData[]>([]);

  const navigate = useNavigate();

  const getCards = async () => {

    const flashcardsData = await getFlashcards()
    setFlashcards(flashcardsData);
    console.log(flashcardsData);
  }

  useEffect(() => {
    if (!auth.loggedIn()) {
      navigate('/login');
    } else {
      //user is loggedin fetch data to display
      getCards();
    }
  }, []);

  const removeCard = async(id:number) => {
    const newData = flashcards.filter(obj => obj.id !== id) 
    setFlashcards(newData)
    //call delete card api here
    await deleteFlashcard(id)
  }

  return (
    <div className="home-container">
      <h1>Welcome to DeckedOut</h1>
      <p>Your personal study companion</p>
      <div className="home-actions">
        <Link to="/create" className="action-button">
          Create New Flashcards
        </Link>
        <div className="feature-grid row">
          <div className="feature-card col">
            <h3>Study</h3>
            <p>Practice with your flashcards</p>
          </div>
          <div className="feature-card col">
            <h3>Organize</h3>
            <p>Keep your study materials organized</p>
          </div>
          <div className="feature-card col">
            <h3>Track Progress</h3>
            <p>Monitor your learning journey</p>
          </div>
          <Flashcardlist flashcards={flashcards} removeCard = {removeCard}/>
        </div>
      </div>
    </div>
  );

  // const [error, setError] = useState(false);
  // const [loginCheck, setLoginCheck] = useState(false);

  // const checkLogin = () => {
  //   if(auth.loggedIn()) {
  //     setLoginCheck(true);
  //   }
  // };

  // const fetchTickets = async () => {
  //   try {
  //     const data = await retrieveTickets();
  //     setTickets(data);
  //   } catch (err) {
  //     console.error('Failed to retrieve tickets:', err);
  //     setError(true);
  //   }
  // };

  // const deleteIndvTicket = async (ticketId: number) : Promise<ApiMessage> => {
  //   try {
  //     const data = await deleteTicket(ticketId);
  //     fetchTickets();
  //     return data;
  //   } catch (err) {
  //     return Promise.reject(err);
  //   }
  // }

  //  useEffect(() => {
  //   if(loginCheck) {
  //     fetchTickets();
  // }, [loginCheck]);

  // if (error) {
  //   return <ErrorPage />;
  // }

  // return (
  //   <>
  //   {
  //     !loginCheck ? (
  //       <div className='login-notice'>
  //         <h1>
  //           Login to create & view tickets
  //         </h1>
  //       </div>
  //     ) : (
  //         <div className='board'>
  //           <button type='button' id='create-ticket-link'>
  //             <Link to='/create' >New Ticket</Link>
  //           </button>
  //           <div className='board-display'>

  //                 <p>Hello World</p>
  //               );

  //           </div>
  //         </div>
  //       )
  //   }
  //   </>
  // );
};

export default Home;
