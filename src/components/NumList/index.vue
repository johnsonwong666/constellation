<template>
    <div class='num-list'>
      <num-item v-for="(item, index) of numData" :key="index" :item='item' :data='data'></num-item>
    </div>
</template>

<script>
import NumItem from './Item'
import numData from '@/datas/num'
import {ref, reactive} from 'vue'
export default {
  name: 'NumList',
  components: {
    NumItem
  },
  props: {
    data: Object
  },
  setup(){
   


    return {
      numData
    }
  }
};
</script>


<style lang="scss" scoped>
.num-list {
  display: flex;
  flex-direction: row;
  margin: .15rem 0;
  padding: .1rem;
  box-shadow: .02rem .02rem .05rem #999;
}
</style>
