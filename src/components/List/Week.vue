<template>
  <div class="list">
    <cons-item title="本周日期" :content="data.date"></cons-item>
    <cons-summary field="工作" :content="data.work" />
    <cons-summary field="恋爱" :content="data.love" />
    <cons-summary field="学业" :content="data.job" />
    <cons-summary field="财运" :content="data.money" />
  </div>
</template>

<script>
export default {
  name: "WeekList",
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
}
</style>
