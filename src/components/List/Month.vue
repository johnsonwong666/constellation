<template>
  <div class="list">
    <cons-summary field="健康" :content="data.health" />
    <cons-summary field="工作" :content="data.work" />
    <cons-summary field="爱情" :content="data.love" />
    <cons-summary field="财运" :content="data.money" />
    <cons-summary field="本月" :content="data.all" />
  </div>
</template>

<script>
export default {
  name: "MonthList",
  props: {
    data: Object,
  },
};
</script>

<style scoped>
.list {
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
}
</style>
