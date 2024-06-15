let siteAddress = "https://localhost:7201/";

async function getJSON(address)
{
    const response = await fetch(siteAddress + address);
    const result = await response.json();
    return result;
}
async function postJSON(address,data, method = "POST") 
{
    const response = await fetch(siteAddress + address, 
    {
        method: method,
        headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    });
  
    const result = await response.json();

    return result;
}
async function deleteJSON(address)
{
    const response = await fetch(siteAddress + address, {method: 'DELETE'});
    const result = await response.json();
    return result;
}
export const postJson = postJSON;
export const getJson = getJSON;
export const deleteJson = deleteJSON;