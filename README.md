# Game Report Generator
# 遊戲報告生成器

A React-based web application that generates detailed game reports using AI technology.
基於React的網頁應用程式，使用AI技術生成詳細的遊戲報告。

## Features | 功能特點

- AI-powered game report generation | AI驅動的遊戲報告生成
- Multi-language support (i18n) | 多語言支援（國際化）
- Firebase integration | Firebase整合
- Responsive web design | 響應式網頁設計
- HuggingFace AI model integration | 整合HuggingFace AI模型

## Tech Stack | 技術棧

- React 18.3
- Firebase 11.0
- i18next (Internationalization)
- React Router DOM 6.27
- Hugging Face Inference API
- Replicate API
- Axios for API calls

## Prerequisites | 前置要求

- Node.js (v14 or higher)
- npm or yarn
- Firebase account (for deployment) | Firebase帳號（用於部署）
- API keys for HuggingFace/Replicate (for AI features) | HuggingFace/Replicate的API金鑰（用於AI功能）

## Installation | 安裝

1. Clone the repository | 克隆儲存庫
```bash
git clone [repository-url]
cd gamereportgenerator
```

2. Install dependencies | 安裝依賴
```bash
npm install
```

3. Set up environment variables | 設置環境變數
Create a `.env` file in the root directory and add your API keys:
在根目錄創建 `.env` 檔案並添加你的API金鑰：

```env
REACT_APP_FIREBASE_CONFIG=your_firebase_config
REACT_APP_HUGGINGFACE_API_KEY=your_huggingface_key
REACT_APP_REPLICATE_API_KEY=your_replicate_key
```

## Running the Application | 運行應用程式

### Development | 開發環境
```bash
npm start
```
This will start the development server at http://localhost:3000
這將在 http://localhost:3000 啟動開發伺服器

### Production Build | 生產環境建置
```bash
npm run build
```

### Deployment | 部署
```bash
firebase deploy
```

## Project Structure | 專案結構

```
gamereportgenerator/
├── src/               # Source files | 源碼檔案
├── public/           # Static files | 靜態檔案
├── build/            # Production build | 生產環境建置
├── .firebase/        # Firebase configuration | Firebase配置
├── .github/          # GitHub workflows | GitHub工作流程
└── firebase.json     # Firebase settings | Firebase設定
```

## Contributing | 貢獻指南

1. Fork the repository | 分叉儲存庫
2. Create your feature branch | 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. Commit your changes | 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch | 推送到分支 (`git push origin feature/AmazingFeature`)
5. Open a Pull Request | 開啟拉取請求

## License | 授權條款

This project is licensed under the MIT License - see the LICENSE file for details
本專案採用 MIT 授權條款 - 查看 LICENSE 檔案了解詳情

