/**
 * Google Apps Script for the DataCare demo-request form.
 *
 * HOW TO INSTALL
 *  1. Open the Google Sheet → Extensions → Apps Script.
 *  2. Delete everything in Code.gs and paste this whole file.
 *  3. Click Deploy → Manage deployments → pencil (Edit) → Version: "New version" → Deploy.
 *     (Editing the existing deployment keeps the same /exec URL that the website uses.)
 *  4. Submit the form once on the site and check Sheet1.
 *
 * Sheet1 header row (row 1) must be exactly:
 *   Client Name | City | Email | Mobile No | Notes | Timestamp
 */

const DATA_ENTRY_SHEET_NAME = 'Sheet1';
const TIME_STAMP_COLUMN_NAME = 'Timestamp';

function doPost(request) {
  try {
    const data = readFields_(request);
    appendToGoogleSheet_(data);
    return json_({ result: 'success' });
  } catch (err) {
    return json_({ result: 'error', message: String(err) });
  }
}

// Lets you open the /exec URL in a browser to confirm the deployment is alive.
function doGet() {
  return json_({ result: 'ok', message: 'DataCare demo form endpoint is live' });
}

// Apps Script already URL-decodes form fields into request.parameter,
// so "Client Name" arrives with its space intact. Underscore aliases are
// accepted too (Client_Name → Client Name) in case a client sends those.
function readFields_(request) {
  const params = (request && request.parameter) || {};
  const data = {};
  Object.keys(params).forEach(function (key) {
    const value = String(params[key] || '').trim();
    data[key] = value;
    data[key.replace(/_/g, ' ')] = value;
  });
  return data;
}

function appendToGoogleSheet_(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(DATA_ENTRY_SHEET_NAME) || ss.getSheets()[0];
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  const row = headers.map(function (header) {
    const name = String(header).trim();
    if (name === TIME_STAMP_COLUMN_NAME) {
      return Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd/MM/yyyy hh:mm a');
    }
    // Match the header ignoring case and spaces/underscores.
    const key = Object.keys(data).find(function (k) {
      return norm_(k) === norm_(name);
    });
    return key ? data[key] : '';
  });

  sheet.appendRow(row);
}

function norm_(s) {
  return String(s).toLowerCase().replace(/[\s_]+/g, '');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
