<script lang="ts">
  import { signout } from '@utils/sign-out';

  const { username, email } = $props();

  let open = $state(false);
</script>

<div id="dropdown" class:open>
  <button id="name" onclick={() => (open = !open)}
    >{username}
    <span class={open ? 'rotate' : ''}>&#9650;</span>
  </button>
  <p>{email}</p>
  <ul id="submenu" class:open>
    <li>
      <button id="logout" onclick={signout} disabled={!open}> Logout </button>
    </li>
  </ul>
</div>

<style>
  #dropdown {
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid lightgray;
    padding: 5px 10px;
    border-radius: 5px;
  }
  #name,
  #logout {
    cursor: pointer;
  }
  #name {
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 10;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    span {
      transition: 0.3s;
      position: relative;
      bottom: 2px;
      &.rotate {
        transform: rotate(-180deg);
        transform-origin: 50% 60%;
      }
    }
    @media screen and (min-width: 30rem) {
      font-size: 1.2rem;
    }
  }
  #submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100%;
    z-index: 0;
    top: 100%;
    right: 0;
    max-height: 0;
    overflow: hidden;
    list-style: none;
    transition: 0.3s;
    &.open {
      z-index: 10;
      max-height: 6rem;
    }
    li {
      button {
        font-size: 1rem;
        padding: 5px 10px;
        background-color: white;
        border: 1px solid lightgray;
      }
      @media screen and (min-width: 30rem) {
        button {
          font-size: 1.1rem;
        }
      }
    }
  }
</style>
