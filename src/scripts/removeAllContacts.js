import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';


export const removeAllContacts = async () => {
    const data = [];
    try {
      await fs.writeFile(PATH_DB, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  

removeAllContacts();
