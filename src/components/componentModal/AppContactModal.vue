<template>
    <div id="extralarge-modal-contact" data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto  outline-none"
        tabindex="-1" aria-labelledby="rightBottomModalLabel" aria-hidden="true">
        <div data-te-modal-dialog-ref
        class="absolute bottom-7 right-7 w-auto translate-x-[100px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]">
            <div
                class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md bg-primary-600 p-4 dark:border-b dark:border-neutral-500 dark:bg-transparent">
                    <h1 class=" font-bold" style="color:#cc1c24">CHAT <span style="color:#243464">GTHCONSULT</span></h1>
                    <button type="button"
                        class="box-content rounded-none border-none text-white hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="DEMANDE_ABSENCE_SCROOL relative grid flex-auto grid-cols-2 p-4" data-te-modal-body-ref>
                    <div class="contact w-64 bg-gray-100 p-2 mr-1">
                        <h2 class="text-center contact_title font-bold	">Contacts</h2>
                        <hr>
                        <div class="contact_list flex items-center gap-1 mt-2 mb-2">
                            <img src="/img/person.8448cc54.png" alt="User" class="w-8 h-8 rounded-full mr-2"
                                data-v-7ba5bd90="">
                            <span>Soufian </span>
                        </div>

                        <div class="contact_list flex items-center gap-1 mt-2  mb-2">
                            <img src="/img/person.8448cc54.png" alt="User" class="w-8 h-8 rounded-full mr-2"
                                data-v-7ba5bd90="">
                            <span>Soufian </span>
                        </div>
                    </div>
                    <div class="chatgthconsult w-100">
                        <div class="message-envoye flex justify-end">
                            <div class="message mt-3 flex items-center p-4 text-sm text-gray-800 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600"
                                role="alert">
                                <span class="font-medium">Hi</span>
                            </div>
                        </div>
                        <div class="message-recue">
                            <div
                                class="message mt-3 font-medium items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800">
                                <span> Hello Hello Hello Hello Hello Hello Hello Hello </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <form class=" w-full flex items-center gap-2">
                        <textarea id="message" rows="1"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your message here..."></textarea>
                        <font-awesome-icon class="text-2xl text-custom-icon" :icon="['fas', 'upload']"
                            @click="openFileInput" />
                        <input ref="fileInput" type="file" style="display: none" @change="handleFileChange" />
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
.DEMANDE_ABSENCE_SCROOL {
    min-height: 60vh !important;
    overflow-y: scroll;
}

.DEMANDE_ABSENCE_SCROOL::-webkit-scrollbar {
    display: none;
}

.message {
    width: 75% !important;
    height: auto;
}

.text-custom-icon {
    color: #243464;
    transition: color 0.3s ease;
    cursor: pointer;
}

.contact_title {
    color: #243464;
}

.text-custom-icon:hover {
    color: #cc1c24;
}</style>