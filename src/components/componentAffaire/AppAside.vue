<template>
  <div class="aside" :style="{ width: asideWidth }">
    <div class="menu">
      <div class="toggle-button" @click="toggleAsideWidth">
        <font-awesome-icon :icon="['fas', 'chevron-left']" v-if="asideWidth === '250px'" />
        <font-awesome-icon :icon="['fas', 'chevron-right']" v-else />
      </div>
      <ul>
       <li>
          <router-link to="ajouterClient">
            <font-awesome-icon :icon="['fas', 'plus']" /> <span v-if="asideWidth !== '80px'">Ajouter Client</span>
          </router-link>
        </li>
        <li>
          <router-link to="client">
            <font-awesome-icon :icon="['fas', 'user']" /> <span v-if="asideWidth !== '80px'">Client</span>
          </router-link>
        </li>
          <li>
          <router-link to="ajouterInterlocuteur">
            <font-awesome-icon :icon="['fas', 'plus']" /> <span v-if="asideWidth !== '80px'">Ajouter Interlocuteur</span>
          </router-link>
        </li>
        <li>
          <router-link to="interlocuteur">
            <font-awesome-icon :icon="['fas', 'users-line']" /> <span v-if="asideWidth !== '80px'">Interlocuteur</span>
          </router-link>
        </li>
          <li>
          <router-link to="ajouterOffres">
            <font-awesome-icon :icon="['fas', 'plus']" /> <span v-if="asideWidth !== '80px'">Ajouter Offres</span>
          </router-link>
        </li>
        <li>
          <router-link to="offresCommerciales">
            <font-awesome-icon :icon="['fas', 'briefcase']" /> <span v-if="asideWidth !== '80px'">Offres Commerciales</span>
          </router-link>
        </li>
       
      
      
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      asideWidth: '250px',
    };
  },
  methods: {
    toggleAsideWidth() {
      this.asideWidth = this.asideWidth === '250px' ? '80px' : '250px';
    },
  },
};
</script>

<style scoped>
.aside {
  background-color: #2d3748;
  color: #e2e8f0;
  padding: 20px;
  position: fixed;
  height: 100vh; 
  overflow-y: auto;
 
  left: 0;
  width: 20%;
  padding-right: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: -10px 0 25px rgba(0, 0, 0, 0.3);
}

.menu {
  margin-top: 20px;
}

.toggle-button {
  display:flex;
  justify-content:end;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  color: #cbd5e0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 5px;
  transition: 0.3s ease;
}

a {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: #cbd5e0;
  font-size: 1rem;
  transition: 0.3s ease;
}

li:hover {
  background: white;
}

li:hover a {
  color: black;
}
</style>
