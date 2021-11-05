[7 Cryptography Concepts EVERY Developer Should Know](https://youtu.be/NuyzuNBFWxQ)

```typecript
import { createHash, randomBytes, scryptSync } from 'crypto';

// register
export const signup = (email: string, password: string) => {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}` };
};

// sign in

export const login = (email, password) => {
    let user = users.find((v) => v.email === email);
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'Login successed';
    } else {
        return 'Login failed';
    }
};

// hmac
const key = 'super-secret!';
const message = 'boo 🍃';

const hmac = createHmac('sha256', key).update(message).digest('hex');

const hmac2 = createHmac('sha256', key).update('message').digest('hex');

// Generate public and private key
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    PublicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    PrivateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: 'top secret',
    },
});

export const getHash = (algorithm: string, input: string) => {
    return createHash('sha512').update(input).digest('base64');
};
```
