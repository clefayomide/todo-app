export class Todo {
	createUser(data) {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await fetch("http://localhost:8000/todo/new-user", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (response.status >= 200 && response.status <= 299) {
					return resolve(response.json());
				}
				reject(new Error());
			} catch (error) {
				reject(error);
			}
		});
	}
	getAllTodo(data) {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await fetch(`http://localhost:8000/todo/${data}`);
				if (response.status >= 200 && response.status <= 299) {
					return resolve(response.json());
				}
				reject(new Error());
			} catch (error) {
				reject(error);
			}
		});
	}

	addTodo(data) {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await fetch("http://localhost:8000/todo/add-todo", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (response.status >= 200 && response.status <= 299) {
					return resolve(response.json());
				}
				reject(new Error());
			} catch (error) {
				reject(error);
			}
		});
	}

	updateTodo(todoId, data) {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await fetch(
					`http://localhost:8000/todo/update?todoId=${todoId}`,
					{
						method: "POST",
						body: JSON.stringify(data),
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				if (response.status >= 200 && response.status <= 299) {
					return resolve(response.json());
				}
				reject(new Error());
			} catch (error) {
				reject(error);
			}
		});
	}
	deleteTodo(todoId) {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await fetch("http://localhost:8000/todo/delete", {
					method: "POST",
					body: JSON.stringify({ todoId: todoId }),
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (response.status >= 200 && response.status <= 299) {
					return resolve(response.json());
				}
				reject(new Error());
			} catch (error) {
				reject(error);
			}
		});
	}
}
