<template>
  <div class="hello">
    <h1>{{ $t('welcomeMessage') }}</h1>
    <img class="language-flag" src="../images/us.png" @click="setLanguage('en')">
    <img class="language-flag" src="../images/es.png" @click="setLanguage('es')">
    <p>
      {{ $t('guide') }}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>{{ $t('installedCliPlugins') }}</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
    <h3>{{ $t('essentialLinks') }}</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">{{ $t('coreDocs') }}</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">{{ $t('forum') }}</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">{{ $t('communityChat') }}</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">{{ $t('twitter') }}</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">{{ $t('news') }}</a></li>
    </ul>
    <h3>{{ $t('ecosystem') }}</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">{{ $t('vueRouter') }}</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">{{ $t('vuex') }}</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">{{ $t('vueDevtools') }}</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">{{ $t('vueLoader') }}</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">{{ $t('awesomeVue') }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    setLanguage(language) {
      this.$i18n.locale = language;
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.language-flag {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 40px;
  height: 20px;
  margin-right: 10px;
}
</style>
