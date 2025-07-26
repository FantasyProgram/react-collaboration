import { jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
export default function Test(props) {
    const [name, setName] = useState(props.name);
    const [age, setAge] = useState(props.age);
    return (_jsxs(_Fragment, { children: [_jsxs("h1", { children: ["Hello , ", name, " "] }), _jsxs("h1", { children: ["You 're', ", age | 0, " years old "] })] }));
}
