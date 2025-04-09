import React from "react";
import Main from "./components/Main";
import UseConUse from "./components/UseConUse";
export const UserContext = React.createContext();
export const mailContext = React.createContext();

const App = () => {
  return (
    <div className="App">
      {/* <Heaer /> */}
      {/* <Main /> */}

      {/* <UserContext.Provider value={"Jayendra Parmar"}>
        <mailContext.Provider value={"email@gmail.com"}>
          <UseConUse />
        </mailContext.Provider>
        {/* <CompC /> */}
      {/* </UserContext.Provider>  */}
      {/* */}

      <Main />
    </div>
  );
};

export default App;

// import React , {Component} from 'react'
// import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';

// class App extends Component {

//   render() {
//     return (
//           <div className="App">
//             {/* <Heaer /> */}
//             <Main />
//           </div>
//         );
//   }
// }

// export default App;
