<?php

include 'conexion.php';

$sql = "UPDATE usuarios SET nombre='Johnny Mercado Ruiz', email = 'jmercado2988@gmail.com' WHERE nombre like 'Johnny Mercado'";
    if ($conexion->query($sql) === TRUE) {
        echo "Registro actualizado con éxito";
    } else {
        echo "Error actualizando el registro: ";
        echo $conexion->error;
    }

?>