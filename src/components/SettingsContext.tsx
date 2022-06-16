import React from 'react';

export interface ISettings {
  showSettings: boolean;
  workMinutes: number;
  breakMinutes: number;
  setShowSettings: (value: boolean) => void;
  setWorkMinutes: (num: number) => void;
  setBreakMinutes: (num: number) => void;
}

export const defaultISettings: ISettings = {
  showSettings: false,
  workMinutes: 45,
  breakMinutes: 15,
  setShowSettings: () => null,
  setWorkMinutes: () => null,
  setBreakMinutes: () => null
}

export const SettingsContext = React.createContext<ISettings>(defaultISettings);