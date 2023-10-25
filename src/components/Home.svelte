<script>
  let count = 0
</script>

<section
  class="flex flex-col gap-12 items-center p-8 border-4 border-[rgb(235,80,9)] bg-[rgb(235,80,9)] bg-opacity-5 rounded-lg"
>
  <div class="flex flex-col text-[rgb(235_80_9)] items-center gap-4">
    <h2 class="text-2xl">Hello from Svelte</h2>
    <div class="flex items-center gap-4">
      <button
        class="px-4 py-1 text-xl border-2 border-current rounded shadow text-opacity-80"
        on:click={() => (count -= 1)}>-</button
      >
      <p class="tabular-nums">{count}</p>
      <button
        class="px-4 py-1 text-xl border-2 border-current rounded shadow text-opacity-80"
        on:click={() => (count += 1)}>+</button
      >
    </div>
  </div>
  <slot />
</section>
