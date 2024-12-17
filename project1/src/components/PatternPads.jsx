import * as Tone from 'tone';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDisplay } from '../store/store';

const PatternPads = ({ keyTrigger, sound, description }) => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false); // Track active state
  const [audioFile, setAudioFile] = useState(null); // Variable to store uploaded file

  const playSound = () => {
    const player = new Tone.Player(audioFile || sound).toDestination(); // Uses uploaded file or default sound
    player.autostart = true;
    dispatch(setDisplay(description));
    setIsActive(true);
    setTimeout(() => setIsActive(false), 150);
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === keyTrigger) {
      playSound();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setAudioFile(fileURL); // Save the URL of the uploaded file
      dispatch(setDisplay(`Loaded: ${file.name}`));
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div
      className={`drum-pad ${isActive ? 'active' : ''}`}
      id={description}
      onClick={playSound}
    >
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={sound}></audio>

      {/* File Upload Section */}
      <div className="file-upload">
        <label htmlFor={`file-upload-${keyTrigger}`} className="upload-label">
          Upload
        </label>
        <input
          id={`file-upload-${keyTrigger}`}
          type="file"
          accept="audio/*"
          onClick={(e) => e.stopPropagation()} // Prevent click propagation
          onChange={handleFileChange} // Handle file change
        />
      </div>
    </div>
  );
};

export default PatternPads;

