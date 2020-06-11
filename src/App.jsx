import React, { useState } from "react";
import "./App.css";
import StepSequencer from "./StepSequencer";
import HandTrack from "./HandTrack";
import Synth from "./Synth";

import Pickup from "./components/Pickup";

function App() {
  const [isThereminEnabled, setIsThereminEnabled] = useState(false);
  const [position, setPosition] = useState();
  const handleHandPositionChange = (position) => {
    console.log("Detected position: ", position);
    setPosition(position);
  };
  return (
    <div className="App">
      <button onClick={() => setIsThereminEnabled(!isThereminEnabled)}>
        {isThereminEnabled ? "disable" : "enable"} theremin
      </button>
      {isThereminEnabled && (
        <HandTrack
          onPositionChange={handleHandPositionChange}
          shouldRenderPredictions
        />
      )}
      <Synth
        isPlaying={isThereminEnabled}
        frequency={position && position[1] > 0 ? position[1] : 0}
      />
      <StepSequencer />
      <Pickup />
    </div>
  );
}

export default App;
