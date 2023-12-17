<template>   <div class="containerr ">
   

  <div class="overflow-x-auto shadow-md container p-4" style="padding-left: 50px;">
    <!-- component -->
    <!-- This is an example component -->
    <div class="pt-2 relative  text-gray-600">
        <input class="border-2 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search">
    </div>
    <div class="container flex gap-4 m-5">
      <div class="relative z-0 w-40 mb-5 group">
        <label for="departement" class="sr-only">Département</label>
        <select  v-model="selectedMonth" id="month" @change="handleMonthChange" data-v-6b63125a=""
          class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
          <option v-for="month in months" :key="month.value" :value="month.value">{{ month.name }}</option>
        </select>
      </div>
      <div class="relative z-0  w-40 mb-5 group">
          <label for="departement" class="sr-only">Département</label>
          <select v-model="selectedYear" id="year" @change="handleYearChange" data-v-6b63125a=""
              class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
      </div>
      <!-- component -->
      <button @click="exportData" class="group relative h-10 w-32 overflow-hidden rounded-lg bg-white text-lg shadow">
        <div class="absolute inset-0 w-3 bg-green-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-black group-hover:text-white">Export</span>
      </button>
    </div>
    <table class="w-full table-auto" >
      <thead>
        <tr>
          <th class="px-4 py-2"></th>
          <th class="px-4 py-2">DATE_CONGÉ</th>
          <th class="px-4 py-2">NOM</th>
          <th class="px-4 py-2">PRÉNOM</th>
          <th class="px-4 py-2">TYPE_D'ABSENCE</th>
          <th class="px-4 py-2">MOTIF</th>
          <th class="px-4 py-2">PJ</th>
          <th class="px-4 py-2">SORTIR	</th>
          <th class="px-4 py-2">REPRISE</th>
          <th class="px-4 py-2">NBR_JRS</th>
          <th class="px-4 py-2">SOLDE</th>
          <th class="px-4 py-2">RESTE</th>
          <th class="px-4 py-2">STATUS</th>
          <th class="px-4 py-2">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in displayedClients" :key="client.id">
          <td class="px-4 py-2">
            <input type="checkbox" v-model="client.selected" />
          </td>
          <td class="px-4 py-2">{{ client.dateConge }}</td>
          <td class="px-4 py-2">{{ client.nom }}</td>
          <td class="px-4 py-2">{{ client.prenom }}</td>
          <td class="px-4 py-2">{{ client.typeAbcs }}</td>
          <td class="px-4 py-2">{{ client.motif }}</td>
          <td class="px-4 py-2">{{ client.PJ }}</td>
          <td class="px-4 py-2">{{ client.SORTIR }}</td>
          <td class="px-4 py-2">{{ client.REPRISE }}</td>
          <td class="px-4 py-2">{{ client.NBR_JRS }}</td>
          <td class="px-4 py-2">{{ client.SOLDE }}</td>
          <td class="px-4 py-2">{{ client.RESTE }}</td>
          <td class="px-4 py-2">{{ client.STATUS }}</td>
          <td class="px-4 flex gap-2 py-2">
            <button class="bg-blue-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'pen-nib']" /></button>
            <button class="bg-red-500 text-white px-2 py-1 rounded focus:outline-none focus:shadow-outline"><font-awesome-icon :icon="['fas', 'trash']" /></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="flex justify-between items-center mt-4" style="padding-left: 50px;">
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
<style>

</style>
<script>
import exportFromJSON from "export-from-json";

