<template>
  <div class="list">
    <cons-item title="明日日期" :content="data.datetime"></cons-item>
    <cons-item title="配对星座" :content="data.QFriend"></cons-item>
    <cons-item title="幸运颜色" :content="data.color"></cons-item>
    <cons-item title="幸运数字" :content="data.number"></cons-item>
    <cons-summary field='明日' :content='data.summary'/>
  </div>
</template>

<script>


export default {
  name: "Tomorrowist",
  props: {
    data: Object,
  },
  setup(){
  
  }
};
</script>

<style scoped>
.list {
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
}
</style>