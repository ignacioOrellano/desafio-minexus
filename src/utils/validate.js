// - Nombre completo (campo de texto, obligatorio).
// - Correo electrónico (campo de texto, obligatorio, validación de formato).
// - Dirección (campo de texto, opcional).

export function validateForm({ name, mail }) {
  const errors = {};
  if (!name || name.length === 0) {
    errors.name = "Este es un campo obligatorio";
  }

  const mailRegEx = /^[\w-_]+@([\w-]+.)+[\w-]{2,4}$/;
  if (!mail) {
    errors.mail = "Este es un campo obligatorio";
  } else if (!mailRegEx.test(mail)) {
    errors.mail = "Debe ingresar un mail válido";
  }

  if (Object.keys(errors).length > 0) return { isValid: false, errors };

  return { isValid: true, errors };
}
