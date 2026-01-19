//Esta es la interface separada de los datos de autenticación, en la que sólo se almacenan los datos
//del usuario, sin los datos de los propios tokens
export interface UserProfileData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  imageUrl: string;
}
