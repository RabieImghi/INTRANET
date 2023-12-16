<template>
  <div class="containerr">
    

    <div class="overflow-x-auto shadow-md container p-4">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center">
        <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
      </div>
    </div>
      <table class="w-full table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2"></th>
            <th class="px-4 py-2">Date</th>
            <th class="px-4 py-2">Numéro d'affaire</th>
            <th class="px-4 py-2">Réf Client</th>
            <th class="px-4 py-2">Raison sociale</th>
            <th class="px-4 py-2">Mission</th>
            <th class="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice in displayedInvoices" :key="invoice.id">
            <td class="px-4 py-2">
              <input type="checkbox" v-model="invoice.selected" />
            </td>
            <td class="px-4 py-2">{{ invoice.date }}</td>
            <td class="px-4 py-2">{{ invoice.invoiceNumber }}</td>
            <td class="px-4 py-2">{{ invoice.clientRef }}</td>
            <td class="px-4 py-2">{{ invoice.raisonSociale }}</td>
            <td class="px-4 py-2">{{ invoice.mission }}</td>
            <td class="px-4 py-2">{{ invoice.status }}</td>
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
    invoices: [
  {
    id: 1,
    date: "2023-01-01",
    invoiceNumber: "INvv001",
    clientRef: "REF001",
    raisonSociale: "soufiane ",
    mission: "Mission 1",
    selected: false,
    status: "Encaissée",
  },
  {
    id: 2,
    date: "2023-02-02",
    invoiceNumber: "INvv002",
    clientRef: "REF002",
    raisonSociale: "soufiane ",
    mission: "Mission 2",
    selected: false,
    status: "Encaissée",
  },
  {
    id: 3,
    date: "2023-03-03",
    invoiceNumber: "INvv003",
    clientRef: "REF003",
    raisonSociale: "soufiane ",
    mission: "Mission 3",
    selected: false,
    status: "Encaissée",
  },
  {
    id: 4,
    date: "2023-04-04",
    invoiceNumber: "INvv004",
    clientRef: "REF004",
    raisonSociale: "soufiane ",
    mission: "Mission 4",
    selected: false,
    status: "Encaissée",
  },
  {
    id: 5,
    date: "2023-05-05",
    invoiceNumber: "INvv005",
    clientRef: "REF005",
    raisonSociale: "soufiane ",
    mission: "Mission 5",
    selected: false,
    status: "Encaissée",
  },
  {
    id: 6,
    date: "2023-06-06",
    invoiceNumber: "INvv006",
    clientRef: "REF006",
    raisonSociale: "soufiane ",
    mission: "Mission 6",
    selected: false,
    status: "Encaissée",
  },
],

      searchQuery: "",
      entriesToShow: 5,
      currentPage: 1,
    };
  },
  computed: {
    displayedInvoices() {
      let filteredInvoices = this.invoices;
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filteredInvoices = filteredInvoices.filter(invoice =>
          Object.values(invoice).some(value => value && value.toString().toLowerCase().includes(query))
        );
      }

      const start = (this.currentPage - 1) * this.entriesToShow;
      const end = start + this.entriesToShow;
      return filteredInvoices.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.invoices.length / this.entriesToShow);
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
