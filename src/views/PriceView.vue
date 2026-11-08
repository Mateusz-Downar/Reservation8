
<script setup lang="ts">
import { ref, computed } from 'vue'
import draggable from 'vuedraggable' 
import BackButton from '../components/BackButton.vue'
//Co się dzieje: Importujemy potrzebne narzędzia z Vue, komponent biblioteki do przeciągania oraz lokalny komponent przycisku powrotu (BackButton).

const dostepneUslugi = ref([
  { id: 1, nazwa: 'Godzina gry w bilard', cena: 40 },
  { id: 2, nazwa: 'Wynajem loży VIP', cena: 100 },
  { id: 3, nazwa: 'Trening z instruktorem', cena: 80 },
  { id: 4, nazwa: 'Catering / Przekąski', cena: 150 },
  { id: 5, nazwa: 'Impreza urodzinowa', cena: 800 }
])

//Co się dzieje: Tworzymy reaktywną listę obiektów (za pomocą ref). Zawiera ona sztywną ofertę klubu (bilard, VIP loża itp.). Każdy obiekt ma swoje id, nazwę i cenę.

// Powód: Dzięki ref, jeśli w przyszłości te dane pobieralibyśmy dynamicznie z bazy danych, Vue automatycznie przerysuje widok po ich załadowaniu.
const wybraneUslugi = ref<any[]>([])
//Co się dzieje: Deklarujemy pustą reaktywną tablicę, do której będą trafiały usługi wybrane przez użytkownika.

//Powód: any[] oznacza tablicę dowolnych obiektów. (Mała uwaga: w idealnym świecie TypeScriptu warto byłoby stworzyć interfejs Usluga, zamiast używać any).

const lacznaCena = computed(() => {
  return wybraneUslugi.value.reduce((suma, usluga) => suma + usluga.cena, 0)
})
//Co się dzieje: Tworzymy tzw. właściwość obliczaną (computed). Przebiega ona przez tablicę wybraneUslugi i sumuje ceny wszystkich dodanych tam pozycji za pomocą metody .reduce().

//Powód: Właściwości obliczane w Vue są keszowane. Oznacza to, że funkcja przeliczy sumę tylko wtedy, gdy użytkownik faktycznie doda lub usunie coś z koszyka. To ogromna oszczędność wydajnościowa.

</script>

<template>
  <BackButton />

  <div class="max-w-6xl mx-auto px-4 py-8 text-slate-500">
    <h1 class="text-3xl font-bold mb-4 text-slate-300">Cennik & Kalkulator Imprezy</h1>
    <p class="text-gray-500 mb-8 text-slate-300">Przeciągnij interesujące Cię pozycje do symulatora, aby sprawdzić koszt.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      <div>
        <h3 class="text-lg font-bold mb-4 text-slate-300">Przeciągnij z oferty:</h3>
        <draggable 
          :list="dostepneUslugi" 
          :group="{ name: 'uslugi', pull: 'clone', put: false }" 
          item-key="id"
          class="space-y-3"
        >
          <template #item="{ element }">
            <div class="bg-white p-4 rounded-xl shadow-sm border border-slate-200 cursor-grab hover:border-green-500 transition-colors flex justify-between items-center">
              <span class="font-medium">{{ element.nazwa }}</span>
              <span class="text-green-600 font-bold">{{ element.cena }} zł</span>
            </div>
          </template>
        </draggable>
      </div>
      
      <div class="bg-slate-50 p-6 rounded-2xl border-2 border-dashed border-slate-300">
        <h3 class="text-lg font-bold mb-4 text-slate-500">Twoja rezerwacja (Upuść tutaj):</h3>
        
        <draggable 
          :list="wybraneUslugi" 
          group="uslugi" 
          item-key="uniqueId"
          class="space-y-3 min-h-[150px]"
        >
          <template #item="{ element }">
            <div class="bg-green-50 p-4 rounded-xl border border-green-200 flex justify-between items-center">
              <span class="font-semibold text-slate-700">{{ element.nazwa }}</span>
              <span class="text-green-600 font-bold">{{ element.cena }} zł</span>
            </div>
          </template>
        </draggable>

        <div class="mt-8 border-t pt-4 flex justify-between items-center">
          <span class="text-xl font-bold text-slate-700">Razem szacowany koszt:</span>
          <span class="text-2xl font-extrabold text-green-600">{{ lacznaCena }} zł</span>
        </div>

        <RouterLink 
          to="/TablesView" 
          class="w-full text-center mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all inline-block"
        >
          Przejdź do rezerwacji stołu
        </RouterLink>
      </div>

    </div>
  </div>
</template>

