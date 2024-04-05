export type verificationRequest = {
    email: string,
    approvalCode: string
}

export type JoinRequest = {
    email: string,
    password: string,
    memberName: string,
    emailAllow: boolean
}

export type LoginRequest = {
    email: string,
    password: string
}

export type SocialLoginRequest = {
  id: string;
  provider: string;
  email: string;
  name: string;
};

export type VerificationResponse = {
  emailIsValid: boolean;
}

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type tokenHeader = {
  alg : string,
  Username : string,
}