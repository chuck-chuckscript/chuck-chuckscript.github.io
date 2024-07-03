
import './App.scss'
import {Header} from "@layouts/Header.tsx";
import {Main} from "@layouts/Main.tsx";
import {Footer} from "@layouts/Footer.tsx";
import {Skills} from "@components/Skills/Skills.tsx";
import {WorkExperience} from "@components/Experience/WorkExperience.tsx";
import {TestWorkSpace} from "@components/TestWorkSpace/TestWorkSpace.tsx";
import {AboutDev} from "@components/AboutDev/AboutDev.tsx";


function App() {


  return (
    <div className='wrapper'>
        <Header/>
        <Main>
            <AboutDev/>
            <WorkExperience/>
            <Skills/>
            <TestWorkSpace/>
        </Main>
        <Footer></Footer>
    </div>
  )
}

export default App
