const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Usuario: {},
			Medicos: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getMedicos: () => {
				const store = getStore();
				fetch("https://3000-bairon00-repobackproyec-0b9v4w4c9ys.ws-us72.gitpod.io/medicos")
					.then(response => response.json())
					.then(result => setStore({ Medicos: result }))
					.catch(error => console.log('error', error));

			},

			verificacion: (email, password) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					"email": email,
					"password": password
				});

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: raw,
					redirect: 'follow'
				};

				fetch("https://3000-bairon00-repobackproyec-0b9v4w4c9ys.ws-us72.gitpod.io/login", requestOptions)
					.then(response => response.json())
					.then(result => {
						localStorage.setItem("Token", result.token)
						if (localStorage.getItem("Token")) {
							window.location.href = "/perfilusuario"
						}
						else {
							alert("datos incorrectos")
						}


					})
					.catch(error => console.log('error', error));


			},
			usuario: () => {
				var myHeaders = new Headers();
				myHeaders.append("Authorization", "Bearer " + localStorage.getItem("Token"));

				var requestOptions = {
					method: 'GET',
					headers: myHeaders,
					redirect: 'follow'
				};

				fetch("https://3000-bairon00-repobackproyec-0b9v4w4c9ys.ws-us72.gitpod.io/perfil", requestOptions)
					.then(response => response.json())
					.then(result => {
						if (result.user) {
							setStore({ Usuario: result })
						} else {
							localStorage.removeItem("Token")
							window.location.href = "/"

						}

					})
					.catch(error => console.log('error', error));
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			aa: (history) => {
				setStore({ Usuario: {} })
				localStorage.removeItem("Token")
				history.push("/")

			},

			cerrar: () => {
				const store = getStore();
				localStorage.clear()
				setStore({ Usuario: { ...store.Usuario, is_active: false } })
				console.log(store.Usuario.active)




			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
