import './App.css'
import {Button} from "@/components/ui/button"
import BugReportForm from "@/pages/BugReportForm.tsx";
import { Toaster } from "@/components/ui/sonner"



function App() {


    return (
        <>
            <h1 className={"text-3xl font-bold text-center"}>Привіт! Як справи?</h1>
            <Button>Click me</Button>

            <BugReportForm/>

            <Toaster />

        </>
    )
}

export default App
