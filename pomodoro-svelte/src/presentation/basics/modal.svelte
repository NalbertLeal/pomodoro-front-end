<script>
  import Button from './button.svelte'

  export let title
  export let text
  export let closeModal

  let value = undefined
</script>

<style>
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

<section id="modal-bg">
  <article class="modal">
    <h5>{title}</h5>
    <p>{text}</p>
    <Button label="Ok" onClick={closeModal}></Button>
  </article>
</section>