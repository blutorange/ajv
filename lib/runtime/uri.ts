import * as uri from "fast-uri"

type URI = typeof uri & {code: string; import: readonly [string, string]}
;(uri as URI).code = 'require("ajv/dist/runtime/uri").default'
;(uri as URI).import = ["default", "ajv/dist/runtime/uri.js"]

export default uri as URI
