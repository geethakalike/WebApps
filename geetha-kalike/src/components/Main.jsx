
import React, { useContext } from 'react';

import { StoreContext } from '../store';

import Card from './Card';

function Main(props) {
    const { store, setStore } = useContext(StoreContext);
    return (
        <div className="App">
            <div className="container">
                <div className="cards">
                    {store.slokhaList.map((item, index) => {
                        return (
                            <Card
                                key={`card-${index}`}
                                data={item}
                                history={props.history}
                                setStore={setStore}
                            />
                        );
                    })}
                </div>
                
            </div>
        </div>
    );
}

export default Main;
