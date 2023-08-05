import { Philantrophy } from "../assets";
import { Footer, Form, Header, Nav } from "../components";
import { CaseStudy, Services } from "../container";
import './App.scss'


const App = () => {

    const data = [
        {
            title: "Cooperate Philantrophy",
            poster: Philantrophy,
        }
    ]

    return (
        <>
            <Nav />
            <Header />
            <Services data={ data } />
            <CaseStudy />
            <Form />
            <Footer />
        </>
    )
}

export default App;