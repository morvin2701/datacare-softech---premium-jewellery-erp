// Demo requests go to the existing Google Apps Script (Google Sheet).
// Sheet columns: Client Name | City | Email | Mobile No | Notes | Timestamp
const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz6Ucph5k_VsQQTYSF91_hVSDIY6IRyBZFHduC6s0_TgdsBwd83ygAhuuqBtckpnG2Tew/exec';

// Encode as application/x-www-form-urlencoded with %20 for spaces (not "+"),
// so keys like "Client Name" arrive exactly as the sheet's column headers.
function encodeForm(fields) {
  return Object.entries(fields)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v ?? '')}`)
    .join('&');
}

export async function submitDemoRequest(data) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true });
  const notes = `[${data.business}] ${data.message || ''}`.trim();
  const body = encodeForm({
    // exact column headers
    'Client Name': data.name,
    City: data.city || '',
    Email: data.email || '',
    'Mobile No': data.phone,
    Notes: notes,
    Timestamp: timestamp,
    // plain fallbacks in case the script reads simple keys
    name: data.name,
    city: data.city || '',
    email: data.email || '',
    mobile: data.phone,
    phone: data.phone,
    notes,
    message: notes,
    timestamp,
  });
  try {
    const res = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
    if (res.ok) return { success: true };
    return { success: false, message: 'Could not send right now. Please WhatsApp us instead.' };
  } catch {
    return { success: false, message: 'Network error. Please try again or WhatsApp us.' };
  }
}
