<template>
  <div class="bkr__img">
    <slot name="img"
      ><img
        src="https://ssl.gstatic.com/images/branding/product/1x/hh_meet_512dp.png"
        alt=""
    /></slot>
    <slot name="nameapp"> <h5 class="title">Meet</h5></slot>
  </div>
</template>

<script>
</script>

<style lang="scss">
img {
  height: 100px;
  object-fit: cover;
  width: 100px;
  margin: 5px;
  border-radius: 3px;
}
.bkr__img {
  background-color: $background-white;
  height: 130px;
  width: $width-distance;
  border-radius: 4px;
  margin-top: 20px;
}

</style>
