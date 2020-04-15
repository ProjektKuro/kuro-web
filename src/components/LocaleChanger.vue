<template>
  <ul class="locale-changer">
    <li class="dropdown">
      <img :alt="$t('Language.ChangeLanguage')" :src="getIcon(this.$i18n.locale)" />
      <ul class="dropdown-box">
        <li
          v-for="(lang, i) in langs"
          :key="`Lang${i}`"
          class="dropdown-content"
          v-on:click="changeLocale(lang)"
        >
          <img :alt="$t(`Language.${lang}`)" :src="getIcon(lang)" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LocaleChanger",
  data() {
    return { langs: ["de", "en", "fr", "tr", "da"] };
  },
  methods: {
    getIcon(locale) {
      switch (locale) {
        case "de":
          return require("../assets/lang_germany.svg");
        case "da":
          return require("../assets/lang_denmark.svg");
        case "tr":
          return require("../assets/lang_turkish.svg");
        case "fr":
          return require("../assets/lang_french.svg");
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
  list-style: none;
  top: 20px;
  margin: 0;
  padding: 0;
}

.locale-changer img {
  color: white;
  padding: 16px;
  cursor: pointer;
  background-color: #c6e2e6;
}

.dropdown {
  position: relative;
  display: inline-block;
  list-style: none;
}

.dropdown-box {
  display: none;
  list-style: none;
  position: absolute;
  z-index: 1099;
}

.dropdown-content {
  margin: 0;
  text-align: center;
}
/* Images inside the dropdown */
.dropdown-content img {
  display: inline-block;    
  max-width: 40px;
  padding: 10px;
}

/* Change color of dropdown links on hover */
.dropdown-box img:hover {
  background-color: #91c7cf;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-box {
  display: block;
}

</style>
