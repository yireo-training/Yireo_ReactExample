import React from 'react';

const HelloWorld = (props) => {
    return <div>Hello {props.name}</div>;
};

HelloWorld.defaultProps = {
    name: 'World'
};

export default HelloWorld;