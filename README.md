# Visit Radisson Riga
## A landing and inspiration site for Radisson Riga hotels.

Built by Janis using Remix and deployed to Cloudflare.



## Development

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready to go!

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.

Cloudflare deployment documentation:  
https://developers.cloudflare.com/pages/framework-guides/remix
