import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setDisplay } from '../store/store';

const Recorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedSequence, setRecordedSequence] = useState([]);
  const dispatch = useDispatch();

  const toggleRecording = useCallback(() => {
    setIsRecording((prev) => !prev);
    if (!isRecording) {
      setRecordedSequence([]);
      dispatch(setDisplay('Recording started...'));
    } else {
      dispatch(setDisplay('Recording stopped.'));
    }
  }, [isRecording, dispatch]);

  const playRecording = useCallback(() => {
    if (recordedSequence.length === 0) {
      dispatch(setDisplay('No recording to play.'));
      return;
    }

    dispatch(setDisplay('Playing recording...'));
    let delay = 0;
    recordedSequence.forEach((key) => {
      setTimeout(() => {
        const button = document.getElementById(key);
        if (button) {
          button.click();
        }
      }, delay);
      delay += 500;
    });
  }, [recordedSequence, dispatch]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toUpperCase();

      switch (key) {
        case 'R':
          toggleRecording();
          break;
        case 'P':
          playRecording();
          break;
        case 'L':
          setRecordedSequence([]);
          dispatch(setDisplay('Recording cleared.'));
          break;
        default:
          if (isRecording) {
            setRecordedSequence((prev) => [...prev, key]);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isRecording, recordedSequence, toggleRecording, playRecording, dispatch]);

  return (
    <div className="record">
      <button onClick={toggleRecording}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <button onClick={playRecording}>Play Recording</button>
      <p>Hotkeys: <strong>R</strong> to Record/Stop, <strong>P</strong> to Play</p>
    </div>
  );
};

export default Recorder;

