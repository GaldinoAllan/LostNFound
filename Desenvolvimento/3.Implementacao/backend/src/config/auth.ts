import fs from 'fs';
import path from 'path'

const secret = 'bc17eed0d373bbaa3c6f188e34fc8ebb'
const privateKey = fs.readFileSync(path.join(__dirname, 'private.key'), 'utf8');
const publicKey = fs.readFileSync(path.join(__dirname, 'public.key'), 'utf8');

export default {
  jwt: {
    privateKey,
    publicKey,
    secret,
    expiresIn: '1d',
  }
}