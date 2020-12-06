<template>
  <div id="app">
    <my-header>星座物语</my-header>
    <my-navBar></my-navBar>
    <error-tip></error-tip>
    <router-view v-slot='{Component}' v-if="!errorCode">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <my-tab></my-tab>
  </div>
</template>


<script>
import MyHeader from "@/components/Header";
import MyTab from "@/components/Tab";
import MyNavBar from "@/components/NavBar"
import ErrorTip from "@/components/Error"
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, watch } from "vue";

export default {
  name: "app",
  components: {
    MyHeader,
    MyTab,
    MyNavBar,
    ErrorTip
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = store.state;


    router.push('/')
       store.commit('setType', 'today')

    watch(() => {
      return router.currentRoute.value.name;
    }, (value) => {
      store.commit('setType', value)
    });



    return {
      errorCode: computed(() => state.errorCode)
    }
  },
};
</script>
<style lang="scss">
  #app {
    padding-bottom: .2rem;
  }
</style>
