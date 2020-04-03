<template>
  <div class="about">
    <span class="heading">{{$t('Info.AboutKuro')}}</span>
    <p>{{$t('Info.AboutKuroDescription')}}</p>
    <span class="heading">{{$t('Info.MotivationHeading')}}</span>
    <p>{{$t('Info.MotivationDescription')}}</p>
    <span class="heading">{{$t('Info.CurrentState')}}</span>
    <p>{{$t('Info.CurrentStateDescription.Dev')}}</p>
    <p>{{$t('Info.CurrentStateDescription.SolutionEnabler')}}</p>
    <span class="heading">{{$t('Info.NextSteps')}}</span>
    <p>{{$t('Info.NextStepsDescription')}}</p>
    <p>
      <span class="heading small">{{$t('Info.NextStepsDevDescription.GeneralHeading')}}</span>
      <ul>
        <li>{{$t('Info.NextStepsDevDescription.General')}}</li>
      </ul>
      <span class="heading small">{{$t('Info.NextStepsDevDescription.WebHeading')}}</span>
      <ul>
        <li>{{$t('Info.NextStepsDevDescription.Web')}}</li>
      </ul>
    </p>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "About",
  components:{
    Footer
  }
}
</script>

<style scoped>
.about {
  text-align: left;
}
.about, p {
  margin: 1.5rem auto;
  margin-top: .8rem;
}
.heading {
  font-size: 1.5rem;
  font-weight: bold;
}
