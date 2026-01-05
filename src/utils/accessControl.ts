// Date-based access control
export const isAccessDateValid = (): boolean => {
  const now = new Date();
  const targetDate = new Date('2026-01-06 00:00:00');

  // Allow access on or after January 6, 2026
  return now >= targetDate;
};

// Token-based authentication
const VALID_TOKEN = 'riindu-special-2026'; // This can be changed to a more secure token

export const validateToken = (token: string | null): boolean => {
  if (!token) return false;
  return token === VALID_TOKEN;
};

export const getTokenFromUrl = (): string | null => {
  const params = new URLSearchParams(window.location.search);
  return params.get('token');
};

export const storeToken = (token: string): void => {
  sessionStorage.setItem('auth_token', token);
};

export const getStoredToken = (): string | null => {
  return sessionStorage.getItem('auth_token');
};

export const checkAccess = (): { allowed: boolean; reason?: string } => {
  // First check date
  if (!isAccessDateValid()) {
    return {
      allowed: false,
      reason: 'This gift will be available on January 6, 2026 ✨'
    };
  }

  // Then check token
  const urlToken = getTokenFromUrl();
  const storedToken = getStoredToken();
  const token = urlToken || storedToken;

  if (urlToken && validateToken(urlToken)) {
    storeToken(urlToken);
    return { allowed: true };
  }

  if (validateToken(token)) {
    return { allowed: true };
  }

  return {
    allowed: false,
    reason: 'This is a private gift. Please use the link provided.'
  };
};
