import {useContext} from 'react';
import {StoresContext} from '../contexts';

export const useNotiStore = () => useContext(StoresContext);
