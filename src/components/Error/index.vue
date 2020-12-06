<template>
  <div class="error-tip" v-if="errorCode">
    <img :src="require('../../assets/img/error.png')" />
    <p>{{errorCode}}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import errorData from "@/datas/error";
export default {
  name: "Error",
  setup() {
    const store = useStore(),
      state = store.state;
    return {
      errorCode: computed(() => state.errorCode),
      errorData,
    };
  },
};
</script>
<style lang="scss" scoped>
.error-tip {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;

  img {
    width: 0.5rem;
  }

  p {
    margin-top: 0.15rem;
    font-size: 0.14rem;
    color: #999;
  }
}
</style>
