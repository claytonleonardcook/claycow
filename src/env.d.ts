interface ImportMetaEnv {
    readonly ENVIRONMENT: "production" | "preview";
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}