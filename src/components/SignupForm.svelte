<script lang="ts">
  let username = $state('');
  let email = $state('');

  let password = $state('');
  let passwordConfirm = $state('');
</script>

<form
  class="p-4 m-auto border-green-600 rounded max-w-90 border-1"
  action="api/register"
  method="post"
>
  <label for="username"
    ><p>Username <span class="text-sm">(min length 8 characters)</span></p>
    <input
      id="username"
      type="text"
      name="username"
      required
      minlength="8"
      maxlength="32"
      bind:value={username}
    />
  </label>

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
  <label for="passwordConfirm"
    ><p>
      Confirm password <span class="text-sm">(min length 8 characters)</span>
    </p>
    <input
      id="passwordConfirm"
      type="password"
      name="passwordConfirm"
      required
      bind:value={passwordConfirm}
      minlength="8"
      maxlength="32"
      pattern={password}
    />
  </label>
  {#if password !== passwordConfirm && passwordConfirm}
    <p class="text-sm text-red-500">Passwords don't match</p>
  {/if}
  <button
    class="block px-4 py-2 mt-4 ml-auto bg-green-600 rounded cursor-pointer text-amber-50 hover:bg-green-500"
    >SignUp</button
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
