<script>
    export let colorName = "red"
    export let colorValue = 0
</script>

<div class="container">
    <label for="color">{colorName} ({colorValue})</label>
    <input type="range" name="color" id="color" min="0" max="255" bind:value={colorValue}>
</div>

<style>
    .container {
        width: 100%;
        margin: 2rem 1rem;
    }
    .container label {
        text-transform: capitalize;
        padding: 6px;
        font-weight: bold;
    }

    .container input {
        display: block;
        width: 100%;
    }
</style>