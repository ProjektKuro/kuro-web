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

    <!-- WirVsVirus Hackathon Logo -->
    <div class="logo-wrapper">
      <img
        class="wir-vs-virus-logo"
        src="../assets/Logo_WirVsVirus.png"
        :alt="$t('Info.WirVsVirusLogo')"
      />
    </div>
    <p class="wir-vs-virus-hackathon">
      {{$t('Info.Created.First')}}
      <a
        href="https://wirvsvirushackathon.org/"
        target="_blank"
      >{{$t('Info.Created.Link')}}</a>
    </p>
  </div>
</template>

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
.small {
  font-size: 1.25rem;
}
.logo-wrapper {
  display: flex;
  justify-content: center;
}
.wir-vs-virus-hackathon {
  text-align: center;
}
.wir-vs-virus-logo {
  background-color: #20beef;
  margin: 0 auto;
  max-width: 720px;
  width: 100%;
}
</style>
