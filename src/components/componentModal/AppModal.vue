<template> 
    <div id="extralarge-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden md:inset-0 h-[calc(100%-1rem)]">
        <div class="relative w-full max-w-7xl max-h-full">
            <div class="DEMANDE_ABSENCE relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                        DEMANDE ABSENCE
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-4 md:p-5 space-y-4">
                    <form class=" mx-auto">
                        <div class="DEMANDE_ABSENCE_SCROOL pt-4">
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="datetime-local" value="2023-01-01T12:00" disabled name="date_demand_abscence" id="date_demand_abscence" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date de demande Congé</label>
                        </div>
                        <div class="flex items-center justify-center p-1 md:p-5 rounded-t dark:border-gray-600">
                            <h4 class="text-xl font-medium text-gray-900 dark:text-white">
                                Informations Personnelles
                            </h4>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="nom" disabled value="Boushaba" id="nom" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="nom" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nom</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="prenom" disabled value="Soufian"  id="prenom" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="prenom" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Prénom</label>
                            </div>
                        </div>
                        <div class="flex items-center justify-center p-1 md:p-5 rounded-t dark:border-gray-600">
                            <h4 class="text-xl font-medium text-gray-900 dark:text-white">
                                Informations Techniques
                            </h4>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <label for="departement" class="sr-only">Département</label>
                            <select data-v-6b63125a="" id="departement" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option selected> Département</option>
                                <option data-v-6b63125a="" value="PRODUCTION"> PRODUCTION</option>
                                <option data-v-6b63125a="" value="ADMINISTRATIVE"> ADMINISTRATIVE</option>
                                <option data-v-6b63125a="" value="TECHNIQUE"> TECHNIQUE</option>
                                <option data-v-6b63125a="" value="QUALITÉ"> QUALITÉ</option>
                            </select>

                        </div>
                        <div class="flex items-center justify-center p-1 md:p-5 rounded-t dark:border-gray-600">
                            <h4 class="text-xl font-medium text-gray-900 dark:text-white">
                                Informations Abscence
                            </h4>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">            
                            <label for="type_absence" class="sr-only">Type d'absence</label>
                            <select data-v-6b63125a="" id="type_absence" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option selected>Type d'absence</option>
                                <option data-v-6b63125a="" value="Congé annuel,"> Congé annuel</option>
                                <option data-v-6b63125a="" value="Congé mariage,4"> Congé mariage</option>
                                <option data-v-6b63125a="" value="Congé mariage d'un enfant,2"> Congé mariage d'un enfant</option>
                                <option data-v-6b63125a="" value="Décès d'un conjoint, d'un enfant, d'un petit enfant,3"> Décès d'un conjoint, d'un enfant, d'un petit enfant</option>
                                <option data-v-6b63125a="" value="Décès d'un conjoint, d'un enfant, d'un petit enfant,3"> Décès d'un conjoint, d'un enfant, d'un petit enfant</option>
                                <option data-v-6b63125a="" value="Décès d'un des parents, grand-père ou grand-mère,3"> Décès d'un des parents, grand-père ou grand-mère</option>
                                <option data-v-6b63125a="" value="Décèsd d'un frère, d'une sœur,2"> Décèsd d'un frère, d'une sœur</option>
                                <option data-v-6b63125a="" value="Décès d'un proche,1"> Décès d'un proche</option>
                                <option data-v-6b63125a="" value="Circoncision,2"> Circoncision</option>
                                <option data-v-6b63125a="" value="Convocation Tribunal,1"> Convocation Tribunal</option>
                                <option data-v-6b63125a="" value="Opération chirurgicale du conjoint ou d'un enfant à charge,2"> Opération chirurgicale du conjoint ou d'un enfant à charge</option>
                                <option data-v-6b63125a="" value="Accompagner un patient au cabinet du médecin,1"> Accompagner un patient au cabinet du médecin</option>
                                <option data-v-6b63125a="" value="Congé maternité,98"> Congé maternité</option>
                                <option data-v-6b63125a="" value="Maladie,"> Maladie</option>
                                <option data-v-6b63125a="" value="Récupération,"> Récupération</option>
                                <option data-v-6b63125a="" value="Examen ou Formation,"> Examen ou Formation</option>
                                <option data-v-6b63125a="" value="Autres,"> Autres</option>
                            </select>

                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" name="Motif" id="Motif" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="Motif" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Motif</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="Document_preuve">Document preuve</label>
                            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="Document_preuve" name="Document_preuve" type="file">
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="datetime-local"  name="Sortir" id="Sortir" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="Sortir" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sortir</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="datetime-local"  name="Reprise" id="Reprise" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="Reprise" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Reprise</label>
                            </div>
                        </div>
                        <div class="grid md:grid-cols-2 md:gap-6">
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="Nomber_de_Jours" disabled id="Nomber_de_Jours" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="Nomber_de_Jours" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nomber de Jours</label>
                            </div>
                            <div class="relative z-0 w-full mb-5 group">
                                <input type="text" name="Nomber_de_Jours_Ouvrables" disabled id="Nomber_de_Jours_Ouvrables" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label for="Nomber_de_Jours_Ouvrables" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nomber de Jours Ouvrables</label>
                            </div>
                        </div>
                    </div>
                        <div class="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Demande</button>
                            <button data-modal-hide="extralarge-modal" type="reset" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Quitter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'AppModal',
}
</script>
<style>
.DEMANDE_ABSENCE_SCROOL{
    height: 50vh !important;
    overflow-y : scroll;
}
.DEMANDE_ABSENCE_SCROOL::-webkit-scrollbar {
  display: none;
}
</style>