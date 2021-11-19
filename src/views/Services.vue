<template>
  <div>
    <Caption />
    <Cards/>
  </div>
</template>
<script>
import Caption from "@/components/ServiceComp/Caption.vue";
import Cards from "@/components/ServiceComp/Cards.vue";
export default {
  name: "Services",
  components: {
    Caption,
    Cards
  },
};
</script>