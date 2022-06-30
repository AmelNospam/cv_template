<template>
  <div class="container column">
    <BlockForm />
    <BlockBody />
  </div>
  <div class="container">
    <BlockComments />
  </div>
</template>

<script>
import BlockForm from "./components/BlockForm";
import BlockBody from "./components/BlockBody";
import BlockComments from "./components/BlockComments";

export default {
  name: "App",
  components: {
    BlockForm,
    BlockBody,
    BlockComments,
  },
};
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
