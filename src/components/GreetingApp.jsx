import { useState } from "react";

const GreetingApp = () => {

    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
    const [error, setError] = useState('');

    // Handle input value
    const handleInputValue = (event) => {
        setName(event.target.value);
        setError('');
    }
    // console.log(name);

    // Handle Greeting message
    const handleGreeting = () => {
        if(name.trim() === '') {
            setError("Please Enter a valid Name.");
            setGreeting('');
        } else{
            setGreeting(`Hello, ${name}`);
            setError('');
            setName('');

        }
    }

  return (
    <>
     <div className="wrapper">
        <h1>Greeting App</h1>
        <div className="input-box">
            <input type="text" value={name} placeholder='Enter Your Name...' onChange={handleInputValue} />
            <button onClick={handleGreeting}>Greet Me</button>
        </div>
        {greeting && <h2>{greeting}</h2>}
        {error && <p style={{color: 'red',}}>{error}</p>}
     </div>
    </>
  )
}

export default GreetingApp;
