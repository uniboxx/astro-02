import bcrypt from 'bcrypt';

const saltRounds = 10;

export function createHash(plainPassword: string) {
  bcrypt.hash(plainPassword, saltRounds, function (err, hash) {
    if (err) {
      throw new Error('Something went wrong hashing password');
    }

    compareHash('password', hash);
  });
}

export function compareHash(plainPassword: string, hash: string) {
  return bcrypt.compare(plainPassword, hash, function (err, result) {
    if (err) {
      throw new Error('Something went wrong checking password');
    }

  });
}

createHash('password');
