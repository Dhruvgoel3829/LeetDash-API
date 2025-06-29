# 📊 LeetCode Stats API for ESP32 Dashboard

A lightweight, no-authentication API built using **Vercel** to fetch your LeetCode statistics. Designed to work with an **ESP32** and a **2.4" ILI9341 SPI display**, this project allows you to view your LeetCode profile stats on a physical dashboard—no login or token needed, just your LeetCode username.

> ⚠️ This repo only contains the **stats retrieval API**.  
> For the **hardware/display implementation**, visit: [LINK_TO_HARDWARE_REPO]

---

## ✨ Features

- ✅ Fetches public LeetCode stats by username  
- 🚀 Hosted via Vercel (Serverless Functions)  
- 🔐 No login, API key, or OAuth required  
- 🧠 Minimal JSON response with all relevant fields  
- 📟 Designed for microcontrollers (like ESP32) with limited memory  

---

## 📦 API Usage

### 🔗 Endpoint

``` GET /api/leetcode:username ```


**Example:**
[https://leetcodestat.vercel.app/api/leetcode/Dhruvgoel3829](https://leetcodestat.vercel.app/api/leetcode/Dhruvgoel3829)

```json
{
  "username": "dhruvgoel3829",
  "profile": {
    "ranking": 736371,
    "reputation": 0,
    "realName": "Dhruv Goel"
  },
  "submitStats": {
    "acSubmissionNum": [
      {
        "difficulty": "All",
        "count": 174,
        "submissions": 186
      },
      {
        "difficulty": "Easy",
        "count": 106,
        "submissions": 113
      },
      {
        "difficulty": "Medium",
        "count": 64,
        "submissions": 69
      },
      {
        "difficulty": "Hard",
        "count": 4,
        "submissions": 4
      }
    ]
  }
}
```
Change the **username** (Dhruvgoel3829) to any valid username to fetch **public profile** data

## 🚀 Deployment

### ▶️ Method 1: Deploy to Vercel (Recommended)

1. **Fork this repository**
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Import Project"**, and select your forked repo
4. Use default settings (Vercel auto-detects the API route)
5. After deployment, your API will be available at:
``` <your-vercel-project>.vercel.app/api/leetcode<leetcode-username> ```

### ▶️ Method 2: Local Development

If you'd like to run the project locally:
```bash
git clone https://github.com/your-username/leetcode-esp32-api.git
cd leetcode-esp32-api
npm install
npm run dev
```

The API will be available at ``` http://localhost:3000/api/leetcode/<username> ```

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

You are free to use, modify, and distribute this project, even commercially. Attribution is appreciated but not required.

## 🙌 Credits

- 🧠 Built using the unofficial **LeetCode GraphQL API**
- ⚡ Hosted effortlessly with [Vercel](https://vercel.com)
- 🛠️ Inspired by DIY IoT dashboards and maker community projects





