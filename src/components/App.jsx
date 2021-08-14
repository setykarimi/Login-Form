import React from 'react';
import Login from './Login'
var userRegistered = false;



function App() {
    return <div className="container">
        <Login 
        isRegsiter = {userRegistered}
        />
    </div>
}

export default App;