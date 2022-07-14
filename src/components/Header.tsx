import React, { useContext } from 'react';

import { SettingsButton } from './SettingsButton';
import { ISettings, SettingsContext } from './SettingsContext';

export const Header = (): JSX.Element => {
  const settingsInfo = useContext<ISettings>(SettingsContext);

  return (
    <div className='header'>
      <div>
        <h1 className='header-first'>Pomo</h1>
        <div className='clock-container'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 clock-icon" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className='header-first'>Doro</h1>
      </div>
      <div>
        <SettingsButton
          onClick={() => settingsInfo.showSettings ? settingsInfo.setShowSettings(false) : settingsInfo.setShowSettings(true)}
        />
      </div>
    </div>
  );
};