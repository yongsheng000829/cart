<template>
  <div class="list-cart">
    <div v-for="(item,index) in cartData" :key="index">
      <input type="checkbox" />
      <img :src="item.img" alt />
      <b>{{item.title}}</b>
      <b>￥{{item.price}}</b>
      <p>
        <button @click="changeCount({id:item.id,type:'minus'})">-</button>
        <span>{{item.count}}</span>
        <button @click="changeCount({id:item.id,type:'add'})">+</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["cartData"])
  },
  methods: {
    ...mapMutations(["changeCount"])
  }
};
</script>