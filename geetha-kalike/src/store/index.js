
import React, { createContext, useReducer } from 'react';

export const StoreContext = createContext();

const initialState = {
    theme: 'dark',
    slokhaList: [
        {
            id: 1,
            imageName: 'image1.jpeg',
            title: 'ಧ್ಯಾನ ಶ್ಲೋಕ',
            mp3_name: 'BG_Dhyana_Shlokha',
            json_name: 'BG_Dhyana_Shlokha',
            slokhas: [
                '',
                ''
                ,
            ],
        },
        {
            id: 2,
            imageName: 'image2.jpeg',
            title: 'ಅರ್ಜುನವಿಷಾದ ಯೋಗ',
            mp3_name: 'BG_Adhyaya_01',
            json_name: 'BG_Adhyaya_01',
            slokhas: [
                '',
                ''
                ,
            ],
        },
        {
            id: 3,
            imageName: 'image2.jpeg',
            title: 'ಸಾಂಖ್ಯ ಯೋಗ',
            mp3_name: 'BG_Adhyaya_01',
            json_name: 'BG_Adhyaya_01',
            slokhas: [
                '',
                ''
                ,
            ],
        },
        {
            id: 4,
            imageName: 'image1.jpeg',
            title: 'ಕರ್ಮ ಯೋಗ',
            mp3_name: 'BG_Adhyaya_01',
            json_name: 'BG_Adhyaya_01',
            slokhas: [
                '',
                ''
                ,
            ],
        },
        
    ],
    selectedSlokha: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_SLOKHA':
            return {
                ...state,
                selctedSlokha: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

function StoreContextProvider(props) {
    const [store, setStore] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ store, setStore }}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;
