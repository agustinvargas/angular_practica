export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Albums {
  userId: number;
  id: number;
  title: string;
}
