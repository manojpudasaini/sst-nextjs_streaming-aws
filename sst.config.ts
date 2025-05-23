// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-nextjs",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          profile: "manojpudasaini"
        }
      },
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb", {
      environment: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY!,
        COPILOT_API_KEY: process.env.COPILOT_API_KEY!,
      },
    });
  },
});
