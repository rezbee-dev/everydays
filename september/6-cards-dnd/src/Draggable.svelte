<script>
    export let top = 100
    export let left = 200
    let movable = false

    function start() {
        movable = true
    }

    function stop() {
        movable = false
    }

    function move(e) {
        if(movable) {
            left += e.movementX
            top += e.movementY
        }
    }
</script>
<div on:mousedown={start} on:mouseup={stop} class="draggable" style="left: {left}px; top: {top}px;">
    <slot />
</div>
<svelte:window on:mouseup={stop} on:mousemove={move} />

<style>
    .draggable {
        user-select: none;
        position: absolute;
        border: solid gray 1px;
        cursor: move;
    }
</style>