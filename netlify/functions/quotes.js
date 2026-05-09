export async function handler() {
  try {
    const res = await fetch("https://zenquotes.io/api/today/");
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch quote" }),
    };
  }
}