export function parseErrors(error: any): string[] {
  if (error.error && error.error.errors) {
    return error.error.errors.map(err => err.defaultMessage);
  } else {
    return [error.error.message];
  }
}
