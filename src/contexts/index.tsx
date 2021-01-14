import React, {createContext, ReactNode} from 'react';

import NotiStore from '../stores/NotiStore';

export const StoresContext = createContext<NotiStore | null>(null);

export const StoreProvider = ({children}: {children: ReactNode}) => {
  const notiStore = new NotiStore();
  return <StoresContext.Provider value={notiStore}>{children}</StoresContext.Provider>;
};
