export default {
  "**/*.js": (files) => [
    `eslint ${files.join(" ")}`,
    `prettier --check --ignore-unknown ${files.join(" ")}`,
  ],
  "**/*.ts": (files) => [
    `tsc -p ./tsconfig.json --noEmit`,
    `eslint ${files.join(" ")}`,
    `prettier --check --ignore-unknown ${files.join(" ")}`,
  ],
  "**/!(*.js|*.ts)": (files) => [
    `prettier --check --ignore-unknown ${files.join(" ")}`,
  ],
};
