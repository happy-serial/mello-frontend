import {
  JoinRequest,
  LoginRequest,
  LoginResponse,
  SocialLoginRequest,
  VerificationResponse,
  verificationRequest,
} from "@/model";
import { DefaultResponse, serverUrl } from ".";

export const sendVerificationEmail = async (email: string) => {
  try {
    const response = await fetch(`${serverUrl}/membership/approval-email`, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const responseData: DefaultResponse<Object> = await response.json();
    console.log(JSON.stringify(responseData));

    if (responseData.statusCode === 200) {
      return "success";
    } else {
      throw new Error(`Failed to verify code: ${JSON.stringify(responseData)}`);
    }
  } catch (error) {
    console.error(error);
  }
};

export const verifyEmailCode = async (
  data: verificationRequest
): Promise<VerificationResponse | string> => {
  const response = await fetch(`${serverUrl}/membership/approve-email`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData: DefaultResponse<VerificationResponse> =
    await response.json();

  console.log(JSON.stringify(responseData));

  if (responseData.statusCode === 200 && responseData.data) {
    return responseData.data;
  } else if (responseData.statusCode === 400) {
    console.log(responseData.messages[0]);
    return responseData.messages[0];
  } else {
    throw new Error(`Failed to verify code: ${JSON.stringify(responseData)}`);
  }
};

export const join = async (data: JoinRequest): Promise<string | string[]> => {
  const response = await fetch(`${serverUrl}/membership/join`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData: DefaultResponse<null | Object> = await response.json();

  if (responseData.statusCode === 201) {
    return "success";
  } else if (responseData.statusCode === 400) {
    return responseData.messages;
  } else {
    throw new Error(`Failed to verify code: ${JSON.stringify(responseData)}`);
  }
};

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch(`${serverUrl}/membership/login`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData: DefaultResponse<LoginResponse> = await response.json();

  if (responseData.statusCode === 200) {
    return responseData.data!;
  } else {
    throw new Error(`Failed to login: ${JSON.stringify(responseData)}`);
  }
};

export const socialLogin = async (data: SocialLoginRequest) => {
  const response = await fetch(`${serverUrl}/membership/social-login`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ socialProvider: data.provider, memberPid: data.id }),
  });

  const responseData: DefaultResponse<LoginResponse> = await response.json();

  if (responseData.statusCode === 400) {
    const joinResult = await socialJoin(data);
    if (joinResult === "success") {
      await socialLogin(data);
    }
  } else if (responseData.statusCode === 200) {
    return responseData.data;
  } else {
    throw new Error(`Failed to login: ${JSON.stringify(responseData)}`);
  }
};

const socialJoin = async (data: SocialLoginRequest) => {
  const response = await fetch(`${serverUrl}/membership/social-join`, {
    method: "POST",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      memberPid: data.id,
      socialProvider: data.provider,
      email: data.email,
      memberName: data.name,
    }),
  });

  const responseData: DefaultResponse<Object> = await response.json();

  if (responseData.statusCode === 201) {
    return "success";
  } else {
    throw new Error(`Failed to social Join : ${JSON.stringify(responseData)}`);
  }
};
