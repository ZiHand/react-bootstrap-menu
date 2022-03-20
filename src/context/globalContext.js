import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props)
{
    const [modalState, setModalState] = useState(true);
    const [mealState, setMealState] = useState([]);

    const toggleModal = (modal, meal) =>
    {
        if (modal === 'open')
            setModalState(true);
        else
            setModalState(false);

        setMealState(meal);
    }

    return (
        <GlobalContext.Provider value={{mealState, modalState, toggleModal}}>
            {props.children}
        </GlobalContext.Provider>
    )
}