<script setup lang="ts">

const props = defineProps<{table: {id: number, name: string, image: string}}>()

const emit = defineEmits<{(e: 'open-reservation', tableId: number): void}>()
</script>

<template>
<div class="card image-full group aspect-auto cursor-pointer transition hover:scale-105 font-mono text-center m-3" @click="emit('open-reservation', props.table.id)">
<div class="card-body">
  <h2 class="card-title text-3xl font-bold text-white z-10 group-hover:text-green-500">
  <slot name="title">{{ props.table.name }}</slot>
</h2>
</div>
<slot name="badges"></slot>
    <figure class="m-0">
      <img :src="props.table.image" class="w-full h-full object-cover" />
    </figure>
</div>
</template>