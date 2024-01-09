export type verificationRequest = {
    email: string,
    approvalCode: string
}

export type JoinRequest = {
    email: string,
    password: string,
    memberName: string,
    emailAllow: true
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

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};