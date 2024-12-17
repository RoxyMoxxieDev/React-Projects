import React from 'react';
import PatternPads from './PatternPads';
import Display from './Display';



const KeyTrigger = () => {
  const drumPads = [
    { keyTrigger: 'Q', sound: './sounds/sample-attic-dubstep-snare-217226.mp3', description: 'Dubstep Snare' },
    { keyTrigger: 'W', sound: './sounds/snare-hit-smash-sound-effect-240897.mp3', description: 'Smash Snare' },
    { keyTrigger: 'E', sound: './sounds/snare-112754.mp3', description: 'Snare' },
    { keyTrigger: 'A', sound: './sounds/hihat-6-45348.mp3', description: 'Hi-Hat' },
    { keyTrigger: 'S', sound: './sounds/hihat-7-45328.mp3', description: 'Hi-Hat + Reverb' },
    { keyTrigger: 'D', sound: './sounds/hihat-164695.mp3', description: 'Hi-Hat muddy' },
    { keyTrigger: 'Z', sound: './sounds/g-230-terror-kick-97251.mp3', description: "Terror Kick" },
    { keyTrigger: 'X', sound: './sounds/kick-hardstyle-sample-149280.mp3', description: 'Hardstyle Kick' },
    { keyTrigger: 'C', sound: './sounds/tribecore-kick-sample-9187.mp3', description: 'Tribecore Kick' }
  ];

  return (
    <div id="drum-machine">
      <Display />
      <div id="pads">
        {drumPads.map((pad) => (
          <PatternPads
            key={pad.keyTrigger}
            keyTrigger={pad.keyTrigger}
            sound={pad.sound}
            description={pad.description}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyTrigger;
