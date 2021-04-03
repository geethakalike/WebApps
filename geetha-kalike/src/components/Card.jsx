import React from 'react';
const images = require.context('../images', true);

const generatePipeLine = (index) => {
    let i = index + 1;
    if (i / 2 === 1) {
        return '|';
    } else if (i / 2 === 2) {
        return '||';
    }
};

function Card(props) {
    const { imageName, title, slokhas = [], id = 1 } = props.data;

    let dynamicImage = images(`./${imageName}`);
    return (
        <div
            className="card"
            onClick={() => {
                props.setStore({ type: 'SELECT_SLOKHA', payload: props.data });
                props.history.push('/slokha/');
            }}
        >
            <div className="card-header">
                <img
                    className="s-avatar"
                    src={dynamicImage.default}
                    alt="Image"
                />
            </div>
            <div className="card-body">
                <div>
                    <div className="s-title">
                        <div className="title">{title}</div>
                    </div>

                    <div className="description">
                        {slokhas.map((item, index) => (
                            <div key={index}>
                                <span>{item}</span>
                                {/* {generatePipeLine(index)} */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="card-footer"></div>
        </div>
    );
}

export default Card;
