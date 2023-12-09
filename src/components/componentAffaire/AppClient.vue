<template>
  <div>
    <div class="flex items-center justify-between mb-4">
      <div>
        <button data-modal-target="default-modal" data-modal-toggle="default-modal" class="bg-indigo-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">Add Client</button>
      </div>
      <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="default-modal" type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
      <div class="flex items-center">
        <button @click="exportClients" class="bg-indigo-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">Export</button>
         <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
      </div>
    </div>

    <div class="overflow-x-auto shadow-md">
      <table class="w-full table-auto">
        <thead>
          <tr>
            <th class="px-4 py-2"></th>
            <th class="px-4 py-2">Raison sociale</th>
            <th class="px-4 py-2">Référence client</th>
            <th class="px-4 py-2">E-mail</th>
            <th class="px-4 py-2">Téléphone</th>
            <th class="px-4 py-2">Adresse</th>
            <th class="px-4 py-2">Ville</th>
            <th class="px-4 py-2">Pays</th>
            <th class="px-4 py-2">ICE</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in displayedClients" :key="client.id">
            <td class="px-4 py-2">
              <input type="checkbox" v-model="client.selected" />
            </td>
            <td class="px-4 py-2">{{ client.raisonSociale }}</td>
            <td class="px-4 py-2">{{ client.referenceClient }}</td>
            <td class="px-4 py-2">{{ client.email }}</td>
            <td class="px-4 py-2">{{ client.telephone }}</td>
            <td class="px-4 py-2">{{ client.adresse }}</td>
            <td class="px-4 py-2">{{ client.ville }}</td>
            <td class="px-4 py-2">{{ client.pays }}</td>
            <td class="px-4 py-2">{{ client.ice }}</td>
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
          raisonSociale: "Client 1",
          referenceClient: "REF001",
          email: "client1@example.com",
          telephone: "123-456-7890",
          adresse: "123 Main St",
          ville: "City 1",
          pays: "Country 1",
          ice: "ICE001",
          selected: false, 
        },
        {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "client2@example.com",
          telephone: "987-654-3210",
          adresse: "456 Oak St",
          ville: "City 2",
          pays: "Country 2",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "client2@example.com",
          telephone: "987-654-3210",
          adresse: "456 Oak St",
          ville: "City 2",
          pays: "Country 2",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "client2@example.com",
          telephone: "987-654-3210",
          adresse: "456 Oak St",
          ville: "City 2",
          pays: "Country 2",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "client2@example.com",
          telephone: "987-654-3210",
          adresse: "456 Oak St",
          ville: "City 2",
          pays: "Country 2",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "client2@example.com",
          telephone: "987-654-3210",
          adresse: "456 Oak St",
          ville: "City 2",
          pays: "Country 2",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "client2@example.com",
          telephone: "987-654-3210",
          adresse: "456 Oak St",
          ville: "City 2",
          pays: "Country 2",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "client2@example.com",
          telephone: "987-654-3210",
          adresse: "456 Oak St",
          ville: "City 2",
          pays: "Country 2",
          ice: "ICE002",
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

  },
};
</script>

<style scoped>
table tr {
  border-bottom: 1px solid #e2e8f0;
}
</style>
 