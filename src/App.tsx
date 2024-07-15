import "./App.css";
import { Footer } from './layout/footer/Footer';
import { Header } from "./layout/header/Header";
import { Education } from './layout/section/education/Education';
import { Expertise } from "./layout/section/expertise/Expertise";
import { Form } from './layout/section/form/Form';
import { Main } from "./layout/section/main/Main";
import { Skills } from "./layout/section/skill/Skills";
import { Testemony } from './layout/section/testemony/Testemony';
import { Works } from "./layout/section/works/Works";

function App() {
return (
    <div className='App'>
    <Header />
    <Main />
    <Skills />
    <Expertise />
    <Works />
    <Testemony />
    <Education />
    <Form/>
    <Footer/>
    </div>
);
}
export default App;
