//Defino esta interface para poder tipar los datos introducidos en el login y darle un poco más
//de estructura y robustez a la aplicación, evitando muchos anys o variables sin tipado fuerte

export interface UserDataRequest {
  username: string;
  password: string;
}
