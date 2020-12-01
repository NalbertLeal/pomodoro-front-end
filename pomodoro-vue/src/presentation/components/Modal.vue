<template>
  <section id="modal-bg" :class="{}">
    <article class="modal">
      <h5>{{title}}</h5>
      <p>{{text}}</p>
      <Button label="Ok" :onClick="closeModal"></Button>
    </article>
  </section>
</template>

<script>
import Button from './Button.vue'
export default {
  components: {
    Button
  },
  props: {
    closeModal: Function,
    title: String,
    text: String
  }
}
</script>

<style scoped>
  #modal-bg {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .modal {
    width: 12rem !important;
    height: 13rem !important;
    padding: .5rem;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-around !important;
    align-items: center !important;
    background-color: #fff !important;
    box-shadow: 0rem 0rem 1rem black;
    z-index: 3;
  }
</style>