## Problem Statement
Public grievances related to infrastructure, utilities, and public services often face delays due to manual handling, lack of prioritization, and improper routing to the concerned departments. This results in inefficiency, delayed resolutions, and lack of transparency for citizens.

## Project Name
AI-Based Public Grievance Redressal System

## 2-Minute Demonstration Video Link
(https://drive.google.com/file/d/15Qaj4_9NiApTel6TEiua7FAOl-Z3hxcy/view?usp=sharing)

## Project Overview
This project presents a lightweight AI-based public grievance redressal system that analyzes user-submitted grievances, classifies them into relevant categories, assigns priority levels, and maps them to the appropriate government departments.

The system emphasizes simplicity, transparency, and explainable AI using rule-based logic instead of complex black-box models, making it suitable for real-world governance use cases.

---

## Key Features
- Text-based grievance submission
- Automatic grievance classification
- Priority assignment (High / Medium / Low)
- Department mapping
- Explainable rule-based AI logic
- Integrated frontend and backend workflow

---

## Tech Stack
- **Frontend:** React
- **Backend:** Python (Flask)
- **AI Logic:** Rule-based NLP (keyword analysis)
- **API Communication:** REST (JSON)


## Working Flow
1. User enters a grievance through the frontend interface.
2. The grievance text is sent to the backend API.
3. Backend processes the text using keyword-based classification logic.
4. The system determines category, priority, department, and explanation.
5. The analyzed result is displayed instantly on the frontend.

---

## API Endpoint

### POST `/analyze`

**Request Body**
```json
{
  "text": "Road near my house has multiple potholes"
}
{
  "category": "Road Infrastructure",
  "priority": "High",
  "department": "Public Works Department",
  "reason": "Keywords related to road damage were detected in the grievance text."
}

