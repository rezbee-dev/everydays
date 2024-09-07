<script>
  import { draggable, dropzone } from "./lib/dnd.js";
  let columns = [
    {
      id: 1,
      label: '📫 Todo'
    },
    {
      id: 2,
      label: '✅ Done'
    }
  ]

  let cards = [
    {
      column: 1,
      id: 'a',
      title: 'Wash Dishes'
    },
    {
      column: 2,
      id: 'b',
      title: 'Code DND Example'
    }
  ]

</script>
<ul>
  {#each columns as column (column.id)}
    {@const columnCards = cards.filter(c => c.column === column.id)}
    <li class="column" use:dropzone={{
      on_dropzone(card_id) {
        const card = cards.find(c => c.id === card_id)
        card.column = column.id
        columns = columns
        cards = cards
      }
    }}>
      <h2>{column.label}</h2>
      {#if columnCards.length > 0}
        <ul class="cards">
          {#each columnCards as card (card.id)}
          <!-- card.id -> data parameter in draggable(node, data) -->
          <li use:draggable={card.id}>{card.title}</li>
          {/each}
        </ul>
      {:else}
        <p>No cards...</p>
      {/if}
    </li>
  {/each}
</ul>

<style>
  ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 1rem;
	}

	li {
		padding: 1rem;
		background-color: var(--sk-back-1);
		border: 1px solid black;
		border-radius: 0.5rem;
		border-color: var(--sk-back-5);
	}

	.column {
		min-width: 25ch;
	}

	h2 {
		margin-block-start: 0;
		margin-block-end: 0.5rem;
	}

	.cards {
		flex-direction: column;
	}

  /* applied in dropzone() */
  /* using global to get rid of error when class isn't currently used */
  .column:global(.droppable) {
    outline: 0.1rem solid hsl(15, 100%, 55%);
  }

  /* prevents dragenter/dragleave outline effect being affected by column child elements */
  /* without it, the dragleave event is fired whenever you mouse over a column child element (like h2) */
  .column:global(.droppable) * {
    pointer-events: none;
  }
</style>