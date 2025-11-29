package com.aplicacion.weather.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.aplicacion.weather.entity.ciudad1Entity;
import com.aplicacion.weather.services.Ciudad1Service;


@RestController
@RequestMapping("/all")
public class MainController {
    
    @Autowired
    private Ciudad1Service service1;

    // Con este método devolvemos el listado de las distintas ciudades que hay en la base de datos
    @GetMapping
    public List<String> getAll() {
        // Lo teníamos pensado para que buscase en tres tablas, pero al final no tiene sentido. En una
        // sola tabla nos vale. Luego ya podemos filtrar por ciudad si queremos.
        return service1.getListadoCiudades();
    }

    // Con este método devuelvo todos los registros toda la tabla. En humedad y temp_min devuelve datos
    // adicionales que no se lo que son.
    @GetMapping("/registros")
    public List<ciudad1Entity> getRegistros() {
        return service1.getAllRegistros();
    }

    // En el siguiente método voy a devolver los datos referentes a una ciudad concreta
    @GetMapping("/ciudad")
    public List<ciudad1Entity> getRegistrosCiudad(@RequestParam String nombreCiudad) {
        // Por ahora lo dejo así, luego ya haré la consulta personalizada en el service y el
        // repository.
        return service1.getRegistrosCiudad(nombreCiudad);
    }
    
    //La siguiente simplemente me la tengo que imaginar, para no hacer yo tambien lo de postman
    //Por la tarde lo miramos entre los tres a ver si funciona bien. Es lo mismo que la anterior
    //pero con requestbody en vez de requestparam. Esta está pensada en caso de que exista un filtro
    @GetMapping("/ciudadFormulario")
    public List<ciudad1Entity> getRegistrosCiudadBody(@RequestBody String nombreCiudad) {
        // Por ahora lo dejo así, luego ya haré la consulta personalizada en el service y el
        // repository.
        return service1.getRegistrosCiudad(nombreCiudad);
    }

    // Voy a intentar dejar uno preparado que filtre por dos fechas. Con requestbody en vez de
    // requestparam. Si vemos que hay que cambiarlo, lo cambiamos. Vale, encontré el problema aquí. Con request
    //body SpringBoot tiene el problema de que normalmente espera un parámetro solo, así que me detecta el primero
    // pero la segunda fecha me la ve como un null, así que voy a cambiar @RequestBody por @RequestParam y pasarselas
    //en la barra de direcciones.
    @GetMapping("/registros/fechas")
    public List<ciudad1Entity> filtrarPorFechas(@RequestParam String fecha_desde, @RequestParam String fecha_hasta) {
        return service1.filtradoPorFechas(fecha_desde, fecha_hasta);
    }

    // Aquí estoy teniendo otro problema como en el anterior de las fechas. Leyendo por ahí, parece ser
    // que SpringBoot tiene problemas con datos primitivos que llegan en al body si no son Strings o Enums.
    // Así que lo que tengo que hacer aquí es, o uso @RequestParam para asegurar o mantengo @RequestBody, valido
    // el tipo de dato recibido y, si es un doble lo paso al servicio, si es un string, lo parseo y lo
    //  paso al servicio. Voy a asegurar y tiro por requestParam
    @PutMapping("/{id}/actualizartemperatura")
    public void modificarRegistro( @PathVariable int id, @RequestParam double temperatura){

        service1.modificarTemperatura(temperatura, id);
    }
    

    // Voy a dejar hecho un post para ver si funciona. Luego ya veremos si hay que cambiarlo o no
    @PostMapping
    public void addRegistro(@RequestBody ciudad1Entity nuevoRegistro) {
        // Aquí sigo el ejemplo que teniamos de la tienda online. En ese ejercico, por algún motivo
        // se deja la id a 0. Supongo que para hacer el registro de forma correcta. Ya que la id la
        //genera sql.
        nuevoRegistro.setRegistry_id(0);
        service1.addRegistro(nuevoRegistro);
    }
}
