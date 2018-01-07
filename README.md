# React and React Router
### Describe the term Single Page Application and why it is relevant for modern web-applications
SPAs er når du dynamisk ændrer siden i stedet for at hente en helt ny side. Det gør siden meget mere responsiv for brugeren. Desuden fjerner den noget af arbejdet fra backenden, hvor vi før i tiden legede med servletter og jsp for at flytte rundt på state, sider, data osv.
### Describe fundamental topics in React, like the Virtual Dom, JSX, Rendering, Components, Props, State, Life Cycle etc.
* Virtual DOM, update, delete, add og read i DOM’en. Fx i stedet for at genbygge en hel liste, når man fx adder en ting, så vil man i react kunne opdate et enkelt element i den liste. Det er grunden til at den hele tiden brokker sig over mangel på en key, når man fx laver et table med rows.
* JSX gør det muligt at bruge noget der minder meget om html syntaxer.
* Render metoden i et react component er hvad der ”gengives” til brugeren.
* Components: er små genbrugelige stykker af kode. 
* Props: Er noget man sender med ind til et component. Props er in-mutable/readonly.
* State: Staten holder styr på data som ændres, det kunne fx være et navn som brugeren skriver ind.
* Lifecycles: metoder/funktioner der kan køres på bestemte tidspunkter i componentets levetid, fx: ComponentWillMount, ComponentDidMount, ComponontWillUnmount...
### Explain about Components and Routing in React
Routing gør det muligt at efterligne ”normale” hjemmesider, hvor du har ”links” til forskellige componenter. URL’en ændres også, så det er muligt at for brugeren at skrive lige en bestemt url ind og få en bestemt side/component.
### Explain the concept CORS, and why it is (often) relevant for Single Page Applications
CORS = Cross-Origin Resource Sharing. I moderne BROWSERE er det som standard ”forbudt” at lave AJAX kald, eller fx fetch, til andre steder en det samme origin. For at komme uden om dette, så skal fx et rest endpoint sende ACAO og ACOM header tilbage, som fortæller browseren, at det det helt i orden. ACAO = Access-Control-Allow-Origin = url eller *. ACOM = Access-Control-Allow-Methods: GET PUT POST DELETE…
### react-router-exam: ReactJS -> 5a & 5b
### react-router-endpoint: JPA -> 5b
Dependencies for at JPA virker:<br>
mysql-connector-java, version 5.1.44, skrev det ind i hånden<br>
com.google.code.gson<br>
org.glassfish.jersey.bundles
