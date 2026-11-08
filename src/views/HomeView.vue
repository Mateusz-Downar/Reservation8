<template>
  <div class="relative bg-cover bg-center h-[65vh] flex items-center justify-center bg-black/50"
       style="background-image: url('https://images.unsplash.com/photo-1656381836187-79f6d0ae2e57?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
    
    <div class="absolute inset-0 bg-black/50"></div>
    
    <div class="relative z-10 text-center text-white px-4">
      <h1 class="text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
        Rodzinny klub bilardowy
      </h1>
      <p class="text-xl max-w-xl mx-auto mb-8 text-gray-200 drop-shadow-sm">
        Zapraszamy do naszego klubu bilardowego, doskonała atmosfera i profesjonalne stoły czekają na was
      </p>
      <RouterLink 
        to="/TablesView" 
        class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all transform hover:scale-105 inline-block"
      >
        Zarezerwuj stolik
      </RouterLink>
    </div>
  </div>
</template>