export const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  return parts.map(part => part[0].toUpperCase()).join('');
}
