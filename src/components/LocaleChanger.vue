<template>
  <div class="locale-changer">
    <div class="dropdown">
      <img :alt="$t('Language.ChangeLanguage')" :src="getIcon(this.$i18n.locale)" />
      <div class="dropdown-box">
        <div
          v-for="(lang, i) in langs"
          :key="`Lang${i}`"
          class="dropdown-content"
          v-on:click="changeLocale(lang)"
        >
          <img :alt="$t(`Language.${lang}`)" :src="getIcon(lang)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocaleChanger",
  data() {
    return { langs: ["de", "en", "da"] };
  },
  methods: {
    getIcon(locale) {
      switch (locale) {
        case "de":
          return require("../assets/lang_germany.svg");
        case "da":
          return require("../assets/lang_denmark.svg");
        default:
          return require("../assets/lang_united-kingdom.svg");
      }
    },
    changeLocale(locale) {
      this.$root.$i18n.locale = locale;
    }
  }
};
</script>
<style scoped>
.locale-changer {
  position: absolute;
  top: 20px;
}
.locale-changer img {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 2px 4px 6px 1px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  background-color: #c6e2e6;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-box {
  display: none;
  position: absolute;
  /* background-color: hsl(0, 0%, 98%); */
  /* min-width: 160px; */
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
  z-index: 99;
}
.dropdown-content {
  text-align: left;
}
/* Links inside the dropdown */
.dropdown-content img {
  display: inline-block;
  color: black;
  padding: 6px;
  text-decoration: none;
}
/* Change color of dropdown links on hover */
.dropdown-box a:hover {
  background-color: #f1f1f1;
}
/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-box {
  display: block;
}
/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
</style>
