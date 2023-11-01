export function resolveToken(authorization) {
  /**
   * * jwt token
   * * Bearer + token
   * ! Certification scheme: Bearer
   */
  const reqTokenSplit = authorization.split(' ')
  if (reqTokenSplit.length === 2) {
    return reqTokenSplit[1]
  }
  return ''
}
