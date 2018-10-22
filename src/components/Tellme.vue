<template>
    <div>
        <div class="writeworld"><a href="javascript:void;" @click="liuyan">[写留言]</a></div>
        <WordList @showCommentBox="show" :comments='comments' ></WordList>
        <transition name="my">
            <CommentBox @close="close" v-show="flag" :type="type" @comment="comment"></CommentBox>
        </transition>
    </div>
</template>
<script>
import WordList from "./WordList";
import CommentBox from "./CommentBox";
export default {
  data() {
    return {
      flag: false,
      type: "留言",
      r: null,
      comments: [
        {
          id: 1,
          username: "游客0",
          content: "感谢博主",
          date: new Date(),
          resp: [
            {
              cid: 1,
              commenter: "游客1",
              responser: "游客a",
              content: "同上"
            }
          ]
        },
        {
          id: 2,
          username: "游客2",
          content: "感谢博主",
          date: new Date(),
          resp: [
            {
              cid: 1,
              commenter: "游客2",
              responser: "游客b",
              content: "同上"
            }
          ]
        },
        {
          id: 3,
          username: "游客0",
          content: "感谢博主",
          date: new Date(),
          resp: [
            {
              cid: 1,
              commenter: "游客1",
              responser: "游客c",
              content: "同上"
            }
          ]
        }
      ]
    };
  },
  methods: {
    liuyan() {
      this.flag = !this.flag;
      this.type = "留言";
    },
    show(data) {
      this.flag = data.flag;
      this.type = data.type;
      if (data.id) {
        this.r = data;
      } else {
        this.r = null;
      }
    },
    close(data) {
      this.flag = data;
    },
    comment(data) {
      if (data.content.trim() == "") {
        this.$message({
          message: "警告,输入内容不能为空!",
          type: "warning"
        });
      } else if (data.type == "留言") {
        var datas = {
          id: this.comments.length,
          username: "游客4",
          content: data.content,
          date: new Date(),
          resp: []
        };
        this.comments.unshift(datas);
        this.$message({
          message: "评论成功",
          type: "success"
        });
        this.flag = !this.flag;
      } else {
        //如果是留言。需要回说明回复的人
        if (this.r) {
          for (var i = 0, len = this.comments.length; i < len; i++) {
            if (this.comments[i].id == this.r.id) {
              var datas = {
                cid: this.r.r ? this.r.r.length : this.comments[i].resp.length,
                commenter: "游客4",
                responser: this.r.r
                  ? this.r.r.responser || this.r.r.commenter //如果是单独评论的话就是没有回复的人，如果是评论其他人的话那就是判断是否有回复人没有的话就是评论人
                  : undefined,
                content: data.content
              };
              this.comments[i].resp.push(datas);
              break;
            }
          }
        }

        this.$message({
          message: "评论成功",
          type: "success"
        });
        this.flag = !this.flag;
      }
    }
  },
  components: {
    WordList,
    CommentBox
  }
};
</script>
<style>
.writeworld {
  text-align: right;
  padding-bottom: 10px;
}
.my-enter,
.my-leave-to {
  transform: translateY(80px);
}
.my-enter-active,
.my-leave-active {
  transition: all 0.3s ease-in;
}
</style>

