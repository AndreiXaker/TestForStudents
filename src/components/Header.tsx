import {Steps} from "antd";
import Timer from "./Timer.tsx";
export interface HeaderProps {
    currentStep : number;
    handleStepChange: (step:number) => void;
}
export default function Header({currentStep,handleStepChange}  : HeaderProps) {

    return (
        <>
        <header className="flex items-center justify-between border-b border-gray-300 pb-4 p-6 ">
            <h1 className="text-3xl font-bold">Тестирование</h1>
            <Steps  type="navigation"
                    current={currentStep}
                    className="site-navigation-steps "
                    onChange={handleStepChange}

                    items={[
                        {
                            status: 'wait',
                            title: 'Step 1',
                        },
                        {
                            status: 'wait',
                            title: 'Step 2',
                        },
                        {
                            status: 'wait',
                            title: 'Step 3',
                        },
                        {
                            status: 'wait',
                            title: 'Step 4',
                        },
                        {
                            status : 'wait',
                            title : 'Step 5',
                        }
                    ]}></Steps>
               <Timer initialSeconds={120*8}/>
        </header>
        </>
)
}