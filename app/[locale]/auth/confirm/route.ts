import { createClient } from "@/lib/supabase/server";
import { type EmailOtpType } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  // Security: Validate next parameter to prevent open redirect attacks
  // Only allow relative paths starting with "/" (not "//")
  const safeNext = next.startsWith("/") && !next.startsWith("//") ? next : "/";

  // Extract locale from the current URL path
  const pathSegments = request.nextUrl.pathname.split("/");
  const locale = pathSegments[1] || "en";

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      // redirect user to specified redirect URL or root of app
      redirect(safeNext);
    } else {
      // redirect the user to an error page with some instructions
      redirect(
        `/${locale}/auth/error?error=${encodeURIComponent(error?.message || "Unknown error")}`
      );
    }
  }

  // redirect the user to an error page with some instructions
  redirect(
    `/${locale}/auth/error?error=${encodeURIComponent("No token hash or type")}`
  );
}
