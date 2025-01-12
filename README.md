# React Cine

## Descripción

**React Cine** es una aplicación web construida con React que permite a los usuarios explorar películas populares, buscar películas por género y agregar películas a una lista de favoritos. La aplicación utiliza la API de TMDB (The Movie Database) para obtener información sobre las películas.

## Características

- **Exploración de películas**: Navega a través de una lista de películas populares.
- **Búsqueda de películas**: Busca películas por título.
- **Favoritos**: Agrega y elimina películas de tu lista de favoritos.
- **Detalles de la película**: Muestra información detallada sobre cada película, incluyendo sinopsis, calificación y cartel.
- **Interfaz responsiva**: La aplicación se adapta a diferentes tamaños de pantalla.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **CSS**: Para el estilo de la aplicación.
- **Axios**: Para realizar solicitudes HTTP a la API de TMDB.
- **Framer Motion**: Para animaciones en la interfaz de usuario.

## Instalación

Para instalar y ejecutar la aplicación localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu_usuario/react_cine.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd react_cine
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia la aplicación:
   ```bash
   npm start
   ```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000).

## Uso

- Al abrir la aplicación, verás una lista de películas populares.
- Puedes buscar películas utilizando la barra de búsqueda.
- Haz clic en una película para ver más detalles.
- Agrega películas a tus favoritos haciendo clic en el botón de estrella.

## Pruebas

Para ejecutar las pruebas de la aplicación, utiliza el siguiente comando:

```bash
npm test
```

Esto ejecutará el conjunto de pruebas configurado con Jest y React Testing Library.

## Problemas Conocidos

- **Problema de carga lenta**: En algunas conexiones lentas, la carga de las imágenes puede ser más lenta de lo esperado.
- **Errores de API**: Si la API de TMDB está inactiva, la aplicación puede no mostrar datos de películas.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Guía de Estilo de Código

- Usa **camelCase** para nombres de variables y funciones.
- Usa **PascalCase** para nombres de componentes.
- Mantén un formato consistente en el código, utilizando herramientas como Prettier o ESLint.
- Escribe comentarios claros y concisos para explicar partes complejas del código.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de (alejandroclaro277@gmail.com).
