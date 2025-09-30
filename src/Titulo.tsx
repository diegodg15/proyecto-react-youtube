function Titulo() {
    const nombre = "";
    if (nombre) {
        return <h1>Hola {nombre}</h1>;//codigo jsx -> react.createElement 
    }
    return <h1>Hola mundo</h1>
}
export default Titulo;