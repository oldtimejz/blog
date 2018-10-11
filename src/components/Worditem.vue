<template>
    <div class="w-items">
        <div class="item-title">
            <img class="u-headimg left" src="../assets/logo.png" alt="">
            <span class="u-name">{{commentitem.username}}</span>
            <span class="right">{{ commentitem.date | dateFormat}}</span>
        </div>
        <div class="item-content">
          {{commentitem.content}}
        </div> 
        <div class="item-resp">
            <p @click="respone">发表评论</p>
              <ul>
                  <li v-for='r in commentitem.resp' :key="r.id"><span @click="respone">{{r.commenter}}<span class="huifu">回复</span>{{r.responser}}：{{r.content}}</span></li>
              </ul>
        </div>
    </div>
</template>
<script>
export default {
  props: ["flag", "commentitem"],
  methods: {
    respone() {
      this.$emit("resp", { flag: true, type: "回复" });
    }
  },
  filters: {
    dateFormat(date, pattern = "") {
      var new_date = new Date(date);
      console.log(date);
      var year = new_date.getFullYear();
      var month = (new_date.getMonth() + 1).toString().padStart(2, "0");
      var d = new_date
        .getDate()
        .toString()
        .padStart(2, "0");

      return `${year}-${month}-${d}`;
    }
  }
};
</script>
<style scoped>
.w-items {
  padding: 10px 20px;
  width: 70%;
  min-height: 100px;
  border: 1px solid #efefef;
  border-radius: 20px;
  text-align: left;
  font-size: 14px;
  background: rgba(86, 156, 156, 0.2);
  color: #fff;
  transition: all 0.4s;
  margin-bottom: 40px;
}
.w-items:hover {
  box-shadow: 1px 1px 8px #99daaf;
}
.item-title {
  height: 40px;
  line-height: 40px;
}
.item-content {
  padding-top: 15px;
  text-indent: 2em;
}
.u-headimg {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #fff;
}
.item-resp {
  margin-top: 10px;
  border-top: 1px solid #fff;
}
.u-name {
  display: inline-block;
  margin-left: 20px;
}
ul {
  margin-left: 20px;
}
ul li {
  padding: 5px 50px 5px 0;
}
p {
  color: #123c4c;
  font-weight: 600;
}
.huifu {
  display: inline-block;
  margin: 0 3px;
  color: #4d949a;
}
</style>

