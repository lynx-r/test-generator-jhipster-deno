<template>
  <div>
    <h2 id="page-heading">This page was generated, please edit!</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PageOne',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  }
});
</script>

<style scoped>

</style>
