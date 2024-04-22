import React from "react";


const wishes = [

    { text: 'Viajar', done: false },
    { text: 'Dormir', done: true },
    { text: 'Comer', done: true },

];
const App = () =>
    <div>
        <h1>
            My whistlist App
            <fieldset>
                <legend>New wish</legend>
                <input placeholder="Enter your wish" />
            </fieldset>
            <ul>
                {wishes.map(wish=><span>{wish.text}</span>)}
            </ul>
        </h1>
    </div>
export default App;