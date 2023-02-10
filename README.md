# CLARO FRONTEND TEST

Develop by **Emmanuel Cortes**

- You can see this proyect here: [ClaroFakeApp](https://ui-exam-aeromexico.vercel.app/)
- [Portfolio](https://wwww.ecortes.dev)
- [GitHub](https://github.com/manetoso)
- [LinkedIn](https://www.linkedin.com/in/emma-cortes)

---

## TABLE OF CONTENT

1. <a href="#instructions">INSTRUCTIONS</a>
3. <a href="#run-dev">HOW TO RUN THE APP IN DEVELOPMENT</a>
4. <a href="#run-tests">HOW TO RUN TESTS</a>

---

<h2 id="instructions">INSTRUCTIONS</h2>

### Prueba Técnica Claro Video

El objetivo de la prueba es crear un componente en react que contendrá la programación de una lista de canales (epg) a lo largo del día. El componente deberá estar limitado por el espacio disponible en el navegador pero mantener la posibilidad de ver cualquier horario de cualquier canal mediante scroll horizontal y vertical. Al hacer hover sobre cualquier programa se deberá mostrar el título de dicho programa y la información que se tenga sobre el mismo en la parte superior de la pantalla. Deben existir marcas sobre el componente que indiquen en qué horario se transmitirá cada programa, estas marcas deben cambiar cuando se haga scroll horizontal pero deben permanecer fijas ante el scroll vertical.
El componente debe también tener un botón cerrar (X) en la esquina superior derecha.

La aplicación debe estar correctamente testeada.
El servicio desde el cual se deben obtener los datos es [url](https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=20210812200256&date_to=20210813200256&quantity=200)

Se debe considerar la performance del componente, tiempos de carga y responsividad al hacer scroll.
La aplicación debe iniciar como una pantalla en blanco con un botón “Mostrar EPG”. Al hacer click sobre el botón se deberá mostrar el componente creado en forma de modal sobre dicha página en blanco. Al hacer click sobre el botón cerrar del componente se debe cerrar el modal y regresar a la vista con el botón “Mostrar EPG”.

---

<h2 id="run-dev">HOW TO RUN THE APP IN DEVELOPMENT</h2>

If you wonder how to run the app in development environment, simply install the npm modules with npm, pnpm or yarn and then execute the next command:
```
	npm run dev
```
or
```
	yarn dev
```

---

<h2 id="run-tests">HOW TO RUN TESTS</h2>

The tests where develop with [Jest](https://jestjs.io/) configured to run with [vite](https://vitejs.dev/).

1. Should be on the proyect folder on a terminal.
2. Execute the command:
```
	npm run test
```
or
```
	yarn test
```

By this moment Jest will promp their cli, the keys that can tape are:

1. <mark>f</mark> to run only failde tests.
2. <mark>o</mark> to only run tests related to changed files.
3. <mark>p</mark> to filter by test filename regex patter.
4. <mark>t</mark> to filter by test name regex patter.
5. <mark>q</mark> to quit watch mode.
6. <mark>Enter</mark> to trigger a test run.

There is a total of **5** test files, **1** for hooks and **4** for components. I am not that familiar with tests therefore there is a total of **13** tests. You can see the name of the files as a list pressing the <mark>p</mark> tap so you can be able to see the description of each test in that file when executing it.
