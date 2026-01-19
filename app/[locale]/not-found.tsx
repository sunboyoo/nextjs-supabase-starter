"use client";

import { useTranslations } from "next-intl";

export default function NotFound() {
    const t = useTranslations("NotFound");

    return (
        <div className="flex min-h-dvh items-center justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
                <p className="text-muted-foreground">{t("message")}</p>
            </div>
        </div>
    );
}
