<template>
  <div class="form-control types-wrap">
    <label for="type">Тип блока</label>
    <select id="type" v-model="currType" @change="onChange">
      <option v-for="item in types" :value="item.id" :key="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BlockTypes",
  data: () => ({
    currType: "title",
    types: [
      {
        id: "title",
        name: "Заголовок",
      },
      {
        id: "subtitle",
        name: "Подзаголовок",
      },
      {
        id: "avatar",
        name: "Аватар",
      },
      {
        id: "text",
        name: "Текст",
      },
    ],
  }),
  emits: ["changeType"],
  methods: {
    getTypes({ types }) {
      return types;
    },
    onChange() {
      this.$emit(
        "changeType",
        this.types.find((type) => type.id === this.currType)
      );
    },
  },
};
</script>

<style scoped>
.types-wrap {
  font-style: italic;
}
</style>