export default {

data() {
  return {
     clients: [
      {
        id: 1,
        dateConge: "12/01/2023",
        nom: "Rabie",
        prenom: "ait imghi",
        typeAbcs: "tybe001",
        motif: "motif001",
        PJ: "pj001",
        SORTIR: "sortirR001",
        REPRISE: "reprise001",
        NBR_JRS:3,	
        SOLDE:"solid001",	
        RESTE:3,	
        STATUS:"state001",
        selected: false, 
      },
      {
        id: 1,
        dateConge: "12/01/2023",
        nom: "Rabie",
        prenom: "ait imghi",
        typeAbcs: "tybe001",
        motif: "motif001",
        PJ: "pj001",
        SORTIR: "sortirR001",
        REPRISE: "reprise001",
        NBR_JRS:3,	
        SOLDE:"solid001",	
        RESTE:3,	
        STATUS:"state001",
        selected: false, 
      },
      {
        id: 1,
        dateConge: "12/01/2023",
        nom: "Rabie",
        prenom: "ait imghi",
        typeAbcs: "tybe001",
        motif: "motif001",
        PJ: "pj001",
        SORTIR: "sortirR001",
        REPRISE: "reprise001",
        NBR_JRS:3,	
        SOLDE:"solid001",	
        RESTE:3,	
        STATUS:"state001",
        selected: false, 
      },
      {
        id: 1,
        dateConge: "12/01/2023",
        nom: "Rabie",
        prenom: "ait imghi",
        typeAbcs: "tybe001",
        motif: "motif001",
        PJ: "pj001",
        SORTIR: "sortirR001",
        REPRISE: "reprise001",
        NBR_JRS:3,	
        SOLDE:"solid001",	
        RESTE:3,	
        STATUS:"state001",
        selected: false, 
      },
      {
        id: 1,
        dateConge: "12/01/2023",
        nom: "Rabie",
        prenom: "ait imghi",
        typeAbcs: "tybe001",
        motif: "motif001",
        PJ: "pj001",
        SORTIR: "sortirR001",
        REPRISE: "reprise001",
        NBR_JRS:3,	
        SOLDE:"solid001",	
        RESTE:3,	
        STATUS:"state001",
        selected: false, 
      },
      {
        id: 1,
        dateConge: "12/01/2023",
        nom: "Rabie",
        prenom: "ait imghi",
        typeAbcs: "tybe001",
        motif: "motif001",
        PJ: "pj001",
        SORTIR: "sortirR001",
        REPRISE: "reprise001",
        NBR_JRS:3,	
        SOLDE:"solid001",	
        RESTE:3,	
        STATUS:"state001",
        selected: false, 
      },
    ],
    searchQuery: "",
    entriesToShow: 5,
    currentPage: 1,
    months: [
        { value: '01', name: 'January' },
        { value: '02', name: 'February' },
        { value: '03', name: 'March' },
        { value: '04', name: 'April' },
        { value: '05', name: 'May' },
        { value: '06', name: 'June' },
        { value: '07', name: 'July' },
        { value: '08', name: 'August' },
        { value: '09', name: 'September' },
        { value: '10', name: 'October' },
        { value: '11', name: 'November' },
        { value: '12', name: 'December' },
    ],
    years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i),
    selectedMonth: null,
    selectedYear: null,
  };
},
computed: {
  displayedClients() {
    let filteredClients = this.clients;
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filteredClients = filteredClients.filter(client =>
        Object.values(client).some(value => value && value.toString().toLowerCase().includes(query))
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
  exportDataFromJSON(data, newFileName, fileExportType) {
    if (!data) return;
    try {
      const fileName = newFileName || "ListDemandAbscense";
      const exportType = exportFromJSON.types[fileExportType || "xls"];
      exportFromJSON({ data, fileName, exportType });
    } catch (e) {
      throw new Error("Parsing failed!");
    }
  },
  exportData() {
    this.exportDataFromJSON(this.clients, null, null);
  },


},
mounted() {
  const currentDate = new Date();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const currentYear = currentDate.getFullYear();
  this.selectedMonth = currentMonth;
  this.selectedYear = currentYear;
},
};
</script>

<style scoped>
.containerr{
max-width:95%;
}
table tr {
border-bottom: 1px solid #e2e8f0;
}
</style>
