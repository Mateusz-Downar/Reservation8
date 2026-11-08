<script setup lang="ts">
import { ref } from 'vue'
import BackButton from '../components/BackButton.vue'
import { useClipboard } from '@vueuse/core'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const clubAddress = ref('ul. Bilardowa 8, 80-000 Gdańsk')
const { copy, copied } = useClipboard({ source: clubAddress })

const showHistory = ref(false)

const chartData = {
  labels: ['12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
  datasets: [
    {
      label: 'Średnie obłożenie stołów (%)',
      backgroundColor: '#22c55e',
      borderRadius: 6,
      data: [25, 50, 50, 75, 100, 75]
    }
  ]
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { font: { family: 'ui-sans-serif, system-ui, sans-serif' } }
    }
  }
}
</script>

<template>
  <BackButton />

  <div class="max-w-6xl mx-auto px-4 py-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4 text-white">O naszym klubie</h1>
      <p class="text-lg text-slate-300 max-w-2xl mx-auto">
        Jesteśmy rodzinnym klubem bilardowym z wieloletnią tradycją. Stawiamy na profesjonalny sprzęt, 
        świetną atmosferę i zimne napoje z naszego baru.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <div class="bg-slate-300 p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-center items-start">
        <h2 class="text-2xl font-bold mb-4 text-slate-800">Gdzie gramy?</h2>
        <p class="text-slate-600 mb-4">
          Nasz lokal znajduje się w samym sercu miasta. Wpadnij do nas z ekipą, miejsca na pewno nie zabraknie!
        </p>
        
        <div class="flex items-center gap-4 bg-slate-200 p-4 rounded-lg w-full">
          <span class="font-mono text-slate-800 font-semibold">{{ clubAddress }}</span>
          
          <button 
            @click="copy(clubAddress)" 
            class="btn btn-sm"
            :class="copied ? 'btn-success text-white' : 'btn-outline text-slate-800'"
          >
            {{ copied ? 'Skopiowano!' : 'Kopiuj adres' }}
          </button>
        </div>
      </div>

      <div class="bg-slate-300 p-6 rounded-2xl shadow-md border border-slate-100">
        <h2 class="text-2xl font-bold mb-4 text-slate-800">Kiedy najlepiej wpaść?</h2>
        <div class="h-64 w-full relative">
          <Bar :data="chartData" :options="chartOptions" />
        </div>
      </div>
    </div>

    <div class="bg-slate-900 rounded-2xl p-8 text-center shadow-lg border border-slate-700">
      <h2 class="text-2xl font-bold mb-4 text-white">Chcesz poznać nasze początki?</h2>
      <button 
        @click="showHistory = !showHistory" 
        class="btn btn-primary bg-emerald-500 hover:bg-emerald-600 border-none text-white"
      >
        {{ showHistory ? 'Zwiń historię' : 'Rozwiń historię' }}
      </button>

      <Transition name="fade-slide">
        <div v-if="showHistory" class="mt-6 text-slate-300 text-left max-w-3xl mx-auto leading-relaxed overflow-hidden">
          <p class="mb-4">
            Wszystko zaczęło się w 1998 roku, kiedy nasz założyciel kupił pierwszy, używany stół do ósemki i postawił go 
            w garażu. Z czasem zjeżdżali się tam sąsiedzi z całej okolicy. 
          </p>
          <p>
            Dziś mamy 4 profesjonalne stoły turniejowe oraz strefę VIP. 
            Niezależnie od tego, czy trzymasz kij pierwszy raz, czy robisz "czyszczenie stołu" z zamkniętymi oczami – 
            u nas poczujesz się jak w domu.
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>