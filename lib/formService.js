// Demo requests go to the Google Apps Script bound to the leads sheet.
// Sheet columns: Client Name | City | Email | Mobile No | Notes | Timestamp
// The script (scripts/google-apps-script.js) reads request.parameter, so keys
// are sent exactly as the column headers (URL-encoded; Apps Script decodes).
const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz6Ucph5k_VsQQTYSF91_hVSDIY6IRyBZFHduC6s0_TgdsBwd83ygAhuuqBtckpnG2Tew/exec';

export async function submitDemoRequest(data) {
  const notes = `[${data.business}] ${data.message || ''}`.trim();
  const body = new URLSearchParams({
    'Client Name': data.name,
    City: data.city || '',
    Email: data.email || '',
    'Mobile No': data.phone,
    Notes: notes,
    // Also under underscore keys for scripts that cannot handle spaces.
    Client_Name: data.name,
    Mobile_No: data.phone,
  });
  try {
    const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    if (res.ok) return { success: true };
    return { success: false, message: 'Could not send right now. Please WhatsApp us instead.' };
  } catch {
    return { success: false, message: 'Network error. Please try again or WhatsApp us.' };
  }
}
