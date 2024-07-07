import fs from 'fs/promises';
import path from 'path';
// import { faker } from '@faker-js/faker';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  let contacts = [];

  
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }

  try {
    const dbPath = path.resolve(PATH_DB);
    const result = await fs.readFile(dbPath, 'utf8');
    const existingContacts = JSON.parse(result);
    const data = [...existingContacts, ...contacts];
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`${number} new contacts have been generated and added.`);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
