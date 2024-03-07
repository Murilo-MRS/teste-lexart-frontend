const USER = 'loggedUser';

export function logout() {
  return localStorage.removeItem(USER);
}

export function getUser() {
  const user = JSON.parse(localStorage.getItem(USER) as string);
  return user;
}

export function saveUser(user: string) {
  return localStorage.setItem(USER, JSON.stringify(user));
}