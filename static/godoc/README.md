# PocketBase Go API Reference

Generated with [Sourcey](https://sourcey.com) v3.6.5 from the PocketBase Go source code.

## Regeneration

1. Clone the PocketBase repo and pin to a commit:
   ```bash
   git clone https://github.com/pocketbase/pocketbase
   cd pocketbase
   git checkout <commit>
   ```

2. Generate the godoc snapshot:
   ```bash
   npx sourcey godoc -m . -p ".,./core,./apis" -o /tmp/godoc.json
   ```

3. Create a `sourcey.config.ts`:
   ```ts
   import { defineConfig } from "sourcey";
   
   export default defineConfig({
     name: "PocketBase Go Reference",
     navigation: {
       tabs: [
         {
           tab: "Go Reference",
           godoc: "/path/to/pocketbase"
         }
       ]
     }
   });
   ```

4. Build the docs:
   ```bash
   npx sourcey build -o dist
   ```

5. Copy the output to this directory (`static/godoc/`).

## Last generated

- Source commit: 50f5f83 (2026-08-22)
- Packages: `pocketbase`, `pocketbase/core`, `pocketbase/apis`
- Sourcey version: 3.6.5

