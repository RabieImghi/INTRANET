<template>
  <div class="containerr">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center">
        <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
      </div>
    </div>

    <div class="overflow-x-auto shadow-md">
      <table class="w-full table-auto" style="table-layout: auto; max-width: 100%;">
        <thead>
          <tr>
            <th class="px-4 py-2"></th>
            <th class="px-4 py-2">Nom</th>
            <th class="px-4 py-2">Prénom</th>
            <th class="px-4 py-2">E-mail</th>
            <th class="px-4 py-2">Fonction</th>
            <th class="px-4 py-2">Téléphone</th>
            <th class="px-4 py-2">Raison Sociale</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in displayedClients" :key="client.id">
            <td class="px-4 py-2">
              <input type="checkbox" v-model="client.selected" />
            </td>
            <td class="px-4 py-2">{{ client.nom }}</td>
            <td class="px-4 py-2">{{ client.prenom }}</td>
            <td class="px-4 py-2">{{ client.email }}</td>
            <td class="px-4 py-2">{{ client.fonction }}</td>
            <td class="px-4 py-2">{{ client.telephone }}</td>
            <td class="px-4 py-2">{{ client.raisonSociale }}</td>
            <td class="px-4 flex gap-2 py-2">
              <button class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                <font-awesome-icon :icon="['fas', 'pen-nib']" />
              </button>
              <button class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline">
                <font-awesome-icon :icon="['fas', 'trash']" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-between items-center mt-4">
      <div>
        <label for="showEntries" class="mr-2">afficher</label>
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
      clients: [
        {
          id: 1,
          nom: "Soufiane",
          prenom: "boushaba",
          email: "soufiane1@gmail.com",
          fonction: "Manager",
          telephone: "123456789",
          raisonSociale: "SARL",
          selected: false,
        },
       
      ],
      searchQuery: "",
      entriesToShow: 5,
      currentPage: 1,
    };
  },
  computed: {
    displayedClients() {
      let filteredClients = this.clients;
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filteredClients = filteredClients.filter((client) =>
          Object.values(client).some((value) => value && value.toString().toLowerCase().includes(query))
        );
      }

      const start = (this.currentPage - 1) * this.entriesToShow;
      const end = start + this.entriesToShow;
      return filteredClients.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.clients.length / this.entriesToShow);
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
.containerr {
  max-width: 95%;
}

table tr {
  border-bottom: 1px solid #e2e8f0;
}
</style>
