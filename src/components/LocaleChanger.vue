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
    return { langs: ["de", "en", "da"] };
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
  list-style: none;
}

.dropdown-box {
  display: none;
  list-style: none;
  position: absolute;
  min-width:63px;
  margin: 0;
  padding: 0;
  /* background-color: hsl(0, 0%, 98%); */
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2); */
  z-index: 99;
}

.dropdown-content {
  margin: 0;
  text-align: center;
}
/* Images inside the dropdown */
.dropdown-content img {
  display: inline-block;
  max-width: 30px;
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
