import { betterAuth } from 'better-auth';

import { LibsqlDialect } from '@libsql/kysely-libsql';

const dialect = new LibsqlDialect({
  url: import.meta.env.TURSO_DATABASE_URL || '',
  authToken: import.meta.env.TURSO_AUTH_TOKEN || '',
});

export const auth = betterAuth({
  database: {
    dialect,
    type: 'sqlite',
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
  },
  socialProviders: {
    github: {
      clientId: import.meta.env.GITHUB_CLIENT_ID as string,
      clientSecret: import.meta.env.GITHUB_CLIENT_SECRET as string,
    },
  },
});
