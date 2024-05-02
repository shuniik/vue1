<template>
  <div class="q-pa-md example-row-equal-width">
    <div class="row">
      <div class="col">.col</div>
      <div class="col">.col</div>
    </div>

    <div class="row q-mt-xl">
      <div class="col-md-4 col-sm-6 col-xs-12">.col</div>
      <div class="col-md-4 col-sm-6 col-xs-12">.col</div>
      <div class="col-md-4 col-sm-6 col-xs-12">.col</div>
    </div>
  </div>

  <div class="row q-mt-xl">
    <div class="col-md-4 col-sm-6 col-xs-12 q-ml-xl">.col</div>
    <div class="col-md-4 col-sm-6 col-xs-12 q-ml-xl self-center">.col</div>
    <div class="col-md-4 col-sm-6 col-xs-12">.col</div>
  </div>
</template>

<style lang="sass">
.example-row-equal-width
  .row > div
    padding: 10px 15px
    background: rgba(#999,.15)
    border: 1px solid rgba(#999,.2)
  .row + .row
    margin-top: 1rem
</style>
