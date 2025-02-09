<script lang="ts">
  import { signin } from '@utils/sign-in';

  let email = $state('');

  let password = $state('');

  export function onSubmit(e: Event) {
    e.preventDefault();
    signin(email, password);
  }
</script>

<form
  class="p-4 m-auto border-green-600 rounded max-w-90 border-1"
  action="api/register"
  onsubmit={onSubmit}
>
  <!-- method="post" -->

  <label for="email"
    >Email
    <input id="email" type="email" name="email" required bind:value={email} />
  </label>

  <label for="password"
    ><p>Password <span class="text-sm">(min length 8 characters)</span></p>
    <input
      id="password"
      type="password"
      name="password"
      required
      minlength="8"
      maxlength="32"
      bind:value={password}
    />
  </label>

  <button
    class="block px-4 py-2 mt-4 ml-auto bg-green-600 rounded cursor-pointer text-amber-50 hover:bg-green-500"
    >Login</button
  >
</form>

<style>
  label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
  input {
    border: 1px solid;
    padding: 5px 10px;
    &:valid {
      border-color: hsl(130, 100%, 40%);
    }
    &:invalid {
      border-color: hsl(35, 100%, 40%);
    }
    &:focus,
    &:active {
      outline: none;
    }
  }
</style>
