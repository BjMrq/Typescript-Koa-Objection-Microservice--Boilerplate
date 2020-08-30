type LoginRequest = {
  email: string,
  password: string
};

type LogoutRequest = {
  token: string
};

type SetPasswordRequest = {
  email: string,
  password: string
};

type RequestResetPasswordRequest = {
  email: string,
  password: string
};

type RegisterThirdPartyRequest = {
  user: {
    name?: string,
    email: string,
    profilePicture?: string,
    googleId?: string
  }
};
