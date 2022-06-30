<template>
  <div class="block-show-wrap">
    <h1 v-if="showTitle">{{ content }}</h1>
    <h2 v-if="showSubTitle">{{ content }}</h2>
    <div class="avatar" v-if="showAvatar">
      <img :src="content" />
    </div>
    <p v-if="showText" v-html="showContentAsHTML"></p>
  </div>
</template>

<script>
export default {
  name: "BlockShow",
  props: {
    blockType: {
      type: Object,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    showTitle() {
      return this.blockType.id === "title";
    },
    showSubTitle() {
      return this.blockType.id === "subtitle";
    },
    showAvatar() {
      return this.blockType.id === "avatar";
    },
    showText() {
      return this.blockType.id === "text";
    },
    showContentAsHTML() {
      return this.content.replace(/\n|\r/g, "<br />").replace(/\t/g, "&emsp;");
    },
  },
};
</script>

<style scoped>
.block-show-wrap {
  font-size: 10px;
}
</style>
