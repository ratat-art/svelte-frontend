import node       from "@sveltejs/adapter-node"
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: [
        preprocess({
            postcss: true
        })
    ],
    
    kit: {
        adapter: node({ out: "dist" }),
        
        // hydrate the <div id="svelte"> element in src/app.html
        target: "#svelte",
        
        vite: {
            server : {
                watch: {
                    usePolling: true
                }
            }
        }
    }
}

export default config
