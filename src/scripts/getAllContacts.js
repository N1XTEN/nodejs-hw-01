import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
export const getAllContacts = async () => {
try {
    const result = await fs.readFile(PATH_DB , 'utf8');
    return result;
    
}
catch(error) { 
    console.log(error);
}


};

console.log(await getAllContacts());
