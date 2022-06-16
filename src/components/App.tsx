import React, { useState } from 'react';

import '../App.css';

import { Pomodoro } from './Pomodoro';
import { SettingsContext } from './SettingsContext';

import { defaultISettings } from './SettingsContext';

export const App = (): JSX.Element => {
  const [showSettings, setShowSettings] = useState<boolean>(defaultISettings.showSettings);
  const [workMinutes, setWorkMinutes] = useState<number>(defaultISettings.workMinutes);
  const [breakMinutes, setBreakMinutes] = useState<number>(defaultISettings.breakMinutes);

  return (
    <div className='container center'>
      <SettingsContext.Provider value={{
        showSettings,
        workMinutes,
        breakMinutes,
        setShowSettings,
        setWorkMinutes,
        setBreakMinutes
      }}>
        <Pomodoro />
      </SettingsContext.Provider>
    </div>
  );
};