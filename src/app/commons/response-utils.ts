export function parseErrors(error: any): string[] {
  if (error.error && error.error.errors) {
    return error.error.errors.map((err: { defaultMessage: any; }) => err.defaultMessage);
  } else {
    return [error.error.message];
  }
}
