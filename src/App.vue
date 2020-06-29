<template>
  <div id="app">
    <div id="nav">
      <router-link to="/consulta">Consulta</router-link> | 
      <router-link to="/informacoes">Informações</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;  
  color: aliceblue;  
  font-size: 45px;
}

#nav a {
  font-weight: bold;
  color: #d6d6d6;
  text-decoration: none;
  font-size: 40px;
}

#nav a.router-link-exact-active {
  color: #42b983;
  border-bottom-style: solid;  
  border-radius: 4px; 
}
</style>
