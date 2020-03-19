<template>
  <!-- 使用iframe嵌入方式 -->
  <div class="common">
    <ul class="commom-menu">
      <li
        class="commom-menu__item"
        @click="menuClick('http://localhost:8080/')"
      >
        projectA
      </li>
      <li
        class="commom-menu__item"
        @click="menuClick('http://localhost:8081/')"
      >
        projectB
      </li>
      <li
        class="commom-menu__item"
        @click="menuClick('http://localhost:8082/')"
      >
        projectC
      </li>
      <li
        class="commom-menu__item"
        @click="menuClick('http://localhost:8083/')"
      >
        projectD
      </li>
    </ul>
    <iframe
      :src="systemUrl"
      width="100%"
      height="100%"
      frameborder="0"
      class="iframe"
      id="bossIframe"
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      systemUrl: "",
      systemList: [
        {
          title: "A项目",
          basepath: "http://localhost:8080/",
          systemId: "A"
        },
        {
          title: "B项目",
          basepath: "http://localhost:8081/",
          systemId: "B"
        },
        {
          title: "C项目",
          basepath: "http://localhost:8082/",
          systemId: "c"
        },
        {
          title: "D项目",
          basepath: "http://localhost:8083/",
          systemId: "D"
        }
      ]
    };
  },
  mounted() {
    this.systemUrl =
      this.systemList[0].basepath + "?systemId=" + this.systemList[0].systemId;
  },
  methods: {
    menuClick(name) {
      this.systemUrl = name;
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.commom {
  &-menu {
    display: flex;
    align-items: center;
    width: 100%;
    &__item {
      flex: 1;
      text-align: center;
    }
  }
}
</style>
