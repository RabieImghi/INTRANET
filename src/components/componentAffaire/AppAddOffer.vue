<template>
  <div class="pr-20 mt-10 mb-44">
    <form class="mt-4">
      <h2 class="text-xl font-semibold mb-12">
        Étape 1: Sélectionner un client
      </h2>
      <!-- Dropdown for selecting a client -->
      <div class="mb-4 flex">
        <div class="w-1/2 mr-2 relative z-0 group">
          <select
            v-model="selectedClient"
            @change="handleClientChange"
            name="listeClients"
            id="listeClients"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          >
            <option value="">selectioner client</option>
            <option
              v-for="client in clients"
              :key="client.id"
              :value="client.id"
            >
              {{ client.name }}
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
            for="listeClients"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Liste des Clients
          </label>
        </div>
      </div>

      <!-- Other input fields for client details -->
      <div class="mb-4 flex" v-if="selectedClient !== ''">
        <!-- Raison sociale / Nom -->
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].raisonSociale || ''"
              :readonly="isReadOnly"
              type="text"
              name="raisonSociale"
              id="raisonSociale"
              ref="raisonSocialeInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="raisonSociale"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Raison sociale / Nom
            </label>
          </div>
        </div>

        <!-- Adresse -->
        <div class="w-1/2 ml-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].adresse || ''"
              :readonly="isReadOnly"
              type="text"
              name="adresse"
              id="adresse"
              ref="adresseInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="adresse"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Adresse
            </label>
          </div>
        </div>
      </div>

      <!-- Ville -->
      <div class="mb-4 flex" v-if="selectedClient !== ''">
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].ville || ''"
              :readonly="isReadOnly"
              type="text"
              name="ville"
              id="ville"
              ref="villeInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="ville"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Ville
            </label>
          </div>
        </div>

        <!-- Code Postal -->
        <div class="w-1/2 ml-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].codePostal || ''"
              :readonly="isReadOnly"
              type="text"
              name="codePostal"
              id="codePostal"
              ref="codePostalInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="codePostal"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Code Postal
            </label>
          </div>
        </div>
      </div>

      <!-- Pays -->
      <div class="mb-4 flex" v-if="selectedClient !== ''">
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].pays || ''"
              :readonly="isReadOnly"
              type="text"
              name="pays"
              id="pays"
              ref="paysInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="pays"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Pays
            </label>
          </div>
        </div>

        <!-- E-mail -->
        <div class="w-1/2 ml-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].email || ''"
              :readonly="isReadOnly"
              type="text"
              name="email"
              id="email"
              ref="emailInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              E-mail
            </label>
          </div>
        </div>
      </div>

      <!-- ICE -->
      <div class="mb-4 flex" v-if="selectedClient !== ''">
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].ice || ''"
              :readonly="isReadOnly"
              type="text"
              name="ice"
              id="ice"
              ref="iceInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="ice"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ICE
            </label>
          </div>
        </div>

        <!-- Référence client -->
        <div class="w-1/2 ml-2 relative z-0 group">
          <div class="relative">
            <input
              :value="clientData[selectedClient].referenceClient || ''"
              :readonly="isReadOnly"
              type="text"
              name="referenceClient"
              id="referenceClient"
              ref="referenceClientInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="referenceClient"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Référence client
            </label>
          </div>
        </div>
      </div>
      <h2
        v-if="selectedClient !== ''"
        class="text-xl font-semibold mt-12 mb-12"
      >
        Étape 2: Sélectionner un interlocuteur
      </h2>
      <div v-if="selectedClient !== ''" class="mb-4 flex">
        <div class="w-1/2 mr-2 relative z-0 group">
          <select
            v-model="selectedInterlocuteur"
            name="listeInterlocuteurs"
            id="listeInterlocuteurs"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          >
            <option value="">sélectionner un interlocuteur</option>
            <option
              v-for="interlocuteur in interlocuteurs"
              :key="interlocuteur.id"
              :value="interlocuteur.id"
            >
              {{ interlocuteur.name }}
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
        </div>
      </div>
      <div class="mb-4 flex" v-if="selectedInterlocuteur !== ''">
        <!-- Nom -->
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="interlocuteurData[selectedInterlocuteur].nom || ''"
              :readonly="isReadOnly"
              type="text"
              name="nom"
              id="nom"
              ref="nomInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="nom"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nom
            </label>
          </div>
        </div>

        <!-- Prénom -->
        <div class="w-1/2 ml-2 relative z-0 group">
          <div class="relative">
            <input
              :value="interlocuteurData[selectedInterlocuteur].prenom || ''"
              :readonly="isReadOnly"
              type="text"
              name="prenom"
              id="prenom"
              ref="prenomInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="prenom"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Prénom
            </label>
          </div>
        </div>
      </div>
      <!-- E-mail -->
      <div class="mb-4 flex" v-if="selectedInterlocuteur !== ''">
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="interlocuteurData[selectedInterlocuteur].email || ''"
              :readonly="isReadOnly"
              type="text"
              name="email"
              id="email"
              ref="emailInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              E-mail
            </label>
          </div>
        </div>

        <!-- Fonction -->
        <div class="w-1/2 ml-2 relative z-0 group">
          <div class="relative">
            <input
              :value="interlocuteurData[selectedInterlocuteur].fonction || ''"
              :readonly="isReadOnly"
              type="text"
              name="fonction"
              id="fonction"
              ref="fonctionInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="fonction"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Fonction
            </label>
          </div>
        </div>
      </div>
      <div class="mb-4 flex" v-if="selectedInterlocuteur !== ''">
        <!-- Téléphone -->
        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              :value="interlocuteurData[selectedInterlocuteur].telephone || ''"
              :readonly="isReadOnly"
              type="text"
              name="telephone"
              id="telephone"
              ref="telephoneInput"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="telephone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Téléphone
            </label>
          </div>
        </div>
      </div>
      <div v-if="selectedInterlocuteur !== ''">
        <h2 class="text-xl font-semibold mt-12 mb-12">
          Étape 3: Sélectionner une mission
        </h2>

        <div class="mb-4 flex">
          <!-- Numéro d'offre -->
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
                type="text"
                name="numeroOffre"
                id="numeroOffre"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value="G34|12|2023|Google"
                required
              />
              <label
                for="numeroOffre"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Numéro d'offre
              </label>
            </div>
          </div>

          <!-- Apporteur d'affaire -->
          <div class="w-1/2 ml-2 relative z-0 group">
            <select
              name="apporteurAffaire"
              id="apporteurAffaire"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              <option value="">Sélectionner un apporteur d'affaire</option>
              <option value="">hamid hamid</option>
              <option value="">achraf</option>
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
              for="apporteurAffaire"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Apporteur d'affaire
            </label>
          </div>
        </div>

        <!-- Date d'offre -->
        <div class="mb-4 flex">
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
                type="date"
                name="dateOffre"
                id="dateOffre"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="dateOffre"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Date d'offre
              </label>
            </div>
          </div>

          <div class="w-1/2 ml-2 flex items-center justify-end">
            <button
              type="button"
              class="py-2 px-4 bg-blue-500 text-white rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              @click="handleOfferSimple"
            >
              Offre Simple
            </button>
            <button
              type="button"
              class="ml-4 py-2 px-4 bg-blue-500 text-white rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
              @click="handleOfferSpecial"
            >
              Offre Spéciale
            </button>
          </div>
        </div>
      </div>

      <!-- ... your form content ... -->

      <div v-if="showOfferSimpleForm" class="mt-20">
        <!-- ... your additional form content ... -->
        <div class="mb-4 flex gap-4">
          <div class="w-1/2 ml-2 relative z-0 group">
            <select
              v-model="selectedMission"
              name="Liste_missions"
              id="Liste_missions"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              <option value="">Sélectionner votre mission</option>
              <option
                v-for="mission in missions"
                :key="mission.value"
                :value="mission.value"
              >
                {{ mission.label }}
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
              for="apporteurAffaire"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Liste des missions
            </label>
          </div>
          <!-- Numéro d'offre -->
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
                type="text"
                name="Code_Mission"
                id="Code_Mission"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                :value="selectedMissionCode"
                required
              />
              <label
                for="Code_Mission"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Code Mission
              </label>
            </div>
          </div>

          <!-- Apporteur d'affaire -->
        </div>

        <div class="mb-4 flex gap-4">
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
                type="text"
                name="nom_mission"
                id="nom_mission"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="nom_mission"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nom de mission spéciale (optionnel)
              </label>
            </div>
          </div>
          <!-- Numéro d'offre -->
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
                type="text"
                name="Unité"
                id="Unité"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="Unité"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Unité
              </label>
            </div>
          </div>

          <!-- Apporteur d'affaire -->
        </div>

        <div class="mb-4 flex gap-4">
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
                type="number"
                name="Prix_HT"
                id="Prix_HT"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="Prix_HT"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Prix HT
              </label>
            </div>
          </div>
          <!-- Numéro d'offre -->
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
                type="number"
                name="Quantité"
                id="Quantité"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="Quantité"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Quantité
              </label>
            </div>
          </div>

          <!-- Apporteur d'affaire -->
        </div>

        <div class="mb-4 flex gap-4">
          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
                type="number"
                name="taux_remise"
                id="taux_remise"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="taux_remise"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Taux de remise
              </label>
            </div>
          </div>

          <div class="w-1/2 mr-2 relative z-0 group">
            <div class="relative">
              <input
                type="number"
                name="prixtotal"
                id="prixtotal"
                class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                value="G34|12|2023|Google"
                readonly
              />
              <label
                for="prixtotal"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Prix Total HT
              </label>
            </div>
          </div>

          <!-- Apporteur d'affaire -->
        </div>

        <div class="mb-4 flex gap-4">
          <div class="w-1/2 ml-2 relative z-0 group">
            <select
              name="Liste_missions"
              id="Liste_missions"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            >
              <option value="">Sélectionner Devis</option>
              <option value="">mad</option>
              <option value="">euro</option>
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
              for="apporteurAffaire"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Devis
            </label>
          </div>

          <div class="w-1/2 flex gap-2 items-center">
            <div class="grid">
              <!-- Mission simple -->
              <div>
                <input
                  type="radio"
                  id="missionSimple"
                  name="missionType"
                  value="simple"
                  class="peer"
                />
                <label for="missionSimple" class="cursor-pointer">
                  Mission simple
                </label>
              </div>

              <!-- Mission avec des Équipements -->
              <div>
                <input
                  type="radio"
                  id="missionAvecEquipements"
                  name="missionType"
                  value="equipements"
                  class="peer"
                />
                <label for="missionAvecEquipements" class="cursor-pointer">
                  Mission avec des Équipements
                </label>
              </div>
            </div>
          </div>

          <!-- Apporteur d'affaire -->
        </div>

        <div class="w-1/2 mr-2 relative z-0 group">
          <div class="relative">
            <input
              type="number"
              name="numero_rapport"
              id="numero_rapport"
              class="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              readonly
            />
            <label
              for="numero_rapport"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Numéro de rapport attendu général
            </label>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="flex justify-end">
          <button
            type="button"
            class="py-2 px-4 bg-red-500 text-white rounded focus:outline-none focus:shadow-outline-red active:bg-red-800"
            @click="cancelOfferForm"
          >
            Annuler
          </button>
          <button
            type="button"
            class="ml-4 py-2 px-4 bg-green-500 text-white rounded focus:outline-none focus:shadow-outline-green active:bg-green-800"
            @click="validateOfferForm"
          >
            Valider
          </button>
          <button
            type="button"
            class="ml-4 py-2 px-4 bg-blue-500 text-white rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            @click="addAnotherMission"
          >
            Autre Mission
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedMission: "",
      showOfferSimpleForm: false,
      numeroRapport: "",
      selectedClient: "",
      selectedInterlocuteur: "",
      clients: [{ id: "client1", name: "soufiane" }],
      interlocuteurs: [{ id: "interlocuteur1", name: "achraf " }],
      clientData: {
        client1: {
          raisonSociale: "youcode",
          adresse: "errachidia,aoufous",
          ville: "errachida",
          codePostal: "52000",
          pays: "maroc",
          email: "soufiane@email.com",
          ice: "ICE123",
          referenceClient: "Ref123",
        },
      },
      interlocuteurData: {
        interlocuteur1: {
          nom: "achraf",
          prenom: "lahcen",
          email: "achraf@email.com",
          fonction: "IT",
          telephone: "05666666666",
        },
      },
      missions: [
        { value: "I1528552", label: "Mission 1" },
        { value: "T5852555", label: "Mission 2" },
      ],
       forms: [],
    };
  },
  computed: {
    isReadOnly() {
      return this.selectedClient !== "";
    },
    selectedMissionCode() {
      return this.getCodeForMission(this.selectedMission);
    },
  },

  methods: {
   
    handleOfferSimple() {
      
      this.showOfferSimpleForm = true;
    },
    cancelOfferForm() {
     
      this.showOfferSimpleForm = false;
      this.resetOfferForm();
    },
    
  
    resetOfferForm() {
      
      this.numeroRapport = "";
      
    },
    getCodeForMission(missionValue) {
      return `${missionValue}`;
    },
  },
};
</script>

<style scoped></style>
