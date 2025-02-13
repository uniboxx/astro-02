import { authClient } from './auth-client';

export async function signin(email: string, password: string) {
  const { data, error } = await authClient.signIn.email(
    {
      /**
       * The user email
       */
      email,
      /**
       * The user password
       */
      password,
      /**
       * a url to redirect to after the user verifies their email (optional)
       */
      callbackURL: '/',
      /**
       * remember the user session after the browser is closed.
       * @default true
       */
      rememberMe: false,
    },
    {
      //callbacks
    }
  );
}
