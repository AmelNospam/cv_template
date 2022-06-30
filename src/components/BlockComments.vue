<template>
  <p>
    <button class="btn primary" @click="fetchComments">
      Загрузить комментарии
    </button>
  </p>
  <div class="card">
    <ul class="list">
      <li class="list-item" v-for="item in getList" :key="item.id">
        <div>
          <p>
            <strong>{{ item.email }}</strong>
          </p>
          <small>{{ item.body }}</small>
        </div>
      </li>
    </ul>
  </div>
  <BlockLoader />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BlockLoader from "./BlockLoader";

export default {
  name: "BlockComments",
  mounted() {
    // this.fetchComments();
  },
  computed: {
    ...mapGetters("comments", ["getList"]),
  },
  methods: {
    ...mapActions("comments", ["fetchComments"]),
  },
  components: {
    BlockLoader,
  },
};
</script>
