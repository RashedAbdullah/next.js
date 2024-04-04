import { getManageLangs } from "@/international/manage-lang";
import React from "react";

const AboutPage = async ({ params: { lang } }) => {
  const localLang = await getManageLangs(lang);
  return (
    <div>
      {localLang.name} {lang}
    </div>
  );
};

export default AboutPage;
