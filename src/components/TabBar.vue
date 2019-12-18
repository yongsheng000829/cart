<template>
  <div class="list">
    <div class="left">
      <div
        v-for="(item,index) in tabData"
        :class="index==tabIndex?'left-active':''"
        :key="index"
        @click="changeIndex(index)"
      >{{item.title}}</div>
    </div>
    <div class="right">
      <div v-for="(item,index) in tabData[tabIndex].children" :key="index">
        <img :src="item.img" alt />
        <h3>{{item.title}}</h3>
        <b>￥{{item.price}}</b>
        <button
          @click="addCart(item)"
          :class='item.isMine?"yes":""'
        >{{item.isMine?'已在购物车中':'加入购物车'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
        tabData:this.$store.state.tabData
    };
  },
  computed: {
    ...mapState([ "tabIndex"])
  },
  methods: {
    ...mapMutations(["changeIndex", "addCart"])
  }
};
</script>