export async function handler(event) {
  try {
    const { cepDestino } = JSON.parse(event.body);

    const token = process.env.MELHOR_ENVIO_TOKEN;

    const response = await fetch("https://api.melhorenvio.com.br/v2/me/shipment/calculate", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "arte-e-amor-artesanatos",
      },
      body: JSON.stringify({
        from: { postal_code: "01001000" },
        to: { postal_code: cepDestino },
        products: [
          {
            width: 10,
            height: 5,
            length: 15,
            weight: 0.3,
            insurance_value: 50,
            quantity: 1,
          }
        ]
      })
    });

    const text = await response.text();

    return {
      statusCode: response.status,
      body: text
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ erro: err.message }),
    };
  }
}
