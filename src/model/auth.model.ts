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
  emailIdValidId: string,
  email: string,
  emailIsValid: boolean,
  createdAt: Date
}

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};