import os
import requests
from github import Github

API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-mnli"
HF_HEADERS = {"Authorization": f"Bearer {os.environ['HF_TOKEN']}"}

gh = Github(os.environ["GITHUB_TOKEN"])
repo = gh.get_repo(os.environ["REPO"])
issue_number = int(os.environ["ISSUE_NUMBER"])
issue = repo.get_issue(number=issue_number)

allowed_labels = ["Low Priority", "Medium Priority", "High Priority", "bug", "feature", "enhancement"]

def query_hf(text, candidate_labels):
    payload = {"inputs": text, "parameters": {"candidate_labels": candidate_labels}}
    response = requests.post(API_URL, headers=HF_HEADERS, json=payload, timeout=15)
    response.raise_for_status()
    return response.json()

text = f"{issue.title}\n{issue.body or ''}"

result = query_hf(text, allowed_labels)

labels_to_apply = [label for label, score in zip(result["labels"], result["scores"]) if score > 0.3]

if labels_to_apply:
    issue.add_to_labels(*labels_to_apply)
    print("Labels applied:", labels_to_apply)
else:
    print("No labels matched confidently.")
