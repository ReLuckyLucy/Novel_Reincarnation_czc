# Vercel 部署指南

下面的步骤会让你的仓库在每次 push 到 `main` 时，自动在 Vercel 上部署（通过 GitHub Actions workflow）。

## 要点回顾

- 我们在仓库中添加了 workflow：`.github/workflows/vercel-deploy.yml`。它的流程是：checkout -> 安装依赖 -> `npm run docs:build` -> 使用 Vercel CLI 将 `.vitepress/dist` 上传为 production 部署。
- 你需要在 GitHub 仓库中添加一个 `VERCEL_TOKEN` Secret（Vercel 的 Personal Token），使 Actions 能够授权部署。

## 详细步骤

1. 在 Vercel 上创建 Personal Token
    - 打开 https://vercel.com/account/tokens ，创建一个新的 token（例如名字 `github-actions-deploy`）。复制该 token。

2. 把 token 添加到 GitHub Secrets
    - 打开你的 GitHub 仓库页面 -> Settings -> Secrets and variables -> Actions -> New repository secret
    - Name: `VERCEL_TOKEN`
    - Value: 你从 Vercel 复制的 token

3.（可选但推荐）在本地生成并提交 `package-lock.json`

- 在仓库根目录运行：
    ```bash
    npm install
    git add package-lock.json
    git commit -m "chore: add package-lock.json"
    git push
    ```
- 说明：有锁文件后，你可以把 workflow 中的 `npm install` 改回 `npm ci` 并启用 npm 缓存，以获得更稳定和更快的 CI 安装。

4. 触发部署
    - 方式 A：直接 push 到 `main`（workflow 在 push 到 main 时自动运行）
    - 方式 B：在 GitHub Actions 页面手动触发刚添加的 workflow（workflow_dispatch）

5. 查看部署结果
    - 在仓库的 Actions 页面，打开 `Build and deploy to Vercel` job 查看日志。部署成功时 Vercel CLI 会输出部署 URL。
    - 也可以在 Vercel 控制台（https://vercel.com) 中找到对应项目的最新部署记录。

## 其它可选增强

- 如果你希望利用 Vercel 的项目链接（自动拾取环境变量、项目设置），可以在本地使用 `vercel login` 和 `vercel link` 将仓库与 Vercel 项目关联，然后在 workflow 中使用 `vercel --prebuilt --token ...` 或 amondnet/vercel-action 作更细致的控制。
- 如果你希望为 PR 提供预览部署（非 prod），可以把 workflow 扩展为在 pull_request 时调用 `vercel --token ...` 不传 `--prod` 或使用 amondnet/vercel-action 并设置 `vercel-args`。

## 常见问题

- 错误：`VERCEL_TOKEN is not set` — 在 GitHub 仓库里没有添加 `VERCEL_TOKEN` secret。
- 错误：`vercel: not authorized` — token 权限不足或 token 已过期，请在 Vercel 重新生成并更新 GitHub Secret。

如果你愿意，我可以：

- 帮你在 workflow 中把 `npm install` 改为更严格的 `npm ci` 并启用缓存（在你提交 `package-lock.json` 后）；
- 或改为使用 `amondnet/vercel-action`（需要 `VERCEL_ORG_ID` 和 `VERCEL_PROJECT_ID`，可选）。

---

最后，如果你把 `VERCEL_TOKEN` 添加好了并 push，我可以帮你检查 Actions 日志并修正可能的报错。
