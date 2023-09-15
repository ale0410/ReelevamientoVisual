/**
 * formato de usuario para guardar en base de datos
 */
export interface User {
    email: string;
    username: string;
    createdAt: string;
  }
  
  export const userDb: User = {
    email: '',
    username: '',
    createdAt: '',
  };
