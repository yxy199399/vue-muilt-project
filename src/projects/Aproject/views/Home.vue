<template>
  <div>我时a项目下得home页面 store: {{ storeCount }}</div>
</template>

<script>
export default {
  data() {
    return {
      storeCount: this.$store.state.a.count
    };
  }
};
</script>

<style lang="scss" scoped></style>
