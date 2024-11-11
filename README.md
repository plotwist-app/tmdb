A TypeScript library for interacting with The Movie Database (TMDB) API, offering strongly-typed and modular access to movies, TV shows, and other media.

## **Installation**

```bash
npm install @plotwist_app/tmdb
```

## **Usage**

Initialize the client with your API key:

```typescript
import { TMDB } from "@plotwist_app/tmdb";

const tmdb = TMDB("YOUR_TMDB_ACCESS_TOKEN");
```

### Examples:

- **Get Movie Details**:

  ```typescript
  const movie = await tmdb.movies.details(550, "en-US");
  ```

- **Multi search**:
  ```typescript
  const results = await search.multi("Inception", "en-US");
  ```

## **License**

This project is licensed under the MIT License.
