const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      Usuario: {},
      Medicos: [],

      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      getMedicos: () => {
        const store = getStore();
        fetch(
          "https://3000-bairon00-repobackproyec-0b9v4w4c9ys.ws-us72.gitpod.io/medicos"
        )
          .then((response) => response.json())
          .then((result) => setStore({ Medicos: result }))
          .catch((error) => console.log("error", error));
      },

      verificacion: (email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3000-bairon00-repobackproyec-0b9v4w4c9ys.ws-us72.gitpod.io/login",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            localStorage.setItem("Token", result.token);
            if (localStorage.getItem("Token")) {
              window.location.href = "/perfilusuario";
            } else {
              alert("datos incorrectos");
            }
          })
          .catch((error) => console.log("error", error));
      },
      usuario: () => {
        var myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          "Bearer " + localStorage.getItem("Token")
        );

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow",
        };

        fetch(
          "https://3000-bairon00-repobackproyec-0b9v4w4c9ys.ws-us72.gitpod.io/perfil",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            if (result.user) {
              setStore({ Usuario: result });
            } else {
              localStorage.removeItem("Token");
              window.location.href = "/";
            }
          })
          .catch((error) => console.log("error", error));
      },
      registrarse: () => {
        e.preventDefault();
        const store = getStore();
        if (store.password !== store.confirmedPassword) {
          setStore({
            error: "Los datos son incorrectos",
          });
          return;
        }
        if (
          !store.name ||
          !store.last_name ||
          !store.email ||
          !store.prevision ||
          !store.password
        ) {
          setStore({
            error: "Debe completar todos los campos",
          });
          return;
        }

        let formData = new FormData();
        formData.append("name", store.name);
        formData.append("last_name", store.last_name);
        formData.append("email", store.email);
        formData.append("prevision", store.prevision);
        formData.append("password", store.password);
        fetch(
          "https://3000-bairon00-repobackproyec-yv9484774m8.ws-us72.gitpod.io/register",
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      cerrar: () => {
        const store = getStore();
        setStore({ Usuario: { ...store.Usuario, is_active: false } });
        console.log(store.Usuario.active);
        localStorage.deleteItem("Token");
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
      },
    },
  };
};

export default getState;
