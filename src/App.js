import React from 'react'
import './App.css';
/**
 * START HERE
 * Good luck!
 */
function App() {
  return (
    <div className="App">
      <form data-testid='form' className='form-group'>
        <h1>Ticket</h1>
        {/* <label htmlFor='ticket'>Ticket Name:</label>
        <input data-testid='ticket-input' id='ticket' type='text'/>

        <label htmlFor='description'>Description:</label>
        <input data-testid='description-input' id='description'/>

        <label htmlFor='Date'>Date:</label>
        <input data-testid='date-input' id='date' type='text'/>

        <label htmlFor='startTime'>Start Time:</label>
        <input data-testid='startTime-input' id='startTime' type='text'/>

        <label htmlFor='endTime'>End Time:</label>
        <input data-testid='endTime-input' id='endTime' type='text'/> */}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
