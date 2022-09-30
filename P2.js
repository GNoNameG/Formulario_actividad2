const users = []
const captura = () => {
    try {        
        const correo = document.getElementById("inputCorreo").value
        const contraseña = document.getElementById("inputContraseña").value
        const direccion = document.getElementById("inputDireccion").value
        const telefono = document.getElementById("inputTelefono").value
        const ciudad = document.getElementById("inputCiudad").value
        const departamento = document.getElementById("inputDepartamento").value
        const cp = document.getElementById("inputCp").value
        const cedula = document.getElementById("inputCedula").value    
    
        switch (true) {
            case (correo === ""):
                alert("Ingrese su correo")
                throw new Error("INVALID_FIELD_CORREO")
            case (contraseña === ""):
                alert("Ingrese una contraseña")
                throw new Error("INVALID_FIELD_PASSWORD")
            case (cedula === "" ):
                alert("Digite el número de cédula")
                throw new Error("INVALID_FIELD_ID")
            case (ValCed (cedula,users)):
                alert("Esta cédula ya fue ingresada")
                throw new Error("INVALID_FIELD_ID")
            default:
                break;
        }
        
        function ValCed (Cedula, users){
            if (users.length === 0) {
                return false;
            } else {
                console.log (Cedula)
                const Result = users.find(({cedula}) => cedula === Cedula); 
                console.log (Result)          
                    if (Result === undefined){
                        return false;                        
                    }
                    else {
                        return true;
                    }                              
            }
        }
    
        const user = {
            correo: correo,
            contraseña: contraseña,
            direccion: direccion,
            telefono: telefono,
            ciudad: ciudad,
            departamento: departamento,
            cp: cp,
            cedula: cedula,
        }
            
        users.push(user);   
        listarEstatica()
    }

    catch (error) {
        console.error(error);
    }    
}

let tabla = [
    { correo: "philadelphia@hotmail.com", contraseña: "iesamasim", direccion: "1959 NE 153 ST", telefono: "5554479524", ciudad: "Miami", departamento: "Florida", cp: "33162", cedula: "50478596" },
    { correo: "pearl0741@hotmail.com", contraseña: "harbor353nippon", direccion: "4443 Malaai ST", telefono: "5514179320", ciudad: "Honolulu", departamento: "Waipahu", cp: "96818", cedula: "10719411" },
    { correo: "hiroshimaboom@gmail.com", contraseña: "nagazaki0811", direccion: "5-chōme-7-8 Ōtemachi", telefono: "1547982567", ciudad: "Hiroshima", departamento: "Naka", cp: "110911", cedula: "19450809" }
]

const listarEstatica = () => {
    let tbody = document.getElementById("usuarios")
    let tablallena = "";
    for (let i = 0; i < tabla.length; i++) {
        tablallena += "<tr><td>" + tabla[i].correo + "</td><td>" + tabla[i].contraseña + "</td><td>" 
        + tabla[i].direccion + "</td><td>" + tabla[i].telefono + "</td><td>" + tabla[i].ciudad 
        + "</td><td>" + tabla[i].departamento + "</td><td>" + tabla[i].cp + "</td><td>" + tabla[i].cedula + "</td><td>";
    }
    if (users.length > 0) {        
            for (let i = 0; i < users.length; i++) {
                tablallena += "<tr><td>" + users[i].correo + "</td><td>" + users[i].contraseña + "</td><td>" 
                + users[i].direccion + "</td><td>" + users[i].telefono+ "</td><td>" + users[i].ciudad 
                + "</td><td>" + users[i].departamento + "</td><td>" + users[i].cp + "</td><td>" + users[i].cedula + "</td><td>";
            }        
    }
    tbody.innerHTML = tablallena;
}