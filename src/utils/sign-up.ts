import { authClient } from '@utils/auth-client';

export async function signup(name: string, email: string, password: string) {
  const { data, error } = await authClient.signUp.email(
    {
      name, // user display name
      email, // user email address
      password, // user password -> min 8 characters by default
      // image, // user image url (optional)
      callbackURL: '/dashboard', // a url to redirect to after the user verifies their email (optional)
    },
    {
      onRequest: (ctx) => {
        //show loading
      },
      onSuccess: (ctx) => {
        //redirect to the dashboard or sign in page
      },
      onError: (ctx) => {
        // display the error message
        alert(ctx.error.message);
      },
    }
  );
  console.log(data, error);
}
