export async function handler(event) {
  try {
    const { cepDestino } = JSON.parse(event.body);

    const token = process.env.MELHOR_ENVIO_TOKEN;

    const response = await fetch(
      "https://api.melhorenvio.com.br/v2/me/shipment/calculate",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "User-Agent": "Aplicação (seuemail@email.com)",
        },
        body: JSON.stringify({
          from: { postal_code: "01001000" }, // CEP de origem (troque pelo da sua prima)
          to: { postal_code: cepDestino },
          products: [
            {
              width: 11,
              height: 2,
              length: 16,
              weight: 0.3,
              insurance_value: 50,
              quantity: 1,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ erro: "Erro ao calcular frete" }),
    };
  }
}
