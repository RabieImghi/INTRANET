<template> 
    <div id="extralarge-modal-contact" data-modal-placement="bottom-right" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h1 class=" font-bold" style="color:#cc1c24">CHAT <span style="color:#243464">GTHCONSULT</span></h1> 
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal-contact">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="DEMANDE_ABSENCE_SCROOL flex  p-4 md:p-5 space-y-4">
                <div class="contact w-48 bg-gray-100 p-2 mr-1">
                    <h2 class="text-center contact_title font-bold	">Contacts</h2>
                    <hr>
                    <div class="contact_list flex items-center gap-1 mt-2 mb-2">
                        <img src="/img/person.8448cc54.png" alt="User" class="w-8 h-8 rounded-full mr-2" data-v-7ba5bd90="">
                        <span>Soufian </span>
                    </div>
                    
                    <div class="contact_list flex items-center gap-1 mt-2  mb-2">
                        <img src="/img/person.8448cc54.png" alt="User" class="w-8 h-8 rounded-full mr-2" data-v-7ba5bd90="">
                        <span>Soufian </span>
                    </div>
                </div>
                <div class="chatgthconsult w-96">
                    <div class="message-envoye flex justify-end">
                        <div class="message mt-3 flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600" role="alert">
                            <span class="font-medium">Hi</span>
                        </div>
                    </div>
                    <div class="message-recue">
                        <div class="message mt-3 font-medium items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" >
                        <span> Hello  Hello  Hello  Hello  Hello  Hello  Hello  Hello </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <form class=" w-full flex items-center gap-2">
                    <textarea id="message" rows="1" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message here..."></textarea>
                    <font-awesome-icon class="text-2xl text-custom-icon" :icon="['fas', 'upload']" @click="openFileInput" />
                    <input ref="fileInput" type="file" style="display: none" @change="handleFileChange"/>
                    <font-awesome-icon class="text-2xl text-custom-icon" :icon="['fas', 'paper-plane']" />
                </form>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'AppContactModal',
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const selectedFile = event.target.files[0];
      console.log('Selected File:', selectedFile);
    },
  },
}

</script>
<style>
.DEMANDE_ABSENCE_SCROOL{
    height: 60vh !important;
    overflow-y: scroll;
}
.DEMANDE_ABSENCE_SCROOL::-webkit-scrollbar {
  display: none;
}
.message{
    width: 75% !important;
    height : auto;
}
.text-custom-icon {
  color: #243464;
  transition: color 0.3s ease;
  cursor:pointer;
}
.contact_title{
    color: #243464;
}
.text-custom-icon:hover {
  color: #cc1c24;
}
</style>