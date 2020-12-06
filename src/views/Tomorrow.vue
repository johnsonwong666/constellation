<template>
  <div>
    <card :consName="tomorrowData.name" :allIndex="tomorrowData.all"></card>
    <tomorrow-list :data='tomorrowData'></tomorrow-list>
  </div>
</template>

<script>
import { computed, onMounted, onActivated, ref } from "vue";
import { useStore } from "vuex";
import getData from "@/services";
import TomorrowList from '@/components/List/Tomorrow'

export default {
  name: "TomorrowPage",
  components: {
    TomorrowList
  },
  setup() {
     const store = useStore(),
      state = store.state,
      status = ref("");
    onMounted(() => {
      getData(store);
      status.value = state.consName;
    });
    onActivated(() => {
      if (status.value != state.consName) {
        getData(store);
        status.value = state.consName;
      }
    });


    return {
      tomorrowData: computed(() => state.tomorrow)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
