import config from "../../../config";

import { createClient } from "contentful-management";

const client = createClient({
    accessToken: config.CONTENTFUL_ACCESS_TOKEN
});
console.log(client);