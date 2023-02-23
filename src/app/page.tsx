
import InputForm from "../components/forms/InputForm.client"
// import Button from "./components/UI/Button/Button"

// import  Header from "./components/Header/header"



export interface AppState {
  items: number[],
  inputValue: string
}


export default function Home() {





  return (
    <div className="pl-12 ">
    {/* <Header/> */}
    <h1
    className="text-4xl font-bold text-center"
    >Starting Application</h1>

    <InputForm  />

  </div>
  )
}
