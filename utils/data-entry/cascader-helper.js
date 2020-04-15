import {t, Selector} from 'testcafe';
import {generateRandom} from "../utils";

const Selectors = require('../selectors.json');
const cascaderList = Selectors.cascader.cascaderList;
const cascaderOption = Selectors.cascader.cascaderOption;

/**
 * Function to Selection Random from Cascader
 * @param cascaderSelector
 * @returns {Promise<Array>}
 */
async function selectAny(cascaderSelector) {
    let selectedItems = [];
    await t.click(Selector(cascaderSelector, {timeout: 100}));
    let menuItemsCount = await Selector(cascaderList).count;
    for (let level = 1; level <= menuItemsCount; level++) {
        let levelIndexOptionsCount =  await Selector(cascaderList).nth(level - 1).child(cascaderOption).count;
        let randomLevelOptionIndex = generateRandom(levelIndexOptionsCount);
        selectedItems.push(await Selector(cascaderList).nth(level - 1).child(cascaderOption).nth(randomLevelOptionIndex).innerText);
        await t.click(Selector(cascaderList).nth(level - 1).child(cascaderOption).nth(randomLevelOptionIndex));
        menuItemsCount = await Selector(cascaderList).count;
    }
    return selectedItems;
}


/**
 * Select Given Array of Options
 * @param cascaderSelector
 * @param optionsArray
 * @returns {Promise<void>}
 */
async function selectArray(cascaderSelector, optionsArray) {
    await t.click(Selector(cascaderSelector, {timeout: 100}));
    let menuItemsCount = await Selector(cascaderList).count;
    for (let level = 1; level <= menuItemsCount && level <= optionsArray.length; level++) {
        await t.click(Selector(cascaderList).nth(level - 1).child(cascaderOption).withText(optionsArray[level - 1]));
        menuItemsCount = await Selector(cascaderList).count;
    }
}

export {
    selectAny,
    selectArray
}

