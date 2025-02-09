<script lang="ts">
  const { mode } = $props();
  const cap = mode[0].toUpperCase() + mode.slice(1);
</script>

<a
  class="px-4 py-2 border-gray-300 rounded cursor-pointer border-1"
  id={mode}
  href={mode}
>
  {cap}
</a>
