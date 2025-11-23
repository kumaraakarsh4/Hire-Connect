Netlify Build plugin inngest - A Netlify build plugin for registering serverless Inngest functions.

# Install

Please install this plugin from the Netlify app or add the following to your `netlify.toml`:

```toml
[[plugins]]
package = "netlify-plugin-inngest"
```

# Configuration

The following `inputs` options are available:

- `host` - The host of your site, e.g. "https://www.example.com", used to specify a particular URL you wish to use. If not provided, the "main" Netlify URL will be used.
- `path` - The path to your Inngest handler, e.g. "/api/inngest", used to specify the exact location of your handler. If not provided, defaults to "/api/inngest".

To use inputs, provide them in your `netlify.toml`:

```toml
[[plugins]]
package = "netlify-plugin-inngest"

  [plugins.inputs]
    host = "https://my-specific-domain.com"
    path = "/api/inngest"
```
