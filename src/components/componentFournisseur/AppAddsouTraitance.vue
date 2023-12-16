<template>
  <div class="pr-20 mt-10">
    <form class="mt-4">
      <div class="mb-4 flex">
        <div class="w-1/2 mr-2 relative z-0 group">
          <input
            type="text"
            name="raisonSocialeSousTraitance"
            id="raisonSocialeSousTraitance"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="raisonSocialeSousTraitance"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Raison Sociale de Sous-Traitance
          </label>
        </div>
        <div class="w-1/2 ml-2 relative z-0 group">
          <input
            type="text"
            name="formeJuridiqueSousTraitance"
            id="formeJuridiqueSousTraitance"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="formeJuridiqueSousTraitance"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Forme juridique
          </label>
        </div>
      </div>

   

<div class="mb-4 flex">
  <div class="w-1/2 mr-2 relative z-0 group">
    <input
      type="text"
      name="villeSousTraitance"
      id="villeSousTraitance"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      for="villeSousTraitance"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Ville
    </label>
  </div>
  <div class="w-1/2 ml-2 relative z-0 group">
    <input
      type="text"
      name="codePostalSousTraitance"
      id="codePostalSousTraitance"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      for="codePostalSousTraitance"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Code Postal
    </label>
  </div>
</div>

<div class="mb-4 flex">
  <div class="w-1/2 mr-2 relative z-0 group">
    <input
      type="text"
      name="paysSousTraitance"
      id="paysSousTraitance"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      for="paysSousTraitance"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Pays
    </label>
  </div>
  <div class="w-1/2 ml-2 relative z-0 group">
    <input
      type="email"
      name="emailSousTraitance"
      id="emailSousTraitance"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      for="emailSousTraitance"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Email
    </label>
  </div>
</div>

<div class="mb-4 flex">
  <div class="w-1/2 mr-2 relative z-0 group">
    <input
      type="text"
      name="iceSousTraitance"
      id="iceSousTraitance"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      for="iceSousTraitance"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      ICE
    </label>
  </div>
  <div class="w-1/2 ml-2 relative z-0 group">
    <input
      type="tel"
      name="telephoneSousTraitance"
      id="telephoneSousTraitance"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      for="telephoneSousTraitance"
      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      Téléphone
    </label>
  </div>
</div>




      <div class="mb-4">
        <label for="serviceSousTraitance" class="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
          Sélectionner le service sous-traité
        </label>
        <div class="w-1/2 mr-2 relative z-0 group">
          <select
            v-model="selectedServiceSousTraitance"
            @change="handleServiceSousTraitanceChange"
            name="listeServicesSousTraitance"
            id="listeServicesSousTraitance"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          >
            <option value="" disabled selected>Choisir un service</option>
            <option
              v-for="service in servicesSousTraitance"
              :key="service.id"
              :value="service.id"
            >
              {{ service.name }}
            </option>
          </select>
          <div
            class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
          >
            <svg
              class="h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
          <label
            for="listeServicesSousTraitance"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Liste des Services
          </label>
        </div>
      </div>



      <div class="flex justify-end">
        <button type="button" class="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline">
          Annuler
        </button>
        <button type="submit" class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
          Enregistrer
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedServiceSousTraitance: null,
      servicesSousTraitance: [
        { id: 1, name: "Contrôle Technique" },
        { id: 2, name: "Contrôle reglementaire" },
        { id: 3, name: "Risque aux travaille" },
        { id: 4, name: "Environment" },
        { id: 5, name: "Assistance" },
        { id: 6, name: "Formation" },
        { id: 7, name: "Autre" },
      ],
     
    };
  },
  methods: {
    handleServiceSousTraitanceChange() {
     
    },
  
  },
};
</script>

<style scoped>
</style>
