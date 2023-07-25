import { Strategy, Transformation, Window } from "../assets";
import { Form, Header, Nav } from "../components";
import { CaseStudy, Services } from "../container";
import './App.scss'


const App = () => {

    const data = [
        {
            title: "Business Startegy Consultation",
            poster: Strategy,
        },
        {
            title: "Digital Transformation",
            poster: Transformation,
        },
        {
            title: "Co-operate Philantrophy",
            poster: Window,
        }
    ]

    return (
        <>
            <Nav />
            <Header/>
            <Services data={ data } />
            <CaseStudy />
            <Form />
        </>
    )
}

export default App;