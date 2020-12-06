<template>
  <div class="list">
    <cons-item title="所在年份" :content="data.date"></cons-item>
    <cons-item title="幸运石头" :content="data.luckeyStone"></cons-item>
    <cons-summary field="健康" :content="data.health && data.health[0]" />
    <cons-summary field="事业" :content="data.career && data.career[0]" />
    <cons-summary field="爱情" :content="data.love && data.love[0]" />
    <cons-summary field="财运" :content="data.finance && data.finance[0]" />
    <cons-summary field="本年" :content="data.mima && `${data.mima.info}。${data.mima.text[0]}`" />
  </div>
</template>

<script>
export default {
  name: "YearList",
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
