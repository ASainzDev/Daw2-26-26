//Esta es una interface simplificada simplemente para separar los datos de autenticación de los
//datos de perfil de un usuario

export interface UserDataResponse {
  username: string;
  accessToken: string;
  refreshToken: string;
}
