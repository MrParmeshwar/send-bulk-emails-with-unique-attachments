function sendMyEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    var email   = data[i][0]; // Column A
    var subject = data[i][1]; // Column B
    var body    = data[i][2]; // Column C
    var fileId  = data[i][3]; // Column D
    
    if (!email || !fileId) continue;

    try {
      var file = DriveApp.getFileById(fileId.toString().trim());
      
      GmailApp.sendEmail(email, subject, body, {
        attachments: [file.getBlob()],
        name: "My Organization Name" // 👈 Change this to your name!
      });
      
      sheet.getRange(i + 1, 5).setValue("Done! ✅"); 
    } catch (e) {
      sheet.getRange(i + 1, 5).setValue("Check File ID ❌");
    }
  }
}
