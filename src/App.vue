<template>
  <div class="container">
    <h3>Cookie Demo</h3>
    <div>获得标题：{{ title }}</div>
    <div>获得站点URL：{{ url }}</div>
    <el-input v-model="domain"></el-input>
    <el-button @click="onDelete">删除1c1ookie</el-button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "",
      url: "",
      tab: {},
      domain: "",
    };
  },
  components: {},
  methods: {
    async getPageHost() {
      const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
        status: "complete",
        windowType: "normal",
      });
      this.tab = tab;
      this.title = tab?.title;
      this.url = tab?.url;
    },
    async onDelete() {
      if (!this.domain) return;
      const msg = await this.deleteDomainCookies(this.domain)
      this.$message({
          message: `${msg}`,
          type: 'success'
      });
    },
    async deleteDomainCookies(domain) {
      let cookiesDeleted = 0;
      try {
        const cookies = await chrome.cookies.getAll({ domain });
        if (cookies.length === 0) {
          return "No cookies found";
        }
        let pending = cookies.map(this.deleteCookie);
        await Promise.all(pending);
        cookiesDeleted = pending.length;
      } catch (error) {
        return `Unexpected error: ${error.message}`;
      }
      return `Deleted ${cookiesDeleted} cookie(s).`;
    },
    deleteCookie(cookie) {
      const protocol = cookie.secure ? "https:" : "http:";
      const cookieUrl = `${protocol}//${cookie.domain}${cookie.path}`;
      return chrome.cookies.remove({
        url: cookieUrl,
        name: cookie.name,
        storeId: cookie.storeId,
      });
    },
  },
  mounted() {
    this.getPageHost();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 300px;
}
.container {
  width: 300px;
  height: 400px;
}
.container > div {
  margin-bottom: 10px;
}
</style>
