from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def classify_grievance(text):
    text = text.lower().strip()

    if not text:
        return {
            "category": "Invalid Input",
            "priority": "Low",
            "department": "N/A",
            "reason": "The grievance text was empty or invalid."
        }

    if any(word in text for word in ["road", "pothole", "street"]):
        return {
            "category": "Road Infrastructure",
            "priority": "High",
            "department": "Public Works Department",
            "reason": "Road-related keywords detected in the grievance text."
        }

    if any(word in text for word in ["water", "pipeline", "drinking"]):
        return {
            "category": "Water Supply",
            "priority": "Medium",
            "department": "Water Department",
            "reason": "Water supply related keywords were identified."
        }

    if any(word in text for word in ["electricity", "power", "transformer"]):
        return {
            "category": "Electricity",
            "priority": "High",
            "department": "Electricity Board",
            "reason": "Electricity or power issue keywords were found."
        }

    if any(word in text for word in ["hospital", "doctor", "medicine"]):
        return {
            "category": "Healthcare",
            "priority": "High",
            "department": "Health Department",
            "reason": "Healthcare-related keywords indicate a medical concern."
        }

    return {
        "category": "General",
        "priority": "Low",
        "department": "Municipal Corporation",
        "reason": "No specific keywords matched; classified as a general grievance."
    }

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    text = data.get("text", "")

    result = classify_grievance(text)
    return jsonify(result)

@app.route("/")
def home():
    return "PS-12 Grievance Redressal Backend Running"

if __name__ == "__main__":
    app.run(debug=True)

