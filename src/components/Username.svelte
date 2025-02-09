<script lang="ts">
  import { signout } from '@utils/sign-out';

  const { username } = $props();
  let open = $state(false);
  const cap = username[0].toUpperCase() + username.slice(1);
  function toggle() {
    console.log(open);
    open = !open;
  }
</script>

<div id="dropdown" class="relative py-2 px-4" class:open>
  <button id="name" class="relative flex items-center" onclick={toggle}>
    {cap}
    <span class={`ml-2 ${open ? 'rotate' : ''}`}>&#9650;</span>
  </button>
  <ul id="submenu" class="absolute border-1 border-gray-200" class:open>
    <li>
      <button
        class="px-4 py-2 cursor-pointer underline"
        id="logout"
        onclick={signout}
        disabled={!open}
      >
        Logout
      </button>
    </li>
  </ul>
</div>

<style>
  #name,
  #logout {
    cursor: pointer;
  }
  #name {
    z-index: 10;
    span {
      transition: 0.3s;
      &.rotate {
        transform: rotate(-180deg);
        transform-origin: 50% 57%;
      }
    }
  }
  #submenu {
    z-index: 0;
    transform: translateY(-1.5rem);
    opacity: 0;
    transition: 0.3s;
    &.open {
      transform: translateY(0);
      opacity: 100;
      z-index: 10;
    }
  }
</style>
