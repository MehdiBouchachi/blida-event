export async function POST(req) {
  try {
    const body = await req.json();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwn0MfMcsXJ_6ZSZIs88HeSyFcHD0Rc-3dWiaQDc99CqCIX7QfqI1TuywuW9Mw1cIqK/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    const data = await response.json();

    if (!data.success) {
      return Response.json(
        { success: false, error: data.error },
        { status: 500 },
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    return Response.json(
      { success: false, error: err.message },
      { status: 500 },
    );
  }
}
