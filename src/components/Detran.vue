<template>
  <div class="pesquisa">
      <h1>Bem vindo ao site de busca do DETRAN falso.<br>
      Insira no campo abaixo a placa para realizar a consulta</h1>
      <input type="text" pattern="[^A-Za-z0-9]+" placeholder="AAA-0000" v-model="placa">
      <button @click="consultaPlaca">Realizar Consulta</button>      
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data: function () {
    return {
      placa: ''
    }
  },
  mounted() {
    axios.get("multas.json").then(multas => {this.$store.state.multas = multas.data})
  },
   methods: {
     consultaPlaca: function () {
       this.$store.state.dadosVeiculo = this.$store.state.multas.filter(multa => multa.PLACA == this.placa)
       this.$router.push("/informacoes")
     }
  }
}
</script>

<style>

.pesquisa {  
  width: 80%;
  height: 200px;   
  margin: auto;  
  margin-top: 20px;
  padding: 50px;
  align-items: center;
  display: grid;
  justify-content: center;  
}

input {
  width: 170px;
  height: 50px;  
  margin-top: 30px;
  margin-left: 250px;
  border-radius: 10px;
  font-size: 37px;
  align-items: center;
}

h1 {  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 25px;
  color: #d6d6d6;   
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 1px;
  }

  button {    
  width: 100px;
  height: 60px;
  font-weight: bold;
  color: #21503b;
  text-decoration: none;
  font-size: 20px;  
  margin-top: 30px;
  margin-left: 285px;
  }

  button:hover {
  color: #42b983;  
  border-radius: 10px; 
  background-color: #21503b;
}
</style>