<template>
  <form class="card card-w30">
    <BlockTypes @changeType="onChangeType" />

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="10" v-model="content"></textarea>
    </div>

    <button class="btn primary" @click.prevent="submit">Добавить</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BlockTypes from "./BlockTypes";

export default {
  name: "BlockForm",
  data: () => ({
    type: {
      id: "title",
      name: "Заголовок",
    },
    content: "",
  }),
  components: {
    BlockTypes,
  },
  methods: {
    ...mapGetters("resume", ["listLenght"]),
    ...mapActions("resume", ["addBlock"]),
    submit() {
      const newP = {
        id: this.listLenght(),
        type: this.type,
        content: this.content,
      };
      this.addBlock(newP);
    },
    onChangeType(newType) {
      this.type = newType;
      this.content = "";
    },
  },
};
</script>
