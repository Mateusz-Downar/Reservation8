<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="max-w-6xl mx-auto px-4 pt-6 m-3 flex justify-start">
    <RouterLink 
      to="/" 
      class="flex flex-col items-center gap-2 group transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      <img 
        src="/cue.png" 
        alt="Kij bilardowy" 
        class="h-24 w-auto object-contain drop-shadow-md"
      />
      
      <span class="text-xs font-bold uppercase tracking-widest text-slate-700 group-hover:text-emerald-600 transition-colors">
        Strona Główna
      </span>
    </RouterLink>
  </div>
</template>