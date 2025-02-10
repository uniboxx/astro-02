<script lang="ts">
  import { signinWithGithub, signinWithGoogle } from '@utils/auth-client';
  const { mode, logo } = $props();
  let text =
    mode[0].toUpperCase() +
    mode.slice(1, 6) +
    ' ' +
    mode.slice(6, 10) +
    ' ' +
    mode.slice(10);
  function signIn() {
    if (mode === 'signinWithGithub') return signinWithGithub();
    if (mode === 'signinWithGoogle') return signinWithGoogle();
  }
</script>

<button
  class="flex items-center gap-2 px-4 py-2 rounded cursor-pointer md:border-gray-300 md:border-1"
  id={mode}
  onclick={signIn}
>
  <img class="w-4 md:w-5" src={logo.src} alt={`${text.slice(10)} logo`} />
  <span class="text-sm">{text}</span>
</button>
