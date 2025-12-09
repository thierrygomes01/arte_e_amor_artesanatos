export async function handler(event) {
  try {
    const { cepDestino } = JSON.parse(event.body);
    const token = process.env.MELHOR_ENVIO_TOKEN;

    const url = new URL(
      "https://api.melhorenvio.com.br/v2/me/shipment/calculate"
    );

    url.searchParams.append("from", "07273100");
    url.searchParams.append("to", cepDestino);

    url.searchParams.append("width", "10");
    url.searchParams.append("height", "5");
    url.searchParams.append("length", "15");
    url.searchParams.append("weight", "0.3");
    url.searchParams.append("insurance_value", "50");
    url.searchParams.append("quantity", "1");

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ erro: err.message }),
    };
  }
}
