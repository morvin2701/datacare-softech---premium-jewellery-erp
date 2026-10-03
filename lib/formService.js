// Demo requests go to the existing Google Apps Script (Google Sheet).
// Field names must stay as-is — the sheet script reads them.
const GOOGLE_APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbz6Ucph5k_VsQQTYSF91_hVSDIY6IRyBZFHduC6s0_TgdsBwd83ygAhuuqBtckpnG2Tew/exec';

export async function submitDemoRequest(data) {
  const body = new URLSearchParams({
    'Client Name': data.name,
    'Mobile No': data.phone,
    Email: data.email || '',
    City: data.city || '',
    Notes: `[${data.business}] ${data.message || ''}`.trim(),
    Timestamp: new Date().toISOString(),
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
