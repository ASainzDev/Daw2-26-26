package com.example.empresaempleados.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.empresaempleados.entity.Empleado;
import com.example.empresaempleados.entity.Empresa;
import com.example.empresaempleados.services.ServiceEmpresaEmpleados;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class EmpleadoController {

    @Autowired
    private ServiceEmpresaEmpleados servicio;

    public EmpleadoController() {

    }

    // 1) GET empleados de una empresa por ID de empresa
    //    Ejemplo: GET /api/empresas/1/empleados
    @GetMapping("/empresas/{empresaId}/empleados")
    public ResponseEntity<List<Empleado>> getEmpleadosPorEmpresa(@PathVariable Long empresaId) {

        // Comprobamos que la empresa exista
        if (!servicio.buscarPorID(empresaId)) {
            return ResponseEntity.notFound().build();
        }

        List<Empleado> empleados = servicio.findByEmpresaId(empresaId);
        return ResponseEntity.ok(empleados);
    }

    // 2) GET empleado por ID de empleado
    //    Ejemplo: GET /api/empleados/1
    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> getEmpleadoPorId(@PathVariable Long id) {

        // Para este método, hay que tener en cuenta que puede devolver un objeto o null
        // La forma normal de JPA de resolver esto es con Optional. Pensé que podría ser como
        // un if o un predicado pero no es exactamente igual. Optional nos informa del estado, tengo
        // valor-no tengo valor. Según el resultado se hace una cosa u otra. Por eso, después de agregar
        // el servicio, .map da error y tengo que agregar Optional, tengo que probar en donde, para que la 
        // construcción del método sea sólida. El cambio es en el servicio, allí casca el error y te dice que
        // Optional<Empleado> no puede ser convertido a Empleado.
        return servicio.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // 3) POST para crear un empleado
    //    Ejemplo de JSON:
    //    {
    //      "nombre": "Juan",
    //      "apellido": "Pérez",
    //      "edad": 30,
    //      "empresa": { "id": 1 }
    //    }
    @PostMapping("/empleados")
    public ResponseEntity<Empleado> crearEmpleado(@RequestBody Empleado empleado) {
        // Validamos que la empresa exista y la cargamos completa
        //  Para tener yo mi aclaración. Usamos la variable empleado de tipo Empleado y
        // con sus métodos tratamos de obtener la empresa mediante la id. Si nos devuelve null
        // en alguno de los dos gets quiere decir que la empresa no existe y hemos hecho mal el intento
        // de insert.
        if (empleado.getEmpresa() == null || empleado.getEmpresa().getId() == null) {
            return ResponseEntity.badRequest().build();
        }

        //  Si el flujo ha pasado del if anterior, es decir, la id y la empresa existen declaramos una
        //variable Long que almacenará el valor de empleado.getEmpresa().getId();
        Long empresaId = empleado.getEmpresa().getId();

        //  Una vez obtenemos el valor del id de la empresa, declaramos una instancia de la Entity Empresa
        // en la que almacenaremos el valor obtenido de hacer una consulta findById. Al añadir el servicio
        // esta es una cosa de las que cascaba, por lo tanto ahora debo crear un método en el service que 
        // usando los métodos del EmpresaRepository encuentre la empresa.
        Empresa empresa = servicio.findEmpresa(empresaId)
                .orElse(null);
        if (empresa == null) {
            return ResponseEntity.badRequest().build();
        }
        // De nuevo evalua que haya encontrado la empresa, no se si es un poco redundante, pero
        // por si acaso no lo toco.

        //     // Asociamos la empresa "real" al empleado
        empleado.setEmpresa(empresa);
        Empleado empleadoGuardado = servicio.save(empleado);
        // Devolvemos 201 Created con la URL del nuevo recurso
        URI location = URI.create("/api/empleados/" + empleadoGuardado.getId());
        return ResponseEntity.created(location).body(empleadoGuardado);
    }

//     Paralelamente, os paso algo que OS INTERESA MUCHO DE CARA AL EXAMEN DE MAÑANA, se trata de una asignación de IDs que se parezcan más a lo que vais a usar en el ámbito empresarial que a la asignación autoincremental de MySQL. Por ello os paso esta documentación "https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html"
// -- En las entidades usaríais algo así:
// --
// -- @Id
// -- private String id = UUID.randomUUID().toString(); 36 caracteres long es el estandar, hay que tenerlo en cuenta en la BD.
// --
// -- Y en las relaciones:
// -- @ManyToOne
// -- @JoinColumn(name = "empresa_id")
// -- private Empresa empresa;
// --
// -- Igual para empleados.
}
