<template>
    <div>
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
      </div>
      <div  v-if="selectedMonth !== null && selectedYear !== null" class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">JOUR</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">DATE</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">TITRE</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">CLIENT</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">LIEU</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">HORAIRE</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">INSPECTEUR</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">ACTIONS</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">+/-</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">
            <tr class="hover:bg-gray-50" v-for="(day, index) in daysOfMonth" :key="index">
              <td class="px-6 py-4">
                <span class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600" >
                  <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  {{ getDayName(day.dayIndex) }}
                </span>
              </td>
              <td class="px-6 py-4">
                <div class="flex gap-2">
                  <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                    {{ day.date }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-4 " :id="'titleTd-' + index">
                <div class="relative z-0 w-full mb-5 group containTd">
                    <input type="text"    :id="'titre-' + index"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="Titre"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Titre
                      </label>
                </div>
              </td>
              <td class="px-6 py-4" :id="'clientTd-' + index">
                <div class="relative z-0 w-full mb-5 group containTd">
                    <input type="text"   :id="'client-' + index"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="Titre"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Client
                      </label>
                </div>
              </td>
              <td class="px-6 py-4" :id="'lieuTd-' + index">
                <div class="relative z-0 w-full mb-5 group containTd">
                    <input type="text"     :id="'lieu-' + index"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="Titre"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Lieu
                      </label>
                </div>
              </td>
              <td class="px-6 py-4" :id="'horaireTd-' + index">
                <div class="flex md:gap-6 mb-5 containTd">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="time" :id="'timeDebut-' + index"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="time"  :id="'timeFin-' + index"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "  />
                    </div>
                </div>
              </td>
              <td class="px-6 py-4" :id="'inspecteurTd-' + index">
                <div class="relative z-0 w-full mb-5 group containTd">
                    <select data-v-6b63125a="" :id="'Inspectur-' + index"
                        class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option selected>Select Inspectur</option>
                        <option data-v-6b63125a="" value="1"> Soufian</option>
                        <option data-v-6b63125a="" value="1"> Rabie</option>
                    </select>
                </div>
              </td>
              <td class="px-6 py-4 text-center" :id="'actionsTd-' + index">
                <div class="containTd pt-5 mb-5" >
                  <font-awesome-icon @click="saveInput(index)" class="text-base cursor-pointer" style="color: rgb(4, 202, 4);" :icon="['fas', 'floppy-disk']" />
                </div>
              </td>
              <td class="px-6 py-4" :id="'plusMoin-' + index">
                <div class="containTd pt-5 mb-5">
                  <font-awesome-icon @click="addNewInput(day)" class="text-base cursor-pointer" style="color: rgb(4, 202, 4);" :icon="['fas', 'plus']" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from 'date-fns';
  
  export default {
    data() {
      return {
        selectedMonth: null,
        selectedYear: null,
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
        inputDisabled: false,
      };
    },
    computed: {
      formattedMonth() {
        if (this.selectedMonth && this.selectedYear) {
          return format(new Date(`${this.selectedYear}-${this.selectedMonth}-01`), 'MMMM yyyy');
        }
        return 'No month selected';
      },
      daysOfWeek() {
        return ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
      },
      daysOfMonth() {
        if (this.selectedMonth && this.selectedYear) {
          const start = startOfMonth(new Date(`${this.selectedYear}-${this.selectedMonth}-01`));
          const end = endOfMonth(new Date(`${this.selectedYear}-${this.selectedMonth}-01`));
          const days = eachDayOfInterval({ start, end });
          return days.map((day) => {
            const dayIndex = getDay(day);
            return { dayIndex, date: format(day, 'd') };
          });
        }
        return [];
      },
    },
    methods: {
        getDayName(dayIndex) {
        const adjustedIndex = (dayIndex + 6) % 7;
        return this.daysOfWeek[adjustedIndex];
        },
        addNewInput(day) {
          const inputToDisable = this.generateUniqueId();
          const index = this.daysOfMonth.findIndex((d) => d === day);
          const titleTd = document.getElementById(`titleTd-${index}`);
          const clientTd = document.getElementById(`clientTd-${index}`);
          const lieuTd = document.getElementById(`lieuTd-${index}`);
          const horaireTd = document.getElementById(`horaireTd-${index}`);
          const inspecteurTd = document.getElementById(`inspecteurTd-${index}`);
          const actionsTd = document.getElementById(`actionsTd-${index}`);
          const plusMoin = document.getElementById(`plusMoin-${index}`);
          if (index !== -1) {
              const titleContent = `
                <input type="text" name="nom"  id="nom"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required />
                <label for="Titre"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Titre
                </label>
              `;
              const clientContent = `
                <input type="text" name="nom" id="nom"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required />
                <label for="Client"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Client
                </label>
              `;
              const lieuContent =  `
                <input type="text" name="nom" id="nom"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required />
                <label for="Lieu"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Lieu
                </label>
              `;
              const horaireContent = `
                <div class="relative z-0 w-full mb-5 group">
                  <input type="time" id="timeDebut"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " />
                </div> 
                <div class="relative z-0 w-full mb-5 group">
                  <input type="time" id="timeFin"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" " />
                </div>
              `;
              const inspecteurContent = `
                <select data-v-6b63125a="" id="departement"
                  class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  <option selected>Select Inspectur</option>
                  <option data-v-6b63125a="" value="1">Soufian</option>
                  <option data-v-6b63125a="" value="2">Rabie</option>
                </select>
              `;
              const actionsContent = `
              <svg data-v-2ac952eb="" class="svg-inline--fa fa-floppy-disk text-base cursor-pointer" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="floppy-disk" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="color: rgb(4, 202, 4);"><path class="" fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg>  
              `;
              const moniContent = `
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
              `;
              const classList = ['relative', 'z-0', 'w-full', 'mb-5', 'group', 'containTd','added_element',inputToDisable];
              const attribut = ['data-v-2ac952eb', ''];
              // Create a new container element for each field
              const titleContainer = document.createElement('div');
              const clientContainer = document.createElement('div');
              const lieuContainer = document.createElement('div');
              const horaireContainer = document.createElement('div');
              const inspecteurContainer = document.createElement('div');
              const actionsContainer = document.createElement('div');
              const moniContainer = document.createElement('div');
              // Add classes to the containers if needed
              titleContainer.classList.add(...classList);
              titleContainer.setAttribute(...attribut);
              clientContainer.classList.add(...classList);
              clientContainer.setAttribute(...attribut);
              lieuContainer.classList.add(...classList);
              lieuContainer.setAttribute(...attribut);
              horaireContainer.classList.add('flex', 'md:gap-6', 'mb-5','containTd','added_element');
              horaireContainer.setAttribute(...attribut);
              inspecteurContainer.classList.add(...classList);
              inspecteurContainer.setAttribute(...attribut);  
              actionsContainer.classList.add('mb-5','pt-5' ,'containTd','added_element');
              actionsContainer.id=`save-${inputToDisable}`;
              actionsContainer.setAttribute(...attribut);
              
              moniContainer.classList.add('mb-5','pt-5' ,'containTd','added_element');
              moniContainer.setAttribute(...attribut);
              
              // Set the innerHTML of the containers to the content of the corresponding <td>
              titleContainer.innerHTML = titleContent;
              clientContainer.innerHTML = clientContent;
              lieuContainer.innerHTML = lieuContent;
              horaireContainer.innerHTML = horaireContent;
              inspecteurContainer.innerHTML = inspecteurContent;
              actionsContainer.innerHTML = actionsContent;
              moniContainer.innerHTML = moniContent;
              // Append the containers to the corresponding <td>
              titleTd.appendChild(titleContainer);
              clientTd.appendChild(clientContainer);
              lieuTd.appendChild(lieuContainer);
              horaireTd.appendChild(horaireContainer);
              inspecteurTd.appendChild(inspecteurContainer);
              actionsTd.appendChild(actionsContainer);
              plusMoin.appendChild(moniContainer);
              

              titleContainer.querySelector('input').id = `titleInput-${inputToDisable}`;
              clientContainer.querySelector('input').id = `clientInput-${inputToDisable}`;
              lieuContainer.querySelector('input').id = `lieuInput-${inputToDisable}`;
              horaireContainer.querySelectorAll('input').forEach((input, i) => {
                input.id = `horaireInput-${inputToDisable}-${i}`;
              });
              inspecteurContainer.querySelector('select').id = `inspecteurInput-${inputToDisable}`;

              const save = document.getElementById(`save-${inputToDisable}`);
              save.addEventListener('click', () => {
                  document.getElementById(`titleInput-${inputToDisable}`).setAttribute("disabled","");
                  document.getElementById(`clientInput-${inputToDisable}`).setAttribute("disabled","");
                  document.getElementById(`lieuInput-${inputToDisable}`).setAttribute("disabled","");
                  document.getElementById(`horaireInput-${inputToDisable}-${0}`).setAttribute("disabled","");
                  document.getElementById(`horaireInput-${inputToDisable}-${1}`).setAttribute("disabled","");
                  document.getElementById(`inspecteurInput-${inputToDisable}`).setAttribute("disabled","");
              })
              // Remove the added elements when clicking on moin
              moniContainer.addEventListener('click', () => {
                titleTd.removeChild(titleContainer);
                clientTd.removeChild(clientContainer);
                lieuTd.removeChild(lieuContainer);
                horaireTd.removeChild(horaireContainer);
                inspecteurTd.removeChild(inspecteurContainer);
                actionsTd.removeChild(actionsContainer);
                plusMoin.removeChild(moniContainer);
              });
          }
        },
        generateUniqueId() {
          const prefix = 'uniqueId_';
          const timestamp = new Date().getTime().toString(16);
          const randomPart = Math.random().toString(16).substring(2);
          const uniqueId = prefix + timestamp + randomPart;
          return uniqueId;
        },
        saveInput(index) {
          document.getElementById('titre-'+index).setAttribute("disabled","");
          document.getElementById('client-'+index).setAttribute("disabled","");
          document.getElementById('lieu-'+index).setAttribute("disabled","");
          document.getElementById('timeDebut-'+index).setAttribute("disabled","");
          document.getElementById('timeFin-'+index).setAttribute("disabled","");
          document.getElementById('Inspectur-'+index).setAttribute("disabled","");
        },
        resetInputs() {
          const inputs = document.querySelectorAll('input[disabled]');
          inputs.forEach((input) => {
            input.removeAttribute('disabled');
          });

          const selects = document.querySelectorAll('select[disabled]');
          selects.forEach((select) => {
            select.removeAttribute('disabled');
          });

          const addedElements = document.querySelectorAll('.added_element');
          addedElements.forEach((element) => {
            element.parentNode.removeChild(element);
          });
        },
    },
    watch: {
      selectedMonth() {
        this.resetInputs();
      },
      selectedYear() {
        this.resetInputs();
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
  .containTd{
    height: 50px;
  }
  </style>
  