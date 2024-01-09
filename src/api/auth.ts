import { JoinRequest, LoginRequest, LoginResponse, SocialLoginRequest } from "@/model";
import { DefaultResponse, serverUrl } from ".";

export const sendVerificationEmail = async (email: string) => {
    
}

export const verifyEmailCode = async (code: string) => {

}

export const join = async (data: JoinRequest) => {

}

export const login = async (data: LoginRequest) => {

}

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
    return responseData;
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
