<script lang="ts">
  import { signinWithGithub, signinWithGoogle } from '@utils/auth-client';

  const { mode, logo, disabled } = $props();
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

<button id={mode} onclick={signIn} {disabled}>
  <img src={logo.src} alt={`${text.slice(10)} logo`} />
  <span>{text}</span>
</button>

<style>
  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: inherit;

    img {
      width: 1rem;
    }
    span {
      font-size: 0.875rem;
    }
  }
  @media screen and (min-width: 30rem) {
    button {
      border: 1px solid lightgray;
      img {
        width: 1.25rem;
      }
    }
  }
</style>
