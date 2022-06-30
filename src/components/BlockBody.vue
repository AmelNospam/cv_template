<template>
  <div class="card card-w70">
    <BlockShow
      v-for="item in getBlocks"
      :blockType="item.type"
      :content="item.content"
      :key="item.id"
    />
    <h3 v-if="isEmptyList">Добавьте первый блок, чтобы увидеть результат</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BlockShow from "./BlockShow";

export default {
  name: "BlockBody",
  computed: {
    ...mapGetters("resume", ["getBlocks", "isEmptyList"]),
  },
  components: {
    BlockShow,
  },
};
</script>

<style scoped>
.myclass {
  font-size: 10px;
}
</style>
