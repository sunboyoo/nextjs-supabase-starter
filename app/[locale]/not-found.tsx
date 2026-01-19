import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default async function NotFound() {
    const t = await getTranslations("NotFound");

    return (
        <html lang={routing.defaultLocale}>
            <body className="flex min-h-dvh items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
                    <p className="text-muted-foreground">{t("message")}</p>
                </div>
            </body>
        </html>
    );
}
