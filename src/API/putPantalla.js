export const putPantalla = async (datosPantalla) => {
    try {
      const response = await fetch("https://localhost:44343/api/Pantalla", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        mode: "cors",
        body: JSON.stringify(datosPantalla)
      });
  
      const data = await response.json();
  
  
      if (typeof data === 'boolean') {
        return {
          success: data,
          data: null,
          message: data ? 'Operación exitosa' : 'La operación no se pudo completar'
        };
      }

      return {
        success: true,
        data,
        message: 'Operación exitosa'
      };
  
    } catch (error) {
      console.error('Error en postPantalla:', error);
  
  
      return {
        success: false,
        data: null,
        error: {
          message: error.message || 'Error desconocido',
          type: error.name || 'Error',
          originalError: error
        },
        message: 'Ha ocurrido un error al procesar la solicitud'
      };
    }
  };