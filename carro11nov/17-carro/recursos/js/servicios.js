async function ObtenerDatos(url) {
    const resultado = await fetch(url)
    const objetoDato = await resultado.json()
    return objetoDato
}

export {
    ObtenerDatos
}