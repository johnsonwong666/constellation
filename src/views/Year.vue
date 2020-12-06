<template>
  <div>
    <card :consName="yearData.name" :allIndex="yearData.all"></card>
    <year-list :data="yearData"></year-list>
  </div>
</template>

<script>
import { computed, onMounted, onActivated, ref } from "vue";
import { useStore } from "vuex";
import getData from "@/services";
import YearList from "@/components/List/Year";
export default {
  name: "YearPage",
  components: {
    YearList,
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
      yearData: computed(() => state.year),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
