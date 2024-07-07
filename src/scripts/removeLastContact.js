import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
try {
    const result = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(result);
    if(contacts.length > 0) {
        contacts.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    } 

} catch(error) {
    console.log(error);
}


};

removeLastContact();
