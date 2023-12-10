<template>
  <div class="aside">
    <div class="menu" >
      <ul>
        <li><router-link to="/client">Client</router-link></li>
        <li><router-link to="/interlocuteur">Interlocuteur</router-link></li>
        <li><router-link to="/offres-commerciales">Les offres commerciales</router-link></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.aside {
  background-color: #2d3748;
  color: #e2e8f0;
  padding: 20px;
  height: 89vh;
  width: 250px;
  display: flex;
  flex-direction: column;
}

.menu {
  margin-top: 20px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 15px; 
    padding:5px;
    border-radius:5px;
    transition:  0.3s ease; 
  }

  a {
    padding:10px;
    text-decoration: none;
    color: #cbd5e0;
    font-size: 1rem;
    transition:  0.3s ease; 
  }

  li:hover{
    background:white;
  }
   li:hover a{
    color:black;
  }
}
</style>
