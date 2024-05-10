import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext([])
function ToastProvider({children}) {
  const [toasters, setToasters]= React.useState([]);
  useEscapeKey(()=>setToasters([]));


  return(

  <ToastContext.Provider value={{toasters, setToasters}}>
    {children}
  </ToastContext.Provider>
  );
}

export default ToastProvider;
