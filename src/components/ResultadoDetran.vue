<template>
  <div class="resultado">
      <ul v-for="dados in dadosVeiculo" :key="dados.PLACA">
      <li>PLACA: {{dados.PLACA}}</li>
      <li>LOCALIDADE: {{dados.LOCALIDADE}}</li>
      <li>DATAHORA: {{dados.DADOS_INFRACAO.DATAHORA}}</li>
      <li>TIPO:  {{dados.DADOS_INFRACAO.TIPO}}</li>
      <li v-if="dados.DADOS_INFRACAO.VALOR">VALOR:  {{dados.DADOS_INFRACAO.VALOR}}</li>
      <li v-if="dados.DADOS_INFRACAO.VEL_MAXIMA">VEL MAXIMA:  {{dados.DADOS_INFRACAO.VEL_MAXIMA}}</li>      
  </ul>
  <button id="btnResultado" @click="pagInicial">Nova Consulta</button> 
  </div>
</template>

<script>
export default {
    computed: {
        dadosVeiculo() {
            return this.$store.state.dadosVeiculo
        }
    }, methods: {
        pagInicial: function () {
            this.$router.push("/consulta")
        }
    }    
}
</script>

<style>
ul{  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 25px;
  color: #d6d6d6;   
  font-weight: bold;
  margin-top: 30px;  
  align-items: center;
  display: grid;
  justify-content: center;    
  }
  
  #btnResultado{
  width: 100px;
  height: 60px;
  font-weight: bold;
  color: 21503b;
  text-decoration: none;
  font-size: 20px;  
  margin-right: 360px;  
  }
</style>