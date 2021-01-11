// isso anexará a biblioteca padrao do express uma nova funcionalidade necessária
declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}