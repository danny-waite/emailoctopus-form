import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form
        method="post"
        action="https://emailoctopus.com/lists/d2bf5d5b-7f30-11ea-a3d0-06b4694bee2a/members/embedded/1.3s/add"
        data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
      >
        <input name="field_0" id="field_0" type="email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
