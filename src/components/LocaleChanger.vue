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
    return { langs: ["en", "de"] };
  },
  methods: {
    getIcon(locale) {
      switch (locale) {
        case "de":
          return "../assets/lang_ger.svg";
        default:
          return "../assets/lang_eng.svg";
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
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-box {
  display: none;
  position: absolute;
  background-color: hsl(0, 0%, 98%);
  /* min-width: 160px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 99;
}
/* Links inside the dropdown */
.dropdown-content img,
.dropdown-content p {
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
