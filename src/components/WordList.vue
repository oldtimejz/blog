<template>
    <div class="wordlist">
        <Worditem @resp="showCBox"></Worditem>
    </div>
</template>
<script>
import Worditem from "./Worditem";
export default {
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