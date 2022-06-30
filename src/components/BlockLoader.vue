<template>
  <div class="loader" v-if="isShowLoader"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BlockLoader",
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
  methods: {},
};
</script>
