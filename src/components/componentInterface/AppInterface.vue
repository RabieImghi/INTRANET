<template>
  <div class="flex mt-4 items-center  flex-col">
  <h3 class="text-2xl font-extrabold"><span class="first">   INTRANET </span><span class="second"> GTHCONSULT </span></h3>
    <div class="flex mt-4">
      <a href="/Administrativ">
        <div class="parent overlay1 hover-zoom mx-4 relative w-96 h-64 flex flex-col justify-center items-center">
          <img src="@/assets/adm.jpg" alt="Image 1" class="w-full h-full object-cover absolute inset-0 z-10">
          <div class="overlay-content p-4 text-center relative z-20">
            <h3 class="mt-2 text-lg text-slate-100 font-extrabold">DEPARTEMENT ADMINISTRATIVE</h3>
          </div>
        </div>
      </a>
      <a href="/Production">
      <div class="parent overlay hover-zoom mx-4 relative w-96 h-64 flex flex-col justify-center items-center">
        <img src="@/assets/departement.jpeg" alt="Image 2" class="w-full h-full object-cover absolute inset-0 z-10">
        <div class="overlay-content p-4 text-center relative z-20">
          <h3 class="mt-2 text-lg text-slate-100 font-extrabold">DEPARTEMENT PRODUCTION</h3>
        </div>
      </div>
      </a>
    </div>

    <div class="flex mt-4">
    <a href="/Technique">
      <div class="parent overlay hover-zoom mx-4 relative w-96 h-64 flex flex-col justify-center items-center">
        <img src="@/assets/depqualité.jpg" alt="Image 3" class="w-full h-full object-cover absolute inset-0 z-10">
        <div class="overlay-content p-4 text-center relative z-20">
          <h3 class="mt-2 text-lg text-slate-100 font-extrabold">DEPARTEMENT TECHNIQUE</h3>
        </div>
      </div>
    </a>
      <a href="/Quality">
        <div class="parent overlay1 hover-zoom mx-4 relative w-96 h-64 flex flex-col justify-center items-center">
          <img src="@/assets/deprtech.jpg" alt="Image 4" class="w-full h-full object-cover absolute inset-0 z-10">
          <div class="overlay-content p-4 text-center relative z-20">
            <h3 class="mt-2 text-lg text-slate-100 font-extrabold">DEPARTEMENT QUALITE</h3>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.parent {
  overflow: hidden;
  cursor: pointer;
  width: 500px;
}

body {
  overflow: hidden;
}

img {
  transition: 0.3s ease;
}

.hover-zoom:hover img {
  transform: scale(1.1);
}

.overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: #243464;
  z-index: 15;
}

.overlay1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: #cc1c24;
  z-index: 15;
}

.overlay-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.first{
    color:#cc1c24;
}
.second{
    color:#243464;
}
</style>
