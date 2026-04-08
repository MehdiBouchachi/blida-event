export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzle9geu9nwMfjiOoTW7gBNH8H-C4tRjQgt4lfiviOFYyEJ5VH_gYpuiJunKDsAN5yi/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
        redirect: "follow",
      },
    );

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      return Response.json(
        {
          success: false,
          error: "Invalid response received from Google Apps Script",
          raw: text,
        },
        { status: 500 },
      );
    }

    if (!response.ok || !data.success) {
      return Response.json(
        {
          success: false,
          error: data?.error || "Google Apps Script request failed",
        },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json(
      {
        success: false,
        error: err?.message || "Unexpected server error",
      },
      { status: 500 },
    );
  }
}
