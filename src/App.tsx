import './App.css'
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";
import {useState} from "react";

function App() {
    const [currentStep,setCurrentStep] = useState(0);
    return (
      <>
          <Header currentStep = {currentStep}  handleStepChange={setCurrentStep} />
          <Body currentStep = {currentStep} handleStepChange = {setCurrentStep}/>
      </>
    )
}

export default App
