<script lang="ts">
  import { signinWithGithub } from '@utils/auth-client';
  const { mode } = $props();
  const text =
    mode[0].toUpperCase() +
    mode.slice(1, 6) +
    ' ' +
    mode.slice(6, 10) +
    ' ' +
    mode.slice(10);
</script>

<button
  class="px-4 py-2 border-gray-300 rounded cursor-pointer border-1"
  id={mode}
  onclick={signinWithGithub}
>
  {text}
</button>
