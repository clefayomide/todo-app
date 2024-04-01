import { useEffect } from "react";
import EntryComponent from "./components/EntryComponent";
import { Todo } from "./api";

function App() {
	const storageData = localStorage.getItem("id");

	useEffect(() => {
		if (!storageData) {
			const name = prompt("What is your name");
			const todo = new Todo();
			todo
				.createUser({ name: name })
				.then((response) => {
					const { data: { id = "" } = {} } = response ?? {};
					localStorage.setItem("id", id);
				})
				.catch((error) => console.log(error));
		}
	}, []);
	return <EntryComponent />;
}

export default App;
