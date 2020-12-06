<template>
  <div>
    <card :consName="monthData.name" :allIndex="Number(monthData.all)"></card>
    <month-list :data='monthData'></month-list>
  </div>
</template>

<script>
import { computed, onMounted, onActivated, ref } from "vue";
import { useStore } from "vuex";
import getData from "@/services";
import MonthList from '@/components/List/Month'
export default {
  name: "MonthPage",
  components: {
    MonthList
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
      monthData: computed(() => state.month)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
