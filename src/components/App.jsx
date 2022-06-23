import React from "react";
// meanings of emoji
import Entry from "./Entry";

import emojipedia from "../emojipedia.js";

// function newEntry () {
//   return (
//     <Entry

//   )

// }

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        <Entry />
        <Entry />
        <Entry />
      </dl>
    </div>
  );
}

export default App;
