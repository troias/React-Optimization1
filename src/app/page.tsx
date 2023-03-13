// import InputForm from "../components/forms/InputForm.client";
import Header from "../components/header/header.client";
import Story from "@/components/story/story.client";
import Hero from "@/components/hero/hero.client";

export default function Home() {
  return (
    <div className=" ">
      <Header />
      <div className="min-h-screen bg-white p-">
        {/* <Story /> */}
        {/* <InputForm />  */}
        <Hero />
      </div>
    </div>
  );
}
