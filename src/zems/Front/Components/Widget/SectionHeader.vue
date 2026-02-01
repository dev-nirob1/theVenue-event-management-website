<script setup>
import BaseTitle from "../../../../components/element/BaseTitle.vue";
import SubTitle from "../../../../components/element/SubTitle.vue";

defineProps({
  subTitle: {
    type: String,
  },
  title: {
    type: String,
  },
});
</script>

<template>
  <div class="section-header">
    <SubTitle>{{ subTitle }}</SubTitle>
    <BaseTitle>{{ title }}</BaseTitle>
  </div>
</template>

<style>
.section-header {
  margin-bottom: 2rem;
  max-width: 700px;
}
.section-header .sub-title {
  display: inline-block;
  padding: 0.25rem 1rem;
  border-radius: 1.5rem;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  color: white;
  margin-bottom: 1rem;
}
@media (max-width: 768px) {
  .section-header {
    margin-bottom: 2rem;
  }
}
</style>
