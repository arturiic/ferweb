function confirmarEliminacion(id) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = '/deleteProducto/' + id;
    }
  });
}

function registrarProducto() {
  const form = document.getElementById('formProducto');
  const datos = {
    nombre: form.nombre.value.trim(),
    idproveedor: form.idproveedor.value.trim(),
    descripcion: form.descripcion.value.trim(),
    precio_compra: form.precio_compra.value,
    precio_venta: form.precio_venta.value,
    estado: form.estado.value,
    stock: form.stock.value,
    stock_minimo: form.stock_minimo.value
  };

  // Validación simple
  for (const key in datos) {
    if (!datos[key]) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return;
    }
  }

  fetch('/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  })
    .then(res => {
      if (res.ok) {
        Swal.fire('¡Éxito!', 'Producto registrado correctamente', 'success')
          .then(() => window.location.href = '/productos');
      } else {
        Swal.fire('Error', 'No se pudo registrar el producto', 'error');
      }
    })
    .catch(() => {
      Swal.fire('Error', 'Error de conexión', 'error');
    });
}

function editarProducto(id) {
  const form = document.getElementById('formEditarProducto');
  const datos = {
    nombre: form.nombre.value.trim(),
    idproveedor: form.idproveedor.value.trim(),
    descripcion: form.descripcion.value.trim(),
    precio_compra: form.precio_compra.value,
    precio_venta: form.precio_venta.value,
    estado: form.estado.value,
    stock: form.stock.value,
    stock_minimo: form.stock_minimo.value
  };

  // Validación simple
  for (const key in datos) {
    if (!datos[key]) {
      Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
      return;
    }
  }

  fetch(`/update/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos)
  })
    .then(res => {
      if (res.ok) {
        Swal.fire('¡Éxito!', 'Producto actualizado correctamente', 'success')
          .then(() => window.location.href = '/productos');
      } else {
        Swal.fire('Error', 'No se pudo actualizar el producto', 'error');
      }
    })
    .catch(() => {
      Swal.fire('Error', 'Error de conexión', 'error');
    });
}