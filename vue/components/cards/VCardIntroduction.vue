<template>
  <v-card raised :elevation="12" :class="`card-introduction pa-2 transform-${item.id}`" v-scroll-animation>
    <v-container>
      <v-layout row wrap justify-center>
        <v-col cols="12" class="text-center pa-0">
          <v-icon large :class="`fas  ${item.icon}`" ></v-icon>
        </v-col>

          <v-card-title class="card-introduction__title text-center font-italic font-weight-medium pa-2 ">
            {{ item.title }}
          </v-card-title>
    
        <v-card-text class=" text-center" >
          <v-divider class="mb-2"></v-divider>
          <div class="text-animation">
            {{ description }}
          </div>
        </v-card-text>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
    name: "v-card-introduction",
    data() {
      return {
        src: this.item.src,
        description: this.item.description,
        anim: [],
        show: false,
      }
    },
    props: ['item'],
}
</script>

<style lang="scss" scoped>
.transform {
  &-1 {
    transform: translate(-100px, 0);
    transition: all 1s linear;

  }

  &-2 {
    transform: scale(0) rotateY(-50deg) translate(-150px, 0);
    transition: all 1.6s cubic-bezier(.32,-0.61,.71,1.58);

  }

  &-3 {
    transform: scale(0) rotateY(-50deg) translate(0, 150px);
    transition: all 1.6s cubic-bezier(.32,-0.61,.71,1.58);

  }

  &-4 {
    transform: translate(150px, 0);
    transition: all 1s linear;

  }
}

.before-enter {
  opacity: 0;
}

.enter {
  opacity: 1;
  transform: scale(1) rotateZ(0deg) translate(0, 0);
}
</style>