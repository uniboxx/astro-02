<script lang="ts">
  import AuthBtn from '@components/AuthBtn.svelte';
  import githubLogo from '@assets/images/github.png';
  import googleLogo from '@assets/images/google.png';
  import { isOpen } from '../stores';
</script>

<div id="dropdown">
  <button id="signin" onclick={() => isOpen.set(!$isOpen)}>Signin</button>
  <div id="btns" class={$isOpen ? 'open' : ''}>
    <AuthBtn mode="signinWithGithub" logo={githubLogo} disabled={!$isOpen} />
    <hr />
    <AuthBtn mode="signinWithGoogle" logo={googleLogo} disabled={!$isOpen} />
  </div>
</div>

<style>
  #dropdown {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 0 8px;
    margin-left: auto;
  }
  #signin {
    width: 11.5rem;
    z-index: 20;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    @media screen and (min-width: 30rem) {
      font-size: 1.1rem;
    }
  }
  #btns {
    display: flex;
    position: absolute;
    top: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: 0.4s;
    z-index: 0;
    max-height: 0;
    overflow: hidden;
    width: 11.5rem;
    background-color: rgb(255 251 235);

    hr {
      width: 80%;
      color: lightgray;
      height: 1px;
    }

    &.open {
      max-height: 6rem;
      z-index: 10;
      border-left: 1px solid #d3d3d3;
      border-right: 1px solid #d3d3d3;
      border-bottom: 1px solid #d3d3d3;
    }
  }
  @media screen and (min-width: 30rem) {
    #dropdown {
      padding: 0 16px;
      margin-left: 0;
      order: 2;
    }
  }
</style>
