<template>
  <div class="card">
    <div class="wrapper">
      <img :src="require(`@/assets/img/${consName || '白羊座'}.jpg`)" :alt="consName" />
      <div class="mask">
        <h1>{{consName || '白羊座'}}</h1>
        <p v-if='allIndex'>综合指数: {{allIndex || 0}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    consName: String,
    allIndex: Number || String
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: .1rem;
  box-sizing: border-box;

  .wrapper {
    position: relative;
    border-radius: .15rem;
    box-shadow: .02rem .03rem .05rem #333;
    overflow: hidden;

    .mask {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .4);
      color: #FFD7F5;
      font-size: .5rem;

      p {
        font-size: .2rem;
        color: #fff;
        margin-top: .35rem;
      }
    }
  }
}
</style>
