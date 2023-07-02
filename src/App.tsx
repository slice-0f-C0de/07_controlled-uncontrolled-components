import React from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
    return (
        <div className={"App"}>
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
            <Accordion titleValue={"Menu"} collapsed={false}/>
        </div>
    );
}

type TitlePropsType = {
    title: string
}

function Title(props: TitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
