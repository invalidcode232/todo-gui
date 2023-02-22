import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="flex justify-center w-full">
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">todo-gui</h1>

        <label className="text-xl inline-block mr-2">Add: </label>
        <input type="text" className="inline-block mr-2 border-5 border-black p-2" placeholder="Do some work.."></input>
        <button className="inline-block mr-2 py-2 px-3 bg-blue-400 rounded-md">Add</button>
      </div>
    </div>
  );
}

export default App;
