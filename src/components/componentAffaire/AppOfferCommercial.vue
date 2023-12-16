<template>
  <div class="containerr">
    <div class="flex items-center justify-between mb-4">
     
    
      <div class="flex items-center">
         <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
      </div>
    </div>

  <div class="table-container  shadow-md">
  <table class="w-full table-auto">
  <thead>
    <tr>
      <th class="px-4 py-2"></th>
      <th class="px-4 py-2">Date</th>
      <th class="px-4 py-2">Numéro d'offre</th>
      <th class="px-4 py-2">Réf Client</th>
      <th class="px-4 py-2">Raison sociale</th>
      <th class="px-4 py-2">Mission</th>
      <th class="px-4 py-2">Date</th>
    
      <th class="px-4 py-2">Status</th>
      <th class="px-4 py-2">OP</th>
      <th class="px-4 py-2">OCT</th>
      <th class="px-4 py-2">SC</th>
        <th class="px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="offre in displayedOffres" :key="offre.id">
      <td class="px-4 py-2">
        <input type="checkbox" v-model="offre.selected" />
      </td>
      <td class="px-4 py-2">{{ offre.date }}</td>
      <td class="px-4 py-2">{{ offre.numeroOffre }}</td>
      <td class="px-4 py-2">{{ offre.refClient }}</td>
      <td class="px-4 py-2">{{ offre.raisonSociale }}</td>
      <td class="px-4 py-2">{{ offre.mission }}</td>
      <td class="px-4 py-2">{{ offre.date }}</td>
     
      <td class="px-4 py-2">{{ offre.status }}</td>
      <td class="px-4 py-2">{{ offre.op }}</td>
      <td class="px-4 py-2">{{ offre.oct }}</td>
      <td class="px-4 py-2">{{ offre.sc }}</td>
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
       Offres: [
        {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
            sc: "SC001",
            selected: false,
        }, {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
            sc: "SC001",
            selected: false,
        }, {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
            sc: "SC001",
            selected: false,
        }, {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
            sc: "SC001",
            selected: false,
        }, {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
            sc: "SC001",
            selected: false,
        }, {
            id: 1,
            date: "2023-12-01",
            numeroOffre: "OFF001",
            refClient: "REF001",
            raisonSociale: "Client 1",
            mission: "Mission 1",
            status: "En cours",
            op: "OP001",
            oct: "OCT001",
            sc: "SC001",
            selected: false,
        },
       
      ],
      searchQuery: "",
      entriesToShow: 5,
      currentPage: 1,
    };
  },
  computed: {
    displayedOffres() {
    let filteredOffres = this.Offres; 
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredOffres = filteredOffres.filter(offre =>
        Object.values(offre).some(value => value && value.toString().toLowerCase().includes(query))
      );
    }

    const start = (this.currentPage - 1) * this.entriesToShow;
    const end = start + this.entriesToShow;
    return filteredOffres.slice(start, end);
  },
    totalPages() {
      return Math.ceil(this.Offres.length / this.entriesToShow);
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
.containerr{
  max-width:95%;
}
 .table-container {
   
    overflow-x: auto;
    margin: 0 auto; 
    position: relative;
  }
table{
    min-width:1100px;
     width: max-content;
}
table tr {
  border-bottom: 1px solid #e2e8f0;
}
</style>
 