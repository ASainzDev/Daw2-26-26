package com.aplicacion.weather.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aplicacion.weather.entity.ciudad1Entity;
import com.aplicacion.weather.repository.Ciudad1Interface;

@Service
public class Ciudad1Service {

    @Autowired
    private Ciudad1Interface interface1;

    public List<String> getListadoCiudades(){

        // https://www.arquitecturajava.com/java-stream/
        // https://www.arquitecturajava.com/jpa-streamer-y-consultas-dinamicas/
        // https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html
        // https://docs.spring.io/spring-data/jpa/reference/repositories/query-methods-details.html

        return interface1.findAll().stream().map(ciudad1Entity::getNombre_ciudad).distinct().toList();
    }

    // Este es el facilito, devuelve todo.
    public List<ciudad1Entity> getAllRegistros() {
        
        return interface1.findAll();
    }

    //Ahora tengo que ver si me apaño para hacer la consulta con streams después del ejemplo que hice antes
    public List<ciudad1Entity> getRegistrosCiudad(String nombreCiudad){
        return interface1.findAll()
        .stream()
        .filter(ciudad -> ciudad.getNombre_ciudad().equalsIgnoreCase(nombreCiudad))
        .toList();
    }

    //Lo dejo como creo que puede funcionar el filtrado por fechas, luego probamos en clase
    public List<ciudad1Entity> filtradoPorFechas(String fechaDesde, String fechaHasta){
        return interface1.findAll()
        .stream()
        .filter(ciudad -> ciudad.getFecha().isAfter(LocalDate.parse(fechaDesde)) && ciudad.getFecha().isBefore(LocalDate.parse(fechaHasta)))
        .toList();
    }

    //Este es el método que corresponde al post. Como no se hacer validaciones complejas, solo
    // compruebo que no sea nulo.
    public void addRegistro(ciudad1Entity nuevoRegistro) {
        if(nuevoRegistro != null){
            interface1.save(nuevoRegistro);
        }
    }

    public void modificarTemperatura(double temp, int id) {
        ciudad1Entity city = interface1.findById(id).orElse(null);
        city.setTemp_max(temp);

        interface1.save(city);
        
    }

}
