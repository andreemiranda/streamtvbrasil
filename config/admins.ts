
/**
 * Lista de e-mails que possuem privilégios administrativos no StreamTV Brasil.
 * Adicione seu e-mail aqui para ter acesso total à produção.
 */
export const ADMIN_EMAILS = [
  'seu-email@gmail.com',
  'admin@streamtvbrasil.com',
  'contato@streamtvbrasil.com'
];

/**
 * Verifica se um determinado e-mail pertence à lista de administradores.
 */
export function isAdmin(email: string | null | undefined): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase().trim());
}
