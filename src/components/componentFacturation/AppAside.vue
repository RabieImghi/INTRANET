

<template>
  <div class="aside" :style="{ width: asideWidth }">
    <div class="menu">
      <div class="toggle-button" @click="toggleAsideWidth">
        <font-awesome-icon :icon="['fas', 'chevron-left']" v-if="asideWidth === '250px'" />
        <font-awesome-icon :icon="['fas', 'chevron-right']" v-else />
      </div>
      <ul>
       <li>
          <router-link to="EnAttenteFActuration" exact active-class="active-link">
            <font-awesome-icon :icon="['fas', 'file']" /> <span v-if="asideWidth !== '70px'">En Attente Facturationt</span>
          </router-link>
        </li>
        <li>
          <router-link exact active-class="active-link" to="EmiseFacture">
            <font-awesome-icon :icon="['fas', 'file']" /> <span v-if="asideWidth !== '70px'">Facture Emise</span>
          </router-link>
        </li>
          <li>
          <router-link exact active-class="active-link" to="FactureEncaissee">
           <font-awesome-icon :icon="['fas', 'sack-dollar']" /> <span v-if="asideWidth !== '70px'">Facture Encaissée</span>
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
       this.asideWidth = this.asideWidth === '250px' ? '70px' : '250px';
    this.$emit('asideToggled', this.asideWidth === '70px');
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
.active-link {
  background: white;
  color: black;
  padding: 10px;
  border-radius: 5px;
}
li {
  margin-bottom: 15px;
 
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
