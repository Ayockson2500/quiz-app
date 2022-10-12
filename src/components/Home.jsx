import React from 'react';
import "../css/homestyle.css";
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className='text-center mb-5'>
        <h1>Take A Quiz</h1>
      </div>
      <div className='text-center'>
      <Link to="QuestionAndAnswersDisplay" className="ui btn btn-secondary">Start</Link>
      </div>
    </div>
  )
}

export default Home