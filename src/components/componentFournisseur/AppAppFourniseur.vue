<template>
  <div class="container">
    <div class="overflow-x-auto shadow-md containere p-4">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
       
          <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
        </div>
      </div>
      <table class="w-full table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2"></th>
            <th class="px-4 py-2">Raison Sociale</th>
            <th class="px-4 py-2">Forme juridique</th>
            <th class="px-4 py-2">Ville</th>
            <th class="px-4 py-2">Code Postal</th>
            <th class="px-4 py-2">Pays</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">ICE</th>
            <th class="px-4 py-2">Téléphone</th>
            <th class="px-4 py-2">Activité</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="supplier in displayedSuppliers" :key="supplier.id">
            <td class="px-4 py-2">
              <input type="checkbox" v-model="supplier.selected" />
            </td>
            <td class="px-4 py-2">{{ supplier.raisonSociale }}</td>
            <td class="px-4 py-2">{{ supplier.formeJuridique }}</td>
            <td class="px-4 py-2">{{ supplier.ville }}</td>
            <td class="px-4 py-2">{{ supplier.codePostal }}</td>
            <td class="px-4 py-2">{{ supplier.pays }}</td>
            <td class="px-4 py-2">{{ supplier.email }}</td>
            <td class="px-4 py-2">{{ supplier.ice }}</td>
            <td class="px-4 py-2">{{ supplier.telephone }}</td>
            <td class="px-4 py-2">{{ supplier.activite }}</td>
            <td class="px-4 flex gap-2 py-2">
              <button class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'pen-nib']" /></button>
              <button class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'trash']" /></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-between items-center mt-4">
      <div>
        <label for="showEntries" class="mr-2">Afficher</label>
        <select v-model="entriesToShow" @change="updatePage" id="showEntries" class="border border-gray-300 rounded p-2 focus:outline-none focus:shadow-outline">
          <option>5</option>
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
        <span class="ml-2">entries</span>
      </div>

      <div>
        <button @click="prevPage" class="bg-gray-300 text-gray-700 px-4 py-2 rounded mx-2 focus:outline-none focus:shadow-outline">Prev</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" class="bg-gray-300 text-gray-700 px-4 py-2 rounded mx-2 focus:outline-none focus:shadow-outline">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      suppliers: [
  {
    id: 1,
    raisonSociale: "soufiane 1",
    formeJuridique: "SARL",
    ville: "Casablanca",
    codePostal: "20000",
    pays: "Morocco",
    email: "soufiane1@example.com",
    ice: "ICE001",
    telephone: "0655555555",
    activite: "Technology",
    selected: false,
  },
  {
    id: 2,
    raisonSociale: "soufiane 2",
    formeJuridique: "SA",
    ville: "Rabat",
    codePostal: "10000",
    pays: "Morocco",
    email: "soufiane2@example.com",
    ice: "ICE002",
    telephone: "0666666666",
    activite: "Electronics",
    selected: false,
  },
  {
    id: 3,
    raisonSociale: "soufiane 3",
    formeJuridique: "SARL",
    ville: "Marrakech",
    codePostal: "40000",
    pays: "Morocco",
    email: "soufiane3@example.com",
    ice: "ICE003",
    telephone: "0677777777",
    activite: "Manufacturing",
    selected: false,
  },
  {
    id: 4,
    raisonSociale: "soufiane 4",
    formeJuridique: "SA",
    ville: "Agadir",
    codePostal: "80000",
    pays: "Morocco",
    email: "soufiane4@example.com",
    ice: "ICE004",
    telephone: "0688888888",
    activite: "Logistics",
    selected: false,
  },
  {
    id: 5,
    raisonSociale: "soufiane 5",
    formeJuridique: "SARL",
    ville: "Fez",
    codePostal: "30000",
    pays: "Morocco",
    email: "soufiane5@example.com",
    ice: "ICE005",
    telephone: "0699999999",
    activite: "Consulting",
    selected: false,
  },
 
],

      searchQuery: "",
      entriesToShow: 5,
      currentPage: 1,
    };
  },
  computed: {
    displayedSuppliers() {
      let filteredSuppliers = this.suppliers;
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filteredSuppliers = filteredSuppliers.filter(supplier =>
          Object.values(supplier).some(value => value && value.toString().toLowerCase().includes(query))
        );
      }

      const start = (this.currentPage - 1) * this.entriesToShow;
      const end = start + this.entriesToShow;
      return filteredSuppliers.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.suppliers.length / this.entriesToShow);
    },
  },
  methods: {
    updatePage() {
      this.currentPage = 1;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 97%;
}
table{
  width:auto;
}
table tr {
  border-bottom: 1px solid #e2e8f0;
}
</style>
