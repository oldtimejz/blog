<template>
    <div class="wordlist">
      <transition-group>
        <Worditem @resp="showCBox" v-for="item in comments" :key="item.id" :commentitem='item'></Worditem>
      </transition-group>  
    </div>
</template>
<script>
import Worditem from "./Worditem";
export default {
  props: ["comments"],
  data() {
    return {};
  },
  methods: {
    showCBox(data) {
      this.$emit("showCommentBox", data);
    }
  },
  components: {
    Worditem
  }
};
</script>
<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(80px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease-in;
}
.v-leave-active {
  position: absolute;
  width: 100%;
}
</style>
