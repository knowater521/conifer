import { createContext } from 'react';

export const AccessContext = createContext({
  canAdmin: false
});

export const AppContext = createContext({
  isAnon: false,
  isEmbed: false,
  isMobile: false
});

export const ControllerContext = createContext({
  canAdmin: false,
  currMode: '',
  coll: '',
  rec: '',
  user: ''
});
