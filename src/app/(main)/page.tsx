import { ArticleSection } from "@/components/main/articleSection";
import { checkAllTokenLife } from "@/utils/tokenHandler";
import { cookies } from "next/headers";

export default function Home() {
  const cookieStore = cookies();
  let accessToken = cookieStore.get("access-token")?.value;
  let refreshToken = cookieStore.get("refresh-token")?.value;

  const { isLogin, username } = checkAllTokenLife({
    accessToken,
    refreshToken,
  });

  return <ArticleSection isLogin={isLogin} />;
}
