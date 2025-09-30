function Titulo() {
    const nombre = "";
    if (nombre) {
        return <p>Hola {nombre}</p>;//codigo jsx -> react.createElement 
    }
    return <p>Hola mundo</p>
}
export default Titulo;