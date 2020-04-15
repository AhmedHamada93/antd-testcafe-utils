import { t, Selector } from 'testcafe';

const Selectors = require('../selectors.json');
const optionSelector = Selectors.select.optionItem;

/**
 * Select By Display Value
 * @param selector
 * @param value
 * @returns {Promise<void>}
 */
async function selectByValue(selector, displayValue) {
    await t.click(Selector(selector));
    const option = Selector(optionSelector).withAttribute('aria-selected', 'true').withText(displayValue);
    if(await option.exists) {
        console.warn('Item Already Selected...');
        return;
    }
    await t.click(Selector(optionSelector).withText(displayValue));
    await t.pressKey('esc');
}

/**
 * Select By Index
 * @param selector
 * @param index
 * @returns {Promise<void>}
 */
async function selectByIndex(selector, index){
    await t.click(Selector(selector));
    const option = Selector(optionSelector).nth(index).withAttribute('aria-selected', 'true');
    if(await option.exists) {
        console.warn('Item Already Selected...');
        return;
    }
    await t.click(Selector(optionSelector).nth(index));
    await t.pressKey('esc');
}

/**
 * Select All Options for Multiple Select Mode
 * @param selector
 * @returns {Promise<void>}
 */
async function selectAll(selector) {
    await t.click(Selector(selector));
    const optionsCount = await Selector(optionSelector).count;
    for (let i = 0; i < optionsCount; i++) {
        const option = Selector(optionSelector).nth(i).withAttribute('aria-selected', 'false');
        if (await option.exists) {
            await t.click(option);
        }
    }
    await t.pressKey('esc');
}

export {
    selectByIndex,
    selectByValue,
    selectAll
}