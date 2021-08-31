import { stripLeadingSlash } from 'utils/utils';

export const Tests = {
  name: /^[a-zA-Z-. ]{1,256}$/,
  slug: /^[a-zA-Z0-9-_]{1,256}$/,
  email: /^[^\s@,#$%()]+@[^\s@]+\.[^\s@]+$/,
  pass: /^[a-zA-Z0-9!@#~%^&?_-]{10,256}$/m
};

export const isValidName = (name = '') => {
  if (typeof name !== 'string' || !name.length) return false;
  return Tests.name.test(name);
};

export const isValidSlug = (slug = '') => {
  if (typeof slug !== 'string' || !slug.length) return false;
  return Tests.slug.test(slug);
};

export const isValidEmail = (email = '') => {
  if (typeof email !== 'string' || !email.length) return false;
  return Tests.email.test(email);
};

export const isValidPass = (pass = '') => {
  if (typeof pass !== 'string' || !pass.length) return false;
  return Tests.pass.test(pass);
};

export const isValidNumber = (number) => {
  const result = typeof number === 'number'
    || typeof number === 'string' && (number * 1).toString() === number;
  return result;
}

export const isValid = (value = '', type) => {
  if (!type) return false;
  if (typeof type === 'function') {
    return type(value);
  }
  switch (type.toLowerCase()) {
    case 'name':
      return isValidName(value);
    case 'pass':
    case 'password':
      return isValidPass(value);
    case 'path':
    case 'slug':
      return isValidSlug(value);
    case 'urlSlug':
      return isValidSlug(stripLeadingSlash(value));
    case 'optionalNumber':
      return value === null || isValidNumber(value);
    case 'number':
      return isValidNumber(value);
    case 'email':
      return isValidEmail(value);
    default:
      return true;
  };
};
