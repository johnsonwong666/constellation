<template>
  <div>
    <card :consName="weekData.name" :allIndex="weekData.all"></card>
    <week-list :data="weekData"></week-list>
  </div>
</template>

<script>
import { computed, onMounted, onActivated, ref } from "vue";
import { useStore } from "vuex";
import WeekList from "@/components/List/Week";
import getData from "@/services";
export default {
  name: "WeekPage",
  components: {
    WeekList,
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
      weekData: computed(() => state.week),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
