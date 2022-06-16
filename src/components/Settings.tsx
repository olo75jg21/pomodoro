import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import { ISettings, SettingsContext } from './SettingsContext';
import { BackButton } from './BackButton';

import NumericInput from 'react-numeric-input';

export const Settings = (): JSX.Element => {
  const settingsInfo = useContext<ISettings>(SettingsContext);

  return (
    <div className='settings-container'>
      <div className='numerics-container'>
        <div className='numeric-container'>
          <label className='settings-label'>Work: {settingsInfo.workMinutes}:00</label>
          <NumericInput
            min={1}
            max={120}
            value={settingsInfo.workMinutes}
            onChange={(value) => settingsInfo.setWorkMinutes(Number(value))}
          />
        </div>

        <div className='numeric-container'>
          <label className='settings-label'>Break: {settingsInfo.breakMinutes}:00</label>
          <NumericInput
            min={1}
            max={60}
            value={settingsInfo.breakMinutes}
            onChange={(value) => settingsInfo.setBreakMinutes(Number(value))}
          />
        </div>

      </div>

      <BackButton
        onClick={() => settingsInfo.setShowSettings(false)}
      />
    </div>
  );
};