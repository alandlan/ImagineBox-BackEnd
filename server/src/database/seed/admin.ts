import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");

  const id = uuidV4();
  const idShop = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(`
    INSERT INTO "User"("Id","Name","Email","Password","DocumentType","Document","IsActive","IsAdmin","Phone","Mobile","Created_at")
    VALUES ('${id}','Admin','admin@imaginebox.com.br','${password}','CNPJ','96710738000111',true,true,'1156628116','11966179541', 'now()')
  `);

  await connection.query(`
    INSERT INTO "ShopCart"("Id","UserId")
    VALUES ('${idShop}','${id}')
  `);

  await connection.close();
}

create().then(() => console.log("User admin created!"));
