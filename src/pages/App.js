import { Digital, Philantrophy, Strategy } from "../assets";
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
            poster: Digital,
        },
        {
            title: "Co-operate Philantrophy",
            poster: Philantrophy,
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