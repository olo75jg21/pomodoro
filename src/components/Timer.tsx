import React, { useContext, useState, useEffect, useRef } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import { StartButton } from './StartButton';
import { StopButton } from './StopButton';
import { SettingsButton } from './SettingsButton';
import { ISettings, SettingsContext } from './SettingsContext';

const red = '#f54e4e';
const green = '#4aec8c'

export const Timer = (): JSX.Element => {
  const settingsInfo = useContext<ISettings>(SettingsContext);

  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [mode, setMode] = useState<string>('work');
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const initTimer = () => {
    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);
  }

  const switchMode = () => {
    const nextMode = modeRef.current === 'work' ? 'break' : 'work';

    const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60);
    setMode(nextMode);
    modeRef.current = nextMode;

    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {
    initTimer();

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }

      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds: number | string = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds.toString();

  return (
    <div>
      <CircularProgressbar
        value={percentage}
        text={`${minutes}:${seconds}`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: mode === 'work' ? red : green,
          trailColor: 'rgba(255,255,255,.2)'
        })}
      />
      <div className='center margin-top-sm'>
        {isPaused
          ? <StartButton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
          : <StopButton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />
        }
      </div>
    </div>
  );
};