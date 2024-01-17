export const getPayload = () => {
    const jwtToken = localStorage.getItem("user");
    const [, payloadBase64] = jwtToken.split('.');
    return JSON.parse(atob(payloadBase64));
}