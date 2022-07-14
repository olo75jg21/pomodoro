import React, { useContext } from 'react';
import { Timer } from './Timer';

import { Settings } from './Settings';
import { ISettings, SettingsContext } from './SettingsContext';

export const Pomodoro = (): JSX.Element => {
  const settingsInfo = useContext<ISettings>(SettingsContext);

  return (
    <div className='container center pomodoro-w-sm' >
      {settingsInfo.showSettings ? <Settings /> : <Timer />}
    </div>
  );
};