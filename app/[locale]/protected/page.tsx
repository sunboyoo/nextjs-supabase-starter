import { redirect } from "@/i18n/navigation";
import { createClient } from "@/lib/supabase/server";
import { InfoIcon } from "lucide-react";
import { FetchDataSteps } from "@/components/tutorial/fetch-data-steps";
import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

async function UserDetails({ locale }: { locale: string }) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims) {
    redirect({ href: "/auth/login", locale });
    return null;
  }

  return JSON.stringify(data.claims, null, 2);
}

export default async function ProtectedPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Protected");

  return (
    <div className="flex flex-col gap-8 py-4">
      {/* Info banner */}
      <div className="w-full">
        <div className="bg-accent text-sm p-4 rounded-lg text-foreground flex gap-3 items-center">
          <InfoIcon size="18" strokeWidth={2} className="flex-shrink-0" />
          <span>{t("info")}</span>
        </div>
      </div>

      {/* User details section */}
      <section className="flex flex-col gap-3">
        <h2 className="font-bold text-xl">{t("userDetails")}</h2>
        <pre className="text-xs font-mono p-4 rounded-lg border bg-muted/50 max-h-40 overflow-auto scroll-container">
          <Suspense fallback={<span>Loading...</span>}>
            <UserDetails locale={locale} />
          </Suspense>
        </pre>
      </section>

      {/* Next steps section */}
      <section className="flex flex-col gap-3">
        <h2 className="font-bold text-xl">{t("nextSteps")}</h2>
        <FetchDataSteps />
      </section>
    </div>
  );
}
