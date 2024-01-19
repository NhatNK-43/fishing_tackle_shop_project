export const getPayload = () => {
    const jwtToken = localStorage.getItem("user");
    const [, payloadBase64] = jwtToken.split('.');
    return JSON.parse(atob(payloadBase64));
}

export const formatCurrency = (currency) => {
    return parseFloat(currency).toLocaleString("vi-VN",{
        style: "currency",
        currency: "VND"
    })
}