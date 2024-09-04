<script>
  import Color from "./Color.svelte";
  let red = 0, green = 0, blue = 0

</script>

<h1>Color Picker</h1>
<div class="main">
  <Color colorName="red" bind:colorValue={red}/>
  <Color colorName="green" bind:colorValue={green} />
  <Color colorName="blue" bind:colorValue={blue}/>
  <div class="container" style="background-color: rgb({red},{green},{blue});"></div>
  <p class="rgb">rgb({red},{green},{blue})</p>
</div>

<style>
  .main {
    height: 50%;
    width: 90%;
  }

  .container {
    border: 5px dotted black;
    width: 80vw;
    height: 40vh;
    min-height: 1px;
    margin: 1rem;
  }

  .rgb {
    margin: 1rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>