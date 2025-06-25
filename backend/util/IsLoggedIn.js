export default function IsLoggedIn() {
  const token = localStorage.getItem('token');
  if (token) return true;
  return false;
}