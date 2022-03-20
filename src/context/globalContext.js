import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props)
{
    const [modalState, setModalState] = useState(true);

    const toggleModal = modal =>
    {
        if (modal === 'open')
            setModalState(true);
        else
            setModalState(false);
    }

    return (
        <GlobalContext.Provider value={{modalState, toggleModal}}>
            {props.children}
        </GlobalContext.Provider>
    )
}