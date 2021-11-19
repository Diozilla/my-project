<template>
  <section class="slider text-center position-relative">
    <div class="boom position-absolute top-50 start-50 translate-middle">
      <h3>Design / Development / Photography</h3>
      <h1>Creativity Have No Limits</h1>
      <a class="btn carear">preview</a>
      <a class="btn carear">get theme</a>
    </div>
  </section>
</template>
<style scoped>
.slider {
  background-image: url("../assets/img/header.jpg");
  background-size: cover;
  background-color: var(--grey);
  background-blend-mode: multiply;
  color: var(--white);
  height: 80vh;
}
.slider .boom .carear {
  color: var(--white);
  background-color: transparent;
  padding: 1% 10%;
  border: 2px solid var(--white);
  transition: all 1s ease-in-out;
  font-weight: bold;
  font-size: calc(var(--default-font-size) + 2px);
}
.slider .boom .carear:hover {
  background-color: var(--main-color);
}
</style>
<script>
export default {
  name: "HomeComp",
};
</script>
