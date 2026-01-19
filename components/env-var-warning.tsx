import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { getTranslations } from "next-intl/server";

export async function EnvVarWarning() {
  const t = await getTranslations("Components.envWarning");

  return (
    <div className="flex gap-4 items-center">
      <Badge variant={"outline"} className="font-normal">
        {t("badge")}
      </Badge>
      <div className="flex gap-2">
        <Button size="sm" variant={"outline"} disabled>
          {t("signIn")}
        </Button>
        <Button size="sm" variant={"default"} disabled>
          {t("signUp")}
        </Button>
      </div>
    </div>
  );
}
