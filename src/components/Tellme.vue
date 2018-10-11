<template>
    <div>
        <WordList @showCommentBox="show"></WordList>
        <transition name="my">
            <CommentBox @close="close" v-show="flag"></CommentBox>
        </transition>
    </div>
</template>
<script>
import WordList from "./WordList";
import CommentBox from "./CommentBox";
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    show(data) {
      this.flag = data;
    },
    close(data) {
      this.flag = data;
    }
  },
  components: {
    WordList,
    CommentBox
  }
};
</script>
<style>
.my-enter,
.my-leave-to {
  transform: translateY(80px);
}
.my-enter-active,
.my-leave-active {
  transition: all 0.3s ease-in;
}
</style>

