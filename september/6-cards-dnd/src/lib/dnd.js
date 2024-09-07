export function draggable(node, data) {
    // card.id
    let state = data;
    node.draggable = true;
    node.style.cursor = 'grab'

    function handle_dragStart(e) {
        e.dataTransfer.setData("text/plain", state)   
    }

    node.addEventListener("dragstart", handle_dragStart)

    return {
        // called every time data changes
        update(data) {
            state = data
        },
        destroy() {
            node.removeEventListener("dragstart", handle_dragStart)
        }
    }
}

export function dropzone(node, options) {
    let state = {
        dropEffect: 'move',
        dragover_class: "droppable",
        ...options
    }

    // adds outline when card is dragged over another column
    function handle_dragenter(e) {
        e.target.classList.add(state.dragover_class)
    }

    // removes outline when card is dragged over another column
    function handle_dragleave(e) {
        e.target.classList.remove(state.dragover_class)
    }

    // sets visual effect when dragging and dropping
    function handle_dragover(e) {
        e.preventDefault()
        e.dataTransfer.dropEffect = state.dropEffect
    }

    // handles the actual logic for what happens when dragged n dropped
    function handle_drop(e) {
        e.preventDefault()
        const data = e.dataTransfer.getData("text/plain")
        e.target.classList.remove(state.dragover_class)
        state.on_dropzone(data,e)
    }

    node.addEventListener("dragenter", handle_dragenter)
    node.addEventListener("dragleave", handle_dragleave)
    node.addEventListener("dragover", handle_dragover)
    node.addEventListener("drop", handle_drop)

    return {
        update() {
            state = {
                dropEffect: 'move',
                dragover_class: "droppable",
                ...options
            }
        },
        destroy() {
            node.removeEventListener("dragenter", handle_dragenter)
            node.removeEventListener("dragleave", handle_dragleave)
            node.removeEventListener("dragover", handle_dragover)
            node.removeEventListener("drop", handle_drop)
        }
    }
}