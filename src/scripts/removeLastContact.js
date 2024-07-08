import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
// import path from 'node:path';

export const removeLastContact = async () => {
  try {
    // const dbPath = path.join(PATH_DB, 'db.json');

    const result = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(result);
    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    }

  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
