<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import BackButton from '../components/BackButton.vue'
import CustomInput from '../components/CustomInput.vue'

const vFocus = {
  mounted: (el: HTMLElement) => el.focus()
}

const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitted = ref(false)

const isNameValid = computed(() => name.value.trim().length > 2)
const isEmailValid = computed(() => email.value.includes('@') && email.value.includes('.'))
const isMessageValid = computed(() => message.value.trim().length >= 10)

const isFormValid = computed(() => isNameValid.value && isEmailValid.value && isMessageValid.value)

watch(message, (newValue) => {
  localStorage.setItem('contact_draft', newValue)
})

onMounted(() => {
  const draft = localStorage.getItem('contact_draft')
  if (draft) {
    message.value = draft
  }
})

function submitForm() {
  if (isFormValid.value) {
    isSubmitted.value = true
    
    setTimeout(() => {
      name.value = ''
      email.value = ''
      message.value = ''
      localStorage.removeItem('contact_draft')
      isSubmitted.value = false
    }, 3000)
  }
}
</script>

<template>
  <BackButton />

  <div class="max-w-4xl mx-auto px-4 py-8 ">
    <h1 class="text-3xl font-bold mb-6 text-center">Skontaktuj się z nami</h1>
    
    <div class="p-8 rounded-2xl shadow-lg border border-slate-300 bg-slate-500">
      <form @submit.prevent="submitForm" class="flex flex-col gap-4 bg-slate-500">
        
        <div class="w-full">
          <label class="block mb-2 font-semibold text-slate-700">Imię</label>
          <input 
            v-model="name" 
            v-focus
            type="text" 
            placeholder="Wpisz swoje imię" 
            class="input input-bordered w-full transition-colors"
            :class="{ 'input-error border-red-500': name.length > 0 && !isNameValid }"
          />
          <span v-if="name.length > 0 && !isNameValid" class="text-red-500 text-sm mt-1">
            Imię musi mieć minimum 3 znaki.
          </span>
        </div>

        <CustomInput 
          v-model="email"
          label="Adres e-mail"
          type="email"
          placeholder="twoj@email.com"
          :hasError="email.length > 0 && !isEmailValid"
          errorMessage="Podaj poprawny adres email (wymagany znak @ oraz domena)."
        />

        <div class="w-full">
          <label class="block mb-2 font-semibold text-slate-700">Twoja wiadomość</label>
          <textarea 
            v-model="message" 
            class="textarea textarea-bordered w-full h-32 transition-colors text-base"
            placeholder="Napisz w czym możemy Ci pomóc..."
            :class="{ 'textarea-error border-red-500': message.length > 0 && !isMessageValid }"
          ></textarea>
          <span v-if="message.length > 0 && !isMessageValid" class="text-red-500 text-sm mt-1">
            Wiadomość musi zawierać minimum 10 znaków.
          </span>
          <span v-else class="text-slate-400 text-xs mt-1 block">
            Wpisany tekst jest automatycznie zapisywany.
          </span>
        </div>

        <div v-if="isSubmitted" class="alert alert-success mt-4">
          <span>Dziękujemy! Twoja wiadomość została wysłana.</span>
        </div>

        <button 
          type="submit" 
          class="btn btn-success mt-4 text-white font-bold"
          :disabled="!isFormValid || isSubmitted"
        >
          Wyślij wiadomość
        </button>

      </form>
    </div>
  </div>
</template>