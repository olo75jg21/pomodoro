import React, { useState } from 'react';

import '../App.css';

import { Pomodoro } from './Pomodoro';
import { Header } from './Header';
import { SettingsContext } from './SettingsContext';

import { defaultISettings } from './SettingsContext';

export const App = (): JSX.Element => {
  const [showSettings, setShowSettings] = useState<boolean>(defaultISettings.showSettings);
  const [workMinutes, setWorkMinutes] = useState<number>(defaultISettings.workMinutes);
  const [breakMinutes, setBreakMinutes] = useState<number>(defaultISettings.breakMinutes);

  return (
    <div>
      <SettingsContext.Provider value={{
        showSettings,
        workMinutes,
        breakMinutes,
        setShowSettings,
        setWorkMinutes,
        setBreakMinutes
      }}>
        <Header />
        <Pomodoro />
      </SettingsContext.Provider>
    </div>
  );
};