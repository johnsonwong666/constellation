<template>
  <div class="today">
    <card :consName="todayData.name" :allIndex="todayData.all"></card>
    <num-list :data="todayData"></num-list>
    <cons-list :data="todayData"></cons-list>
  </div>
</template>

<script>
import { computed, onMounted, onActivated, ref } from "vue";
import { useStore } from "vuex";
import getData from "@/services";

import NumList from "@/components/NumList";
import ConsList from "@/components/List/Today";
export default {
  name: "TodayPage",
  components: {
    NumList,
    ConsList,
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
      todayData: computed(() => state.today),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
