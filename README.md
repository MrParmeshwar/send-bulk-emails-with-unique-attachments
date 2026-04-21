# 📧 send-bulk-emails-with-unique-attachments  

Automate sending bulk emails with personalized, unique attachments for each recipient using a Google Sheet.

---

## 🚀 The Problem  
Standard mail merges are great for text, but sending multiple different files to multiple recipients usually requires manual effort or paid tools. This project solves that using a simple automation script.

---

## 🛠️ How It Works  
This script connects:
- **Google Sheets** → recipient data  
- **Google Drive** → file storage  
- **Gmail** → email delivery  

Each recipient gets:
- Their own email  
- Their own attachment  
- Full privacy (no CC/BCC)

---

## 📊 Sheet Format  

| Column A        | Column B | Column C   | Column D | Column E |
|----------------|----------|------------|----------|----------|
| Recipient Email | Subject  | Email Body | File ID  | Status   |

---

## 📖 Setup Guide  

### 1. Prepare Files  
- Upload files to Google Drive  
- Copy File ID from the link  
- Paste into Column D  

---

### 2. Add Script  
- Go to **Extensions → Apps Script**  
- Paste code from `script.gs`  
- Save  

---

### 3. Run Script  
- Click **Run**  
- A permission dialog will appear → click **Review Permissions**  
- Choose your Google account  
- Click **Advanced** → **Go to project (unsafe)**  
- Click **Allow** to grant required permissions  

- Once authorized, the script will run  
- Emails will start sending  
- Status column updates automatically ✅  

---

## 💡 Features  
- 🔐 Privacy-safe (no shared attachments)  
- ⚡ Fast bulk sending  
- 📎 Unique attachment per recipient  
- 📊 Simple Google Sheet control  

---

## 🎯 Use Cases  
- HR document distribution  
- Certificates sending  
- Invoices / reports  
- Personalized outreach  

---

## 📌 Note  
Make sure your Gmail account stays within daily sending limits.

---

## ✨ Summary  
A lightweight, free alternative to paid mail merge tools — built for simplicity and real-world usage.
