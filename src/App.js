import React from "react";
import Particles from "react-particles-js";
import Typewriter from "typewriter-effect";
import { particles } from "./constants";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Particles className={"particle-canvas"} params={particles} />
      <div className="text-wrapper">
        <span className="user-name">@aryani1</span>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi there!")
              .pauseFor(500)
              .deleteAll()
              .typeString("I'm Aryan.")
              .pauseFor(100)
              .deleteChars(6)
              .typeString("a software engineer based in Oslo.")
              .pauseFor(100)
              .deleteAll()
              .typeString("Nice to meet you!")
              .pauseFor(2000)
              .start();
          }}
          options={{
            loop: true,
            delay: 20,
          }}
        />
      </div>
    </div>
  );
};

export default App;
