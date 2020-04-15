import {t} from 'testcafe';
import faker from 'faker';

faker.locale = "en";


async function inputFirstName(selector, replace = false) {
    await t.typeText(selector, faker.name.firstName(), {replace: replace});
}

async function inputLastName(selector, replace = false) {
    await t.typeText(selector, faker.name.lastName(), {replace: replace});
}

async function inputFullName(selector, replace = false) {
    await t.typeText(selector, faker.name.findName(), {replace: replace});
}

async function inputNamePrefix(selector, replace = false) {
    await t.typeText(selector, faker.name.prefix(), {replace: replace});
}

async function inputJobTitle(selector, replace = false) {
    await t.typeText(selector, faker.name.title(), {replace: replace});
}

export {
    inputFirstName,
    inputLastName,
    inputFullName,
    inputJobTitle,
    inputNamePrefix
}