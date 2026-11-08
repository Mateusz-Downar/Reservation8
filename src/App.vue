<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-900">
    
    <main class="flex-grow">
      <RouterView />
    </main>

    <div class="w-full px-4 py-12 border-t border-gray-200 bg-slate-300">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <RouterLink to="/AboutView" class="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img src="https://images.unsplash.com/photo-1575553939928-d03b21323afe?q=80&w=1740&auto=format&fit=crop" alt="O nas" class="w-full h-36 object-cover hover:scale-110 transition-transform" />
          <div class="p-4 text-center">
            <h3 class="text-lg font-bold text-gray-800">O nas</h3>
            <span class="text-green-600 text-sm font-semibold">Czytaj więcej </span>
          </div>
        </RouterLink>

        <RouterLink to="/PriceView" class="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img src="https://images.unsplash.com/photo-1730752091828-6f2e2637d274?q=80&w=1740&auto=format&fit=crop" alt="Menu" class="w-full h-36 object-cover hover:scale-110 transition-transform" />
          <div class="p-4 text-center">
            <h3 class="text-lg font-bold text-gray-800">Oferta</h3>
            <span class="text-green-600 text-sm font-semibold">Zobacz menu </span>
          </div>
        </RouterLink>

        <RouterLink to="/ContactView" class="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1748&auto=format&fit=crop" alt="Kontakt" class="w-full h-36 object-cover hover:scale-110 transition-transform" />
          <div class="p-4 text-center">
            <h3 class="text-lg font-bold text-gray-800">Kontakt</h3>
            <span class="text-green-600 text-sm font-semibold">Kontakt</span>
          </div>
        </RouterLink>

      </div>
    </div>

    <footer class="w-full bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-center text-sm mt-auto">
      <div class="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <RouterLink 
          to="/PrivacyPolicyView" 
          class="text-white hover:underline font-bold text-base tracking-wide"
        >
          Polityka prywatności
        </RouterLink>
        <RouterLink 
          to="/RulesView" 
          class="text-white hover:underline font-bold text-base tracking-wide"
        >
          Regulamin
        </RouterLink>

        <div>
          <p>ul. Bilardowa 8, 80-000 Gdańsk</p>
          <p>Otwarte codziennie: 12:00 - 24:00</p>
        </div>
        
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <div class="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-slate-700 pt-2 sm:pt-0 sm:pl-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" class="w-5 h-5" />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition-opacity">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" class="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>