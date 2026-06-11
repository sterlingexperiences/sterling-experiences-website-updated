import { ORGANIZATION_SCHEMA, WEBSITE_SCHEMA } from "@/lib/constants";

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ORGANIZATION_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(WEBSITE_SCHEMA),
        }}
      />
    </>
  );
}
