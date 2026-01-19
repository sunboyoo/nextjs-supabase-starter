import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { hasEnvVars } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function ProtectedLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("HomePage");

  return (
    <main className="min-h-dvh flex flex-col">
      {/* Navigation - fixed height with safe area */}
      <nav className="w-full flex justify-center border-b border-b-foreground/10 min-h-[56px] safe-top">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <Link href={"/"} className="touch-manipulation">
              {t("title")}
            </Link>
            <div className="flex items-center gap-2">
              <DeployButton />
            </div>
          </div>
          {!hasEnvVars ? (
            <EnvVarWarning />
          ) : (
            <Suspense>
              <AuthButton />
            </Suspense>
          )}
        </div>
      </nav>

      {/* Main content - scrollable area */}
      <div className="flex-1 w-full overflow-y-auto -webkit-overflow-scrolling-touch">
        <div className="w-full max-w-5xl mx-auto p-5">
          {children}
        </div>
      </div>

      {/* Footer - fixed at bottom with safe area */}
      <footer className="w-full flex items-center justify-center border-t text-center text-xs gap-4 py-4 safe-bottom flex-wrap">
        <p>
          {t("poweredBy")}{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline touch-manipulation"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
        <LocaleSwitcher />
        <ThemeSwitcher />
      </footer>
    </main>
  );
}
