## 📄 Descripción del Proyecto

Este es un proyecto desarrollado en **React** que proporciona una aplicación web para listar productos con paginación infinita, con la posibilidad de filtrar los registros y abrir el detalle de cada producto.

La aplicación cuenta con documentación de componentes mediante **Storybook**, internacionalización, historial de búsqueda guardado, manejo de errores y observabilidad.

### 🛠️ Pasos para Configuración del Entorno

1. Cloná el repositorio:

   ```sh
   git clone git@github.com:daviresio/product-list-web.git
   cd product-list-web
   ```

2. Configurá el entorno:
   Utilizá el script `setup` que se encuentra en la carpeta `cmd` para configurar el entorno local. Este script hará lo siguiente:

   - Instalar **Homebrew**, **Node.js**, **Docker**, y otras herramientas necesarias, en caso de que no estén instaladas.
   - Instalar las dependencias del proyecto usando `npm install`.
   - El script está destinado solo para macOS y debe ejecutarse una sola vez.

   ```sh
   ./cmd/setup
   ```

3. Variables de Entorno

   Las variables de entorno necesarias fueron enviadas por correo electrónico. Si las necesitás nuevamente, pedilas por email. Los valores necesarios son:

   - `VITE_PRODUCTS_API_URL=`
   - `VITE_SENTRY_DSN=`
   - `SENTRY_ORG=`
   - `SENTRY_PROJECT=`
   - `SENTRY_AUTH_TOKEN=`

4. Inicializá la aplicación usando **Docker** Compose:

   ```sh
   docker compose up --build
   ```

   Esto creará los contenedores necesarios para la aplicación y su backend asociado.

5. La aplicación estará corriendo en el puerto `3001` (**Docker**). También podés correr la aplicación localmente usando el comando `npm start`, que la ejecutará en el puerto `3000`.

### 📊 Scripts

Los scripts disponibles en la carpeta `cmd` ayudan en la configuración y desarrollo del proyecto:

- `build`: Construye la aplicación para producción.
- `format`: Formatea el código fuente del proyecto.
- `generate-svgs-file`: Genera referencia a los archivos SVG para su uso en la aplicación.
- `setup`: Configura el entorno para el desarrollo local, instalando dependencias y preparando el entorno.
- `start`: Inicializa la aplicación localmente.
- `test`: Ejecuta las pruebas del proyecto.

### 🚀 CI/CD

El proyecto utiliza una pipeline de integración continua (CI) para garantizar la calidad del código. La pipeline automatizada ejecuta las siguientes etapas:

1. **Build**: Construye la aplicación y verifica posibles errores.
2. **Deploy**: Utiliza **Docker** para empaquetar la aplicación y realizar el despliegue.

La pipeline realiza un cálculo automático del versionado SemVer. Para esto, la rama debe apuntar a `main` y comenzar con `major/`, `feature/` o `bugfix/`. Después del merge, se calcula el SemVer, se genera la imagen y se envía al artifact de GCP, y la aplicación se despliega automáticamente en Google Cloud Run.

## Contacto 📧

Si tenés dudas o sugerencias, ponete en contacto al email: [daviresio@gmail.com](mailto:daviresio@gmail.com).
