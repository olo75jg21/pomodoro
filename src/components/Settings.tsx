import React, { useContext } from 'react';
import ReactSlider from 'react-slider';
import { ISettings, SettingsContext } from './SettingsContext';
import { BackButton } from './BackButton';

export const Settings = (): JSX.Element => {
  const settingsInfo = useContext<ISettings>(SettingsContext);

  return (
    <div className='settings-container'>
      <label className='settings-label'>Work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className='slider'
        thumbClassName='thumb'
        trackClassName='track'
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />

      <label className='settings-label margin-top-sm'>Break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className='slider green'
        thumbClassName='thumb'
        trackClassName='track'
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <BackButton
        onClick={() => settingsInfo.setShowSettings(false)}
      />
    </div>
  );
};