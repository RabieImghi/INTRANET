<template>
  <div class="containerr">
    <div class="flex items-center justify-between mb-4">
      <div>
        <button  data-te-toggle="modal"
    data-te-target="#exampleModalXl"
    data-te-ripple-init
    data-te-ripple-color="light" class="bg-indigo-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">Add Client</button>
      </div>
      <div
        data-te-modal-init
        class="fixed mt-20 left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="exampleModalXl"
        tabindex="-1"
        aria-labelledby="exampleModalXlLabel"
        aria-modal="true"
        role="dialog">
        <div
          data-te-modal-dialog-ref
          class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]">
          <div
            class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
            <div
              class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <!--Modal title-->
              <h5
                class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                id="exampleModalXlLabel">
                Extra large modal
              </h5>
              <!--Close button-->
              <button
                type="button"
                class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-modal-dismiss
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

              <div class="relative p-4">

                <!-- Form -->
                <form class="mt-4">
                  <div class="mb-4 flex">
                    <div class="w-1/2 mr-2 relative z-0 group">
                      <input type="text" name="raisonSociale" id="raisonSociale"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                      <label for="raisonSociale"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Raison sociale / Nom</label>
                    </div>
                    <div class="w-1/2 ml-2 relative z-0 group">
                      <input type="text" name="Adresse" id="Adresse"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                      <label for="Adresse"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Adresse</label>
                    </div>
                  </div>

              <div class="mb-4 flex">
                    <div class="w-1/2 mr-2 relative z-0 group">
                      <input type="text" name="ICE" id="ICE"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                      <label for="ICE"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ICE</label>
                    </div>
                    <div class="w-1/2 ml-2 relative z-0 group">
                      <input type="text" name="Code_Postal" id="Code_Postal"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                      <label for="Code_Postal"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Code Postal</label>
                    </div>
                  </div>


                   <div class="mb-4 flex">
                    <div class="w-1/2 mr-2 relative z-0 group">
                      <input type="text" name="Ville" id="Ville"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                      <label for="Ville"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ville</label>
                    </div>
                    <div class="w-1/2 ml-2 relative z-0 group">
                      <input type="text" name="email" id="email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                      <label for="email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">E-mail de Raison Sociale / E-mail Interlocuteur</label>
                    </div>
                  </div>


                   <div class="mb-4 flex">
                    <div class="w-1/2 mr-2 relative z-0 group">
                      <input type="text" name="Pays" id="Pays"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                      <label for="Pays"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pays</label>
                    </div>
                    <div class="w-1/2 ml-2 relative z-0 group">
                      <input type="text" name="Référence_client" id="Référence_client"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                      <label for="Référence_client"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Référence client</label>
                    </div>
                  </div>


                   <div class="mb-4 flex">
                    <div class="w-1/2 mr-2 relative z-0 group">
                      <input type="text" name="raisonSociale" id="raisonSociale"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                      <label for="raisonSociale"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Raison sociale / Nom</label>
                    </div>
                   
                  </div>

                  
                  <div class="flex justify-end">
                    <button type="button"
                      class="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline">Annuler</button>
                    <button type="submit"
                      class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline">Enregistrer</button>
                  </div>
                </form>
              </div>


          </div>
        </div>
      </div>
      <div class="flex items-center">
        <button @click="exportClients" class="bg-indigo-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline">Export</button>
         <input type="text" v-model="searchQuery" placeholder="Search" class="ml-2 p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline">
      </div>
    </div>

    <div class="overflow-x-auto shadow-md container">
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
          email: "soufiane@gmail.com",
          telephone: "06666666",
          adresse: "aoufous",
          ville: "errchidia",
          pays: "maroc",
          ice: "ICE001",
          selected: false, 
        },
        {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "soufiane@gmail.com",
          telephone: "06666666",
          adresse: "aoufous",
          ville: "errachidia",
          pays: "maroc",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "soufiane@gmail.com",
          telephone: "06666666",
          adresse: "aoufous",
          ville: "errachidia",
          pays: "maroc",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "soufiane@gmail.com",
          telephone: "06666666",
          adresse: "aoufous",
          ville: "errachidia",
          pays: "maroc",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "soufiane@gmail.com",
          telephone: "06666666",
          adresse: "aoufous",
          ville: "errachidia",
          pays: "maroc",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "soufiane@gmail.com",
          telephone: "06666666",
          adresse: "aoufous",
          ville: "errachidia",
          pays: "maroc",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "soufiane@gmail.com",
          telephone: "06666666",
          adresse: "aoufous",
          ville: "errachidia",
          pays: "maroc",
          ice: "ICE002",
          selected: false,
        },
         {
          id: 2,
          raisonSociale: "Client 2",
          referenceClient: "REF002",
          email: "soufiane@gmail.com",
          telephone: "06666666",
          adresse: "aoufous",
          ville: "errachidia",
          pays: "maroc",
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
.containerr{
  max-width:95%;
}
table tr {
  border-bottom: 1px solid #e2e8f0;
}
</style>
 