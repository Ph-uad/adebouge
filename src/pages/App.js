import { Form, Header, Nav } from "../components";
import { CaseStudy, Services } from "../container";
import './App.scss'


const App = () => {

    const data = [
        {
            title: "Business Startegy Consultation"
        },
        {
            title: "Digital Transformation"
        },
        {
            title: "Cooperate Philantrophy"
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